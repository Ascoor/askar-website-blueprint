
+import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext'; 
import Footer from './layout/Footer';
import Navigation from './la+
ug `yout/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;