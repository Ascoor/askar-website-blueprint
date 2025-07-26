import React, { useEffect } from 'react';
import HeroSlider from '@/components/HeroSlider';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const SiteIndex: React.FC = () => {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div className="font-sans">
      <Navigation />
      <HeroSlider />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default SiteIndex;
