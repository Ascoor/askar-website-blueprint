import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import HeroSlider from '@/components/HeroSlider';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
      </Helmet>

      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 bg-primary text-white p-2 rounded focus:block focus:z-50"
      >
        {t('skipToContent')}
      </a>

      <Navigation />
      <main id="main-content">
        <HeroSlider />
        <Services />
        <Portfolio />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
