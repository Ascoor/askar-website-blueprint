import React, { useState } from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import Preloader from './ui/Preloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRTL } = useLanguage();
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {showLoader ? (
        <Preloader onComplete={() => setShowLoader(false)} />
      ) : (
        <>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
