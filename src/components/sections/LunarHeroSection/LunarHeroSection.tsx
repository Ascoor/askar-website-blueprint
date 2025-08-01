import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.14, duration: 0.88 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export interface LunarHeroSectionProps {
  title?: string;
  subtitle?: string;
}

const LunarHeroSection: React.FC<LunarHeroSectionProps> = ({
  title,
  subtitle,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <motion.section
      id="hero"
      dir={isRTL ? 'rtl' : 'ltr'}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      variants={containerVariants}
      className={cn(
        'relative overflow-hidden py-section',
        'bg-gradient-to-br from-hero-from to-hero-to',
        'dark:from-[var(--hero-gradient-dark-from)] dark:to-[var(--hero-gradient-dark-to)]',
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/10" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-accent/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-primary/15 blur-2xl" />

      <div className="container flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          variants={itemVariants}
          className={cn(
            'relative z-10 w-full max-w-2xl space-y-7 p-8 rounded-3xl border',
            'border-glass-border bg-glass-bg/70 backdrop-blur-xl shadow-glow',
            isRTL ? 'text-right' : 'text-left',
          )}
        >
          <motion.h1
            variants={itemVariants}
            className={cn(
              'font-heading font-bold text-4xl md:text-5xl',
              'text-moon drop-shadow-[0_1px_20px_#f7faff]',
            )}
          >
            {title ?? t('heroTitle')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-moon/90"
          >
            {subtitle ?? t('heroSubtitle')}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className={cn(
              'flex gap-4 pt-2',
              isRTL ? 'justify-end' : 'justify-start',
            )}
          >
            <Button
              variant="secondary"
              className={cn(
                'spring-button px-7 py-3 font-semibold',
                'text-moon bg-primary hover:bg-primary-hover',
                'ring-1 ring-transparent hover:ring-[hsl(var(--spring-glow))]',
              )}
            >
              {t('getStarted')}
            </Button>
            <Button
              variant="ghost"
              className={cn('nav-link text-moon/85 font-medium')}
            >
              {t('learnMore')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LunarHeroSection;
