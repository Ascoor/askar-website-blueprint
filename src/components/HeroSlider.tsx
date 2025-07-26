import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

const NAVBAR_HEIGHT = 64;
const SLIDE_DURATION = 10000; // 10 seconds
const TEXT_APPEAR_AFTER = SLIDE_DURATION - 5000; // last 5 sec
const MOBILE_MIN_HEIGHT = 400;
const EASING = [0.42, 0, 0.58, 1] as const;

interface SlideData {
  image: string;
  text: { en: string; ar: string; eg: string };
}

const slides: SlideData[] = [
  { image: "/hero1.png", text: { en: "Technology that leads the future.", ar: "تقنية تقود المستقبل.", eg: "تقنية تقود المستقبل." } },
  { image: "/hero2.png", text: { en: "Data flows, growth follows.", ar: "تدفق البيانات، ينمو النجاح.", eg: "البيانات تتدفق، والنمو يتبع." } },
  { image: "/hero3.png", text: { en: "Smart partner in transformation.", ar: "شريك ذكي في التحول.", eg: "شريك ذكي في التحول." } },
  { image: "/hero4.png", text: { en: "Innovation with trust.", ar: "ابتكار بثقة.", eg: "ابتكار بثقة." } },
  { image: "/hero5.png", text: { en: "Seamless connectivity everywhere.", ar: "اتصال سلس في كل مكان.", eg: "اتصال سلس في كل مكان." } }
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
    const slideTimer = setTimeout(() => {
      setShowText(false);
      nextSlide();
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, nextSlide]);

  /** تحديد اتجاه الزوم لكل شريحة */
  const isZoomIn = currentIndex % 2 === 0;

  /** حركات الصور */
  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      scale: isZoomIn ? 1 : 1.2,
      rotateZ: isZoomIn ? -1.5 : 1.5,
      rotateY: isZoomIn ? -8 : 8,
      rotateX: isZoomIn ? 3 : -3
    },
    animate: {
      opacity: 1,
      scale: isZoomIn ? 1.25 : 1, // تكبير مستمر أو تصغير مستمر
      rotateZ: isZoomIn ? 2 : -2,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: SLIDE_DURATION / 1000,
        ease: EASING
      }
    },
    exit: {
      opacity: 0, // فقط تقليل الشفافية بدون أي تغيير في الزوم
      transition: {
        duration: 1.5,
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
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: NAVBAR_HEIGHT,
        minHeight: `calc(110vh - ${NAVBAR_HEIGHT}px)`
      }}
    >
      <div className="absolute inset-0 w-full h-full perspective-[1200px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={`slide-img-${currentIndex}`}
            variants={imageVariants}
            initial="initial"
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
      </div>

      {/* النص */}
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
