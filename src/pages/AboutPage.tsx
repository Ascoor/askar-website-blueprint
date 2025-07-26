import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const AboutPage: React.FC = () => (
  <div id="main" className="min-h-screen">
    <Navigation />
    <About />
    <CTA />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
);

export default AboutPage;
