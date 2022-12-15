<script setup lang="ts">
import type { IMovieCard } from "@/types/types";
import Movies from "./Movies.vue";

const props = defineProps<{
  title: string;
  movies: IMovieCard[];
}>();
</script>

<template>
  <div class="box">
    <div class="title">{{ props.title }}</div>
    <div class="movies">
      <Movies :movies="props.movies" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  .title {
    margin-bottom: 15px;

    font-size: 24px;
    text-transform: uppercase;
    font-family: "Anton", sans-serif;
  }
}
</style>
