<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import kinoHdIcon from "@/assets/icons/kino_hd.webp";
import { onMounted } from "vue";
import { kpApi } from "@/API/api";
import type { IKp, Rating, ExternalID } from "@/types/kpTypes";
import { reactive } from "vue";

const props = defineProps<{
  year: string;
  rate: number;
  quality?: string;
  id: number;
  iframe: string;
  kp_id: null | string;
}>();

const store = reactive<{
  img: string;
  names: { name: string }[];
  rating: Rating;
  genre: string;
  imdb_rate: number;
  externalId: ExternalID;
}>({
  img: "",
  names: [],
  rating: {} as Rating,
  genre: "",
  imdb_rate: 0,
  externalId: {} as ExternalID,
});

const onClick = () => {
  if (props.iframe) {
    window.open(props.iframe);
  }
};

onMounted(async () => {
  const { data } = await kpApi.get<IKp>("movie", {
    params: {
      search: props.kp_id,
      field: "id",
    },
  });

  store.img = data.logo.url;
  store.names = data.names;
  store.rating = data.rating;
  store.genre = data.genres[0].name;
  store.imdb_rate = data.rating.imdb;
  store.externalId = data.externalId;
});
</script>

<template>
  <div class="card" @click="onClick">
    <div class="info">
      <div
        class="rate"
        :class="{
          'rate-0': +store.rating?.kp <= 4,
          'rate-1': +store.rating?.kp > 4,
          'rate-2': store.rating?.kp > 7,
        }"
        v-if="store.rating?.kp"
      >
        {{ store.rating?.kp?.toFixed(1) }}
      </div>
      <div class="quality" v-if="props.quality">
        {{ props.quality }}
      </div>
    </div>
    <div class="img">
      <img v-if="store.img" :src="store.img" :alt="store.names[0]?.name" />
      <div v-else class="no-img">{{ store.names[0]?.name }}</div>
    </div>
    <div class="more-info">
      <div class="more-info__char"><span>жанр:</span> {{ store.genre }}</div>
      <div class="more-info__char">
        <span>год:</span> {{ props.year.slice(0, 4) }}
      </div>
      <div class="more-info__char">
        <span>IMDB:</span> {{ store.imdb_rate }}
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
.card {
  position: relative;
  max-width: $cardWidth;
  width: 100%;

  cursor: pointer;

  transition: transform 0.25s ease-in-out;

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  &:hover {
    transform: scale(1.1);
    .img {
    }

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
