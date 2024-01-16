<template>
  <div id="app-content">
    <v-btn text class="content-btn" :elevation="0" @click="changeContent">{{
      content //add mdi-arrow down
        ? "Content"
        : "Editor"
    }}</v-btn>
    <div class="editor-wrapper">
      <headings />
      <div class="raperparent">
        <div class="rapper"></div>
      </div>
      <editor />
    </div>
  </div>
</template>
<script setup>
import Editor from "~/components/markdowneditor.vue";
import Headings from "~/components/Headings.vue";
import { ref } from "vue";
const content = ref(true);
const changeContent = () => {
  useNuxtApp().$event("changeContent");
  content.value = !content.value;
};
</script>
<style lang="scss" scoped>
.content-btn {
  color: #999ea2;

  /* Card or Section Title */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%; /* 23px */
}
.raperparent {
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.rapper {
  width: 98%;
  height: 1px;
  flex-shrink: 0;
  border: 1px solid var(--elements-input-border, #e0e2e3);
  background: #fff;
}
.editor-wrapper {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;

  font-size: 100%;
  transition: all 0.4s;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--elements-input-border, #e0e2e3);
  background: #fff;
  transition: background 0.4s;
}
</style>
