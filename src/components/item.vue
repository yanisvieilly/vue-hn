<template lang="pug">
  <a :href="item.url">{{item.title}}</a>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getItemById"]),
    item() {
      return this.getItemById(this.id);
    }
  },
  created() {
    this.getItem(this.id);
  },
  methods: {
    ...mapActions(["getItem"])
  }
};
</script>