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
import { APP_CONTENT_DESKTOP_SPACING } from '@/shared/consts/layout';

const appContentDesktopSpacing = `${APP_CONTENT_DESKTOP_SPACING}px`;

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
  background-color: var(--cricket-color-bg-bg);
  color: var(--cricket-color-text-primary);

  @media (--desktop) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (--desktop-large) {
    background-image: url('@/shared/images/ImageBgDesktopLarge.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.app-container__content {
  padding: var(--padding-0) var(--padding-md) var(--padding-md);
  position: relative;

  @media (--desktop) {
    display: flex;
    max-width: 1440px;
    max-height: 900px;
    padding: v-bind('appContentDesktopSpacing');
    width: 100%;
    height: 100%;
  }
}
</style>
