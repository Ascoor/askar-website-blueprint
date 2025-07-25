import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Logo } from "@/components/ui/logo";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { cn } from "@/lib/utils";

const NAVBAR_HEIGHT = 64;

// Smooth scroll
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { key: "home" as const, href: "#hero" },
      { key: "services" as const, href: "#services" },
      { key: "about" as const, href: "#about" },
      { key: "projects" as const, href: "#projects" },
      { key: "contact" as const, href: "#contact" },
    ],
    []
  );

  const activeId = useScrollSpy(
    ["hero", "services", "about", "projects", "contact"],
    NAVBAR_HEIGHT + 50
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      sectionId === "hero"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : smoothScroll(element);
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
      case "en":
        return "Ar";
      case "ar":
        return "مصري";
      case "eg":
        return "English";
      default:
        return "En";
    }
  }, [language]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: easeOut },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: easeInOut },
    },
  } as const;

  const navClass = cn(
    "fixed top-0 w-full z-30 transition-colors duration-500",
    scrolled
      ? theme === "light"
        ? "bg-gradient-to-b from-white/90 via-gray-50/80 to-gray-100/50 text-gray-900 shadow-md backdrop-blur-xl"
        : "bg-gradient-to-b from-black/70 via-gray-900/60 to-gray-800/60 text-white shadow-lg backdrop-blur-xl"
      : "bg-transparent text-white"
  );

  return (
    <nav dir={isRTL ? "rtl" : "ltr"} className={navClass} style={{ height: NAVBAR_HEIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative font-semibold text-lg tracking-wide transition-all duration-300",
                    isActive
                      ? "text-[#53cfeb]"
                      : "text-white hover:text-[#53cfeb]"
                  )}
                  style={{
                    textShadow: isActive
                      ? "0 0 12px rgba(83,207,235,0.8), 0 0 24px rgba(83,207,235,0.6)"
                      : "0 0 6px rgba(255,255,255,0.2)",
                  }}
                >
                  {t(item.key)}
                </motion.button>
              );
            })}
          </div>

          {/* Theme & Language Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 text-white hover:bg-white/10"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
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
              style={{ top: NAVBAR_HEIGHT }}
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
                      transition: { delay: index * 0.1, duration: 0.3, ease: "easeOut" },
                    }}
                    className="text-2xl font-semibold text-white hover:text-[#53cfeb]"
                    style={{
                      textShadow: "0 0 8px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)",
                    }}
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
