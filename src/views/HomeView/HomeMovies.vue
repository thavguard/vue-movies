<script setup lang="ts">
import MoviesBox from "@/components/Home/Movies/MoviesBox.vue";
import { useMoviesStore } from "@/store/useMoviesStore";

const store = useMoviesStore();
</script>

<template>
  <div class="container">
    <!-- <div class="box" v-for="item in store.genres">
      <MoviesBox :kp_id="item.id" :title="item.genre" />
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  // padding-bottom: 80px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(
      -45deg,
      #ff3d00 0%,
      #0400ff 25%,
      #ff3d00 45%,
      #0400ff 65%,
      #ff3d00 75%,
      #0400ff 100%
    );

    filter: blur(10);
    opacity: 0.5;
  }

  // padding-top: 60px;
  .box {
    &:not(:last-of-type) {
      margin-bottom: 80px;
    }
  }
}
</style>
