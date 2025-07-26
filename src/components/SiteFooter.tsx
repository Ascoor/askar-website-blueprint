import React from 'react';
import { siteData } from '@/data/data';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">{siteData.siteInfo.title}</p>
        <p className="text-sm text-muted-foreground">{siteData.siteInfo.copyright}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
