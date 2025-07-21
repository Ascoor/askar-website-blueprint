import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { SiReact, SiNodedotjs, SiFlutter, SiPython, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';

const techMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: SiReact,
  'Node.js': SiNodedotjs,
  Flutter: SiFlutter,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
};

interface Project {
  id: number;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  result: { en: string; ar: string };
  image: string;
  technologies: string[];
  ctaKey: 'portfolio.cta.more' | 'portfolio.cta.demo' | 'portfolio.cta.solution';
}

export const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: {
        en: 'Smart HR System for Manufacturing',
        ar: 'نظام موارد بشرية ذكي لمصنع مصري',
      },
      description: {
        en: 'Manual onboarding replaced with AI automation for a leading factory.',
        ar: 'استبدال إجراءات التعيين اليدوية بأتمتة ذكية في أحد المصانع الكبرى.',
      },
      result: {
        en: '30% faster hiring, +25% productivity',
        ar: 'تسريع التوظيف ٣٠٪ وزيادة الإنتاجية ٢٥٪',
      },
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      ctaKey: 'portfolio.cta.demo',
    },
    {
      id: 2,
      title: {
        en: 'E-Learning Portal for International School',
        ar: 'بوابة تعليمية لمدرسة دولية',
      },
      description: {
        en: 'End-to-end web and mobile platform with payments and live classes.',
        ar: 'نظام ويب وموبايل متكامل للدفع والفصول الافتراضية.',
      },
      result: {
        en: '50% increase in digital engagement',
        ar: 'زيادة التفاعل الرقمي ٥٠٪',
      },
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Python', 'MySQL'],
      ctaKey: 'portfolio.cta.solution',
    },
    {
      id: 3,
      title: {
        en: 'Customer Service Automation for Bank',
        ar: 'أتمتة خدمة العملاء لبنك محلي',
      },
      description: {
        en: 'Implemented AI chatbots and workflow automation.',
        ar: 'تطبيق روبوتات محادثة ذكية وتدفق عمل مؤتمت.',
      },
      result: {
        en: '70% drop in manual queries',
        ar: 'انخفاض الطلبات اليدوية ٧٠٪',
      },
      image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'MongoDB'],
      ctaKey: 'portfolio.cta.solution',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass border border-border rounded-2xl overflow-hidden hover-lift shadow-medium"
            >
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-56 object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title[language]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description[language]}
                </p>
                <p className="font-medium text-green-600 dark:text-green-400">
                  {project.result[language]}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => {
                    const Icon = techMap[tech];
                    return (
                      <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{tech}</span>
                      </Badge>
                    );
                  })}
                </div>
                <Button variant="link" className="mt-4 p-0">
                  {t(project.ctaKey)}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-6 opacity-75">
          {[1,2,3,4].map((n) => (
            <img key={n} src={`/logo-${n}.png`} alt={`client-${n}`} className="h-10 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};
