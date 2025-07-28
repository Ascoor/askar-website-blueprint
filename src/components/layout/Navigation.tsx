import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Logo } from "@/components/ui/logo";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAVBAR_HEIGHT = 72;
const SCROLL_THRESHOLD = 80;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = useMemo(() => [
    { key: "home" as const, href: "#hero", label: t("home") },
    { key: "services" as const, href: "#services", label: t("services") },
    { key: "about" as const, href: "#about", label: t("about") },
    { key: "projects" as const, href: "#projects", label: t("projects") },
    { key: "contact" as const, href: "#contact", label: t("contact") },
  ], [t]);

  const activeId = useScrollSpy([
    "hero", "services", "about", "projects", "contact"
  ], NAVBAR_HEIGHT + 50);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'hero' ? 0 : NAVBAR_HEIGHT;
      const top = sectionId === 'hero' ? 0 : element.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({ top, behavior: 'smooth' });
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
      case "en": return "عربي";
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
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-transparent"
      )}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="navbar-lg" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative px-4 py-2 mx-1 text-sm lg:text-base font-medium rounded-lg",
                    "transition-all duration-300 ease-out",
                    isScrolled 
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-primary",
                    isActive && "text-primary"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={cn(
                        "absolute inset-0 rounded-lg",
                        isScrolled 
                          ? "bg-primary/10 border border-primary/20" 
                          : "bg-white/10 border border-white/20"
                      )}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                  
                  <div className={cn(
                    "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
                    isScrolled 
                      ? "hover:bg-primary/5 hover:opacity-100" 
                      : "hover:bg-white/5 hover:opacity-100"
                  )} />
                </motion.button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={cn(
                  "rounded-full w-10 h-10 transition-colors duration-300",
                  isScrolled 
                    ? "text-foreground hover:bg-primary/10 hover:text-primary" 
                    : "text-white hover:bg-white/10"
                )}
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
            
            {/* Language Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLanguageChange}
                className={cn(
                  "rounded-full text-xs lg:text-sm font-medium transition-colors duration-300",
                  isScrolled 
                    ? "text-foreground hover:bg-primary/10 hover:text-primary" 
                    : "text-white hover:bg-white/10"
                )}
              >
                <Globe className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                {getLanguageLabel()}
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    "rounded-full w-10 h-10 transition-colors duration-300",
                    isScrolled 
                      ? "text-foreground hover:bg-primary/10" 
                      : "text-white hover:bg-white/10"
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
                      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
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
              className="md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl z-40"
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
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "relative text-2xl font-semibold transition-all duration-300",
                        "px-8 py-4 rounded-xl",
                        isActive 
                          ? "text-primary bg-primary/10 border border-primary/20" 
                          : "text-foreground hover:text-primary hover:bg-primary/5"
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
};

export default Navigation;