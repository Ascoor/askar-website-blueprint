import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSlider from '@/components/HeroSlider';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Status from '@/components/ui/status';

const SiteIndex: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div id="main" className="font-sans">
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
        <Status />
        <Portfolio />
        <Services />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SiteIndex;
