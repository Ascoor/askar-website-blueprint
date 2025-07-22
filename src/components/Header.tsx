  
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/ui/Logo'; // Assuming Logo is in the same directory

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
        fixed top-0 w-full z-50 border-b border-white/10
        bg-gradient-to-r
        from-white/70 via-blue-100 to-yellow-50
        dark:from-gray-900/90 dark:via-blue-900/80 dark:to-yellow-800/40
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
      

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-800 dark:text-gray-200 hover:text-turquoise dark:hover:text-yellow-300 transition-colors font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeSwitcher />
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:text-turquoise dark:hover:text-yellow-300 hover:bg-turquoise/10 dark:hover:bg-yellow-900/10 transition-colors rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};