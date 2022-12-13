<script setup lang="ts">
import icons from "@/assets/icons/icons";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// @ts-ignore
const icon: string = icons[props.name];
</script>

<template>
  <div class="icon" v-html="icon"></div>
</template>
