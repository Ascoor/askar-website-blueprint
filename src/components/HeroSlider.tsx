import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, easeInOut } from 'framer-motion';
import AnimatedText from '@/components/ui/animated-text';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
// Last 5 seconds

const SLIDES = [
  {
    image: '/images/slides/hero-1.webp',
    text: {
      en: 'Limitless Innovation',
      ar: 'ابتكار بلا حدود',
      eg: 'الابتكار ملوش آخر',
    },
    subtitle: {
      en: 'Push beyond the possible',
      ar: 'اكسر حدود الممكن',
      eg: 'خلي الحلم حقيقة',
    },
  },
  {
    image: '/images/slides/hero-2.webp',
    text: {
      en: 'Empowering Tomorrow',
      ar: 'تمكين الغد',
      eg: 'مستقبلنا في إيدينا',
    },
    subtitle: {
      en: 'Crafting a brighter future',
      ar: 'نبني مستقبلًا مشرقًا',
      eg: 'نرسم مستقبل أفضل',
    },
  },
  {
    image: '/images/slides/hero-3.webp',
    text: {
      en: 'Unleashing Potential',
      ar: 'إطلاق العنان للإمكانات',
      eg: 'إمكانياتنا بلا حدود',
    },
    subtitle: {
      en: 'Discover your true capabilities',
      ar: 'اكتشف إمكانياتك الحقيقية',
      eg: 'اكتشف قدراتك الحقيقية',
    },
  },
  {
    image: '/images/slides/hero-4.webp',
    text: {
      en: 'Innovate. Inspire. Impact',
      ar: 'ابتكر. ألهم. أثر',
      eg: 'ابتكر. ألهم. اترك أثر',
    },
    subtitle: {
      en: 'Transforming ideas into reality',
      ar: 'تحويل الأفكار إلى واقع',
      eg: 'نحوّل الأفكار لواقع ملموس',
    },
  },
  {
    image: '/images/slides/hero-5.webp',
    text: {
      en: 'Beyond Boundaries',
      ar: 'تجاوز الحدود',
      eg: 'مفيش حدود لأحلامنا',
    },
    subtitle: {
      en: 'Explore new horizons',
      ar: 'استكشف آفاق جديدة',
      eg: 'اكتشف آفاق جديدة',
    },
  },
];

const SLIDE_DURATION = 10000;
const FADE_DURATION = 1.7;
const BLEND_DURATION = 1400;

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

  // نفس منطق الزوم للشرائح بدون تغيير
  function getScaleFor(activeIndex: number, phase: 'init' | 'anim' | 'exit') {
    if (activeIndex % 2 === 0) {
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
      filter: 'blur(18px)',
      rotate: isRTL ? -25 : 25,
      x: isRTL ? 120 : -120,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,
      scale: 1,
      transition: { duration: 1.25, ease: easeInOut },
    },
    exit: {
      opacity: 0,
      filter: 'blur(16px)',
      rotate: 0,
      x: 0,
      scale: 0.97,
      transition: { duration: 1.0, ease: easeInOut },
    },
  };

  const pVariants = {
    initial: {
      opacity: 0,
      filter: 'blur(18px)',
      rotate: isRTL ? -14 : 14,
      x: isRTL ? 80 : -80,
      scale: 0.92,
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,
      scale: 1,
      transition: { duration: 1.25, ease: easeInOut },
    },
    exit: {
      opacity: 0,
      filter: 'blur(16px)',
      rotate: 0,
      x: 0,
      scale: 0.99,
      transition: { duration: 1.0, ease: easeInOut },
    },
  };
  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-gradient-to-br from-[#030c2e] to-[#020816]">
      {/* صور الشرائح كالمعتاد */}
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
            }}
            animate={{
              opacity: 0,
              scale: getScaleFor(prev, 'exit'),
              filter: 'blur(14px)',
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
          }}
          animate={{
            opacity: 1,
            scale: getScaleFor(active, 'anim'),
            filter: 'blur(0px)',
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
                ${isRTL ? 'items-start text-right' : 'items-start text-left'}
              `}
            >
              <motion.h1
                variants={h1Variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight mb-2"
                style={{
                  color: 'var(--color-moon)',
                  textShadow: '0 0 10px var(--color-moon)',
                }}
              >
                <AnimatedText text={SLIDES[active].text[language]} />
              </motion.h1>
              <motion.p
                variants={pVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-base sm:text-xl md:text-2xl font-medium tracking-wide"
                style={{
                  color: 'var(--color-moon)',
                  filter: 'drop-shadow(0 0 6px var(--color-moon))',
                }}
              >
                <AnimatedText text={SLIDES[active].subtitle[language]} />
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
