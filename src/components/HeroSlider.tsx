import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import clsx from 'clsx';

const NAVBAR_HEIGHT = 64;
const DISPLAY_DURATION = 10000; // ms
const CROSSFADE_DURATION = 2000; // ms
const MOBILE_MIN_HEIGHT = 500;

interface Slide {
  image: string;
  text: { en: string; ar: string; eg: string };
}

const slides: Slide[] = [
  {
    image: '/hero1.png',
    text: {
      en: 'Technology that leads. Future that inspires.',
      ar: 'تقنية تقود، ومستقبل يلهم.',
      eg: 'تكنولوجيا بتفتح الطريق وبتلهم بكرة.',
    },
  },
  {
    image: '/hero2.png',
    text: {
      en: 'Where data flows, possibilities grow.',
      ar: 'حيث تتدفق البيانات، تنمو الفرص.',
      eg: 'لما البيانات تتحرك، الفرص تكتر.',
    },
  },
  {
    image: '/hero3.png',
    text: {
      en: 'Your smart partner in digital transformation.',
      ar: 'شريكك الذكي في التحول الرقمي.',
      eg: 'شريكك الشاطر في التحول الرقمي.',
    },
  },
  {
    image: '/hero4.png',
    text: {
      en: 'Securing progress with innovation and trust.',
      ar: 'نؤمن التقدم بالابتكار والثقة.',
      eg: 'بنوفرلك تطور مضمون بالابتكار والثقة.',
    },
  },
  {
    image: '/hero5.png',
    text: {
      en: 'Experience seamless connectivity, everywhere.',
      ar: 'اختبر الاتصال الذكي… في كل مكان.',
      eg: 'استمتع باتصال من غير حدود، في أي مكان.',
    },
  },
];

const HeroSlider: React.FC = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const isRTL = language !== 'en';
  const directions = ['left', 'right', 'top', 'bottom'];
  const direction = directions[index % directions.length];
  const actualDirection = isRTL && (direction === 'left' || direction === 'right')
    ? direction === 'left' ? 'right' : 'left'
    : direction;

  const from = {
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
    top: { x: 0, y: -80 },
    bottom: { x: 0, y: 80 },
  }[actualDirection as 'left' | 'right' | 'top' | 'bottom'];
  const exit = {
    left: { x: 80, y: 0 },
    right: { x: -80, y: 0 },
    top: { x: 0, y: 80 },
    bottom: { x: 0, y: -80 },
  }[actualDirection as 'left' | 'right' | 'top' | 'bottom'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, DISPLAY_DURATION - CROSSFADE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: index % 2 === 0 ? 1 : 1.2, ...from }}
            animate={{
              opacity: 1,
              scale: index % 2 === 0 ? 1.2 : 1,
              x: 0,
              y: 0,
              transition: {
                opacity: { duration: CROSSFADE_DURATION / 1000, ease: 'easeInOut' },
                x: { duration: CROSSFADE_DURATION / 1000, ease: 'easeInOut' },
                y: { duration: CROSSFADE_DURATION / 1000, ease: 'easeInOut' },
                scale: { duration: DISPLAY_DURATION / 1000, ease: 'linear' },
              },
            }}
            exit={{
              opacity: 0,
              scale: index % 2 === 0 ? 1.2 : 1,
              ...exit,
              transition: {
                duration: CROSSFADE_DURATION / 1000,
                ease: 'easeInOut',
              },
            }}
            style={{ minHeight: `${MOBILE_MIN_HEIGHT}px`, zIndex: 10 }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none"></div>
      <div className="relative z-20 flex h-full w-full items-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={clsx(
              'absolute top-1/2 -translate-y-1/2 max-w-md md:max-w-lg text-white p-6 rounded-xl border border-white/30 backdrop-blur-md bg-white/20 shadow-lg',
              isRTL ? 'text-right' : 'text-left',
              actualDirection === 'left' ? 'left-4 sm:left-16' : actualDirection === 'right' ? 'right-4 sm:right-16' : 'left-1/2 -translate-x-1/2'
            )}
            initial={{ opacity: 0, x: from.x, y: from.y }}
            animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
            exit={{ opacity: 0, x: exit.x, y: exit.y, transition: { duration: 0.7, ease: 'easeIn' } }}
          >
            <h2 className="font-heading font-bold text-2xl md:text-4xl">
              {slides[index].text[language as 'en' | 'ar' | 'eg']}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSlider;
