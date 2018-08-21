import Vue from "vue";
import Vuex from "vuex";

import { fetchTopStories, fetchItem } from "../api/items";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    topStories: [],
    items: {}
  },
  mutations: {
    createTopStories(state, data) {
      state.topStories = data;
    },
    createItem(state, data) {
      state.items = { ...state.items, [data.id]: data };
    }
  },
  getters: {
    getItemById: state => id => state.items[id]
  },
  actions: {
    getTopStories({ commit }) {
      fetchTopStories().then(data => {
        // Keep the 30 first items only, for the first page
        commit("createTopStories", data.slice(0, 29));
      });
    },
    getItem({ commit }, id) {
      fetchItem(id).then(data => commit("createItem", data));
    }
  }
});

export default store;
