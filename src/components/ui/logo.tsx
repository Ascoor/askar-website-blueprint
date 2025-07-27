import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from "@/lib/utils";

const sizeMap = {
  "navbar-sm": { w: 32, h: 32 },
  "navbar-lg": { w: 48, h: 48 },
  "footer-sm": { w: 36, h: 36 },
  "footer-lg": { w: 126, h: 126 },
};

export const Logo = ({
  className = "",
  clickable = false,
  size = "navbar-sm", // الافتراضي صغير للنافبار
}) => {
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

  // حجم الشعار حسب size
  const { w, h } = sizeMap[size] || sizeMap["navbar-sm"];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-full shadow-lg mt-2",
        className
      )}
      style={{
        width: w,
        height: h,
        minWidth: w,
        minHeight: h,
        background: "#fff",
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
