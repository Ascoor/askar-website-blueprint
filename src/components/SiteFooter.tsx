import React from 'react';
import { siteData } from '@/data/data';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">{siteData.siteInfo.title}</p>
        <p className="text-sm text-gray-400">{siteData.siteInfo.copyright}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
