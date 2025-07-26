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
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('projectsTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('projectsSubtitle')} />
        <link rel="canonical" href="https://askarsolutions.com/portfolio" />
        <meta
          property="og:title"
          content={`${t('projectsTitle')} - ${t('siteTitle')}`}
        />
        <meta property="og:description" content={t('projectsSubtitle')} />
        <meta property="og:url" content="https://askarsolutions.com/portfolio" />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />
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
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PortfolioPage;
