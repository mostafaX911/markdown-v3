<template>
  <v-btn @click="dialog = true" variant="plain" text="Upload Image"> </v-btn>
  <v-dialog width="500" v-model="dialog">
    <!-- <template v-slot:activator="{ props }">
    </template> -->

    <v-card class="card">
      <v-card-title>Upload Image</v-card-title>
      <v-card-item>
        <v-file-input
          v-if="!hideInput"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          id="fileUpload"
          ref="fileUpload"
          v-model="file"
          label="select image"
        ></v-file-input>
      </v-card-item>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          :loading="loading"
          variant="tonal"
          text="upload"
          @click="uploadPhoto"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { onBeforeUnmount } from "vue";

import {
  getStorage,
  uploadBytes,
  ref as fireref,
  getDownloadURL,
} from "firebase/storage";
const dialog = ref(false);
const file = ref(null);
const loading = ref(false);

const uploadPhoto = async () => {
  loading.value = true;
  const fileUpload = document.getElementById("fileUpload");
  let fileInput = document.getElementById("fileUpload").files[0];
  const storage = getStorage();
  const storageRef = fireref(storage, "images/" + fileInput["name"]);
  const response = await uploadBytes(storageRef, fileInput);
  const fullPath = response.metadata.fullPath;
  const url = await getDownloadURL(fireref(storage, fullPath));

  useNuxtApp().$event("markdownImagedl", url);
  loading.value = false;
  dialog.value = false;
  file.value = null;
};
onBeforeUnmount(() => {
  useNuxtApp().$off("markdownImagedl");
});
</script>
<style lang="scss" scoped>
button {
  /* Input / Placeholder */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 23.2px */
}
.card {
  border-radius: 3px;
  border: 1px solid var(--elements-input-border, #e0e2e3);
  background: #fff;
  transition: background 0.4s;
  padding: 10px;
}
</style>
