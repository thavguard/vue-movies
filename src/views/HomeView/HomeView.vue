<script setup lang="ts">
import Icon from "@/components/common/Icon/Icon.vue";
import SearchInput from "@/components/ui/SearchInput/SearchInput.vue";
import Movies from "@/components/Home/Movies/Movies.vue";
import { useMoviesStore } from "@/store/useMoviesStore";
import HomeMovies from "@/views/HomeView/HomeMovies.vue";
import { reactive, onMounted } from "vue";
import SearchResults from "@/components/ui/SearchInput/SearchResults/SearchResults.vue";

const store = useMoviesStore();

const state = reactive({
  recentFilms: [],
});

const randInt = Math.floor(Math.random());

onMounted(() => {
  // store.fetchHomeMovies("TOP_100_POPULAR_FILMS");
});
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
      <!-- <div class="cards">
        <Movies :movies="store.homeMovies" />
      </div> -->
      <div class="input">
        <SearchInput />
        <SearchResults />
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

  .cards {
    margin-bottom: 100px;
  }
  .input {
    max-width: 870px;
    width: 100%;

    margin: 200px auto 0;
  }
}

@media (max-width: 600px) {
  .home {
    padding: 57px $pageMarginMobile 0 $pageMarginMobile;

    .input {
      margin-top: 50px;
    }
  }
}
</style>
