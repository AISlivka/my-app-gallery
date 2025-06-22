import { RouteName } from './routeNames';

export const routes = [
  {
    path: '/',
    name: RouteName.HOME,
    component: () => import('@/pages/home/ui/index.vue'),
  },
  {
    path: '/calculator',
    name: RouteName.CALCULATOR,
    component: () => import('@/pages/calculator/ui/index.vue'),
  },
  {
    path: '/todolist',
    name: RouteName.TODOLIST,
    component: () => import('@/pages/todolist/ui/index.vue'),
  },
];
