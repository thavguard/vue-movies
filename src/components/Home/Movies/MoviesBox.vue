<script setup lang="ts">
import { reactive, onMounted } from "vue";
import Movies from "./Movies.vue";

const props = defineProps<{
  genreId?: number;
  type?: string;
  title: string;
}>();

const state = reactive({
  movies: [] ,
});

const fetchFilms = async () => {
  // const { data } = await kpApi.get<IKPFilms>("v2.2/films", {
  //   params: {
  //     genres: props.genreId,
  //   },
  // });

  // state.movies = data.items.map((item) => ({
  //   ...item,
  // }));
};

onMounted(() => {
  fetchFilms();
});
</script>

<template>
  <div class="box">
    <div class="title">{{ props.title }}</div>
    <div class="movies">
      <!-- <Movies :movies="state.movies" /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.box {
  .title {
    margin-left: $pageMargin;
    margin-bottom: 18px;

    font-size: 24px;
    font-family: "Unbounded", cursive;

    color: #fdfdfd;
  }
}
</style>
