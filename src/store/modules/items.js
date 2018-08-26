import { fetchItem } from "../../api/items";

export default {
  state: {
    items: {}
  },
  mutations: {
    setItemStatus(state, { id, status }) {
      state.items = { ...state.items, [id]: { ...state.items[id], status } };
    },
    createItem(state, data) {
      state.items = {
        ...state.items,
        [data.id]: { ...state.items[data.id], ...data }
      };
    }
  },
  getters: {
    getItemById: state => id => state.items[id]
  },
  actions: {
    getItem({ commit }, id) {
      commit("setItemStatus", { id, status: "LOADING" });
      fetchItem(id)
        .then(data => {
          commit("setItemStatus", { id, status: "OK" });
          commit("createItem", data);
        })
        .catch(() => {
          commit("setItemStatus", { id, status: "ERROR" });
        });
    }
  }
};
