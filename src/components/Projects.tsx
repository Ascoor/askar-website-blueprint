import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Project {
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    image: '/hero1.png',
    name: { en: 'Hadathah Advertising', ar: 'مشروع حداثة' },
    description: {
      en: 'A creative campaign for a renowned advertising company.',
      ar: 'حملة إبداعية لشركة رائدة في الدعاية والإعلان'
    },
    link: '/projects/hadathah'
  },
  {
    image: '/hero2.png',
    name: { en: 'Mobile Web App', ar: 'تطبيق ويب للموبايل' },
    description: {
      en: 'Bringing your brand closer to your customers through mobile.',
      ar: 'نقرب علامتك التجارية إلى عملائك عبر تطبيقات الموبايل'
    },
    link: '/projects/mobile-app'
  },
  {
    image: '/hero3.png',
    name: { en: 'Control Dashboard', ar: 'لوحة تحكم متقدمة' },
    description: {
      en: 'Dynamic dashboards for real-time analytics and smooth UX.',
      ar: 'لوحات تحكم تفاعلية لتحليلات آنية وتجربة مستخدم سلسة'
    },
    link: '/projects/dashboard'
  },
  {
    image: '/hero4.png',
    name: { en: 'AI Assistant Platform', ar: 'منصة المساعد الذكي' },
    description: {
      en: 'An AI-powered assistant platform with smart automation features.',
      ar: 'منصة مدعومة بالذكاء الاصطناعي توفر أتمتة ذكية للمهام'
    },
    link: '/projects/ai-assistant'
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

const ProjectsSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section
      id="projects"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative py-20 bg-gradient-to-br from-primary via-primary-hover to-primary text-primary-foreground overflow-hidden"
    >
      {/* خلفية ديكورية */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            {language === 'ar' ? 'من أعمالنا' : 'Our Projects'}
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            {language === 'ar'
              ? 'مختارات من مشاريعنا التقنية المميزة التي نفخر بها.'
              : 'A selection of our standout technology projects.'}
          </p>
        </motion.div>

        {/* المشاريع */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-card/10 backdrop-blur-md border border-border/20 rounded-2xl p-6 shadow-lg overflow-hidden"
            >
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.name.en}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl border border-primary/30 group-hover:border-primary/50 transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                {language === 'ar' ? project.name.ar : project.name.en}
              </h3>
              <p className="mb-4 opacity-90 leading-relaxed text-sm">
                {language === 'ar' ? project.description.ar : project.description.en}
              </p>
              <Button
                variant="secondary"
                className="mt-auto group inline-flex"
                onClick={() => (window.location.href = project.link)}
              >
                {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
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

export default ProjectsSection;
