<template>
  <div id="app-content">
    <headings />
    <editor />
  </div>
</template>
<script setup>
import Editor from "~/components/markdowneditor.vue";
import Headings from "~/components/Headings.vue";
</script>
<style lang="scss" scoped>
#app-content {
  min-height: 100vh;
  padding: 5rem 0;
  transition: background 0.4s;
}
</style>
