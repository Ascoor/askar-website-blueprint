import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';

const NAVBAR_HEIGHT = 64;
const SLIDE_DURATION = 10000; // 10 ثواني
const TEXT_APPEAR_AFTER = 6000; // النص يظهر بعد 6 ثواني
const MOBILE_MIN_HEIGHT = 400;

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
    const textTimer = setTimeout(() => setShowText(true), TEXT_APPEAR_AFTER);
    const slideTimer = setTimeout(nextSlide, SLIDE_DURATION);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, nextSlide]);

  // السيناريو السينمائي لعرض الشريحة: زوم إن ببطء + إضاءة مركزية متدرجة
  const imageVariants = {
    initial: { scale: 1, opacity: 0, filter: 'brightness(0.7)' },
    animate: {
      scale: 1.08,
      opacity: 1,
      filter: 'brightness(1.08)',
      transition: { duration: 3.5, ease: 'easeOut' as const }
    },
    exit: {
      scale: 1.13,
      opacity: 0,
      filter: 'brightness(1.18) blur(10px)',
      transition: { duration: 1.6, ease: 'easeInOut' as const }
    }
  };

  // ظهور النص كحروف متفرقة تتجمع (smoke in)، واختفاء كدخان يتبخر (smoke out)
  const textVariants = {
    initial: {
      opacity: 0,
      letterSpacing: '1.2em',
      filter: 'blur(28px) brightness(0.85)',
      scale: 1.11,
      y: 90,
    },
    animate: {
      opacity: 1,
      letterSpacing: '0.01em',
      filter: 'blur(0px) brightness(1)',
      scale: 1,
      y: 0,
      transition: {
        opacity: { duration: 1.35, ease: 'anticipate' as const },
        letterSpacing: { duration: 1.2, ease: 'anticipate' as const },
        filter: { duration: 1.6, ease: 'anticipate' as const },
        scale: { duration: 0.8, ease: 'anticipate' as const },
        y: { duration: 1.1, ease: 'anticipate' as const },
      }
    },
    exit: {
      opacity: 0,
      letterSpacing: '1.6em',
      filter: 'blur(30px) brightness(1.2) saturate(1.4)',
      scale: 1.15,
      y: -100,
      transition: {
        opacity: { duration: 1.3, ease: 'easeIn' as const },
        letterSpacing: { duration: 1.3, ease: 'easeIn' as const },
        filter: { duration: 1.2, ease: 'easeIn' as const },
        scale: { duration: 0.7, ease: 'easeIn' as const },
        y: { duration: 1.1, ease: 'easeIn' as const },
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: NAVBAR_HEIGHT,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        background: 'black'
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-img-${currentIndex}`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            style={{ minHeight: MOBILE_MIN_HEIGHT, height: '100vh', width: '100vw' }}
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
                background: `
                  radial-gradient(circle at 50% 53%,
                    rgba(255,255,255,0.19) 0%,
                    rgba(255,255,255,0.10) 32%,
                    rgba(0,0,0,0.00) 84%,
                    transparent 100%
                  )
                `,
                mixBlendMode: 'screen'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* نص ديناميكي دخاني متدرج التجمع والتبخر وأحجام متجاوبة */}
      <AnimatePresence>
        {showText && (
          <motion.div
            key={`text-${currentIndex}-${language}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              'absolute left-1/2 top-1/2 z-20 px-2 py-2',
              '-translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center select-none w-full'
            )}
            style={{
              maxWidth: '90vw',
              width: '100%',
            }}
          >
            <h2 className={cn(
              'font-bold leading-tight text-center transition-all duration-500 drop-shadow-[0_4px_60px_rgba(220,220,255,0.16)]',
              isRTL ? 'font-[Tajawal]' : 'font-[Montserrat]'
            )}
              style={{
                color: 'white',
                fontSize: 'clamp(2.3rem, 6vw, 5.8rem)', // أحجام مرنة حسب الشاشة
                lineHeight: 1.13,
                letterSpacing: 'inherit',
                textShadow: '0 2px 38px #fff9, 0 0 14px #eaf4ff77, 0 0 2px #fff'
              }}
            >
              {currentSlide.text[language]}
            </h2>
            {/* طبقة وميض/شفافية خلف النص */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.10)',
                boxShadow: '0 0 88px 30px #eaf4ff25, 0 2px 18px #fff2',
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
