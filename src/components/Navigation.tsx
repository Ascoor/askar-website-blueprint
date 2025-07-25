
import React, { useState, useCallback, useMemo } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Logo } from "@/components/ui/logo";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";

const NAVBAR_HEIGHT = 64;

// Smooth scroll utility with better easing
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

const smoothScroll = (target: HTMLElement) => {
  const startY = window.scrollY || window.pageYOffset;
  const targetY = target.getBoundingClientRect().top + startY - NAVBAR_HEIGHT;
  const duration = 800;
  const startTime = performance.now();

  const scroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuart(progress);
    window.scrollTo(0, startY + (targetY - startY) * ease);
    if (progress < 1) requestAnimationFrame(scroll);
  };

  requestAnimationFrame(scroll);
};

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = useMemo(() => [
    { key: "home" as const, href: "#hero" },
    { key: "services" as const, href: "#services" },
    { key: "about" as const, href: "#about" },
    { key: "projects" as const, href: "#projects" },
    { key: "contact" as const, href: "#contact" },
  ], []);

  const activeId = useScrollSpy([
    "hero",
    "services",
    "about", 
    "projects",
    "contact",
  ], NAVBAR_HEIGHT + 50);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        smoothScroll(element);
      }
      console.log(`[nav-scroll] to ${sectionId}`);
      setIsOpen(false);
    }
  }, []);

  const handleLanguageChange = useCallback(() => {
    const order: Language[] = ["en", "ar", "eg"];
    const next = order[(order.indexOf(language) + 1) % order.length];
    setLanguage(next);
  }, [language, setLanguage]);

  const getLanguageLabel = useCallback(() => {
    switch (language) {
      case "en": return "Ar";
      case "ar": return "مصري";
      case "eg": return "English";
      default: return "En";
    }
  }, [language]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md text-white border-b border-white/10"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.href.slice(1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  transition-all duration-300 font-medium text-sm lg:text-base text-white relative
                  ${activeId === item.href.slice(1)
                    ? 'text-primary scale-105'
                    : 'opacity-80 hover:opacity-100'
                  }
                `}
              >
                {t(item.key)}
                {activeId === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 text-white hover:bg-white/10"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageChange}
              className="rounded-full text-xs lg:text-sm text-white hover:bg-white/10"
            >
              <Globe className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              {getLanguageLabel()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full w-9 h-9 text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-40"
              style={{ top: `${NAVBAR_HEIGHT}px` }}
            >
              <div className="flex flex-col items-center space-y-8 py-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    className={`
                      text-xl font-medium transition-all duration-300 text-white
                      ${activeId === item.href.slice(1)
                        ? 'text-primary scale-110'
                        : 'opacity-80 hover:opacity-100 hover:scale-105'
                      }
                    `}
                  >
                    {t(item.key)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
