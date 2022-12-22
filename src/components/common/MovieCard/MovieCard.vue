<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import kinoHdIcon from "@/assets/icons/kino_hd.webp";
import { onMounted } from "vue";
import { kpApi, videoApi } from "@/API/api";
import { reactive } from "vue";
import type { Genre } from "@/types/kpTypes";
import type { IVideoCDN } from "@/types/types";
import { useMoviesStore } from "@/store/useMoviesStore";

const props = defineProps<{
  year: number;
  ratingKinopoisk: number;
  kinopoiskId: number;
  posterUrl: string;
  nameRu: string;
  nameEn: string;
  genres: Genre[];
  ratingImdb: number;
  imdbId: string;
}>();

const store = useMoviesStore();

const state = reactive({
  quality: "",
  iframe: "",
});

const onClick = () => {
  if (state.iframe) {
    window.open(state.iframe);
  }

  store.recentFilms.push(props.kinopoiskId);
};

const fetchInfo = async () => {
  const { data } = await videoApi.get<IVideoCDN>("short", {
    params: {
      kinopoisk_id: props.kinopoiskId,
    },
  });

  state.iframe = data.data[0]?.iframe_src;
  state.quality = data.data[0]?.quality;
};

onMounted(() => {
  fetchInfo();
});
</script>

<template>
  <div
    class="card"
    @click="onClick"
    :class="{
      'has-iframe': !!state.iframe,
    }"
  >
    <div class="info">
      <div
        class="rate"
        :class="{
          'rate-0': +props.ratingKinopoisk <= 4,
          'rate-1': +props.ratingKinopoisk > 4,
          'rate-2': props.ratingKinopoisk > 7,
        }"
        v-if="props.ratingKinopoisk"
      >
        {{ props.ratingKinopoisk?.toFixed(1) }}
      </div>
      <div class="quality" v-if="state.quality">
        {{ state.quality }}
      </div>
    </div>
    <div class="img">
      <img v-if="props.posterUrl" :src="props.posterUrl" :alt="props?.nameRu" />
      <div v-else class="no-img">{{ props.nameRu }}</div>
    </div>
    <div class="more-info">
      <div class="more-info__char">
        <span>жанр:</span> {{ props.genres[0]?.genre }}
      </div>
      <div class="more-info__char"><span>год:</span> {{ props.year }}</div>
      <div class="more-info__char">
        <span>IMDB:</span> {{ props.ratingImdb }}
      </div>
      <div class="btns">
        <div class="kino_hd_btn">
          <img :src="kinoHdIcon" alt="" />
        </div>
        <div class="imdb_btn">
          <Icon :name="'imdb'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.has-iframe {
  cursor: pointer;
}

.card {
  position: relative;
  max-width: $cardWidth;
  width: 100%;

  margin: 0 60px;

  transition: transform 0.25s ease-in-out;

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  &:hover {
    transform: scale(1.1);

    .more-info {
      opacity: 1;
    }
  }

  .more-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;

    transition: opacity 0.25s ease-in-out;

    padding: 40px 0 0 8px;

    text-align: start;

    z-index: 0;

    overflow: hidden;
    background: rgba(0, 0, 0, 0.65);
    opacity: 0;

    &__char {
      font-size: 18px;
      font-weight: 500;

      margin-bottom: 2px;
      span {
        font-size: 15px;
        font-weight: 400;
        color: rgba($color: #fff, $alpha: 0.75);
      }
    }

    .btns {
      display: flex;
      align-items: center;

      margin-top: 12px;

      .kino_hd_btn,
      .imdb_btn {
        transition: all 0.2s ease-in-out;
        width: 42px;
        &:hover {
          opacity: 0.7;
        }
      }

      .kino_hd_btn {
        img {
          object-fit: contain;

          border-radius: 8px;
        }

        margin-right: 8px;
      }
      .imdb_btn {
        &:deep(svg) {
          display: flex;
          align-items: center;
          fill: #fff;
        }
      }
    }
  }

  .info {
    position: absolute;
    top: 8px;
    left: 8px;

    z-index: 1;

    display: flex;

    .rate,
    .quality {
      border-radius: 3px;

      padding: 2px 4px;

      font-size: 14px;
      font-family: "Zen Dots", cursive;
    }

    .rate {
      // background-color: #1bbb18;
      margin-right: 2px;

      &-0 {
        background: #ff0707;
      }

      &-1 {
        background: #646464;
      }

      &-2 {
        background: #1bbb18;
      }
    }

    .quality {
      background-color: #646464;
    }
  }

  .img {
    transition: transform 0.25s ease-in-out;
    img {
      border-radius: 4px;
      max-width: $cardWidth;
      width: 100%;
      height: $cardHeight;
    }
  }

  .no-img {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: $cardWidth;
    width: 100%;
    height: $cardHeight;

    background: $cardSkeletonBg;
    border-radius: 4px;

    font-size: 16px;
  }
}
</style>
