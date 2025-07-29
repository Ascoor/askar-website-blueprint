import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import LunarHero from '@/components/sections/LunarHero';
import SocialProofSection from './SocialProofSection';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Technologies from '@/components/sections/Technologies';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import Status from '@/components/ui/status';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="min-h-screen font-sans">
      <HeroSlider />
      <SocialProofSection isArabic={false} />
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
      <BackToTopButton />
    </main>
  );
};

export default Index;
