import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// const selectedTheme = window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: true
  // isDarkMode: selectedTheme,
};

const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
};

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      window.localStorage.setItem("isDarkMode", false);
    } else {
      state.isDarkMode = true;
      window.localStorage.setItem("isDarkMode", true);
    }
  }
};
const actions = {
  tiggerDarkMode(context) {
    context.commit("toggleDarkMode");
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
});
