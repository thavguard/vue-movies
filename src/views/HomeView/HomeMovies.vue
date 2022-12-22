<script setup lang="ts">
import MoviesBox from "@/components/Home/Movies/MoviesBox.vue";
import { useMoviesStore } from "@/store/useMoviesStore";

const store = useMoviesStore();
</script>

<template>
  <div class="container">
    <div class="box" v-for="item in store.genres">
      <MoviesBox :genreId="item.id" :title="item.genre" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .box {
    margin-bottom: 40px;
  }
}
</style>
