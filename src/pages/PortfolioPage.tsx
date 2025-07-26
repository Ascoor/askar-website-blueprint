import React from 'react';
import Seo from '@/components/ui/Seo';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Seo
        title={`${t('projectsTitle')} - ${t('siteTitle')}`}
        description={t('projectsSubtitle')}
        canonical="https://askarsolutions.com/portfolio"
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
      />

      {/* Skip link for accessibility */}

      <Navigation />
      <main id="main-content">
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PortfolioPage;