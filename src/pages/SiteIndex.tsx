import React, { useEffect } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import HeroSlider from '@/components/HeroSlider';
import SitePortfolio from '@/components/SitePortfolio';
import SiteServices from '@/components/SiteServices';
import SiteContact from '@/components/SiteContact';
import SiteFooter from '@/components/SiteFooter';
import Navigation from '@/components/Navigation';

const SiteIndex: React.FC = () => {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div className="font-sans">
      <Navigation />
      <HeroSlider />
      <SitePortfolio />
      <SiteServices />
      <SiteContact />
      <SiteFooter />
    </div>
  );
};

export default SiteIndex;
