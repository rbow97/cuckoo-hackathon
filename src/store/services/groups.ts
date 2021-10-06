export default ({
  namespaced: true,
  state: {
    groups: {},
  },
  mutations: {
    ADD_GROUP (state: any, { groupId, group }: any) {
      state.groups[groupId] = group;
    }
  },
  actions: {
    // TODO groups needs something more thinking
    // Gets all groups
    getGroups ({ commit, rootState, dispatch }: any, body: any) {
      const token = rootState.mainflux.user.token,
            baseUrl = rootState.mainflux.baseUrl;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      };

      fetch(`${baseUrl}groups`, { headers }).then((resp: any) => {
        resp.text().then((text: string) => {
          if (resp.status == 200) {
            const parsed = JSON.parse(text);
            if (parsed.groups.length > 0) {
              // TODO this should be changed so more dynamic
              // This currently assumes one master sites group which will not always be the case
              const group = parsed.groups[0];
              // TODO this is only temp. This should be added on provisioning
              group.metadata = { "type": "Sites"  };

              commit('ADD_GROUP', { groupId: group.id, group });
              dispatch('getGroupChildren', group.id);
            }
          }
        });
      });
    },
    // TODO this goes as deep as can go but may need to go deeper in future
    getGroupChildren ({ rootState, state, commit, dispatch }: any, groupId: string) {
      const token = rootState.mainflux.user.token,
            baseUrl = rootState.mainflux.baseUrl,
            level = 5,
            tree = false,
            query = `tree=${tree}&level=${level}`;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      };

      fetch(`${baseUrl}groups/${groupId}/children?${query}`, { headers }).then((resp: any) => {
        resp.text().then((text: string) => {
          const parsed = JSON.parse(text);
          const groups = parsed.groups;

          for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            // Skip master group
            if (group.id == groupId) {
              continue;
            }

            commit('ADD_GROUP', { groupId: group.id, group });
            // TODO don't hardcode type name
            if (group.metadata.type == "Device") {
              // Get device components
              dispatch('getGroupMembers', group.id);
            }
          }
        });
      });
    },
    getGroupMembers ({ rootState, dispatch, state, commit }: any, groupId: string) {
      const token = rootState.mainflux.user.token,
            baseUrl = rootState.mainflux.baseUrl;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      };

      fetch(`${baseUrl}groups/${groupId}/members`, { headers }).then((resp: any) => {
        resp.text().then((text: string) => {
          if (resp.status == 200) {
            const parsed = JSON.parse(text);
            // TODO this should make sure all members have been gotten and did not return limit max
            if (parsed.Members.length > 0) {
              for (let i = 0; i < parsed.Members.length; i++) {
                const member = parsed.Members[i];

                // TODO don't hardcode case names
                switch (member.Type) {
                  case "things":
                    dispatch("things/getThing", member.ID, { root: true });
                    break;
                  default:
                    console.log("Unknown member");
                    break;
                }
              }
            }
          }
        });
      });
    }
  },
  getters: {
    getGroups: (state: any) => {
      return state.groups;
    },
    getGroup: (state: any) => (id: string) => {
      if (id in state.groups) {
        return state.groups[id];
      }

      return {};
    },
    // TODO can probably make this more efficent
    // Maybe add in tree strucutre...
    getSiteDevices: (state: any)  => (siteId: string) => {
      // TODO this should be global interface..
      const devices: { [key: string]: any; } = {};

      for (const id in state.groups) {
        const group = state.groups[id];
        if (group.metadata.type == "Device" && group.parent_id == siteId) {
          devices[id] = group;
        }
      }

      return devices;
    },
    getSites: (state: any) => {
      const sites: { [key: string]: any; } = {};

      for (const id in state.groups) {
        const group = state.groups[id];
        if (group.metadata.type == "Site") {
          sites[id] = group;
        }
      }

      return sites;
    },
    getDevices: (state: any) => {
      const devices: { [key: string]: any; } = {};

      for (const id in state.groups) {
        const group = state.groups[id];
        if (group.metadata.type == "Device") {
          devices[id] = group;
        }
      }

      return devices;
    }
  }
})
