<template lang="pug">
ol
  li(v-for="itemId in topStories")
    Item(:id="itemId")
</template>

<script>
import { mapState, mapActions } from "vuex";

import Item from "./item";

export default {
  components: {
    Item
  },
  computed: {
    ...mapState(["topStories"])
  },
  created() {
    this.getTopStories();
  },
  methods: {
    ...mapActions(["getTopStories"])
  }
};
</script>
