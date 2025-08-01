import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
// Last 5 seconds

const SLIDES = [
  {
    image: '/images/slides/hero-1.png',
    text: {
      en: 'Limitless Innovation.',
      ar: 'ابتكار بلا حدود.',
      eg: 'الابتكار ملوش آخر.',
    },
    subtitle: {
      en: 'Push beyond the possible.',
      ar: 'اكسر حدود الممكن.',
      eg: 'خلي الحلم حقيقة.',
    },
  },
  {
    image: '/images/slides/hero-2.png',
    text: {
      en: 'Empowering Tomorrow.',
      ar: 'تمكين الغد.',
      eg: 'مستقبلنا في إيدينا.',
    },
    subtitle: {
      en: 'Crafting a brighter future.',
      ar: 'نبني مستقبلًا مشرقًا.',
      eg: 'نرسم مستقبل أفضل.',
    },
  },
  {
    image: '/images/slides/hero-3.png',
    text: {
      en: 'Unleashing Potential.',
      ar: 'إطلاق العنان للإمكانات.',
      eg: 'إمكانياتنا بلا حدود.',
    },
    subtitle: {
      en: 'Discover your true capabilities.',
      ar: 'اكتشف إمكانياتك الحقيقية.',
      eg: 'اكتشف قدراتك الحقيقية.',
    },
  },
  {
    image: '/images/slides/hero-4.png',
    text: {
      en: 'Innovate. Inspire. Impact.',
      ar: 'ابتكر. ألهم. أثر.',
      eg: 'ابتكر. ألهم. اترك أثر.',
    },
    subtitle: {
      en: 'Transforming ideas into reality.',
      ar: 'تحويل الأفكار إلى واقع.',
      eg: 'نحوّل الأفكار لواقع ملموس.',
    },
  },
];

const SLIDE_DURATION = 10000;
const FADE_DURATION = 1.7; // مدة التلاشي والتداخل (ثواني)
const BLEND_DURATION = 1400; // ms

