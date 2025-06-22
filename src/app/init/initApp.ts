import { createApp } from 'vue';
import App from '../App.vue';
import { initStore } from './initStore';
import { initSentry } from './initSentry';
import { router } from '@/shared/lib/router';
import { i18n } from '@/shared/lib/i18n';
import VueDragScroller from 'vue-drag-scroller';

import '../styles/index.css';
import 'unfonts.css';

export async function initApp(): Promise<void> {
  const app = createApp(App).use(i18n).use(router).use(initStore).use(VueDragScroller);

  await router.isReady();

  initSentry(app);

  app.mount('#app');
}
