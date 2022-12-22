<script setup lang="ts">
import Icon from "@/components/common/Icon/Icon.vue";
import HomeInput from "@/components/Home/HomeInput/HomeInput.vue";
import Movies from "@/components/Home/Movies/Movies.vue";
import { useMoviesStore } from "@/store/useMoviesStore";
import type { IMovieCard } from "@/types/types";
import HomeMovies from "@/views/HomeView/HomeMovies.vue";
import { reactive } from "vue";

const store = useMoviesStore();

const state = reactive({
  recentFilms: [] as IMovieCard[],
});

const randInt = Math.random().toFixed(1);
</script>

<template>
  <div class="container">
    <div
      class="home"
      :class="{
        'bg-0': +randInt >= 0 && +randInt <= 0.3,
        'bg-1': +randInt > 0.3 && +randInt <= 0.6,
        'bg-2': +randInt > 0.6 && +randInt <= 1,
      }"
    >
      <div class="cards">
        <Movies :movies="store.recentFilms" />
      </div>
      <div class="input">
        <HomeInput />
      </div>
    </div>
    <div class="movies">
      <HomeMovies />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.bg-0 {
  background: linear-gradient(-45deg, #ff3d00 0%, #0400ff 100%);
}
.bg-1 {
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
}
.bg-2 {
  background: linear-gradient(-45deg, #210cae 0%, #4dc9e6 100%);
}
.home {
  position: relative;
  height: calc(100vh);

  // background: linear-gradient(-45deg, #ff3d00 0%, #0400ff 100%);
  // background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  // background: linear-gradient(-45deg, #b9dcf2 0%, #f6cfbe 100% );
  // background: linear-gradient(-45deg, #210cae 0%, #4dc9e6 100%);

  padding-top: $paddintTop;

  margin-bottom: 60px;

  .cards {
    margin-bottom: 107px;
  }
  .input {
    max-width: 870px;
    width: 100%;

    margin: 0 auto;
  }
}

@keyframes arrowDown {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateY(2px);
    opacity: 0.5;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
