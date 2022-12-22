<script setup lang="ts">
import { kpApi } from "@/API/api";
import type { IKPFilms } from "@/types/kpTypes";
import type { IMovieCard } from "@/types/types";
import { reactive, onMounted } from "vue";
import Movies from "./Movies.vue";

const props = defineProps<{
  genreId: number;
  title: string;
}>();

const state = reactive({
  movies: [] as IMovieCard[],
});

const fetchFilms = async () => {
  const { data } = await kpApi.get<IKPFilms>("v2.2/films", {
    params: {
      genres: props.genreId,
    },
  });

  state.movies = data.items.map((item) => ({
    ...item,
  }));
};

onMounted(() => {
  fetchFilms();
});
</script>

<template>
  <div class="box">
    <div class="title">{{ props.title }}</div>
    <div class="movies">
      <Movies :movies="state.movies" />
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
