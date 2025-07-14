import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-gradient-gold">{t('hero.title').split(' ').slice(0, 2).join(' ')}</span>
            <span className="block">{t('hero.title').split(' ').slice(2).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-turquoise hover:bg-turquoise-dark text-white px-8 py-4 text-lg font-semibold hover-lift shadow-glow"
            >
              {t('hero.cta.primary')}
              <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold hover-lift"
            >
              <Play className="w-5 h-5" />
              {t('hero.cta.secondary')}
            </Button>
          </div>
        </div>

        {/* Floating AR Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-turquoise/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary-light/30 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
    </section>
  );
};