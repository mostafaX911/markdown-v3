<template>
  <div class="editor">
    <textarea id="code" v-model="code" class="code" v-if="!content"></textarea>
    <div class="result" v-html="coderenderd" v-else></div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const code = ref("");
const content = ref(false);
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
useNuxtApp().$listen("markdownImagedl", (url) => {
  code.value = code.value + "\n![Alt text](" + url + ")";
  document.getElementById("code").select();
});
useNuxtApp().$listen("changeContent", () => {
  content.value = !content.value;
});
onMounted(() => {
  code.value = `# Markdown Editor`;
});
const coderenderd = computed(() => {
  return useNuxtApp().$mdit.render(code.value);
});
</script>
<style lang="scss">
@use "~/assets/scss/_variables.scss";
.editor {
  position: relative;
  min-height: 90%;
  display: flex;
  overflow: hidden;
  .code,
  .result,
  .settings {
    padding: 1rem;
  }
  .code {
    width: 100%;
    resize: none;
    border: none;
    font-family: $code-font;

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
