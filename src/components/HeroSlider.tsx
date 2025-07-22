import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
  '/hero4.png',
  '/hero5.png'
];

const transitionDuration = 2; // seconds
const displayDuration = 7000; // milliseconds

const HeroSlider: React.FC = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, displayDuration);
    return () => clearTimeout(timer);
  }, [index, paused]);

  const pause = () => setPaused(true);
  const play = () => setPaused(false);

  return (
   <section
  id="hero"
  className="
    relative
    w-full
    mt-16
    min-h-[calc(100vh-64px)]
    max-h-[1200px]
    overflow-hidden
    flex items-center justify-center
  "
  onMouseEnter={pause}
  onMouseLeave={play}
  onTouchStart={pause}
  onTouchEnd={play}
>
  <AnimatePresence>
    <motion.img
      key={index}
      src={images[index]}
      className="absolute inset-0 h-full w-full min-h-[350px] object-cover"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: transitionDuration, ease: 'easeInOut' }}
    />
  </AnimatePresence>

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('heroTitle')}</h1>
    <p className="text-lg md:text-xl max-w-2xl mb-8">{t('heroSubtitle')}</p>
    <Button
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      size="lg"
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg"
    >
      {t('getStarted')}
    </Button>
  </div>
</section>

  );
};

export default HeroSlider;
