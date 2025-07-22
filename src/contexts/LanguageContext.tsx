
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Innovative Software Solutions',
    heroSubtitle: 'Transforming businesses through cutting-edge technology and custom software development',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive software solutions tailored to your business needs',
    webDev: 'Web Development',
    webDevDesc: 'Modern, responsive websites and web applications built with the latest technologies',
    mobileDev: 'Mobile Development',
    mobileDevDesc: 'Native and cross-platform mobile applications for iOS and Android',
    cloudSolutions: 'Cloud Solutions',
    cloudSolutionsDesc: 'Scalable cloud infrastructure and deployment solutions',
    consulting: 'IT Consulting',
    consultingDesc: 'Strategic technology consulting to optimize your business processes',
    
    // About
    aboutTitle: 'About Askar Software Solutions',
    aboutDesc: 'We are a leading software development company dedicated to delivering innovative solutions that drive business growth. With years of experience and a team of skilled developers, we transform ideas into powerful digital products.',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    happyClients: 'Happy Clients',
    teamMembers: 'Team Members',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to start your next project? Contact us today',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    phone: 'Phone',
    address: 'Address',
    officeHours: 'Office Hours',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    followUs: 'Follow Us',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'حولنا',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'حلول برمجية مبتكرة',
    heroSubtitle: 'نحول الأعمال من خلال التكنولوجيا المتطورة وتطوير البرمجيات المخصصة',
    getStarted: 'ابدأ الآن',
    learnMore: 'تعرف أكثر',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول برمجية شاملة مصممة خصيصاً لاحتياجات عملك',
    webDev: 'تطوير المواقع',
    webDevDesc: 'مواقع وتطبيقات ويب حديثة ومتجاوبة مبنية بأحدث التقنيات',
    mobileDev: 'تطوير تطبيقات الجوال',
    mobileDevDesc: 'تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android',
    cloudSolutions: 'الحلول السحابية',
    cloudSolutionsDesc: 'بنية تحتية سحابية قابلة للتوسع وحلول نشر متقدمة',
    consulting: 'استشارات تقنية',
    consultingDesc: 'استشارات تقنية استراتيجية لتحسين العمليات التجارية',
    
    // About
    aboutTitle: 'حول أسكر للحلول البرمجية',
    aboutDesc: 'نحن شركة رائدة في تطوير البرمجيات مكرسة لتقديم حلول مبتكرة تدفع نمو الأعمال. مع سنوات من الخبرة وفريق من المطورين المهرة، نحول الأفكار إلى منتجات رقمية قوية.',
    yearsExperience: 'سنوات الخبرة',
    projectsCompleted: 'المشاريع المكتملة',
    happyClients: 'العملاء السعداء',
    teamMembers: 'أعضاء الفريق',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'مستعد لبدء مشروعك القادم؟ تواصل معنا اليوم',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    phone: 'الهاتف',
    address: 'العنوان',
    officeHours: 'ساعات العمل',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة.',
    followUs: 'تابعنا',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    console.log('[language-change] new language:', lang);
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
