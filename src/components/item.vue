<template lang="pug">
div(v-if="item.status === 'LOADING'")
  span.story-loading Loading story...

div(v-else-if="item.status === 'ERROR'")
  span.story-error Something went wrong while fetching this story.

div(v-else)
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
  font-size: 14px;
  text-decoration: none;
}

.story-metadata {
  color: #828282;
  display: block;
  font-size: 10px;
}

.story-loading {
  color: #828282;
  font-size: 14px;
}

.story-error {
  color: #ff4c4c;
  font-size: 14px;
}
</style>
