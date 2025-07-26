import React from 'react';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const ServicesPage: React.FC = () => (
  <div className="min-h-screen">
    <Navigation />
    <Services />
    <CTA />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
);

export default ServicesPage;
