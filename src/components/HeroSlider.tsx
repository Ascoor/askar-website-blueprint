import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const NAVBAR_HEIGHT = 64;
const TRANSITION_DURATION = 2;
const DISPLAY_DURATION = 7000;
const MOBILE_MIN_HEIGHT = 500;

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
  '/hero4.png',
  '/hero5.png'
];

const HeroSlider: React.FC = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setIndex(i => (i + 1) % images.length), DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [index, paused]);

  const pause = () => setPaused(true);
  const play = () => setPaused(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        paddingTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        maxHeight: '1024px'
      }}
      onMouseEnter={pause}
      onMouseLeave={play}
      onTouchStart={pause}
      onTouchEnd={play}
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
            style={{ minHeight: `${MOBILE_MIN_HEIGHT}px` }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-white scale-110 shadow-lg' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('heroSubtitle')}
          </motion.p>
        </div>
      </div>

      <button
        onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-20"
      >
        ◀️
      </button>

      <button
        onClick={() => setIndex(i => (i + 1) % images.length)}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-20"
      >
        ▶️
      </button>
    </section>
  );
};

export default HeroSlider;
