import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const SLIDES = [
  {
    image: '/hero-1.png',
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
    image: '/hero-2.png',
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
    image: '/hero-3.png',
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
    image: '/hero-4.png',
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
const FADE_DURATION = 1.7;
const BLEND_DURATION = 1400;
const TEXT_DELAY = 3000;

export default function HeroSlider({ lang = 'en' }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [showText, setShowText] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar' || language === 'eg';

  useEffect(() => {
    setShowText(false);
    const textIn = setTimeout(() => setShowText(true), TEXT_DELAY);
    const textOut = setTimeout(
      () => setShowText(false),
      SLIDE_DURATION - BLEND_DURATION,
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

  function getScaleFor(idx: number, phase: 'init' | 'anim' | 'exit') {
    if (idx % 2 === 0) {
      if (phase === 'init') return 1.01;
      if (phase === 'anim') return 1.16;
      if (phase === 'exit') return 1.18;
    } else {
      if (phase === 'init') return 1.19;
      if (phase === 'anim') return 1.05;
      if (phase === 'exit') return 1.03;
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
              initial="initial"
              animate="animate"
              exit="exit"
              className={`
                flex flex-col max-w-xl w-full
                ${isRTL ? 'items-end text-right' : 'items-start text-left'}
              `}
            >
              <motion.h1
                variants={h1Variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  type: 'spring',
                  duration: 1.3, // أبطأ
                  delay: 0.35, // يظهر بعد دخول الصورة
                  bounce: 0.13, // انسيابية هادئة
                }}
                className="..."
              >
                {SLIDES[active].text[language]}
              </motion.h1>

              <motion.p
                variants={pVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 1.22, // أبطأ
                  delay: 0.54, // يظهر بعد الهيدينج بقليل
                  type: 'spring',
                  bounce: 0.09,
                }}
                className="..."
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
