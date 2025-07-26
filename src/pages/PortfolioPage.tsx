import React from 'react';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const PortfolioPage: React.FC = () => (
  <div className="min-h-screen">
    <Navigation />
    <Portfolio />
    <CTA />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
);

export default PortfolioPage;
