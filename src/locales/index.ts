
import { en } from './en';
import { ar } from './ar';
import { eg } from './eg';

export const translations = {
  en,
  ar,
  eg,
} as const;

export type TranslationKey = keyof typeof en;
export type Language = keyof typeof translations;

export { en, ar, eg };
