import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { loadTranslations, type Language } from '@/locales';

const supportedLngs: Language[] = ['en', 'ar', 'eg'];

i18n
  .use(
    resourcesToBackend((lng: string) => {
      const lang = lng.split('-')[0] as Language;
      return loadTranslations(lang);
    }),
  )
  .use(initReactI18next)
  .init({
    lng: 'ar',
    fallbackLng: 'en',
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
  });

export default i18n;
