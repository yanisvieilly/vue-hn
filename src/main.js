import Vue from "vue";

import store from "./store";

import App from "./components/app";

(() =>
  new Vue({
    el: "#main",
    store,
    render(h) {
      return h(App);
    }
  }))();
