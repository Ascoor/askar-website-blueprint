import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
 
import ScrollToTopButton from '@/components/ScrollToTopButton';
import PageProgressBar from '@/components/PageProgressBar';
 

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <PageProgressBar />
          <Header />
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Testimonials />
          <Blog />
          <FAQ />
          <Contact />
          <Footer />
 
          <ScrollToTopButton />
 
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
