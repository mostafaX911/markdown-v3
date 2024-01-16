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

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: Helvetica Neue;
  font-size: 16px;
  .v-btn {
    text-transform: none !important;
  }
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
  background: var(--background, white);
  transition: background 0.4s;
}
</style>
