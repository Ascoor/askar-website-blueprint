import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { cn } from '@/lib/utils';
import PenguinMascot from '@/components/ui/PenguinMascot';
import { EnhancedButton as Button } from '@/components/ui/enhanced-button';

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
      aria-labelledby="hero-heading"
      role="region"
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
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-primary via-transparent to-brand-secondary/20"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-secondary/10 blur-2xl"
      />
      <motion.div
        variants={itemVariants}
        className={cn(
          'relative z-10 space-y-6 p-6 rounded-glass glass-spring shadow-glow',
          isRTL ? 'md:order-2 text-right' : 'text-left',
        )}
      >
        <motion.h1
          id="hero-heading"
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
            size="lg"
            className="spring-button px-6 py-3"
          >
            {t('getStarted')}
          </Button>
          <Button variant="ghost" size="lg" className="nav-link text-moon">
            {t('learnMore')}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LunarHeroSection;
