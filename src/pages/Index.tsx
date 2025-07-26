
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import NeonServices from '@/components/NeonServices';
import Projects from '@/components/Projects';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index: React.FC = () => {
  return (
    <div id="main" className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <NeonServices />
      <Projects />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
