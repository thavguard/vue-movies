<script setup lang="ts">
import { videoApi } from "@/API/api";
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
  id: number;
  iframe: string;
  quality: string;
}>();

const onClick = () => {
  if (props.iframe) {
    window.open(props.iframe);
  }
};
</script>

<template>
  <div
    class="item"
    @click="onClick"
    :class="{
      'has-iframe': !!props.iframe,
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
          <div class="originalName__quality" v-if="props.quality">
            {{ props.quality }}
          </div>
          <div class="originalName__text">{{ props.originalName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";

$cardWidth: 60px;
$cardHeight: 90px;

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
    width: $cardWidth;
    height: $cardHeight;
    background: $cardSkeletonBg;

    img {
      width: $cardWidth;
      height: $cardHeight;
    }
  }

  .no-img {
    background: $cardSkeletonBg;
    height: 90px;
    width: $cardWidth;
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

      &__quality {
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

@media (max-width: 600px) {
  .item {
    padding: 0 8px;

    &--info {
      .title {
        font-size: 15px;

        margin-bottom: 2px;
      }

      .originalName {
        &__quality {
          font-size: 12px;
        }
        &__text {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
