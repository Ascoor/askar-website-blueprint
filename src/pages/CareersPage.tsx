import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CareersPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('careersTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('careersSubtitle')} />
      </Helmet>

      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 bg-primary text-white p-2 rounded focus:block focus:z-50"
      >
        {t('skipToContent')}
      </a>

      <Navigation />
      <main id="main-content" className="py-32 text-center container">
        <h1 className="text-5xl font-bold mb-4 text-foreground">
          {t('careersTitle')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('careersSubtitle')}
        </p>
        <Button size="lg">{t('applyNow')}</Button>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default CareersPage;
