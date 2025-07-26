import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{`${t('aboutTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('aboutDesc')} />
      </Helmet>
      <Navigation />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
