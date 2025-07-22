import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Logo } from "@/components/ui/logo";

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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  style={{
                    textAlign: language === "ar" ? "right" : "left",
                  }}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* الليل/النهار + اللغة */}
          <div
            className={`hidden md:flex items-center gap-2 ${
              language === "ar" ? "order-3 ml-2" : "order-3 mr-2"
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
          <div className="md:hidden flex items-center space-x-2 order-4">
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
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4">
            <div
              className={`flex flex-col space-y-4 ${
                language === "ar" ? "items-end" : "items-start"
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  style={{
                    textAlign: language === "ar" ? "right" : "left",
                  }}
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
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
                  onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                  className="rounded-full"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "en" ? "العربية" : "English"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
