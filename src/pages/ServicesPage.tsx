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
    <div className="min-h-screen">
      <Helmet>
        <title>{`${t('servicesTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('servicesSubtitle')} />
      </Helmet>
      <Navigation />
      <NeonServices />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
