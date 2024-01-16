<template>
  <v-app-bar density="compact" class="d-flex" :elevation="0">
    <v-btn variant="plain" @click="markdownH1">H1</v-btn>
    <v-btn variant="plain" @click="markdownH2">H2</v-btn>
    <v-btn variant="plain" @click="markdownH3">H3</v-btn>
    <image-uploader />
    <v-btn variant="plain" @click="markdownImage">Image</v-btn>
    <v-btn variant="plain" @click="markdownVideo">Video</v-btn>
    <v-btn variant="plain" @click="markdownFT">Footnote</v-btn>
    <v-btn variant="plain" @click="markdownLink">Link</v-btn>
    <v-btn variant="plain" @click="markdownTable">Table</v-btn>
    <v-btn variant="plain" @click="markdownTR">Table row</v-btn>
  </v-app-bar>
</template>
<script setup>
import ImageUploader from "~/components/ImageUploader.vue";
const markdownH1 = () => {
  useNuxtApp().$event("markdownH1");
};
const markdownH2 = () => {
  useNuxtApp().$event("markdownH2");
};
const markdownH3 = () => {
  useNuxtApp().$event("markdownH3");
};
const markdownImage = () => {
  useNuxtApp().$event("markdownImage");
};
const markdownVideo = () => {
  useNuxtApp().$event("markdownVideo");
};
const markdownFT = () => {
  useNuxtApp().$event("markdownFT");
};
const markdownLink = () => {
  useNuxtApp().$event("markdownLink");
};
const markdownTable = () => {
  useNuxtApp().$event("markdownTable");
};
const markdownTR = () => {
  useNuxtApp().$event("markdownTR");
};
</script>
<style lang="scss" scoped>
header {
  position: relative !important;
}
button {
  /* Input / Placeholder */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 23.2px */
}
</style>
