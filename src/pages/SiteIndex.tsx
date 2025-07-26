import React, { useEffect } from 'react';
import Seo from '@/components/ui/Seo';
import HeroSlider from '@/components/HeroSlider';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const SiteIndex: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div id="main" className="font-sans">
      <Seo
        title={t('siteTitle')}
        description={t('siteDescription')}
        canonical="https://askarsolutions.com/"
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
      />


      <Navigation />
      <main id="main-content">
        <HeroSlider />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SiteIndex;