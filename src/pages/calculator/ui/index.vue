<template>
  <div class="calc">
    <input
      v-model="result"
      class="calc-input"
      type="text"
      placeholder="0"
      @input="filterNum"
      @keydown.enter="calculatorResult"
    />
    <div class="calc__numbers grid">
      <button
        v-for="num in numbers"
        :key="num"
        class="calc__numbers-item grid-item"
        @click="inputNumbers(num)"
      >
        {{ num }}
      </button>
      <button
        v-for="operator in operators"
        :key="operator"
        class="calc__operations-item grid-item"
        @click="inputOperators(operator)"
      >
        {{ operator }}
      </button>
      <button
        class="calc__reset-item grid-item"
        @click="calculatorReset"
      >
        C
      </button>
      <button
        class="calc__result-item grid-item"
        @click="calculatorResult"
      >
        =
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const result = ref('');

const regex = /^[0-9+\-*/.]*$/;

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
const operators = ['+', '-', '*', '/'];

const isResult = ref(false);

function filterNum() {
  if (!regex.test(result.value)) {
    result.value = result.value.slice(0, -1);
  }
}

function sum(a: string, b: string) {
  return +a + +b;
}

function subtraction(a: string, b: string) {
  return +a - +b;
}

function multiplication(a: string, b: string) {
  return +a * +b;
}

function division(a: string, b: string) {
  return +a / +b;
}

function inputNumbers(num: string) {
  if (isResult.value) {
    calculatorReset();
    isResult.value = false;
  }
  result.value += num;
}

function inputOperators(operator: string) {
  const lastChar = result.value.slice(-1);
  if (operators.includes(lastChar)) {
    result.value = result.value.slice(0, -1) + operator;
  } else if (result.value !== '') {
    result.value += operator;
  }
}

function calculatorReset() {
  result.value = '';
  isResult.value = false;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function calculatorCount(callback: Function, operator: string) {
  const arrOperands = result.value.split(operator);
  if (arrOperands.length >= 2) {
    return callback(arrOperands[0], arrOperands[1]);
  } else {
    return result.value;
  }
}

function calculatorResult() {
  let res = result.value;
  if (res.includes('+')) {
    res = calculatorCount(sum, '+');
  } else if (res.includes('-')) {
    res = calculatorCount(subtraction, '-');
  } else if (res.includes('*')) {
    res = calculatorCount(multiplication, '*');
  } else if (res.includes('/')) {
    res = calculatorCount(division, '/');
  } else {
    return;
  }
  result.value = res;
  isResult.value = true;
}
</script>

<style>
.app-container {
  background: #555 !important;
}

.calc-input {
  width: 100%;
  border: 1px solid #0f172a;
  padding: var(--padding-md);
  font-size: var(--font-size-2xl);
  text-align: right;

  &::placeholder {
    font-size: var(--font-size-2xl);
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 300px;
}

.grid-item {
  flex: 33.3%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-3xl);
  border: 1px solid #0f172a;
  cursor: pointer;
  transition: 0.1s ease-in-out;
}

.calc__numbers-item {
  background: lightgrey;

  &:hover {
    background: lightslategrey;
    color: var(--cricket-color-white-alpha-100);
  }
}

.calc__operations-item {
  background: orange;

  &:hover {
    background: orangered;
    color: var(--cricket-color-white-alpha-100);
  }
}

.calc__reset-item {
  background: red;

  &:hover {
    background: darkred;
    color: var(--cricket-color-white-alpha-100);
  }
}

.calc__result-item {
  background: limegreen;

  &:hover {
    background: green;
    color: var(--cricket-color-white-alpha-100);
  }
}
</style>
