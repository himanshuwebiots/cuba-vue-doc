const state = {
  clickEvents: {
    sidebar: false,
  },
  overlay: false,
};

// getters
const getters = {};

// mutations
const mutations = {
  toggleSidebar(state) {
    state.clickEvents.sidebar = !state.clickEvents.sidebar;
    state.overlay = !state.overlay;
  },
  closeOverlay(state) {
    Object.keys(state.clickEvents).forEach((item) => {
      state.clickEvents[item] = false;
    });
    state.overlay = false;
  },
};

// actions
const actions = {
  toggleSidebar({ commit }) {
    commit("toggleSidebar");
  },
  closeOverlay({ commit }) {
    commit("closeOverlay");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
