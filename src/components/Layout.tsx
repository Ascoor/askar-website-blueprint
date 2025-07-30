import React, { useState, useEffect } from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Preloader from './ui/Preloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRTL } = useLanguage();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000); // يمكن تغيير المدة وفقًا للوقت المطلوب للـ Preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {showLoader && <Preloader onComplete={() => setShowLoader(false)} />}
      {/* Navigation will be hidden until loader completes */}
      {!showLoader && <Navigation />}
      <main className={showLoader ? 'invisible' : ''}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
