import Vue from "vue";
import Vuex from "vuex";

import { fetchItems } from "../api/items";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {
    createItems(state, data) {
      state.items = data;
    }
  },
  actions: {
    getItems({ commit }) {
      fetchItems().then(data => commit("createItems", data));
    }
  }
});

export default store;
