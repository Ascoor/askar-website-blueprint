import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
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

    console.log('[scroll-to-top] triggered');
    requestAnimationFrame(scroll);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={language === 'ar' ? 'العودة للأعلى' : 'Back to top'}
      className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-40 p-3 rounded-full bg-primary text-white shadow-premium transition-opacity duration-300 hover:bg-primary-hover focus:outline-none ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
