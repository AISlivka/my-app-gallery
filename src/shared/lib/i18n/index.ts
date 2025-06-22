import { createI18n } from 'vue-i18n';
import en from './locales/en';

type MessageSchema = typeof en;

export const i18n = createI18n<[MessageSchema], 'en'>({
  locale: 'en',
  legacy: false,
  globalInjection: true,
  messages: {
    en,
  },
});
