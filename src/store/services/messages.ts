export default ({
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    ADD_MESSAGES (state: any, messages: any) {
      state.messages.push(...messages);
    },
    RESET_MESSAGES (state: any) {
      state.messages = [];
    }
  },
  actions: {
    reset ({ commit }: any) {
      commit('RESET_MESSAGES');
    },
    // TODO refactor in future
    // Probably merge into one function and give option to set offset and limit
    getMessages ({ rootState, commit }: any, { offset=0, limit=100, params="" } :any) {
      const token = rootState.mainflux.user.token,
            baseUrl = rootState.mainflux.baseUrl;
      const chOffset = 0, chLimit = 10, chParams = `offset=${chOffset}&limit=${chLimit}`;
      const chHeaders = {
        'Content-Type': 'application/json',
        'Authorization': token
      };

      fetch(`${baseUrl}things/3a8d6e3f-5497-45b0-8afb-05ca45e819ae/channels?${chParams}`, { headers: chHeaders }).then((chResp: any) => {
        chResp.text().then((chText: string) => {
          if (chResp.status == 200) {
            const chParsed = JSON.parse(chText);
            let dataChannelId = "";

            for (let i = 0; i < chParsed.channels.length; i++) {
              const channel = chParsed.channels[i];

              if (channel.name.includes("data")) {
                dataChannelId = channel.id;
              }
            }

            if (!dataChannelId) {
              return;
            }

            const headers = {
              'Content-Type': 'application/json',
              'Authorization': "7ff7bc61-9d1f-4037-a2f1-6b3f61ed3d58"
            };
            params += params ? "&" : "";
            params += `offset=${offset}&limit=${limit}`;

            fetch(`${baseUrl}reader/channels/732b1a45-dde3-4dc7-a972-4e242c2d75ef/messages?${params}`, { headers }).then((resp: any) => {
              resp.text().then((text: string) => {
                if (resp.status == 200) {
                  const parsed = JSON.parse(text);
                  if (parsed.messages) {
                    commit('ADD_MESSAGES', parsed.messages);
                  }
                }
              });
            });
          }
        });
      });
    }
  },
  getters: {
    getMessages: (state: any) => {
      return state.messages;
    }
  }
})
