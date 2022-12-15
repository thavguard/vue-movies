<script setup lang="ts"></script>

<template>
  <div class="skeleton"></div>
</template>

<style scoped lang="scss">
@import "@/styles";
.skeleton {
  position: relative;

  width: $cardWidth;
  height: $cardHeight;

  background: #2e2e2e;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 50px;
    height: 100%;

    background: linear-gradient(
      90deg,
      rgba(46, 46, 46, 1) 0%,
      rgb(56, 56, 56) 100%
    );

    filter: blur(10px);

    animation: 0.7s infinite normal skeletonAnimation;
  }
}

@keyframes skeletonAnimation {
  from {
    left: 0%;
  }

  to {
    left: 100%;
  }
}
</style>
