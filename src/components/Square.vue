<template>
  <div :style="{ 'background-color': isHovered ? 'blue' : 'white' }" class="square" @mouseover="toggleHover"></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isHovered = ref(false)

function toggleHover(): void {
  isHovered.value = !isHovered.value;
}
</script>

<style scoped>
.square {
  width: 36px;
  height: 36px;
  margin: 2px;
  transition: .3s;
}
</style>
