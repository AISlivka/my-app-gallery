import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history: window.location.href.includes('feature') ? createWebHashHistory() : createWebHistory(),
  routes,
});
