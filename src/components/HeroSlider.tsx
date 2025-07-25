import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';

const NAVBAR_HEIGHT = 64;
const SLIDE_DURATION = 10000; // 10 seconds
const TEXT_APPEAR_AFTER = 6000; // text shows after 6 seconds
const TEXT_DISAPPEAR_AT = SLIDE_DURATION - 2000; // hide 2 seconds before slide ends
const MOBILE_MIN_HEIGHT = 400;
const CINEMATIC_EASING = [0.42, 0, 0.58, 1] as const;

interface SlideData {
  image: string;
  text: { en: string; ar: string; eg: string };
}
const slides: SlideData[] = [
  { image: '/hero1.png', text: { en: 'Technology that leads the future.', ar: 'تقنية تقود المستقبل.', eg: 'تقنية تقود المستقبل.' } },
  { image: '/hero2.png', text: { en: 'Data flows, growth follows.', ar: 'تدفق البيانات، ينمو النجاح.', eg: 'البيانات تتدفق، والنمو يتبع.' } },
  { image: '/hero3.png', text: { en: 'Smart partner in transformation.', ar: 'شريك ذكي في التحول.', eg: 'شريك ذكي في التحول.' } },
  { image: '/hero4.png', text: { en: 'Innovation with trust.', ar: 'ابتكار بثقة.', eg: 'ابتكار بثقة.' } },
  { image: '/hero5.png', text: { en: 'Seamless connectivity everywhere.', ar: 'اتصال سلس في كل مكان.', eg: 'اتصال سلس في كل مكان.' } },
];

const HeroSlider: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);
  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % slides.length), []);

  useEffect(() => {
    setShowText(false);
    const showTimer = setTimeout(() => setShowText(true), TEXT_APPEAR_AFTER);
    const hideTimer = setTimeout(() => setShowText(false), TEXT_DISAPPEAR_AT);
    const slideTimer = setTimeout(nextSlide, SLIDE_DURATION);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, nextSlide]);

  // السيناريو السينمائي لعرض الشريحة: زوم إن ببطء + إضاءة مركزية متدرجة
  const imageVariants: Variants = {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: 1.13,
      opacity: 1,
      transition: { duration: SLIDE_DURATION / 1000, ease: CINEMATIC_EASING },
    },
    exit: {
      scale: 1.18,
      opacity: 0,
      transition: { duration: 1.6, ease: CINEMATIC_EASING },
    },
  };

  // ظهور النص كحروف متفرقة تتجمع (smoke in)، واختفاء كدخان يتبخر (smoke out)
  const textVariants: Variants = {
    initial: {
      opacity: 0,
      letterSpacing: '0.5em',
      filter: 'blur(30px)',
      y: 80,
    },
    animate: {
      opacity: 1,
      letterSpacing: '0em',
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 1.4,
        ease: CINEMATIC_EASING,
      },
    },
    exit: {
      opacity: 0,
      letterSpacing: '0.6em',
      filter: 'blur(30px)',
      y: -80,
      transition: {
        duration: 1.2,
        ease: CINEMATIC_EASING,
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
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          <motion.div
            key={`slide-img-${currentIndex}`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ minHeight: MOBILE_MIN_HEIGHT }}
          >
            <OptimizedImage
              src={currentSlide.image}
              alt={currentSlide.text[language]}
              className="w-full h-full object-cover select-none"
              priority={currentIndex === 0}
              quality={90}
            />
            {/* إضاءة مركزية بخلفية ناعمة (تدرج دائري) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, transparent 80%)',
                mixBlendMode: 'screen',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dynamic smoke text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            key={`text-${currentIndex}-${language}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              'absolute left-1/2 top-1/2 z-20 flex flex-col items-center text-center select-none w-full',
              '-translate-x-1/2 -translate-y-1/2 px-2 py-2'
            )}
            style={{ maxWidth: '90vw', width: '100%' }}
          >
            <h2 className={cn(
              'font-bold leading-tight text-center text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]',
              isRTL ? 'font-[Tajawal]' : 'font-[Montserrat]'
            )}
              aria-label={currentSlide.text[language]}
              style={{
                fontSize: 'clamp(2.3rem, 7vw, 5.7rem)',
                lineHeight: 1.1,
                textShadow: '0 2px 38px #000a'
              }}
            >
              {currentSlide.text[language]}
            </h2>
            {/* طبقة وميض/شفافية خلف النص */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.1)',
                boxShadow: '0 0 88px 30px rgba(255,255,255,0.15)',
                filter: 'blur(10px)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;
