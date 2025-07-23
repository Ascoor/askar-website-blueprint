
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'eg';

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

    // Projects
    projectsTitle: 'Our Projects',
    projectsSubtitle: 'Recent case studies from our clients',
    project1Title: 'Smart School Platform',
    project1Desc: 'Unified education management with mobile apps.',
    project2Title: 'Clinic Management System',
    project2Desc: 'Secure patient records and online appointments.',
    project3Title: 'AI Sales Insights',
    project3Desc: 'Data-driven recommendations boosting revenue.',
    
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

    // Projects
    projectsTitle: 'مشاريعنا',
    projectsSubtitle: 'نستعرض أحدث قصص النجاح لعملائنا',
    project1Title: 'منصة المدرسة الذكية',
    project1Desc: 'إدارة تعليمية موحدة مع تطبيقات للجوال.',
    project2Title: 'نظام إدارة العيادات',
    project2Desc: 'سجلات مرضى آمنة وحجوزات عبر الإنترنت.',
    project3Title: 'تحليلات المبيعات بالذكاء الاصطناعي',
    project3Desc: 'توصيات مبنية على البيانات لزيادة الإيرادات.',
    
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
  },
  eg: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'عننا',
    contact: 'اتصل بينا',

    // Hero Section
    heroTitle: 'حلول برمجية مبتكرة',
    heroSubtitle: 'بنطوّرلك شغلك بأحدث التقنيات والبرمجيات المخصصة',
    getStarted: 'يلا نبدأ',
    learnMore: 'اعرف أكتر',

    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول برمجية متكاملة تناسب احتياجاتك',
    webDev: 'تطوير مواقع',
    webDevDesc: 'مواقع وتطبيقات ويب عصرية ومتجاوبة',
    mobileDev: 'تطبيقات موبايل',
    mobileDevDesc: 'تطبيقات أصلية ومشتركة لـ iOS وAndroid',
    cloudSolutions: 'حلول سحابية',
    cloudSolutionsDesc: 'بنية تحتية سحابية مرنة وآمنة',
    consulting: 'استشارات تقنية',
    consultingDesc: 'نصائح تقنية عملية لتحسين شغلك',

    // Projects
    projectsTitle: 'مشاريعنا',
    projectsSubtitle: 'أحدث قصص النجاح مع عملائنا',
    project1Title: 'منصة المدرسة الذكية',
    project1Desc: 'إدارة تعليمية متكاملة بتطبيقات موبايل.',
    project2Title: 'نظام عيادات متكامل',
    project2Desc: 'حجوزات ومتابعة مرضى بشكل آمن.',
    project3Title: 'تحليلات مبيعات ذكية',
    project3Desc: 'توصيات بتعتمد على البيانات لزيادة الربح.',

    // About
    aboutTitle: 'إحنا أسكار للحلول البرمجية',
    aboutDesc:
      'فريق محترف بيحوّل أفكارك لمنتجات رقمية قوية تساعد على نمو عملك.',
    yearsExperience: 'سنين خبرة',
    projectsCompleted: 'مشاريع مكتملة',
    happyClients: 'عملاء مبسوطين',
    teamMembers: 'أفراد الفريق',

    // Contact
    contactTitle: 'كلمنا',
    contactSubtitle: 'كلّمنا في أي وقت، فريقنا معاك على طول!',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'رسالتك',
    sendMessage: 'ابعت الرسالة',
    phone: 'التليفون',
    address: 'العنوان',
    officeHours: 'ساعات العمل',

    // Footer
    allRightsReserved: 'كل الحقوق محفوظة.',
    followUs: 'تابعنا',
  },
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

  const isRTL = language !== 'en';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
