import React from 'react';
import { PackageOpen, Unlock, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceIcons = {
  full_control: Unlock,
  open_code: Code,
  limitless_growth: TrendingUp,
  investment_protection: PackageOpen,
};

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'full_control',
      icon: serviceIcons.full_control,
    },
    {
      key: 'open_code',
      icon: serviceIcons.open_code,
    },
    {
      key: 'limitless_growth',
      icon: serviceIcons.limitless_growth,
    },
    {
      key: 'investment_protection',
      icon: serviceIcons.investment_protection,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.key}
                className="group bg-card border border-border rounded-2xl p-8 text-center hover-lift hover-glow transition-smooth"
              >
                <div className="w-16 h-16 bg-gradient-turquoise rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-destructive">{t('services.warning')}</p>
          <Button
            size="lg"
            className="bg-turquoise hover:bg-turquoise-dark text-white px-8 py-4 font-semibold hover-lift shadow-glow"
          >
            {t('services.cta')}
          </Button>
          <p className="text-muted-foreground">{t('services.closing')}</p>
        </div>
      </div>
    </section>
  );
};