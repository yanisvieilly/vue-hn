<template lang="pug">
div
  a.story-link(:href="item.url") {{item.title}}
  span.story-metadata
    | {{item.score}} points by {{item.by}} | {{item.descendants}} comments
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

<style scoped>
.story-link {
  color: #000;
  display: block;
  font-size: 14px;
  text-decoration: none;
}

.story-metadata {
  color: #828282;
  font-size: 10px;
}
</style>
