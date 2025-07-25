
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';

const NAVBAR_HEIGHT = 64;
const SLIDE_DURATION = 8000; // 8 seconds
const TEXT_APPEAR_AFTER = 4000; // Text appears after 4 seconds
const MOBILE_MIN_HEIGHT = 500;

// Slide data with better typing
interface SlideData {
  image: string;
  text: {
    en: string;
    ar: string;
    eg: string;
  };
}

const slides: SlideData[] = [
  { 
    image: '/hero1.png', 
    text: { 
      en: 'Technology that leads.', 
      ar: 'تقنية تقود.', 
      eg: 'تقنية تقود.' 
    } 
  },
  { 
    image: '/hero2.png', 
    text: { 
      en: 'Data flows, growth follows.', 
      ar: 'تدفق البيانات... ينمو.', 
      eg: 'البيانات تتدفق... والنمو يتبع.' 
    } 
  },
  { 
    image: '/hero3.png', 
    text: { 
      en: 'Smart partner in transformation.', 
      ar: 'شريك ذكي للتحول.', 
      eg: 'شريك ذكي للتحول.' 
    } 
  },
  { 
    image: '/hero4.png', 
    text: { 
      en: 'Innovation with trust.', 
      ar: 'ابتكار بثقة.', 
      eg: 'ابتكار بثقة.' 
    } 
  },
  { 
    image: '/hero5.png', 
    text: { 
      en: 'Seamless connectivity everywhere.', 
      ar: 'اتصال سلس في كل مكان.', 
      eg: 'اتصال سلس في كل مكان.' 
    } 
  },
];

const HeroSlider: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  // Memoize current slide to prevent unnecessary re-renders
  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);
  
  // Determine text position based on slide index and RTL
  const textPosition = useMemo(() => {
    const isLeft = currentIndex % 2 === 0;
    return isRTL ? (isLeft ? 'right' : 'left') : (isLeft ? 'left' : 'right');
  }, [currentIndex, isRTL]);

  // Auto-advance slides
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  // Main timer effect
  useEffect(() => {
    setShowText(false);
    
    const textTimer = setTimeout(() => setShowText(true), TEXT_APPEAR_AFTER);
    const hideTextTimer = setTimeout(() => setShowText(false), SLIDE_DURATION - 500);
    const slideTimer = setTimeout(nextSlide, SLIDE_DURATION);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTextTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, nextSlide]);

  // Improved animation variants with proper easing
  const imageVariants = {
    enter: {
      scale: 1,
      opacity: 0,
    },
    animate: {
      scale: 1.08,
      opacity: 1,
      transition: {
        duration: SLIDE_DURATION / 1000,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  const textVariants = {
    enter: {
      opacity: 0,
      x: textPosition === 'left' ? -80 : 80,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: textPosition === 'left' ? 80 : -80,
      filter: 'blur(8px)',
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: NAVBAR_HEIGHT,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${currentIndex}`}
            variants={imageVariants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            style={{ minHeight: MOBILE_MIN_HEIGHT }}
          >
            <OptimizedImage
              src={currentSlide.image}
              alt={currentSlide.text[language]}
              className="w-full h-full object-cover select-none"
              priority={currentIndex === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>

      {/* Text Overlay */}
      <AnimatePresence>
        {showText && (
          <motion.div
            key={`text-${currentIndex}-${language}`}
            variants={textVariants}
            initial="enter"
            animate="animate"
            exit="exit"
            className={cn(
              'absolute top-1/2 -translate-y-1/2 z-20',
              'px-8 py-6 max-w-2xl',
              textPosition === 'left' 
                ? 'left-6 md:left-16 lg:left-24' 
                : 'right-6 md:right-16 lg:right-24',
              textPosition === 'left' ? 'text-left' : 'text-right'
            )}
          >
            <div className="relative">
              <h2 className={cn(
                'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
                'font-bold text-white leading-tight',
                'drop-shadow-2xl',
                isRTL ? 'font-[Tajawal]' : 'font-[Montserrat]'
              )}>
                {currentSlide.text[language]}
              </h2>
              
              {/* Background blur effect */}
              <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
