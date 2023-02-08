import Vue from "vue";
import Vuex from "vuex";
import functionalities from "./modules/functionalities";
import clickEvents from "./modules/clickEvents";

Vue.use(Vuex);
const createStore = () => {
  return new Vuex.Store({
    modules: {
      functionalities,
      clickEvents,
    },
  });
};
export default createStore;
