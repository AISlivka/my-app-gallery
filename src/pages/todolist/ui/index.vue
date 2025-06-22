<template>
  <section class="section">
    <h1>TODO LIST</h1>
    <label class="section-label">
      <input
        id="section-input"
        v-model="isValue"
        class="section-input"
        type="text"
      />
      <div class="section__button">
        <button
          class="section__button-add"
          @click="addString"
        >
          add
        </button>
      </div>
    </label>
    <div
      v-if="listOfString.length"
      class="section__list"
    >
      <div
        v-for="(item, index) in listOfString"
        :key="index"
        class="section__item"
      >
        <p class="section__item-title">{{ item }}</p>
        <div class="section__remove">
          <button
            class="section__remove-button"
            @click="removeString(index)"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isValue = ref('');
const listOfString = ref<string[]>([]);

const addString = () => {
  listOfString.value.push(isValue.value.trim());
};

const removeString = (index: number) => {
  listOfString.value.splice(index, 1);
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-lg);
}

.section-label {
  position: relative;
  padding: var(--padding-2xs);
}

.section-input {
  border: 2px solid var(--cricket-color-text-accent);
  padding: var(--padding-2xs);

  &::placeholder {
    border-color: transparent;
  }
}

.section__button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}

.section__button-add {
  cursor: pointer;
  background-color: var(--cricket-color-text-positive);
  padding: var(--padding-2xs);
  border-radius: var(--radius-sm);
}

.section__item {
  border: 1px solid var(--cricket-color-text-accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: var(--padding-2xs);
}

.section__remove-button {
  cursor: pointer;
  background-color: var(--cricket-color-text-negative);
  padding: var(--padding-2xs);
  border-radius: var(--radius-sm);
}
</style>
