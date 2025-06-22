<template>
  <header class="header">
    <div class="header__wallet">
      <div class="header__wallet-icon">
        <IconWallet />
      </div>
      <!-- TODO не знаю как будет когда у пользователя нет баланса -->
      <div class="header__wallet-info">
        <span class="header__wallet-amount">amount</span>
        <span class="header__wallet-currency">currency</span>
      </div>
    </div>
    <div class="header__logo">
      <img
        class="header__logo-img"
        src="@/shared/images/ImageLogo.png"
        alt="logo"
      />
    </div>
    <div class="header__actions">
      <UIButton @click="emit('open-rules-modal')">
        <template #icon>
          <IconInfoCircle />
        </template>
      </UIButton>

      <UIButton @click="isOpenMenuModal = true">
        <template #icon>
          <IconSettings />
        </template>
      </UIButton>
    </div>

    <MenuModal
      :is-open="isOpenMenuModal"
      :is-teleport-disabled="isDesktop"
      @close="isOpenMenuModal = false"
      @open-provably-modal="emit('open-provably-modal')"
      @open-game-limits-modal="emit('open-game-limits-modal')"
    />
  </header>
</template>

<script lang="ts" setup>
import IconWallet from '@/shared/icons/IconWallet.svg';
import IconInfoCircle from '@/shared/icons/IconInfoCircle.svg';
import IconSettings from '@/shared/icons/IconSettings.svg';
import UIButton from '@/shared/ui/UIButton/UIButton.vue';
import { shallowRef } from 'vue';
import { useMedia } from '@/shared/lib/composables/useMedia';

const emit = defineEmits<{
  (e: 'open-rules-modal'): void;
  (e: 'open-provably-modal'): void;
  (e: 'open-game-limits-modal'): void;
}>();

const { isDesktop } = useMedia();

const isOpenMenuModal = shallowRef(false);
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: var(--padding-2xs);
  padding-bottom: var(--padding-2xs);
  gap: var(--gap-md);

  @media (--desktop) {
    background-color: var(--cricket-color-bg-surface-secondary);
    border: 1px solid var(--cricket-color-border-secondary);
    border-radius: var(--radius-sm);
    padding-left: var(--padding-md);
    padding-right: var(--padding-md);
  }
}

.header__wallet {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  width: 100%;
}

.header__wallet-info {
  display: flex;
  align-items: baseline;
  gap: var(--gap-xs);
}

.header__wallet-amount {
  @mixin typography md;

  font-weight: 700;
}

.header__wallet-currency {
  @mixin typography sm;

  font-weight: 500;
}

.header__wallet-icon {
  width: 16px;
  height: 16px;
  color: var(--cricket-color-blue-400);
}

.header__logo {
  min-width: 48px;
  height: 24px;
}

.header__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.header__actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-sm);
}
</style>
