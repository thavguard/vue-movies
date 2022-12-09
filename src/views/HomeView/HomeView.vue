<script setup lang="ts">
import HomeInput from "@/components/Home/HomeInput/HomeInput.vue";
</script>

<template>
  <div class="home">
    <div class="input">
      <HomeInput />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  .input {
    max-width: 870px;
    width: 100%;

    margin: 0 auto;
  }
}
</style>
