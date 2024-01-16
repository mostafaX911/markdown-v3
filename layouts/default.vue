<template>
  <div id="app">
    <v-app>
      <slot />
    </v-app>
  </div>
</template>
<script setup></script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
.v-application__wrap {
  padding-top: 30px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: $primary-font;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background: var(--background, white);
  transition: background 0.4s;
}
</style>
