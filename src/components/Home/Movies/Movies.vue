<script setup lang="ts">
import HomeInput from "@/components/Home/HomeInput/HomeInput.vue";
import MovieCard from "@/components/common/MovieCard/MovieCard.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { reactive, ref } from "vue";
import type { IMovie } from "../types";
import arrow from "@/assets/icons/arrow.svg";
import Icon from "@/components/common/Icon/Icon.vue";

const props = defineProps({
  movies: {
    type: Array<IMovie>,
    required: true,
  },
});

const state = reactive({
  settings: {
    itemsToShow: 5,
    snapAlign: "center",
  },
  currentSlide: 1,
});

const myCarousel = ref<any>(null);

console.log(myCarousel);

const nextSlice = () => {
  if (state.currentSlide + 4 < props.movies.length) {
    state.currentSlide = state.currentSlide + 4;
  }
};
const prevSlice = () => {
  if (state.currentSlide >= 4) {
    state.currentSlide = state.currentSlide - 4;
  }
};
</script>

<template>
  <div class="movies">
    <Carousel
      :settings="state.settings"
      ref="myCarousel"
      v-model="state.currentSlide"
    >
      <Slide v-for="slide in props.movies" :key="slide.id">
        <MovieCard
          :img="slide.img"
          :rate="slide.rate"
          :quality="slide.quality"
        />
      </Slide>
      <!-- <template #addons>
        <Navigation />
      </template> -->
    </Carousel>
    <div class="carousel-navigation">
      <div class="next" @click="nextSlice">
        <Icon :name="'arrow'" />
      </div>
      <div class="prev" @click="prevSlice">
        <Icon :name="'arrow'" />
      </div>
    </div>
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
