<script setup lang="ts">
import { reactive } from "vue";
import search from "@/assets/icons/search.svg";
import { useSearchStore } from "@/store/useSearchStore";
import MovieCardResult from "../MovieCardResult/MovieCardResult.vue";
import { useRoute, useRouter } from "vue-router";

const store = useSearchStore();
const router = useRouter();
const route = useRoute();

const onInput = () => {
  if (store.search) {
    store.fetchResult();
  }
};

const onSearch = () => {
  router.push({
    path: "/search",
    query: {
      text: store.search,
    },
  });

  console.log("hey hey hey");
};
</script>

<template>
  <div class="container">
    <div class="home-input" @input="onInput">
      <input
        type="text"
        v-model="store.search"
        placeholder="Гарри Поттер и узник Азкабана"
      />
      <div class="search" @click="onSearch">
        <img :src="search" alt="" />
      </div>
    </div>
    <div class="results" v-if="store.results.length">
      <div class="items">
        <MovieCardResult
          v-for="item in store.results.slice(0, 4)"
          :="item"
          :key="item.id"
        />
      </div>
      <div class="show-more" v-if="store.results.length > 4">Показать все</div>
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
