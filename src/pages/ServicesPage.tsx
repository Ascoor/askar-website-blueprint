import React from 'react';
import Seo from '@/components/ui/Seo';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Seo
        title={`${t('servicesTitle')} - ${t('siteTitle')}`}
        description={t('servicesSubtitle')}
        canonical="https://askarsolutions.com/services"
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
      />


      <Navigation />
      <main id="main-content">
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
