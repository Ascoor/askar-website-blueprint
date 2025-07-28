import React from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Preloader from './ui/preloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRTL } = useLanguage();
  const [showLoader, setShowLoader] = React.useState(true);
  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {showLoader && <Preloader onComplete={() => setShowLoader(false)} />}
      <Navigation />
      <main className={showLoader ? 'flex-1 invisible' : 'flex-1'}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
