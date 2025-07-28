import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import HeroSlider from '@/components/HeroSlider';
import LunarHero from '@/components/sections/LunarHero';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Technologies from '@/components/sections/Technologies';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import Status from '@/components/ui/status';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
      </Helmet>

  

      <Navigation />
      <main id="main-content">
        <HeroSlider />
        <LunarHero />
        <Status />
        <Services />
        <Solutions />
        <Portfolio />
        <About />
        <Technologies />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
