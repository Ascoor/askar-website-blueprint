import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('projectsTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('projectsSubtitle')} />
      </Helmet>

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 bg-primary text-white p-2 rounded focus:block focus:z-50"
      >
        {t('skipToContent')}
      </a>

      <Navigation />
      <main id="main-content">
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default PortfolioPage;
