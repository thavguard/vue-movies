<script lang="ts" setup></script>

<template>
  <div class="header">
    <div class="logo">FILMS</div>
    <div class="btn">
      <div class="btn_item">Main</div>
      <div class="btn_item">Search</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 60px;

  .logo {
    font-size: 32px;
    font-weight: 700;
    font-family: "Unbounded", cursive;
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
</style>
