import { useState, useEffect, ReactNode } from 'react';
import i18n from '@/lib/i18n';
import { useTranslation } from 'react-i18next';
import { type Language, type TranslationKey } from '@/locales';
import {
  LanguageContext,
  useLanguage,
  type LanguageContextType,
} from './LanguageContext.helpers';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default language Arabic with RTL direction
  const [language, setLanguageState] = useState<Language>('ar');
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Update document direction
    const isRTL = lang !== 'en';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const translate = (key: TranslationKey): string => t(key);

  const isRTL = language !== 'en';

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translate, isRTL }}
    >
      <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
