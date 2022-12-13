<script setup lang="ts">
import Icon from "@/components/common/Icon/Icon.vue";
import HomeInput from "@/components/Home/HomeInput/HomeInput.vue";
import Movies from "@/components/Home/Movies/Movies.vue";

const movies = [
  {
    rate: 1,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 1,
  },
  {
    rate: 2,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 2,
  },
  {
    rate: 3,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 3,
  },
  {
    rate: 4,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 4,
  },
  {
    rate: 5,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 5,
  },
  {
    rate: 6,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 6,
  },
  {
    rate: 7,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 72,
  },
  {
    rate: 8,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 8,
  },
  {
    rate: 9,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 9,
  },
  {
    rate: 10,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 21,
  },
  {
    rate: 11,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 221,
  },
  {
    rate: 12,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 231,
  },
  {
    rate: 13,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 2341,
  },
  {
    rate: 14,
    quality: "hdtv",
    img: "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016eb2adfc2080df60eb30b25c54bd/375x234",
    id: 23431,
  },
];
</script>

<template>
  <div class="home">
    <div class="cards">
      <Movies :movies="movies" />
    </div>
    <div class="input">
      <HomeInput />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
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
</style>
