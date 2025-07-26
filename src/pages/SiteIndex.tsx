import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSlider from '@/components/HeroSlider';
import SitePortfolio from '@/components/SitePortfolio';
import SiteServices from '@/components/SiteServices';
import SiteContact from '@/components/SiteContact';
import SiteFooter from '@/components/SiteFooter';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

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
        <SitePortfolio />
        <SiteServices />
        <SiteContact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default SiteIndex;
