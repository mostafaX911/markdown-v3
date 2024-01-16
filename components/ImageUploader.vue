<template>
  <v-btn
    @click="dialog = true"
    :disabled="disabled"
    variant="plain"
    text="Upload Image"
  >
  </v-btn>
  <v-dialog width="500" v-model="dialog">
    <v-card class="card">
      <v-card-title>Upload Image</v-card-title>
      <v-card-item>
        <v-file-input
          accept="image/png, image/jpeg, image/bmp, image/jpg"
          placeholder="Placeholder"
          prepend-icon="mdi-camera"
          id="fileUpload"
          ref="fileUpload"
          v-model="file"
          label="select image"
        ></v-file-input>
        <div class="error" v-if="error">
          Please select a valid image type.
          <br />
          Valid types are : png, jpg, jpeg, bmp
        </div>
      </v-card-item>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          :loading="loading"
          variant="tonal"
          text="upload"
          :disabled="!file"
          @click="uploadPhoto"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from "vue";
import { onBeforeUnmount } from "vue";

import {
  getStorage,
  ref as fireref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const dialog = ref(false);
const file = ref(null);
const loading = ref(false);
const error = ref(false);
const disabled = ref(false);

useNuxtApp().$listen("changeContent", () => {
  disabled.value = !disabled.value;
});

const uploadPhoto = async () => {
  loading.value = true;
  let fileInput = document.getElementById("fileUpload").files[0];
  const ext = fileInput["name"].split(".").pop();
  const metadataa = {
    contentType: "image/" + ext,
  };
  if (ext == "png" || ext == "jpg" || ext == "jpeg" || ext == "bmp") {
    const storage = getStorage();
    const storageRef = fireref(storage, "images/" + fileInput["name"]);
    const uploadTask = await uploadBytesResumable(
      storageRef,
      fileInput,
      metadataa
    );

    const fullPath = uploadTask.metadata.fullPath;
    const url = await getDownloadURL(fireref(storage, fullPath));

    useNuxtApp().$event("markdownImagedl", url);
    loading.value = false;
    dialog.value = false;
    file.value = null;
  } else {
    error.value = true;
    loading.value = false;
  }
};
onBeforeUnmount(() => {
  useNuxtApp().$off("markdownImagedl");
});
</script>
<style lang="scss" scoped>
.error {
  color: red;
}
button {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
}
.card {
  border-radius: 3px;
  border: 1px solid var(--elements-input-border, #e0e2e3);
  background: #fff;
  transition: background 0.4s;
  padding: 10px;
}
</style>
