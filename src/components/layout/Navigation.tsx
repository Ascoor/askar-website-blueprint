import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import type { Language } from '@/contexts/LanguageContext.helpers';
import { useTheme } from '@/contexts/ThemeContext.helpers';
import { Logo } from '@/components/ui/logo';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAVBAR_HEIGHT = 72;
const SCROLL_THRESHOLD = 10; // اعتبر فوق 10px ليس Hero

// Theme tokens
const NAV_LIGHT = 'var(--nav-text-light)';
const NAV_LIGHT_ACTIVE = 'var(--nav-active-light)';
const NAV_DARK = 'var(--nav-text-dark)';
const NAV_DARK_ACTIVE = 'var(--nav-active-dark)';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // تحديث حالة isHero حسب scroll
  useEffect(() => {
    const handleScroll = () => setIsHero(window.scrollY < SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // عناصر التنقل
  const navItems = useMemo(
    () => [
      { key: 'home' as const, href: '#hero', label: t('home') },
      { key: 'services' as const, href: '#services', label: t('services') },
      { key: 'about' as const, href: '#about', label: t('about') },
      { key: 'projects' as const, href: '#projects', label: t('projects') },
      { key: 'contact' as const, href: '#contact', label: t('contact') },
    ],
    [t],
  );

  const activeId = useScrollSpy(
    ['hero', 'services', 'about', 'projects', 'contact'],
    NAVBAR_HEIGHT + 50,
  );

  // منطق تغيير اللغة
  const handleLanguageChange = useCallback(() => {
    const order: Language[] = ['en', 'ar', 'eg'];
    const next = order[(order.indexOf(language) + 1) % order.length];
    setLanguage(next);
  }, [language, setLanguage]);
  const getLanguageLabel = useCallback(() => {
    switch (language) {
      case 'en':
        return 'عربي';
      case 'ar':
        return 'EN';
      case 'eg':
        return 'English';
      default:
        return 'En';
    }
  }, [language]);

  const getNavTextColor = () => 'var(--color-moon)';

  const getGlow = (active?: boolean) =>
    active
      ? `drop-shadow(0 0 8px var(--color-active))`
      : `drop-shadow(0 0 4px var(--color-moon))`;

  // متغيرات قائمة الموبايل
  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  // تحكم في التنقل السلس
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'hero' ? 0 : NAVBAR_HEIGHT;
      const top =
        sectionId === 'hero'
          ? 0
          : element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  return (
    <motion.nav
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-out',
        isHero
          ? 'bg-transparent'
          : 'bg-background dark:bg-midnight/95 backdrop-blur-xl shadow-lg border-b border-border/50',
      )}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* الشعار */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="navbar-lg" forceDay={isHero} />
          </motion.div>
          {/* قائمة الديسكتوب */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    color: isActive ? 'var(--color-active)' : getNavTextColor(),
                    textShadow: isHero ? `0 0 9px var(--nav-shadow)` : 'none',
                    fontWeight: isActive ? 700 : 500,
                    filter: getGlow(isActive),
                    borderColor: isActive
                      ? 'var(--color-active)'
                      : 'transparent',
                  }}
                  className={cn(
                    'relative px-4 py-2 mx-1 text-sm lg:text-base font-medium rounded-lg',
                    'transition-all duration-300 ease-out',
                    isActive && 'border-b-2',
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
          {/* أدوات التحكم */}
          <div className="flex items-center gap-2">
            {/* الوضع الليلي/النهاري */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={
                  theme === 'light' ? 'Enable dark mode' : 'Enable light mode'
                }
                style={{
                  color: getNavTextColor(),
                  filter: getGlow(),
                }}
                className={cn(
                  'rounded-full w-10 h-10 transition-colors duration-300',
                )}
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
            {/* زر اللغة */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLanguageChange}
                style={{
                  color: getNavTextColor(),
                  filter: getGlow(),
                  fontWeight: 600,
                }}
                className={cn(
                  'rounded-full text-xs lg:text-sm font-medium transition-colors duration-300',
                )}
              >
                <Globe className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                {getLanguageLabel()}
              </Button>
            </motion.div>
            {/* زر الموبايل */}
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  style={{
                    color: getNavTextColor(),
                    filter: getGlow(),
                  }}
                  className={cn(
                    'rounded-full w-10 h-10 transition-colors duration-300',
                  )}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isOpen ? 'close' : 'menu'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Menu className="h-5 w-5" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* قائمة الموبايل */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="mobile-menu"
              className="md:hidden fixed inset-0 bg-background dark:bg-midnight/98 backdrop-blur-xl z-40"
              style={{ top: `${NAVBAR_HEIGHT}px` }}
            >
              <div className="flex flex-col items-center justify-center min-h-full py-8 space-y-8">
                {navItems.map((item, index) => {
                  const isActive = activeId === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.key}
                      onClick={() => scrollToSection(item.href.slice(1))}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.09,
                          duration: 0.29,
                          ease: 'easeOut',
                        },
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: isActive
                          ? 'var(--color-active)'
                          : getNavTextColor(),
                        textShadow: isHero
                          ? `0 0 9px var(--nav-shadow-soft)`
                          : 'none',
                        fontWeight: isActive ? 700 : 600,
                        filter: getGlow(isActive),
                        borderColor: isActive
                          ? 'var(--color-active)'
                          : 'transparent',
                      }}
                      className={cn(
                        'relative text-2xl font-semibold transition-all duration-300',
                        'px-8 py-4 rounded-xl',
                        isActive ? 'border-b-2' : 'hover:opacity-90',
                      )}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
