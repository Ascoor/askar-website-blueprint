import React from 'react';
import Seo from '@/components/ui/Seo';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Seo
        title={t('siteTitle')}
        description={t('siteDescription')}
        canonical="https://askarsolutions.com/demo"
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
      /> 
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
        <link rel="canonical" href="https://askarsolutions.com/demo" />
        <meta property="og:title" content={t('siteTitle')} />
        <meta property="og:description" content={t('siteDescription')} />
        <meta property="og:url" content="https://askarsolutions.com/demo" />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        /> 



      <Navigation />
      <main id="main-content">
        <HeroSlider />
        <Services />
        <Portfolio />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
