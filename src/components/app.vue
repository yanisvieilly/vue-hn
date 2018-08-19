<template lang="pug">
ul
  li(v-for="item in items") {{item}}
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState(["items"])
  },
  created() {
    this.getItems();
  },
  methods: {
    ...mapActions(["getItems"])
  }
};
</script>
