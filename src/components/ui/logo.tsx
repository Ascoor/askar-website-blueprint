import { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { useTheme } from '@/contexts/ThemeContext.helpers';
import { cn } from '@/lib/utils';

const sizeMap = {
  'navbar-sm': { w: 48, h: 48 },
  'navbar-lg': { w: 96, h: 96 },
  'footer-sm': { w: 72, h: 72 },
  'footer-lg': { w: 180, h: 180 },
};

type LogoProps = {
  className?: string;
  clickable?: boolean;
  size?: keyof typeof sizeMap;
  forceDay?: boolean;
};

export const Logo = ({
  className = '',
  clickable = false,
  size = 'navbar-sm',
  forceDay = false,
}: LogoProps) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  // Memoize getLogoSrc for React best practices
  const getLogoSrc = useCallback(() => {
    if (forceDay) return '/logo-dark.png';
    return theme === 'dark' ? '/logo-dark.png' : '/logo-day.png';
  }, [theme, forceDay]);

  const [logoSrc, setLogoSrc] = useState(getLogoSrc);
  useEffect(() => {
    setLogoSrc(getLogoSrc());
  }, [theme, language, forceDay, getLogoSrc]);

  const altTitle = language === 'en' ? 'Company Logo' : 'شعار الشركة';
  const { w, h } = sizeMap[size] || sizeMap['navbar-sm'];

  return (
    <span
      className={cn('inline-flex items-center justify-center', className)}
      style={{
        width: w,
        height: h,
        minWidth: w,
        minHeight: h,
        background: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
        padding: 0,
      }}
    >
      <img
        src={logoSrc}
        alt={altTitle}
        title={altTitle}
        draggable={false}
        className={cn(
          'object-contain select-none transition-transform duration-300 hover:scale-105 w-full h-full',
          clickable && 'cursor-pointer hover:opacity-90',
        )}
        onClick={clickable ? toggleTheme : undefined}
        style={{
          borderRadius: 0,
          background: 'transparent',
        }}
      />
    </span>
  );
};
