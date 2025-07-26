import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('aboutTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('aboutDesc')} />
      </Helmet>

      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 bg-primary text-white p-2 rounded focus:block focus:z-50"
      >
        {t('skipToContent')}
      </a>

      <Navigation />
      <main id="main-content">
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default AboutPage;
