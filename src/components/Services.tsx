import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface Service {
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  link: string;
}

const services: Service[] = [
  {
    image: '/hero1.webp',
    name: { en: 'Web Apps & SaaS Solutions', ar: 'تطبيقات الويب وحلول SaaS' },
    description: {
      en: 'Scalable web platforms and SaaS products engineered for global reach.',
      ar: 'منصات ويب ومنتجات SaaS قابلة للتوسع ومصممة للوصول العالمي.'
    },
    link: '#'
  },
  {
    image: '/hero2.webp',
    name: { en: 'Mobile Applications', ar: 'تطبيقات الجوال' },
    description: {
      en: 'Elegant native and cross‑platform apps that put your brand in every pocket.',
      ar: 'تطبيقات أصلية وعبر المنصات تضع علامتك في متناول الجميع.'
    },
    link: '#'
  },
  {
    image: '/hero3.webp',
    name: { en: 'Custom Dashboards & Analytics', ar: 'لوحات التحكم والتحليلات المخصصة' },
    description: {
      en: 'Interactive dashboards turning raw data into actionable insights.',
      ar: 'لوحات تحكم تفاعلية تحول البيانات الخام إلى رؤى عملية.'
    },
    link: '#'
  },
  {
    image: '/hero4.webp',
    name: { en: 'Branding & Digital Marketing', ar: 'العلامة التجارية والتسويق الرقمي' },
    description: {
      en: 'Strategic branding and digital campaigns that ignite engagement.',
      ar: 'حملات رقمية واستراتيجيات هوية تشعل التفاعل مع علامتك.'
    },
    link: '#'
  },
  {
    image: '/hero5.webp',
    name: { en: 'Creative Content & AI Solutions', ar: 'المحتوى الإبداعي وحلول الذكاء الاصطناعي' },
    description: {
      en: 'AI-powered content creation delivering modern stories and experiences.',
      ar: 'إنشاء محتوى مدعوم بالذكاء الاصطناعي يقدم قصصاً وتجارب عصرية.'
    },
    link: '#'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const NeonServices: React.FC = () => {
  const { language, isRTL } = useLanguage();
  return (
    <section id="services" className="py-16 bg-gray-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
 
        <motion.div
          variants={item}
          className="text-cyan-400 mb-2"
        >
          <h2 className="text-2xl font-semibold uppercase tracking-wider">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
        </motion.div>
        <motion.div variants={item}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            {language === 'ar' ? 'خدماتنا المتميزة' : 'Our Expert Services'}
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            {language === 'ar'
            ? 'نطور حلولاً برمجية متكاملة ونبتكر تجارب رقمية تنقل أعمالك إلى المستقبل.'
            : 'We craft complete digital solutions that move your business toward the future.'}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg overflow-hidden"
            >
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <OptimizedImage
                  src={service.image}
                  alt={`${service.name.en} - ${service.description.en}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl border border-cyan-400/30 group-hover:border-cyan-300/70 transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                {language === 'ar' ? service.name.ar : service.name.en}
              </h3>
              <p className="mb-4 opacity-90 leading-relaxed text-sm">
                {language === 'ar' ? service.description.ar : service.description.en}
              </p>
              <Button variant="secondary" className="mt-auto group inline-flex">
                {language === 'ar' ? 'اعرف المزيد' : 'See Details'}
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 mr-2' : 'ml-2'
                  }`}
                />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};