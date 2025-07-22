import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from "@/lib/utils"; 

export const Logo = ({ className = "", clickable = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const getLogoSrc = () => {
    if (language === "ar") {
      return theme === "dark" ? "/patren-wh.png" : "/patren-blue.png";
    }
    return theme === "dark" ? "/patren-wh.png" : "/patren-blue.png";
  };

  const [logoSrc, setLogoSrc] = useState(getLogoSrc);

  useEffect(() => {
    setLogoSrc(getLogoSrc());
  }, [theme, language]);

  return (
    <span
      className={cn(
        "inline-block align-middle",
        className
      )}
    >
      <img
        src={logoSrc}
        alt="Logo"
        className={cn(
          "h-10 w-28 sm:h-12 sm:w-36 md:h-14 md:w-44 object-contain transition-all duration-300 select-none",
          clickable && "cursor-pointer hover:opacity-80"
        )}
        title={clickable ? "Toggle theme" : ""}
        onClick={clickable ? toggleTheme : undefined}
      />
    </span>
  );
};
