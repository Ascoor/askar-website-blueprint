import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

const NAVBAR_HEIGHT = 72;
const SLIDE_DURATION = 10000; // 10 seconds
const TEXT_APPEAR_AFTER = SLIDE_DURATION - 5000; // text appears after 5 sec
const MOBILE_MIN_HEIGHT = 400;
const EASING = [0.42, 0, 0.58, 1] as const;

interface SlideData {
  image: string;
  text: { en: string; ar: string; eg: string };
}

const slides: SlideData[] = [
  { image: "/hero-1.png", text: { en: "Tech that moves you forward.", ar: "تقنية تدفعك للأمام.", eg: "تقنية تدفعك للأمام." } },
  { image: "/hero-2.png", text: { en: "Stay ahead with our tech.", ar: "ابقى متقدم بتقنيتنا.", eg: "ابقى متقدم بتقنيتنا." } },
  { image: "/hero-3.png", text: { en: "Data that powers growth.", ar: "بيانات تقود النمو.", eg: "بيانات تقود النمو." } },
  { image: "/hero-4.png", text: { en: "Smart solutions, smart future.", ar: "حلول ذكية، مستقبل ذكي.", eg: "حلول ذكية، مستقبل ذكي." } },
  { image: "/hero-5.png", text: { en: "Innovation you can trust.", ar: "ابتكار بثقة.", eg: "ابتكار بثقة." } },
  { image: "/hero-6.png", text: { en: "Seamless connectivity, always.", ar: "اتصال سلس، دائمًا.", eg: "اتصال سلس، دائمًا." } },
  { image: "/hero-7.png", text: { en: "Tech that shapes your future.", ar: "تقنية تشكل مستقبلك.", eg: "تقنية تشكل مستقبلك." } },
  { image: "/hero-8.png", text: { en: "Stay connected, stay ahead.", ar: "ابقى متصل، ابقى متقدم.", eg: "ابقى متصل، ابقى متقدم." } },
  { image: "/hero-9.png", text: { en: "Fresh start with cutting-edge tech.", ar: "بداية جديدة بتقنية متطورة.", eg: "بداية جديدة بتقنية متطورة." } },
  { image: "/hero-10.png", text: { en: "Simplifying your world with tech.", ar: "نبسط لك الدنيا بتقنية.", eg: "نبسط لك الدنيا بتقنية." } },
  { image: "/hero-11.png", text: { en: "Tech that puts you ahead.", ar: "تقنية تجيبك أولًا.", eg: "تقنية تجيبك أولًا." } },
  { image: "/hero-12.png", text: { en: "Everything’s easy with our tech.", ar: "كل شيء سهل بتقنيتنا.", eg: "كل شيء سهل بتقنيتنا." } }
];

const HeroSlider: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    setShowText(false);
    const textTimer = setTimeout(() => setShowText(true), TEXT_APPEAR_AFTER);
    const slideTimer = setTimeout(() => {
      setShowText(false);
      nextSlide();
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, nextSlide]);

  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)"
    },
    animate: {
      opacity: 1,
      scale: 1.12,
      filter: "blur(0px)",
      transition: {
        duration: SLIDE_DURATION / 1000,
        ease: EASING
      }
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      filter: "blur(10px)",
      transition: {
        duration: 1.2,
        ease: EASING
      }
    }
  };

  const textVariants: Variants = {
    initial: { opacity: 0, y: 60, filter: "blur(20px)", letterSpacing: "0.3em" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      letterSpacing: "0em",
      transition: { duration: 1.2, ease: EASING }
    },
    exit: {
      opacity: 0,
      y: -40,
      filter: "blur(20px)",
      transition: { duration: 1, ease: EASING }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#0B0E14] text-white"
      style={{
        paddingTop: NAVBAR_HEIGHT,
        minHeight: `calc(120vh - ${NAVBAR_HEIGHT}px)`
      }}
    >
      <div className="absolute inset-0 w-full h-full perspective-[1200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-img-${currentIndex}`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full z-0"
            style={{ minHeight: MOBILE_MIN_HEIGHT }}
          >
            <OptimizedImage
              src={currentSlide.image}
              alt={currentSlide.text[language]}
              className="w-full h-full object-cover select-none"
              priority={currentIndex === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            key={`text-${currentIndex}-${language}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-1/2 z-20 text-center px-4 w-full -translate-y-1/2"
          >
            <h2
              className={cn(
                "font-bold italic text-primary-foreground",
                isRTL ? "font-[Tajawal]" : "font-[Montserrat]"
              )}
              style={{
                fontSize: "clamp(1.4rem, 4vw, 3.6rem)",
                lineHeight: 1.2,
                textShadow: "0 2px 40px rgba(255,255,255,0.6)"
              }}
            >
              {currentSlide.text[language]}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;
