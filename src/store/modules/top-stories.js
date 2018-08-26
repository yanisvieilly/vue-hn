import { fetchTopStories } from "../../api/top-stories";

export default {
  state: {
    topStories: []
  },
  mutations: {
    createTopStories(state, data) {
      state.topStories = data;
    }
  },
  actions: {
    getTopStories({ commit }) {
      fetchTopStories().then(data => {
        // Keep the 30 first items only, for the first page
        commit("createTopStories", data.slice(0, 29));
      });
    }
  }
};
