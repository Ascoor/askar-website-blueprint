import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from "@/lib/utils";

export const Logo = ({ className = "", clickable = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const getLogoSrc = () => {
    if (language === "ar") {
      return theme === "dark" ? "/logo-dark-1.png" : "/logo-day-1.png";
    }
    return theme === "dark" ? "/logo-dark-1.png" : "/logo-day-1.png";
  };

  const [logoSrc, setLogoSrc] = useState(getLogoSrc);

  useEffect(() => {
    setLogoSrc(getLogoSrc());
  }, [theme, language]);

  const altTitle = language === "ar"
    ? "شعار الشركة"
    : "Company Logo";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        className
      )}
      style={{
        minHeight: 48,
        minWidth: 100,
      }}
    >
      <img
        src={logoSrc}
        alt={altTitle}
        title={altTitle}
        draggable={false}
        className={cn(
          // زيادة الحجم مع التجاوب
          "object-contain mt-4 select-none",
          "h-16 w-44 xs:h-12 xs:w-32 sm:h-16 sm:w-44 md:h-20 md:w-56 lg:h-21 lg:w-46  ",
          "max-h-28 max-w-[18rem]",
          clickable && "cursor-pointer hover:opacity-90"
        )}
        onClick={clickable ? toggleTheme : undefined}
        // بدون أي خلفية أو ظل أو طبقة إضافية
      />
    </span>
  );
};
