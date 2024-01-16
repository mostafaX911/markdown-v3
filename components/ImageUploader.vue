<template>
  <v-btn @click="dialog = true" text="Image"> </v-btn>
  <v-dialog width="500" v-model="dialog">
    <!-- <template v-slot:activator="{ props }">
    </template> -->

    <v-card title="Dialog">
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        id="fileUpload"
        ref="fileUpload"
        v-model="file"
        label="Avatar"
      ></v-file-input>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="upload" @click="uploadPhoto"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from "vue";

import { getStorage, uploadBytes } from "firebase/storage";
const dialog = ref(false);
const file = ref(null);

const uploadPhoto = async () => {
  const storage = getStorage();
  const storageRef = ref(storage, file.value);
  await uploadBytes(storageRef, file);
  dialog.value = false;
};
</script>
