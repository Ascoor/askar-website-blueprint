import React from 'react';
import { siteData } from '@/data/data';

const SiteNavbar: React.FC = () => {
  const { navbar, siteInfo } = siteData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src={siteInfo.logo} alt={siteInfo.title} className="h-8 w-auto" />
          <span className="font-bold text-lg">{siteInfo.title}</span>
        </div>
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
          {navbar.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;
