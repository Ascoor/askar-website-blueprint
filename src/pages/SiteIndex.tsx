import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Index from './Index';
import { useLanguage } from '@/contexts/LanguageContext.helpers';

const SiteIndex: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
      </Helmet>

      <Index />
    </>
  );
};

export default SiteIndex;
