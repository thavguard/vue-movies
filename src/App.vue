<script setup lang="ts">
import { onMounted } from "vue";
import Header from "@/components/common/Header/Header.vue";
import { useMoviesStore } from "./store/useMoviesStore";
const moviesStore = useMoviesStore();
</script>

<template>
  <div class="app">
    <Header />
    <div class="app_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles";
@import url("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&display=swap");

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

  &::-webkit-scrollbar {
    width: 0;
  }
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
  // margin: 0 60px;

  &_container {
    // padding-top: 110px;
  }
}
</style>
