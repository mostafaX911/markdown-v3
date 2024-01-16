<template>
  <div class="editor">
    <textarea
      id="code"
      v-model="code"
      :style="{ color: actualSkin.color }"
      class="code"
    ></textarea>
    <div class="result" v-html="coderenderd"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const code = ref("");
const markdownH1 = () => {
  code.value = code.value + "\n# ";
  document.getElementById("code").select();
};
const markdownH2 = () => {
  code.value = code.value + "\n## ";
  document.getElementById("code").select();
};
const markdownH3 = () => {
  code.value = code.value + "\n### ";
  document.getElementById("code").select();
};
const markdownImage = () => {
  code.value = code.value + "\n![Alt text](/path/to/img.jpg)";
  document.getElementById("code").select();
};
const markdownVideo = () => {
  code.value = code.value + "\n@[youtube](dQw4w9WgXcQ)";
  document.getElementById("code").select();
};
const markdownFT = () => {
  code.value = code.value + "\nFootnote text.^[1]";
  document.getElementById("code").select();
};
const markdownLink = () => {
  code.value = code.value + "\n[Link text](https://www.example.com)";
  document.getElementById("code").select();
};
const markdownTable = () => {
  code.value =
    code.value +
    "\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n| Text     | Text     | Text     |\n| Text     | Text     | Text     |";
  document.getElementById("code").select();
};
const markdownTR = () => {
  code.value = code.value + "\n| Text     | Text     | Text     |";
  document.getElementById("code").select();
};
useNuxtApp().$listen("markdownH1", markdownH1);
useNuxtApp().$listen("markdownH2", markdownH2);
useNuxtApp().$listen("markdownH3", markdownH3);
useNuxtApp().$listen("markdownImage", markdownImage);
useNuxtApp().$listen("markdownVideo", markdownVideo);
useNuxtApp().$listen("markdownFT", markdownFT);
useNuxtApp().$listen("markdownLink", markdownLink);
useNuxtApp().$listen("markdownTable", markdownTable);
useNuxtApp().$listen("markdownTR", markdownTR);

onMounted(() => {
  code.value = `# Markdown Editor`;
});
const coderenderd = computed(() => {
  return useNuxtApp().$mdit.render(code.value);
});

const actualSkin = ref({
  color: "#0cc",
  background: "rgba(0, 204, 204, .4)",
  wall: "rgba(0, 204, 204, .15)",
});
</script>
<style lang="scss">
// @import "~/assets/scss/_variables.scss";
// @import url("~/assets/scss/_variables.scss");
@use "~/assets/scss/_variables.scss";
.editor {
  position: relative;
  min-height: 100%;
  background: rgba($black, 0.2);
  display: flex;
  overflow: hidden;
  .code,
  .result,
  .settings {
    width: 50%;
    padding: 1rem;
  }
  .code {
    resize: none;
    border: none;
    font-family: $code-font;
    background: rgba($black, 0.8);

    outline: none;
    transition: color 0.4s;
  }
  .result {
    background: $white;
    hr {
      border: none;
      border-bottom: 1px solid rgba($black, 0.2);
    }
    img {
      max-width: 100%;
      height: auto;
    }
    ul,
    ol {
      margin-left: 0;
      padding-left: 20px;
      li {
        margin-left: 0;
      }
    }
    table {
      border-collapse: collapse;
      width: 100%;
      th,
      td {
        border: 1px solid rgba($black, 0.2);
        padding: 0.5rem;
      }
    }
    code {
      background: rgba($black, 0.1);
      padding: 0.2rem;
      border-radius: 0.2rem;
    }
    col-left {
      width: 50%;
      float: left;
    }
    col-right {
      width: 50%;
      float: right;
    }
  }
}
</style>
