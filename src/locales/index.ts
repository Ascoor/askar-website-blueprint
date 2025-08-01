export type Language = 'en' | 'ar' | 'eg';

import type { en } from './en';
import type { ar } from './ar';
import type { eg } from './eg';

export type TranslationKey = keyof typeof en;

const loaders = {
  en: () => import('./en').then((m) => m.en),
  ar: () => import('./ar').then((m) => m.ar),
  eg: () => import('./eg').then((m) => m.eg),
};

export const loadTranslations = (lang: Language) => loaders[lang]();
