import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '100+', labelKey: 'about.stats.projects' },
    { number: '50+', labelKey: 'about.stats.clients' },
    { number: '5+', labelKey: 'about.stats.experience' },
    { number: '24/7', labelKey: 'about.stats.support' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-turquoise rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t('about.mission').split(':')[0] || 'Mission'}
                  </h3>
                  <p className="text-muted-foreground">{t('about.mission')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t('about.vision').split(':')[0] || 'Vision'}
                  </h3>
                  <p className="text-muted-foreground">{t('about.vision')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-card border border-border rounded-2xl p-8 hover-lift transition-smooth"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient-turquoise mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* Background Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-turquoise/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};