<template>
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
</template>

<script setup lang="ts">
import { reactive } from "vue";
import search from "@/assets/icons/search.svg";

const state = reactive({
  text: "",
});

const onSearch = () => {
  console.log(state.text);
};
</script>

<style scoped lang="scss">
@import "@/styles";
.home-input {
  display: flex;
  align-items: center;

  width: 100%;
  background: #f5f5f5;
  border-radius: 8px;

  padding-left: 16px;

  transition: background 0.2s ease-in-out;

  &:hover {
    background: darken(#f5f5f5, 5%);
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
</style>
