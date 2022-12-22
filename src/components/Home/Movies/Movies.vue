<script setup lang="ts">
import { reactive, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import HomeInput from "@/components/Home/HomeInput/HomeInput.vue";
import MovieCard from "@/components/common/MovieCard/MovieCard.vue";
import arrow from "@/assets/icons/arrow.svg";
import Icon from "@/components/common/Icon/Icon.vue";
import type { IMovieCard } from "@/types/types";
import MovieCardSkeleton from "@/components/common/MovieCard/MovieCardSkeleton.vue";

const props = defineProps<{
  movies: IMovieCard[];
}>();

const state = reactive({});

const onSwiper = () => {};

const onSlideChange = () => {};
</script>

<template>
  <div class="movies">
    <swiper
      :slides-per-view="5"
      :space-between="8"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-if="props.movies?.length"
        v-for="movie in props.movies"
        :key="movie.kinopoiskId"
      >
        <MovieCard v-bind:="movie" />
      </swiper-slide>
      <swiper-slide v-else v-for="slide in 12" :key="slide">
        <MovieCardSkeleton />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.carousel__next,
.carousel__prev {
  height: 100%;

  padding: 4px;

  transition: background 0.2s ease-in-out;

  margin: 0;

  svg {
    fill: rgba(255, 255, 255, 0.6);

    width: 36px;
  }

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.5);
    svg {
      fill: #fff;
    }
  }

  &--disabled {
    cursor: auto;
  }
}
</style>

<style scoped lang="scss">
.movies {
  position: relative;

  margin: 0 -60px;
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
