<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import kinoHdIcon from "@/assets/icons/kino_hd.webp";

const props = defineProps({
  img: String,
  rate: Number,
  quality: String,
});
</script>

<template>
  <div class="card">
    <div class="info">
      <div class="rate">{{ props.rate }}</div>
      <div class="quality">{{ props.quality }}</div>
    </div>
    <div class="img">
      <img :src="props.img" alt="movie" />
    </div>
    <div class="more-info">
      <div class="more-info__char"><span>жанр:</span> ужасы</div>
      <div class="more-info__char"><span>дата выхода:</span> 27.04.1996</div>
      <div class="more-info__char"><span>IMDB:</span> 7</div>
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

  cursor: pointer;

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

    padding: 36px 0 0 8px;

    text-align: start;

    z-index: 0;

    overflow: hidden;
    background: rgba(0, 0, 0, 0.65);
    opacity: 0;

    &__char {
      font-size: 15px;
      font-weight: 500;

      margin-bottom: 2px;
      span {
        font-size: 13px;
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
        width: 32px;
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
      background-color: #1bbb18;
      margin-right: 2px;
    }

    .quality {
      background-color: #24a322;
    }
  }

  .img {
    img {
      border-radius: 4px;
      width: $cardWidth;
      height: $cardHeight;
    }
  }
}
</style>
