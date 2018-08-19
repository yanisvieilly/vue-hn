<template lang="pug">
ol
  li.item(v-for="itemId in topStories")
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

<style scoped>
.item {
  margin-bottom: 4px;
}
</style>
