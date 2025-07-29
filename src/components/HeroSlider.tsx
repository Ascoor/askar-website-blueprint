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
  { image: "/hero-1.png", text: { en: "Technology that leads the future.", ar: "تقنية تقود المستقبل.", eg: "تقنية تقود المستقبل." } },
  { image: "/hero-2.png", text: { en: "Data flows, growth follows.", ar: "تدفق البيانات، ينمو النجاح.", eg: "البيانات تتدفق، والنمو يتبع." } },
  { image: "/hero-3.png", text: { en: "Smart partner in transformation.", ar: "شريك ذكي في التحول.", eg: "شريك ذكي في التحول." } },
  { image: "/hero-4.png", text: { en: "Innovation with trust.", ar: "ابتكار بثقة.", eg: "ابتكار بثقة." } },
  { image: "/hero-5.png", text: { en: "Seamless connectivity everywhere.", ar: "اتصال سلس في كل مكان.", eg: "اتصال سلس في كل مكان." } },
  { image: "/hero-6.png", text: { en: "Empowering your digital journey.", ar: "تمكين رحلتك الرقمية.", eg: "تمكين رحلتك الرقمية." } },
  { image: "/hero-7.png", text: { en: "Your partner in digital transformation.", ar: "شريكك في التحول الرقمي.", eg: "شريكك في التحول الرقمي." } },
  { image: "/hero-8.png", text: { en: "Leading the way in innovation.", ar: "قيادة الطريق في الابتكار.", eg: "قيادة الطريق في الابتكار." } },
  { image: "/hero-9.png", text: { en: "Transforming ideas into reality.", ar: "تحويل الأفكار إلى واقع.", eg: "تحويل الأفكار إلى واقع." } },
  { image: "/hero-10.png", text: { en: "Empowering your digital future.", ar: "تمكين مستقبلك الرقمي.", eg: "تمكين مستقبلك الرقمي." } }
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
