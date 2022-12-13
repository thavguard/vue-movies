<script setup lang="ts"></script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "@/styles";
@import url("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $bgColor;
  color: $textColor;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

a {
  color: inherit;
  font-size: inherit;
  text-decoration: none;
}

img {
  display: block;

  max-width: 100%;
  width: 100%;

  object-fit: cover;
}

.app {
  margin: 0 60px;
}
</style>
