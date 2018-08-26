import Vue from "vue";
import Vuex from "vuex";

import topStories from "./modules/top-stories";
import items from "./modules/items";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    topStories,
    items
  }
});

export default store;
