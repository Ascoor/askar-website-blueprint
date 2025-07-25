import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from "@/lib/utils";

export const Logo = ({ className = "", clickable = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const getLogoSrc = () => {
    return theme === "dark" ? "/logo.gif" : "/logo.gif";
  };

  const [logoSrc, setLogoSrc] = useState(getLogoSrc);

  useEffect(() => {
    setLogoSrc(getLogoSrc());
  }, [theme, language]);

  const altTitle = language === "en" ? "Company Logo" : "شعار الشركة";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-full shadow-lg mt-2", // دائرية + ظل + إزاحة
        className
      )}
      style={{
        width: 40,  // مربع فعليًا!
        height: 40, // يمكنك تعديل القيمة حسب رغبتك
        minHeight: 64,
        minWidth: 60,
        background: "#fff" // أو لون فاتح/شفاف كما تريد
      }}
    >
      <img
        src={logoSrc}
        alt={altTitle}
        title={altTitle}
        draggable={false}
        className={cn(
          "object-cover select-none transition-transform duration-300 hover:scale-105 w-full h-full",
          clickable && "cursor-pointer hover:opacity-90"
        )}
        onClick={clickable ? toggleTheme : undefined}
      />
    </span>
  );
};
