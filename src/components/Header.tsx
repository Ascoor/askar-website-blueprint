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
    <header className="fixed top-0 inset-x-0 z-50 border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-soft">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 rtl:space-x-reverse">
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-turquoise dark:hover:text-yellow-300"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-3 rtl:space-x-reverse">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md">
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block rounded-md px-4 py-2 text-gray-800 hover:bg-turquoise/10 hover:text-turquoise dark:text-gray-100 dark:hover:bg-yellow-900/10 dark:hover:text-yellow-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
