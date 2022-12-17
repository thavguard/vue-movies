<script setup lang="ts">
import { kpApi } from "@/API/api";
import type { IKp } from "@/types/kpTypes";
import { onMounted, reactive } from "vue";

const props = defineProps<{
  title: string;
  originalName: string;
  img: string;
  rate: number;
  iframe: string;
  kp_id: string | null;
  id: number;
}>();

const state = reactive({
  img: "",
  rate: 0,
});

onMounted(async () => {
  const { data } = await kpApi.get<IKp>("movie", {
    params: {
      search: props.kp_id,
      field: "id",
    },
  });

  state.rate = data.rating.kp;
  state.img = data.poster.url;
});
</script>

<template>
  <div class="item" :key="props.id">
    <div class="item--img">
      <img :src="state.img" alt="" v-if="state.img" />
      <div class="no-img" v-else></div>
    </div>
    <div class="item--info">
      <div>
        <div class="title">{{ props.title }}</div>
        <div class="originalName">
          <div class="originalName__rate" v-if="state.rate">
            {{ state.rate.toFixed(1) }}
          </div>
          <div class="originalName__text">{{ props.originalName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.item {
  display: flex;

  padding: 0 16px;

  transition: background 0.1s ease-out;

  cursor: pointer;

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
