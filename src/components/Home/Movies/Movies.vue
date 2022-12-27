<script setup lang="ts">
import { reactive, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import MovieCard from "@/components/common/MovieCard/MovieCard.vue";
import arrow from "@/assets/icons/arrow.svg";
import Icon from "@/components/common/Icon/Icon.vue";
import MovieCardSkeleton from "@/components/common/MovieCard/MovieCardSkeleton.vue";

const props = defineProps<{
  movies: [];
}>();

const state = reactive({});

const onSwiper = () => {};

const onSlideChange = () => {};
</script>

<template>
  <div class="movies">
    <Swiper
      :slides-per-view="5"
      :space-between="8"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-if="props.movies.length"
        v-for="movie in props.movies"
        :key="movie"
      >
        <MovieCard v-bind:="movie" />
      </SwiperSlide>
      <SwiperSlide v-else v-for="slide in 12" :key="slide">
        <MovieCardSkeleton />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.swiper-container {
  display: flex;
}
</style>

<style scoped lang="scss">
@import "@/styles";
.movies {
  position: relative;
  margin-right: $pageMargin;

  &:deep(.swiper-wrapper) {
    padding-left: $pageMargin;
  }
}
.carousel-navigation {
  .next,
  .prev {
    position: absolute;
    top: 50%;

    display: flex;
    align-items: center;
    height: 100%;

    opacity: 0.6;
    transition: background 0.2s ease-in-out;

    &:deep(svg) {
      width: 38px;

      fill: #fff;

      padding: 0 4px;
    }
  }

  .next {
    right: 0px;
    transform: translateY(-50%) rotate(180deg);
  }

  .prev {
    transform: translateY(-50%);
    left: 0px;
  }

  &:hover {
    .next,
    .prev {
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }
  }
}
</style>
