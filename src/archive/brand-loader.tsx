import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext.helpers';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

export interface BrandLoaderProps {
  /** Whether the loader is visible */
  isLoading: boolean;
  /** Optional custom logo component */
  logo?: React.ReactNode;
  /** Animation speed multiplier */
  speed?: number;
  /** Gradient classes for dark mode shapes */
  darkColors?: string[];
  /** Gradient classes for light mode shapes */
  lightColors?: string[];
  className?: string;
}

/**
 * BrandLoader displays an animated loading screen that adapts to the current theme.
 * It shows floating gradient shapes with a centered logo and greeting message.
 */
export const BrandLoader: React.FC<BrandLoaderProps> = ({
  isLoading,
  logo,
  speed = 6,
  darkColors = ['from-purple-500/40', 'via-indigo-600/30', 'to-transparent'],
  lightColors = ['from-sky-200', 'via-violet-200', 'to-transparent'],
  className,
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const greeting = React.useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return t('goodMorning');
    if (hour < 18) return t('goodAfternoon');
    return t('goodEvening');
  }, [t]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="brand-loader"
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background',
            className,
          )}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        >
          <motion.div className="absolute inset-0" aria-hidden="true">
            {theme === 'dark' ? (
              <>
                <motion.div
                  className={cn(
                    'absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rounded-full blur-3xl bg-gradient-to-r',
                    darkColors,
                  )}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: speed * 2,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className={cn(
                    'absolute -right-1/3 -bottom-1/3 h-[160%] w-[160%] rounded-full blur-2xl bg-gradient-to-r',
                    darkColors,
                  )}
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: speed * 1.6,
                    ease: 'linear',
                  }}
                />
              </>
            ) : (
              <>
                <motion.div
                  className={cn(
                    'absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rounded-full blur-3xl bg-gradient-radial',
                    lightColors,
                  )}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: speed * 2,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className={cn(
                    'absolute -right-1/4 -bottom-1/4 h-[150%] w-[150%] rounded-full blur-2xl bg-gradient-radial',
                    lightColors,
                  )}
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{
                    repeat: Infinity,
                    duration: speed * 1.6,
                    ease: 'easeInOut',
                  }}
                />
              </>
            )}
          </motion.div>
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <div className="w-28 h-28 flex items-center justify-center">
              {logo ?? <Logo />}
            </div>
            <p className="text-lg font-semibold text-foreground animate-fade-in">
              {greeting}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandLoader;
