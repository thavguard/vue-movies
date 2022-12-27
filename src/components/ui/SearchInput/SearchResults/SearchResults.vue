<script setup lang="ts">
import MovieCardResult from "@/components/ui/MovieCardResult/MovieCardResult.vue";
import { useSearchStore } from "@/store/useSearchStore";
import { useRoute, useRouter } from "vue-router";

const store = useSearchStore();
const router = useRouter();
const route = useRoute();

const onSearch = () => {
  router.push({
    path: "/search",
    query: {
      text: store.search,
    },
  });
};
</script>

<template>
  <div class="results" v-if="store.results.length">
    <div class="items">
      <MovieCardResult
        v-for="item in store.results.slice(0, 4)"
        :="item"
        :key="item.id"
      />
    </div>
    <div class="show-more" v-if="store.results.length > 4" @click="onSearch">
      Показать все
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
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
