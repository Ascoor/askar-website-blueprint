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
    'services.title': "Own Your App. Don't Rent Your Dreams.",
    'services.subtitle': 'We build custom applications you fully own\u2014with source code and unlimited freedom.',
    'services.full_control.title': 'Full Control',
    'services.full_control.description': 'Manage and host your app without restrictions.',
    'services.open_code.title': 'Transparent Code',
    'services.open_code.description': 'Receive complete source code for flexibility and clarity.',
    'services.limitless_growth.title': 'Limitless Development',
    'services.limitless_growth.description': 'Upgrade or move your app anytime with no vendor lock-in.',
    'services.investment_protection.title': 'Protect Your Investment',
    'services.investment_protection.description': 'Safeguard your digital assets for the future.',
    'services.cta': 'Build Your Own App Today',
    'services.closing': 'From planning to updates\u2014our experts guide you.',
    'services.warning': 'Beware of long-term rentals\u2014you pay more and own nothing!',
    
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
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Get answers to the most common questions about our AR services',
    
    // Footer
    'footer.tagline': 'Transforming reality through innovation',
    'footer.contact.title': 'Contact Info',
    'footer.services.title': 'Services',
    'footer.company.title': 'Company',
    
    // About Stats
    'about.stats.projects': 'Projects Completed',
    'about.stats.clients': 'Happy Clients',
    'about.stats.experience': 'Years Experience',
    'about.stats.support': 'Support',
    'back_to_top': 'Back to Top',
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
    'services.title': 'امتلك تطبيقك... ولا تؤجر أحلامك!',
    'services.subtitle': 'في أسك-أر نصنع لك تطبيقك الخاص مع الكود المصدري وحرية التطوير والنقل.',
    'services.full_control.title': 'تحكم مطلق',
    'services.full_control.description': 'إدارة واستضافة التطبيق دون قيود أو عقود احتكار.',
    'services.open_code.title': 'شفافية الكود',
    'services.open_code.description': 'تسلم كامل الشيفرة المصدرية لتطوير حر ومفتوح.',
    'services.limitless_growth.title': 'تطوير بلا حدود',
    'services.limitless_growth.description': 'طور تطبيقك في أي وقت دون ارتباط بمزوّد واحد.',
    'services.investment_protection.title': 'حماية استثمارك',
    'services.investment_protection.description': 'امتلك الأصول الرقمية التي تزيد قيمتها مع الزمن.',
    'services.cta': 'ابدأ تطبيقك الخاص الآن',
    'services.closing': 'من التخطيط حتى التشغيل والتحديث — خبراؤنا بجانبك دائمًا.',
    'services.warning': 'احذر من حلول التأجير طويلة المدى... تدفع الكثير دون أن تملك شيئًا!',
    
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
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'احصل على إجابات لأهم الأسئلة حول خدمات الواقع المعزز لدينا',
    
    // Footer
    'footer.tagline': 'نحول الواقع من خلال الابتكار',
    'footer.contact.title': 'معلومات الاتصال',
    'footer.services.title': 'الخدمات',
    'footer.company.title': 'الشركة',
    
    // About Stats
    'about.stats.projects': 'مشروع مكتمل',
    'about.stats.clients': 'عميل راضي',
    'about.stats.experience': 'سنوات خبرة',
    'about.stats.support': 'دعم',
    'back_to_top': 'العودة للأعلى',
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