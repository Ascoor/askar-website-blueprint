import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from "@/lib/utils";

export const Logo = ({ className = "", clickable = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const getLogoSrc = () => {
    return theme === "dark" ? "/logo-dark-1.png" : "/logo-day-1.png";
  };

  const [logoSrc, setLogoSrc] = useState(getLogoSrc);

  useEffect(() => {
    setLogoSrc(getLogoSrc());
  }, [theme, language]);

  const altTitle = language === "en" ? "Company Logo" : "شعار الشركة";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        className
      )}
      style={{ minHeight: 40, minWidth: 80 }}
    >
      <img
        src={logoSrc}
        alt={altTitle}
        title={altTitle}
        draggable={false}
        className={cn(
          "object-contain select-none",
          "h-8 w-auto xs:h-10 sm:h-12 md:h-14 lg:h-16",
          "max-w-full",
          clickable && "cursor-pointer hover:opacity-90"
        )}
        onClick={clickable ? toggleTheme : undefined}
      />
    </span>
  );
};
