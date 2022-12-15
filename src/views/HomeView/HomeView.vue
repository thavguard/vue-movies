<script setup lang="ts">
import Icon from "@/components/common/Icon/Icon.vue";
import HomeInput from "@/components/Home/HomeInput/HomeInput.vue";
import Movies from "@/components/Home/Movies/Movies.vue";
import { useMoviesStore } from "@/store/store";
import HomeMovies from "@/views/HomeView/HomeMovies.vue";

const store = useMoviesStore();
</script>

<template>
  <div class="container">
    <div class="home">
      <div class="cards">
        <Movies :movies="store.movies" />
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
.home {
  position: relative;
  height: calc(100vh - 32px);
  margin-top: 32px;
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
