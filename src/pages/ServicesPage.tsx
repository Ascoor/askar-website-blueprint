import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import NeonServices from '@/components/NeonServices';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('servicesTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('servicesSubtitle')} />
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
        <NeonServices />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
