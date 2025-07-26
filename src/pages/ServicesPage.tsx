import React from 'react';
import Navigation from '@/components/Navigation';
import NeonServices from '@/components/NeonServices';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const ServicesPage: React.FC = () => (
  <div id="main" className="min-h-screen">
    <Navigation />
    <NeonServices />
    <CTA />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
);

export default ServicesPage;
