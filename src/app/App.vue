<template>
  <div class="app-container">
    <div class="app-container__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useEventListener } from '@vueuse/core';
function calculateVh(): void {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

useEventListener(window, 'resize', calculateVh);

onMounted(async () => {
  calculateVh();
});
</script>

<style scoped>
.app-container {
  min-height: 100dvh;
  height: 100%;
  background-color: var(--cricket-color-white-alpha-100);
  color: var(--cricket-color-text-accent-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: var(--gap-lg);
}
</style>
