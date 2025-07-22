import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/ui/Logo';

export const Header: React.FC = () => {
  const { t, direction } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.portfolio', href: '#portfolio' },
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return ( 
    <header
      className={`
        fixed-center top-0 w-full z-50 border-b border-white/10
        bg-gradient-to-r
        from-[#fafaf7] via-[#f4f3ed] to-[#e7dcc4]
        dark:from-[#0d1117]/90 dark:via-[#1b1f23]/80 dark:to-[#a99d86]/30
        backdrop-blur-lg
        transition-all duration-500
        shadow-[0_4px_32px_0_rgba(0,0,0,0.10)]
      `}
      style={{
        backgroundSize: "200% 200%",
        animation: "gradient-x 8s ease-in-out infinite"
      }}
    >
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
      `}</style>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo /> 
          </div>
       

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md">
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href} 
                className="text-neutral-800 dark:text-gray-300 hover:text-[#b76e79] dark:hover:text-[#d4af37] transition-colors font-medium"
 
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>  
        )}
      </div>
 
      )}
 
    </header>
  );
};
