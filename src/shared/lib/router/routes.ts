import { RouteName } from './routeNames';

export const routes = [
  {
    path: '/',
    name: RouteName.HOME,
    component: () => import('@/pages/home/ui/index.vue'),
  },
];
