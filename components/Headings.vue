<template>
  <v-app-bar density="compact" class="d-flex" :elevation="0">
    <v-btn text @click="markdownH1">H1</v-btn>
    <v-btn text @click="markdownH2">H2</v-btn>
    <v-btn text @click="markdownH3">H3</v-btn>
    <image-uploader />
    <v-btn text @click="markdownImage">Image</v-btn>
    <v-btn text @click="markdownVideo">Video</v-btn>
    <v-btn text @click="markdownFT">Footnote</v-btn>
    <v-btn text @click="markdownLink">Link</v-btn>
    <v-btn text @click="markdownTable">Table</v-btn>
    <v-btn text @click="markdownTR">Table row</v-btn>
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
</style>
