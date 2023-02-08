import { MENUITEMS } from "../../static/data/sidebar";

const state = {
  data: MENUITEMS,
  currentPage: {},
  fontSizeClasses: "",
  darkMode: false,
};

// getters
const getters = {
  currentPage() {
    return state.currentPage;
  },
};

// mutations
const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode;
    state.darkMode
      ? document.body.classList.add("dark-only")
      : document.body.classList.remove("dark-only");
  },
  setCurrentpage(state, payload) {
    state.currentPage = payload.currentPage;
  },
  setFontSize(state, payload) {
    payload.fontSize === "increase" &&
      (state.fontSizeClasses = "font-increase");
    payload.fontSize === "decrease" &&
      (state.fontSizeClasses = "font-decrease");
    payload.fontSize === "reset" && (state.fontSizeClasses = "");
  },
};

// actions
const actions = {
  setFontSize({ commit }, payload) {
    commit("setFontSize", payload);
  },
  setCurrentpage({ commit }, payload) {
    commit("setCurrentpage", payload);
  },
  toggleDarkMode({ commit }) {
    commit("toggleDarkMode");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
