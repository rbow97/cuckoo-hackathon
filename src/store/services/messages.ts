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
    getThingMessages ({ rootState, commit }: any, { thing, name="", offset=0, limit=100 } :any) {
      const token = rootState.mainflux.user.token,
            baseUrl = rootState.mainflux.baseUrl;
      const chOffset = 0, chLimit = 10, params = `offset=${chOffset}&limit=${chLimit}`;
      const chHeaders = {
        'Content-Type': 'application/json',
        'Authorization': token
      };

      fetch(`${baseUrl}things/${thing.id}/channels?${params}`, { headers: chHeaders }).then((chResp: any) => {
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
              'Authorization': thing.key
            };
            let params = `offset=${offset}&limit=${limit}`;

            if (name) {
              params += `&name=${name}`;
            }

            fetch(`${baseUrl}reader/channels/${dataChannelId}/messages?${params}`, { headers }).then((resp: any) => {
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
