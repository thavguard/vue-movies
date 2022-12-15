<script setup lang="ts">
import { reactive } from "vue";
import search from "@/assets/icons/search.svg";

const state = reactive({
  text: "",
});

const onSearch = () => {
  console.log(state.text);
};

const results = [
  {
    title: "Гарри поттер и филосовский камень",
    subtitle: "original name",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/df389d74-048e-43f4-9a6a-9c934cb61e62/52",
  },
  {
    title: "Гарри поттер и филосовский камень",
    subtitle: "original name",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/df389d74-048e-43f4-9a6a-9c934cb61e62/52",
  },
  {
    title: "Гарри поттер и филосовский камень",
    subtitle: "original name",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/df389d74-048e-43f4-9a6a-9c934cb61e62/52",
  },
  {
    title: "Гарри поттер и филосовский камень",
    subtitle: "original name",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/df389d74-048e-43f4-9a6a-9c934cb61e62/52",
  },
];
</script>

<template>
  <div class="container">
    <div class="home-input" @input="onSearch">
      <input
        type="text"
        v-model="state.text"
        placeholder="сегодня я хочу посмотреть..."
      />
      <div class="search" @click="onSearch">
        <img :src="search" alt="" />
      </div>
    </div>
    <div class="results">
      <div class="items">
        <div class="results__item" v-for="item in results" :key="item.img">
          <div class="results__item--img">
            <img :src="item.img" alt="" />
          </div>
          <div class="results__item--info">
            <div>
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">
                <div class="subtitle__rate">8.2</div>
                <div class="subtitle__text">{{ item.subtitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="show-more">Показать еще</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.home-input {
  display: flex;
  align-items: center;

  width: 100%;
  background: $homeInputBg;
  border-radius: 8px;

  padding-left: 16px;

  transition: background 0.2s ease-in-out;

  &:hover {
    background: darken($homeInputBg, 5%);
  }

  input {
    margin: 0;
    padding: 0;
    background: 0;
    border: none;

    color: #000;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    max-width: 100%;
    width: 100%;

    padding: 16px 0;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $placeholderColor;
    }
  }

  .search {
    padding: 8px 16px;

    cursor: pointer;
    user-select: none;
  }
}

.results {
  background: $homeInputBg;
  border-radius: 8px;

  margin-top: 4px;

  color: #0e0d0d;

  .items {
    padding: 16px 0;
  }

  &__item {
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
    }

    &--info {
      display: flex;
      align-items: center;

      .title {
        margin-bottom: 4px;

        font-size: 18px;
        font-weight: 500;
      }

      .subtitle {
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

  .show-more {
    background: #dadada;
    border-radius: 0 0 8px 8px;

    padding: 8px 16px;

    color: #080808;
    font-size: 14px;

    cursor: pointer;
  }
}
</style>
