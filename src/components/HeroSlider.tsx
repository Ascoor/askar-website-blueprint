
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Configuration constants for easy customization
const NAVBAR_HEIGHT = 64; // Height of the fixed navigation bar in pixels
const TRANSITION_DURATION = 2; // seconds
const DISPLAY_DURATION = 7000; // milliseconds
const MOBILE_MIN_HEIGHT = 500; // minimum height on mobile devices

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
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [index, paused]);

  const pause = () => setPaused(true);
  const play = () => setPaused(false);

  return (
    <section
      id="hero"
      className={`
        relative
        w-full
        overflow-hidden
        flex items-center justify-center
      `}
      style={{
        paddingTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - 0px)`, // Full viewport height accounting for navbar
        maxHeight: '1200px'
      }}
      onMouseEnter={pause}
      onMouseLeave={play}
      onTouchStart={pause}
      onTouchEnd={play}
    >
      {/* Image Slider with AnimatePresence for smooth transitions */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero slide ${index + 1}`}
            className={`
              absolute inset-0 
              w-full h-full 
              object-cover object-center
            `}
            style={{ minHeight: `${MOBILE_MIN_HEIGHT}px` }}
            initial={{ 
              opacity: 0, 
              scale: 1.1,
              filter: 'brightness(0.8)' 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: 'brightness(1)' 
            }}
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              filter: 'brightness(0.9)' 
            }}
            transition={{ 
              duration: TRANSITION_DURATION, 
              ease: 'easeInOut' 
            }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${i === index 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
              }
            `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero Content - Centered and Responsive */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-bold mb-4 sm:mb-6
              leading-tight
              drop-shadow-lg
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p 
            className="
              text-base sm:text-lg md:text-xl lg:text-2xl
              max-w-3xl mx-auto mb-6 sm:mb-8
              leading-relaxed
              drop-shadow-md
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="
                bg-primary hover:bg-primary-hover 
                text-primary-foreground 
                px-6 sm:px-8 py-3 sm:py-4
                text-base sm:text-lg
                rounded-full 
                shadow-elegant hover:shadow-premium
                transition-all duration-300
                transform hover:-translate-y-1 active:translate-y-0
                border-2 border-white/20 hover:border-white/30
              "
            >
              {t('getStarted')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows for Desktop */}
      <div className="hidden md:block">
        <button
          onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          className="
            absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2
            bg-white/20 hover:bg-white/30 backdrop-blur-sm
            text-white p-3 rounded-full
            transition-all duration-300
            hover:scale-110 active:scale-95
            z-20
          "
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          className="
            absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2
            bg-white/20 hover:bg-white/30 backdrop-blur-sm
            text-white p-3 rounded-full
            transition-all duration-300
            hover:scale-110 active:scale-95
            z-20
          "
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
