
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Logo } from "@/components/ui/logo";
import { useScrollSpy } from "@/hooks/useScrollSpy";

// Configuration constants for easy customization
const NAVBAR_HEIGHT = 64; // Must match HeroSlider NAVBAR_HEIGHT

// smoother acceleration/deceleration for scroll animations
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { key: "home", href: "#hero" },
    { key: "services", href: "#services" },
    { key: "about", href: "#about" },
    { key: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      console.log('[nav-scroll] position:', window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeId = useScrollSpy([
    "hero",
    "services",
    "about",
    "contact",
  ], NAVBAR_HEIGHT + 50);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'hero') {
        // For hero section, scroll to very top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        smoothScroll(element);
      }
      console.log(`[nav-scroll] to ${sectionId}`);
      setIsOpen(false);
    }
  };

  return (
    <nav
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`
        fixed top-0 w-full z-50 
        transition-all duration-300
        ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-background/90 backdrop-blur-sm"
        }
      `}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`
                  transition-all duration-300 font-medium text-sm lg:text-base
                  ${activeId === item.href.slice(1)
                    ? 'text-primary border-b-2 border-primary scale-105'
                    : 'text-foreground hover:text-primary hover:scale-105'
                  }
                `}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
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
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="rounded-full text-xs lg:text-sm"
            >
              <Globe className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full w-9 h-9"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center z-40"
            style={{ top: `${NAVBAR_HEIGHT}px` }}
          >
            <div className="flex flex-col items-center space-y-8 py-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`
                    text-xl font-medium transition-all duration-300
                    ${activeId === item.href.slice(1)
                      ? 'text-primary scale-110'
                      : 'text-foreground hover:text-primary hover:scale-105'
                    }
                  `}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
