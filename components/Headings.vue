<template>
  <v-app-bar density="compact" class="d-flex" :elevation="0">
    <v-btn :disabled="disabled" variant="plain" @click="markdownH1">H1</v-btn>
    <v-btn :disabled="disabled" variant="plain" @click="markdownH2">H2</v-btn>
    <v-btn :disabled="disabled" variant="plain" @click="markdownH3">H3</v-btn>
    <image-uploader />
    <v-btn :disabled="disabled" variant="plain" @click="markdownImage"
      >Image</v-btn
    >
    <v-btn :disabled="disabled" variant="plain" @click="markdownFT"
      >Footnote</v-btn
    >
    <v-btn :disabled="disabled" variant="plain" @click="markdownLink"
      >Link</v-btn
    >
    <v-btn :disabled="disabled" variant="plain" @click="markdownVideo"
      >Video</v-btn
    >
    <v-btn :disabled="disabled" variant="plain" @click="markdownTable"
      >Table</v-btn
    >
    <v-btn :disabled="disabled" variant="plain" @click="markdownTR"
      >Table row</v-btn
    >
  </v-app-bar>
</template>
<script setup>
import ImageUploader from "~/components/ImageUploader.vue";
import { ref } from "vue";
const disabled = ref(false);
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
useNuxtApp().$listen("changeContent", () => {
  disabled.value = !disabled.value;
});
</script>
<style lang="scss" scoped>
header {
  position: relative !important;
}
.v-btn {
  gap: 20px !important;
  font-family: Helvetica Neue;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;

  margin: 0 !important;
  padding: 0 !important;
}
button {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
}
</style>