export default function HeroSlider({ lang = 'en' }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [showText, setShowText] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar' || language === 'eg';

  useEffect(() => {
    setShowText(false);
    const textIn = setTimeout(() => setShowText(true), SLIDE_DURATION / 2.6);
    const textOut = setTimeout(
      () => setShowText(false),
      SLIDE_DURATION - BLEND_DURATION + 400,
    );
    const nextSlide = setTimeout(() => {
      setPrev(active);
      setActive((i) => (i + 1) % SLIDES.length);
      setTimeout(() => setPrev(null), BLEND_DURATION);
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(textIn);
      clearTimeout(textOut);
      clearTimeout(nextSlide);
    };
  }, [active, language]);

  // --- منطق الزوم للشرائح
  // الشرائح الفردية: زوم إن فقط
  // الشرائح الزوجية: زوم أوت فقط
  function getScaleFor(activeIndex: number, phase: 'init' | 'anim' | 'exit') {
    if (activeIndex % 2 === 0) {
      // فردية: Zoom In
      if (phase === 'init') return 1.01; // تبدأ شبه عادية
      if (phase === 'anim') return 1.16; // تقترب ببطء (Zoom In)
      if (phase === 'exit') return 1.18; // عند الخروج تكون وصلت زوم إن أقصى
    } else {
      // زوجية: Zoom Out
      if (phase === 'init') return 1.19; // تبدأ مكبرة
      if (phase === 'anim') return 1.05; // تصغر ببطء (Zoom Out)
      if (phase === 'exit') return 1.03; // عند الخروج تكون صغرت للحد المناسب
    }
    return 1;
  }

  const h1Variants = {
    initial: {
      opacity: 0,
      x: isRTL ? 130 : -130,
      filter: 'blur(10px)',
      scale: 0.93,
    },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)', scale: 1 },
    exit: {
      opacity: 0,
      x: isRTL ? -130 : 130,
      filter: 'blur(14px)',
      scale: 1.06,
    },
  };
  const pVariants = {
    initial: { opacity: 0, y: 60, filter: 'blur(14px)', scale: 0.92 },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 },
    exit: { opacity: 0, y: -60, filter: 'blur(12px)', scale: 1.07 },
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-gradient-to-br from-[#030c2e] to-[#020816]">
      {/* صورة الشريحة السابقة (خروج تدريجي) */}
      <AnimatePresence>
        {prev !== null && (
          <motion.img
            key={'prev' + prev}
            src={SLIDES[prev].image}
            alt={SLIDES[prev].text[language]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{
              opacity: 1,
              scale: getScaleFor(prev, 'anim'),
              filter: 'blur(0px)',
              y: 60,
            }}
            animate={{
              opacity: 0,
              scale: getScaleFor(prev, 'exit'),
              filter: 'blur(14px)',
              y: 60,
            }}
            exit={{
              y: 60,
            }}
            transition={{
              opacity: { duration: FADE_DURATION, ease: 'easeInOut' },
              scale: { duration: FADE_DURATION, ease: 'linear' },
              filter: { duration: FADE_DURATION * 0.9, ease: 'easeInOut' },
            }}
            style={{
              minHeight: 500,
              zIndex: 2,
              transform: isRTL ? 'scaleX(-1)' : 'none',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.img
          key={'active' + active}
          src={SLIDES[active].image}
          alt={SLIDES[active].text[language]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            scale: getScaleFor(active, 'init'),
            filter: 'blur(18px)',
            y: 60,
          }}
          animate={{
            opacity: 1,
            scale: getScaleFor(active, 'anim'),
            filter: 'blur(0px)',
            y: 60,
          }}
          exit={{
            y: 60,
          }}
          transition={{
            opacity: { duration: FADE_DURATION + 0.16, ease: 'easeInOut' },
            scale: { duration: SLIDE_DURATION / 1000, ease: 'linear' },
            filter: { duration: FADE_DURATION * 1.0, ease: 'easeInOut' },
          }}
          style={{
            minHeight: 500,
            zIndex: 3,
            transform: isRTL ? 'scaleX(-1)' : 'none',
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none z-10" />

      <div
        className={`
          absolute inset-y-0
          ${isRTL ? 'right-0' : 'left-0'}
          w-1/2
          flex items-center
          ${isRTL ? 'justify-end pr-10' : 'justify-start pl-10'}
          z-20
          pointer-events-none
        `}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <AnimatePresence>
          {showText && (
            <motion.div
              key={active + language}
              initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              transition={{
                duration: 1.0,
                staggerChildren: 0.22,
              }}
              className={`
                flex flex-col max-w-xl w-full
                ${isRTL ? 'items-end text-right' : 'items-start text-left'}
              `}
            >
              <motion.h1
                initial={{ opacity: 0, x: isRTL ? 120 : -120, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: isRTL ? -35 : 35, scale: 1.08 }}
                transition={{ duration: 1.1, type: 'spring' }}
                className={`
                  text-xl sm:text-3xl md:text-5xl
                  font-black
                  tracking-tight mb-2 animate-pulse
                  ${isRTL ? 'text-right' : 'text-left'}
                `}
                style={{
                  color: 'var(--color-moon)',
                  textShadow: '0 0 10px var(--color-moon)',
                }}
              >
                {SLIDES[active].text[language]}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: isRTL ? 96 : -96, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: isRTL ? -28 : 28, scale: 1.07 }}
                transition={{ duration: 1.1, type: 'spring' }}
                className={`
                  text-base sm:text-xl md:text-2xl
                  font-medium
                  tracking-wide
                  ${isRTL ? 'text-right' : 'text-left'}
                `}
                style={{
                  color: 'var(--color-moon)',
                  filter: 'drop-shadow(0 0 6px var(--color-moon))',
                }}
              >
                {SLIDES[active].subtitle[language]}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
