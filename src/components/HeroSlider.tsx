  import React, { useEffect, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { useLanguage } from "@/contexts/LanguageContext";
    // Last 5 seconds

  const SLIDES = [
    {
      image: "/hero-1.png",
      text: {
        en: "Limitless Innovation.",
        ar: "ابتكار بلا حدود.",
        eg: "الابتكار ملوش آخر."
      },
      subtitle: {
        en: "Push beyond the possible.",
        ar: "اكسر حدود الممكن.",
        eg: "خلي الحلم حقيقة."
      }
    },
    {
      image: "/hero-2.png",
      text: {
        en: "Empowering Tomorrow.",
        ar: "تمكين الغد.",
        eg: "مستقبلنا في إيدينا."
      },
      subtitle: {
        en: "Crafting a brighter future.",
        ar: "نبني مستقبلًا مشرقًا.",
        eg: "نرسم مستقبل أفضل."
      }
    },
    {
      image: "/hero-3.png",
      text: {
        en: "Unleashing Potential.",
        ar: "إطلاق العنان للإمكانات.",
        eg: "إمكانياتنا بلا حدود."
      },
      subtitle: {
        en: "Discover your true capabilities.",
        ar: "اكتشف إمكانياتك الحقيقية.",
        eg: "اكتشف قدراتك الحقيقية."
      }
    },
    {
      image: "/hero-4.png",
      text: {
        en: "Innovate. Inspire. Impact.",
        ar: "ابتكر. ألهم. أثر.",
        eg: "ابتكر. ألهم. اترك أثر."
      },
      subtitle: {
        en: "Transforming ideas into reality.",
        ar: "تحويل الأفكار إلى واقع.",
        eg: "نحوّل الأفكار لواقع ملموس."
      }
    } 

  ];
const SLIDE_DURATION = 10000;         // 10 ثواني
const TRANSITION_DURATION = 1.6;      // زمن التدرج بين الشرائح
const BLEND_DURATION = 1400;          // ms الدمج بين الشرائح (crossfade)

export default function HeroSlider({ lang = "en" }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [showText, setShowText] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "eg";

  // Auto-slide logic
  useEffect(() => {
    setShowText(false);
    const textIn = setTimeout(() => setShowText(true), SLIDE_DURATION / 2.4);
    const textOut = setTimeout(() => setShowText(false), SLIDE_DURATION - BLEND_DURATION + 400);
    const nextSlide = setTimeout(() => {
      setPrev(active);
      setActive((i) => (i + 1) % SLIDES.length);
      setTimeout(() => setPrev(null), BLEND_DURATION * 0.96); // Remove prev after blend
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(textIn);
      clearTimeout(textOut);
      clearTimeout(nextSlide);
    };
  }, [active, language]);

  // Get motion scale for each state
  const getCurrentScaleInit = (idx) => (idx % 2 === 0 ? 1.16 : 1.18); // فردية: زوم إن، زوجية: زوم أوت
  const getCurrentScaleEnd = (idx) => 1;                              // تنتهي عند 1
  const getPrevScaleExit = (idx) => (idx % 2 === 0 ? 1.05 : 1.24);    // تأثير خروج مختلف حسب زوجية الشريحة

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-gradient-to-br from-[#030c2e] to-[#020816]">

      {/* صورة الشريحة السابقة (خروج تدريجي) */}
      <AnimatePresence>
        {prev !== null && (
          <motion.img
            key={"prev" + prev}
            src={SLIDES[prev].image}
            alt={SLIDES[prev].text[language]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{
              opacity: 1,
              scale: getCurrentScaleEnd(prev),
              filter: "blur(0px)"
            }}
            animate={{
              opacity: 0,
              scale: getPrevScaleExit(prev),
              filter: "blur(16px)"
            }}
            exit={{}}
            transition={{
              opacity: { duration: TRANSITION_DURATION, ease: "easeInOut" },
              scale: { duration: TRANSITION_DURATION, ease: "linear" },
              filter: { duration: TRANSITION_DURATION * 0.7, ease: "easeInOut" }
            }}
            style={{
              minHeight: 500,
              zIndex: 2,
              transform: isRTL ? "scaleX(-1)" : "none"
            }}
          />
        )}
      </AnimatePresence>

      {/* صورة الشريحة الحالية (دخول تدريجي) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={"active" + active}
          src={SLIDES[active].image}
          alt={SLIDES[active].text[language]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            scale: getCurrentScaleInit(active),
            filter: "blur(16px)"
          }}
          animate={{
            opacity: 1,
            scale: getCurrentScaleEnd(active),
            filter: "blur(0px)"
          }}
          exit={{}}
          transition={{
            opacity: { duration: TRANSITION_DURATION + 0.2, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000, ease: "linear" },
            filter: { duration: TRANSITION_DURATION * 0.9, ease: "easeInOut" }
          }}
          style={{
            minHeight: 500,
            zIndex: 3,
            transform: isRTL ? "scaleX(-1)" : "none"
          }}
        />
      </AnimatePresence>

      {/* تدرج ثابت لجمال الصورة */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none z-10" />

      {/* النصوص (عرضها في نصف الشاشة المناسب) */}
      <div
        className={`
          absolute inset-y-0
          ${isRTL ? "right-0" : "left-0"}
          w-1/2
          flex items-center
          ${isRTL ? "justify-end pr-10" : "justify-start pl-10"}
          z-20
          pointer-events-none
        `}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <AnimatePresence>
          {showText && (
            <motion.div
              key={active + language}
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              transition={{
                duration: 1.0,
                staggerChildren: 0.22,
              }}
              className={`
                flex flex-col max-w-xl w-full
                ${isRTL ? "items-end text-right" : "items-start text-left"}
              `}
            >
              <motion.h1
                initial={{ opacity: 0, x: isRTL ? 120 : -120, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: isRTL ? -35 : 35, scale: 1.08 }}
                transition={{ duration: 1.1, type: "spring" }}
                className={`
                  text-white/90 
                  text-xl sm:text-3xl md:text-5xl 
                  font-black 
                  drop-shadow-[0_3px_20px_rgba(64,168,255,0.30)]
                  tracking-tight mb-2 animate-pulse
                  ${isRTL ? "text-right" : "text-left"}
                `}
              >
                {SLIDES[active].text[language]}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: isRTL ? 96 : -96, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: isRTL ? -28 : 28, scale: 1.07 }}
                transition={{ duration: 1.1, type: "spring" }}
                className={`
                  text-white/70
                  text-base sm:text-xl md:text-2xl
                  font-medium 
                  tracking-wide
                  drop-shadow
                  ${isRTL ? "text-right" : "text-left"}
                `}
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