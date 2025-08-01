import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.helpers';

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY || window.pageYOffset;
    const duration = 700;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start - start * ease);
      if (progress < 1) requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={language !== 'en' ? 'العودة للأعلى' : 'Back to top'}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 ${language !== 'en' ? 'left-6' : 'right-6'} z-40 p-3 rounded-full bg-background/80 backdrop-blur-md text-foreground shadow-elegant hover:bg-background/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
