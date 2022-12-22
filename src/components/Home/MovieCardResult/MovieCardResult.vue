<script setup lang="ts">
import { kpApi, videoApi } from "@/API/api";
import type { IVideoCDN } from "@/types/types";
import {
  onMounted,
  reactive,
  onUnmounted,
  watch,
  ref,
  onBeforeMount,
} from "vue";

const props = defineProps<{
  title: string;
  originalName: string;
  img: string;
  rate: string;
  id: number;
}>();

const state = reactive({
  iframe: "",
});

const fetchInfo = async () => {
  const { data } = await videoApi.get<IVideoCDN>("short", {
    params: {
      kinopoisk_id: props.id,
    },
  });

  state.iframe = data.data[0].iframe_src;
};

onMounted(() => {
  fetchInfo();
});

const onClick = () => {
  if (state.iframe) {
    window.open(state.iframe);
  }
};
</script>

<template>
  <div
    class="item"
    @click="onClick"
    :class="{
      'has-iframe': !!state.iframe,
    }"
  >
    <div class="item--img">
      <img :src="props.img" alt="" v-if="props.img" />
      <div class="no-img" v-else></div>
    </div>
    <div class="item--info">
      <div>
        <div class="title">{{ props.title }}</div>
        <div class="originalName">
          <div class="originalName__rate" v-if="props.rate">
            {{ props.rate }}
          </div>
          <div class="originalName__text">{{ props.originalName }}</div>
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
.item {
  display: flex;

  padding: 0 16px;

  transition: background 0.1s ease-out;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  &--img {
    margin-right: 16px;
    width: 60px;

    img {
      width: 60px;
    }
  }

  .no-img {
    background: $cardSkeletonBg;
    height: 90px;
    width: 60px;
  }

  &--info {
    display: flex;
    align-items: center;

    .title {
      margin-bottom: 4px;

      font-size: 18px;
      font-weight: 500;
    }

    .originalName {
      display: flex;
      align-items: center;

      &__rate {
        margin-right: 6px;

        font-size: 18px;
        font-weight: 600;
        color: #1bbb18;
      }

      &__text {
        font-size: 15px;
        color: #484848;
        font-family: "Work Sans", sans-serif;
      }
    }
  }
}
</style>
