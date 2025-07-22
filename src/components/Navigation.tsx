import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Logo } from "@/components/ui/logo";
import { useScrollSpy } from "@/hooks/useScrollSpy";

// smoother acceleration/deceleration for scroll animations
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

const smoothScroll = (target: HTMLElement) => {
  const startY = window.scrollY || window.pageYOffset;
  const targetY = target.getBoundingClientRect().top + startY;
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
  ], 200);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      smoothScroll(element);
      console.log(`[nav-scroll] to ${sectionId}`); // signature log
      setIsOpen(false);
    }
  };

  return (
    <nav
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center h-16 w-full`}
        >
          {/* الشعار */}
          <div className={`flex-shrink-0 ${language === "ar" ? "order-1" : "order-1"}`}>
            <Logo />
          </div>

          {/* رؤوس الأقسام */}
          <div className={`flex-1 flex justify-center order-2`}>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`transition-all duration-300 font-medium transform ${
                    activeId === item.href.slice(1)
                      ? 'text-primary border-b-2 border-primary scale-105'
                      : 'text-foreground hover:text-primary'
                  }`}
                  style={{
                    textAlign: language === 'ar' ? 'right' : 'left',
                  }}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* الليل/النهار + اللغة */}
          <div
            className={`flex items-center gap-2 flex-1 justify-center ${
              language === "ar"
                ? "md:order-3 md:ml-auto md:flex-none md:justify-end"
                : "md:order-3 md:mr-auto md:flex-none md:justify-end"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="rounded-full"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          {/* زر القائمة الجانبية في الموبايل */}
          <div
            className={`md:hidden flex items-center ${
              language === "ar" ? "mr-2" : "ml-2"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-md">
            <div className="flex flex-col items-center space-y-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`text-xl transition-all duration-300 font-medium ${
                    activeId === item.href.slice(1)
                      ? ' text-primary scale-105'
                      : ' text-foreground hover:text-primary'
                  }`}
                  style={{ textAlign: 'center' }}
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
