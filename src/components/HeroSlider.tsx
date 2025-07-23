import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import clsx from 'clsx';

const NAVBAR_HEIGHT = 64;
const DISPLAY_DURATION = 5000; // ms
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
  const side = index % 2 === 0 ? 'left' : 'right';
  const actualSide = isRTL ? (side === 'left' ? 'right' : 'left') : side;
  const fromX = actualSide === 'left' ? -80 : 80;
  const exitX = actualSide === 'left' ? 80 : -80;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, DISPLAY_DURATION);
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
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: 1.2,
              transition: {
                opacity: { duration: 0.8, ease: 'easeInOut' },
                scale: { duration: DISPLAY_DURATION / 1000, ease: 'linear' },
              },
            }}
            exit={{
              opacity: 0,
              scale: 1,
              transition: {
                opacity: { duration: 0.8, ease: 'easeInOut' },
                scale: { duration: 0.8, ease: 'easeInOut' },
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
              actualSide === 'left' ? 'left-4 sm:left-16' : 'right-4 sm:right-16'
            )}
            initial={{ opacity: 0, x: fromX }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
            exit={{ opacity: 0, x: exitX, transition: { duration: 0.7, ease: 'easeIn' } }}
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
