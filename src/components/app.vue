<template lang="pug">
.container
  ItemsList
</template>

<script>
import ItemsList from "./items-list";

export default {
  components: {
    ItemsList
  }
};
</script>

<style scoped>
.container {
  background-color: #f6f6ef;
  font-family: Verdana, Geneva, sans-serif;
  margin: auto;
  width: 900px;
}
</style>