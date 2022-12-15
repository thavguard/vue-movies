<script setup lang="ts">
import MoviesBox from "@/components/Home/Movies/MoviesBox.vue";
import { useMoviesStore } from "@/store/store";

const store = useMoviesStore();
</script>

<template>
  <div class="container">
    <div class="box">
      <MoviesBox :movies="store.movies" :title="'Horror'" />
    </div>
    <div class="box">
      <MoviesBox :movies="store.movies" :title="'Horror'" />
    </div>
    <div class="box">
      <MoviesBox :movies="store.movies" :title="'Horror'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .box {
    margin-bottom: 40px;
    &:not(:last-of-type) {
    }
  }
}
</style>
