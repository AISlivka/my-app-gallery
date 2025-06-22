<template>
  <div class="header">
    <div class="header-link">
      <router-link :to="{ name: 'calculator' }">Calculator</router-link>
    </div>
    <div class="header-link">
      <router-link :to="{ name: 'todolist' }">TODO list</router-link>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
