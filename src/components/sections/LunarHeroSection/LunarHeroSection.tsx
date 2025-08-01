import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { cn } from '@/lib/utils';
import PenguinMascot from '@/components/ui/PenguinMascot';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export interface LunarHeroSectionProps {
  title?: string;
  subtitle?: string;
  showMascot?: boolean;
  illustrationSrc?: string;
}

const LunarHeroSection: React.FC<LunarHeroSectionProps> = ({
  title,
  subtitle,
  showMascot = true,
  illustrationSrc = '/images/cover.webp',
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <motion.section
      id="hero"
      dir={isRTL ? 'rtl' : 'ltr'}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
      className={cn(
        'relative overflow-hidden py-section text-moon',
        'bg-gradient-to-br from-hero-from to-hero-to',
        'dark:from-[var(--hero-gradient-dark-from)] dark:to-[var(--hero-gradient-dark-to)]',
      )}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-primary via-transparent to-brand-secondary/20"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-secondary/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <motion.div
          variants={itemVariants}
          className={cn(
            'relative z-10 space-y-6 p-6 rounded-glass border border-glass-border bg-glass-bg/60 backdrop-blur-lg shadow-glow',
            isRTL ? 'md:order-2 text-right' : 'text-left',
          )}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-heading font-bold drop-shadow-[0_0_8px_var(--color-moon)]"
          >
            {title ?? t('heroTitle')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg max-w-xl">
            {subtitle ?? t('heroSubtitle')}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className={cn(
              'flex gap-4',
              isRTL ? 'justify-end' : 'justify-start',
            )}
          >
            <Button variant="secondary" className="spring-button px-6 py-3">
              {t('getStarted')}
            </Button>
            <Button variant="ghost" className="nav-link text-moon">
              {t('learnMore')}
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative z-10 flex justify-center"
        >
          {showMascot ? (
            <PenguinMascot className="w-40 md:w-56 lg:w-64" />
          ) : (
            <img
              src={illustrationSrc}
              alt={t('heroTitle')}
              className="max-w-md w-full object-cover rounded-2xl shadow-lunar-lg"
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LunarHeroSection;
