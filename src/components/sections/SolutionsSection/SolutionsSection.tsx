import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t('digitalInfrastructure'),
      desc: t('digitalInfrastructureDesc'),
    },
    {
      title: t('aiCreativeProduction'),
      desc: t('aiCreativeProductionDesc'),
    },
    {
      title: t('virtualTours'),
      desc: t('virtualToursDesc'),
    },
    {
      title: t('ordermeplatform'),
      desc: t('ordermeplatformDesc'),
    },
    {
      title: t('fortemonBranding'),
      desc: t('fortemonBrandingDesc'),
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('solutionsTitle')}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-background shadow-elegant hover:shadow-premium transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
