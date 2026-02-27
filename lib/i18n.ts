import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import en from '@/locales/en.json';
import gu from '@/locales/gu.json';

export const i18n = defineI18n({
  languages: ['en', 'gu'],
  defaultLanguage: 'en',
  parser: 'dot',
  hideLocale: 'never',
  fallbackLanguage: 'en',
});

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    en,
    gu,
  },
});

export function isValidLanguage(value: string): value is (typeof i18n.languages)[number] {
  return i18n.languages.includes(value as (typeof i18n.languages)[number]);
}
