import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{`${t('projectsTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('projectsSubtitle')} />
      </Helmet>
      <Navigation />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PortfolioPage;
