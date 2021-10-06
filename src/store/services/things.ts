export default ({
  namespaced: true,
  state: {
    things: {}
  },
  mutations: {
    ADD_THING (state: any, { thingId, thing }: any) {
      state.things[thingId] = thing;
    },
  },
  actions: {
    getThing ({ rootState, commit }: any, thingId: string) {
      const token = rootState.mainflux.user.token,
            baseUrl = rootState.mainflux.baseUrl;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      };

      fetch(`${baseUrl}things/${thingId}`, { headers }).then((resp: any) => {
        resp.text().then((text: string) => {
          if (resp.status == 200) {
            const parsed = JSON.parse(text);
            commit("ADD_THING", { thingId: parsed.id, thing: parsed });
          }
        });
      });
    }
  },
  getters: {
    getThings: (state: any) => {
      return state.things;
    },
    getThing: (state: any) => (thingId: string) => {
      if (thingId in state.things) {
        return state.things[thingId];
      }

      return {};
    },
    getSiteThings: (state: any) => (siteId: string) => { 
      const things: { [key: string]: any; } = {};

      for (const id in state.things) {
        const thing = state.things[id];
        if (thing.metadata.siteId == siteId) {
          things[id] = thing;
        }
      }

      return things;
    },
    getDeviceThings: (state: any) => (deviceId: string) => {
      const things: { [key: string]: any; } = {};

      for (const id in state.things) {
        const thing = state.things[id];
        if (thing.metadata.deviceId == deviceId) {
          things[id] = thing;
        }
      }

      return things;
    },
  }
})
