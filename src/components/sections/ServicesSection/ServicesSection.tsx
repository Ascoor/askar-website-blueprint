import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface Project {
  name: string;
  description: string;
  href: string;
  image: string;
}

const projects: Project[] = [
  { name: 'حداثة', description: 'أحد الأعمال الإبداعية لشركة عريقة...', href: 'app-hadatha/', image: '/images/projects/hadathah.webp' },
  { name: 'عقارك', description: 'عقارك واجهتك...', href: 'aqark/', image: '/images/projects/aqark.webp' },
  { name: 'Bellalife', description: 'واجهة قوية...', href: 'bellalife/', image: '/images/projects/bella.jpg' },
  { name: 'Dashboard', description: 'نظام إدارة مبتكر...', href: 'dashboard/', image: '/images/projects/dashboard.webp' },
  { name: 'Technogym', description: 'حلول تقنية متقدمة...', href: 'technogym/', image: '/images/projects/tecnogym.webp' }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const ServicesSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section
      id="services"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative py-20 overflow-hidden bg-brand-bg text-foreground dark:bg-brand-bg"
    >
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl font-bold mb-12 font-heading relative inline-block"
        >
          {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 -bottom-1 h-1 w-full origin-left bg-[#3fffB5]"
          />
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.href}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-xl border border-glass-border bg-glass-bg backdrop-blur-lg p-6 flex flex-col overflow-hidden transition-shadow duration-300 card-neon"
            >
              <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="waves">
                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm opacity-90 mb-4 flex-1">{project.description}</p>
              <Button asChild variant="secondary" className="group mt-auto inline-flex">
                <a href={project.href} aria-label={language === 'ar' ? `تفاصيل ${project.name}` : `View ${project.name}`}>
                  {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`}
                  />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
