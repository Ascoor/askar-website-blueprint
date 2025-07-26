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
    <div className="font-sans">
      <Helmet>
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
      </Helmet>
      <Navigation />
      <HeroSlider />
      <SitePortfolio />
      <SiteServices />
      <SiteContact />
      <SiteFooter />
    </div>
  );
};

export default SiteIndex;
