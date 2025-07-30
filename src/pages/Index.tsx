import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import LunarHeroSection from '@/components/sections/LunarHeroSection/LunarHeroSection';
import SocialProofSection from './SocialProofSection';
import ServicesSection from '@/components/sections/ServicesSection/ServicesSection';
import SolutionsSection from '@/components/sections/SolutionsSection/SolutionsSection';
import PortfolioSection from '@/components/sections/PortfolioSection/PortfolioSection';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection/TechnologiesSection';
import FAQSection from '@/components/sections/FAQSection/FAQSection';
import CTASection from '@/components/sections/CTASection/CTASection';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import Status from '@/components/ui/status';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="min-h-screen font-sans">
      <HeroSlider />
      <SocialProofSection isArabic={false} />
      <LunarHeroSection />
      <Status />
      <ServicesSection />
      <SolutionsSection />
      <PortfolioSection />
      <AboutSection />
      <TechnologiesSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <BackToTopButton />
    </main>
  );
};

export default Index;
