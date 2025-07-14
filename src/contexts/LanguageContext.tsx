import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform Reality with Augmented Innovation',
    'hero.subtitle': 'Ask-ar Software Solutions pioneers cutting-edge AR experiences that bridge the digital and physical worlds, empowering businesses to create immersive solutions.',
    'hero.cta.primary': 'Explore Our Solutions',
    'hero.cta.secondary': 'Watch Demo',
    
    // Services
    'services.title': 'Our AR Solutions',
    'services.subtitle': 'Comprehensive augmented reality services tailored to transform your business',
    'services.ar_development.title': 'AR Development',
    'services.ar_development.description': 'Custom AR applications for mobile, web, and enterprise platforms with cutting-edge technology.',
    'services.3d_modeling.title': '3D Modeling & Animation',
    'services.3d_modeling.description': 'Photorealistic 3D models and animations that bring your products to life in AR.',
    'services.consulting.title': 'AR Consulting',
    'services.consulting.description': 'Strategic guidance to integrate AR solutions effectively into your business workflow.',
    'services.maintenance.title': 'Support & Maintenance',
    'services.maintenance.description': 'Ongoing technical support and updates to keep your AR solutions running smoothly.',
    
    // Portfolio
    'portfolio.title': 'Featured Projects',
    'portfolio.subtitle': 'Showcasing our expertise in creating immersive AR experiences',
    
    // About
    'about.title': 'About Ask-ar',
    'about.subtitle': 'Leading the future of augmented reality technology',
    'about.description': 'Ask-ar Software Solutions is a pioneering technology company specializing in augmented reality solutions. We combine technical expertise with creative vision to deliver AR experiences that transform how businesses engage with their customers.',
    'about.mission': 'Our mission is to make augmented reality accessible and impactful for businesses of all sizes.',
    'about.vision': 'We envision a world where AR seamlessly integrates into daily business operations.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your AR journey? Let\'s discuss your project.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company',
    'contact.form.message': 'Project Details',
    'contact.form.submit': 'Send Message',
    
    // Testimonials
    'testimonials.title': 'Client Success Stories',
    'testimonials.subtitle': 'Hear from businesses that transformed with our AR solutions',
    
    // Blog
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Stay updated with AR trends and innovations',
    
    // Footer
    'footer.tagline': 'Transforming reality through innovation',
    'footer.contact.title': 'Contact Info',
    'footer.services.title': 'Services',
    'footer.company.title': 'Company',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'حوّل الواقع بالابتكار المعزز',
    'hero.subtitle': 'تقود شركة أسك-أر للحلول البرمجية تطوير تجارب الواقع المعزز المتطورة التي تربط بين العالمين الرقمي والمادي، وتمكن الشركات من إنشاء حلول غامرة.',
    'hero.cta.primary': 'اكتشف حلولنا',
    'hero.cta.secondary': 'شاهد العرض التوضيحي',
    
    // Services
    'services.title': 'حلول الواقع المعزز',
    'services.subtitle': 'خدمات شاملة للواقع المعزز مصممة خصيصاً لتحويل عملك',
    'services.ar_development.title': 'تطوير الواقع المعزز',
    'services.ar_development.description': 'تطبيقات واقع معزز مخصصة للهواتف المحمولة والويب والمؤسسات باستخدام أحدث التقنيات.',
    'services.3d_modeling.title': 'النمذجة والرسوم المتحركة ثلاثية الأبعاد',
    'services.3d_modeling.description': 'نماذج ثلاثية الأبعاد فائقة الواقعية ورسوم متحركة تحيي منتجاتك في الواقع المعزز.',
    'services.consulting.title': 'استشارات الواقع المعزز',
    'services.consulting.description': 'إرشادات استراتيجية لدمج حلول الواقع المعزز بفعالية في سير عمل شركتك.',
    'services.maintenance.title': 'الدعم والصيانة',
    'services.maintenance.description': 'دعم تقني مستمر وتحديثات للحفاظ على حلول الواقع المعزز تعمل بسلاسة.',
    
    // Portfolio
    'portfolio.title': 'مشاريع مميزة',
    'portfolio.subtitle': 'عرض خبرتنا في إنشاء تجارب واقع معزز غامرة',
    
    // About
    'about.title': 'عن أسك-أر',
    'about.subtitle': 'نقود مستقبل تقنية الواقع المعزز',
    'about.description': 'أسك-أر للحلول البرمجية هي شركة تقنية رائدة متخصصة في حلول الواقع المعزز. نجمع بين الخبرة التقنية والرؤية الإبداعية لتقديم تجارب واقع معزز تحول طريقة تفاعل الشركات مع عملائها.',
    'about.mission': 'مهمتنا هي جعل الواقع المعزز متاحاً ومؤثراً للشركات من جميع الأحجام.',
    'about.vision': 'نتصور عالماً يندمج فيه الواقع المعزز بسلاسة في العمليات التجارية اليومية.',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد لبدء رحلة الواقع المعزز؟ دعنا نناقش مشروعك.',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.company': 'الشركة',
    'contact.form.message': 'تفاصيل المشروع',
    'contact.form.submit': 'إرسال الرسالة',
    
    // Testimonials
    'testimonials.title': 'قصص نجاح العملاء',
    'testimonials.subtitle': 'استمع من الشركات التي تحولت بحلول الواقع المعزز لدينا',
    
    // Blog
    'blog.title': 'أحدث الرؤى',
    'blog.subtitle': 'ابق محدثاً مع اتجاهات وابتكارات الواقع المعزز',
    
    // Footer
    'footer.tagline': 'نحول الواقع من خلال الابتكار',
    'footer.contact.title': 'معلومات الاتصال',
    'footer.services.title': 'الخدمات',
    'footer.company.title': 'الشركة',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};