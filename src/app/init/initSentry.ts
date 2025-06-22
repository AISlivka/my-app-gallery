import type { App } from 'vue';
import { router } from '@/shared/lib/router';
import * as Sentry from '@sentry/vue';
import { MODE, isDev } from '@/shared/config/env/env';

export function initSentry(app: App<Element>): void {
  if (isDev) {
    return;
  }

  Sentry.init({
    app,
    release: APP_VERSION,
    environment: MODE,
    dsn: 'https://447bde2a78a94162a84aabffba01fc25@gt.sportlevel-mc.com/60',
    integrations: [Sentry.browserTracingIntegration({ router })],
    tracesSampleRate: 1.0,
  });
}
