<template>
  <div id="app-content">
    <v-btn
      text
      class="content-btn"
      :ripple="false"
      :elevation="0"
      @click="changeContent"
      >{{ content ? "Content" : "Editor" }}</v-btn
    >
    <div class="editor-wrapper">
      <headings />
      <div class="wraperparent">
        <div class="wrapper"></div>
      </div>
      <editor />
    </div>
    <div class="footer">
      **Bold** *Italic* _Underline_ - List with bullets # H1 ## H2 ### H3 ####
      H4 ##### H5 ###### H6
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
  padding: 0px 104px 40px 0px;
  margin-top: 40px;
  margin-left: 40px;
  font-family: Helvetica Neue;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%;
}
.wraperparent {
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.wrapper {
  width: 98%;
  height: 1px;
  flex-shrink: 0;
  border: 1px solid var(--elements-input-border, #e0e2e3);
  background: #fff;
}
.editor-wrapper {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 100%;
  transition: all 0.4s;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--elements-input-border, #e0e2e3);
  background: #fff;
  transition: background 0.4s;
}
#app-content {
  background: var(--background, white);
  transition: background 0.4s;
}
.footer {
  color: rgba(51, 61, 69, 0.5);
  margin: 0px 40px 40px 40px;

  font-family: Helvetica Neue;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 18.85px */
}
</style>
