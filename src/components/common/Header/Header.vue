<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const onNavigate = (path: string) => {
  router.push({
    path: path,
  });
};
</script>

<template>
  <div class="header">
    <div class="logo" @click="onNavigate('/')">FILMS</div>
    <div class="btn">
      <div class="btn_item" @click="onNavigate('/')">Main</div>
      <div class="btn_item" @click="onNavigate('/search')">Search</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles";
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px $pageMargin;

  .logo {
    font-size: 32px;
    font-weight: 700;
    font-family: "Unbounded", cursive;

    cursor: pointer;
  }

  .btn {
    display: flex;

    &_item {
      font-size: 18px;
      text-transform: uppercase;
      font-family: "Unbounded", cursive;

      color: #fdfdfd;

      cursor: pointer;

      &:not(:last-of-type) {
        margin-right: 16px;
      }

      &:hover {
      }
    }
  }
}

@media (max-width: 600px) {
  .header {
    // display: none;

    padding: 20px $pageMarginMobile;

    .logo {
      font-size: 14px;
    }

    .btn {
      &_item {
        font-size: 14px;
      }
    }
  }
}
</style>
