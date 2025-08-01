import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import i18n from '@/lib/i18n';
import { useTranslation } from 'react-i18next';
import { type Language, type TranslationKey } from '@/locales';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language, TranslationKey };
