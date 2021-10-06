import { createStore } from 'vuex'
// Services
import groups from '@/store/services/groups';
import things from '@/store/services/things';
import messages from '@/store/services/messages';

export default createStore({
  state: {
    mainflux: {
      user: {
        token: ""
      },
      baseUrl: "/"
    }
  },
  mutations: {
    SET_USER_TOKEN (state: any, token: string) {
      state.mainflux.user.token = token;
    },
  },
  actions: {
    createToken ({ commit, state }: any, body: any) {
      const mainfluxEmail = "admin@janga.la",
            mainfluxPw = "password";
      const requestInfo = {
        method: 'POST',
        body: JSON.stringify({
          email: mainfluxEmail,
          password: mainfluxPw
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      };

      fetch(`${state.mainflux.baseUrl}tokens`, requestInfo).then((resp: any) => {
        resp.text().then((text: string) => {
          if (resp.status === 201) {
            const parsed = JSON.parse(text);
            commit('SET_USER_TOKEN', parsed.token);
          }
        });
      });
    },
  },
  modules: {
    groups,
    things,
    messages
  },
  getters: {
    // getToken () {
    //
    // }
  }
})
