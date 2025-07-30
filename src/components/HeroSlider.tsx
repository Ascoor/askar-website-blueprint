import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

 
const SLIDES = [ 
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
// مدة عرض الشريحة (مثلاً 15 ثانية = 15000 مللي ثانية)
const SLIDE_DURATION = 15000; // غيّر الرقم حسب ما تحب (من 10 إلى 20 ثانية... إلخ)
const FADE_DURATION = 1.6; // زمن التدرج في الدخول والخروج بالثواني (يُفضل يكون قصير نسبيًا)

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  // زوم إن للشريحة الزوجية - زوم أوت للفردية (حسب رغبتك)
  const getZoomType = (i) => (i % 2 === 0 ? "out" : "in");

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={SLIDES[active].image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            // لو زوم أوت: ابدأ مكبر (1.16) ثم صغر
            // لو زوم إن: ابدأ طبيعي ثم كبر
            scale: getZoomType(active) === "out" ? 1.16 : 1,
          }}
          animate={{
            opacity: 1,
            scale: getZoomType(active) === "out" ? 1 : 1.16,
            transition: {
              opacity: { duration: FADE_DURATION, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000, ease: "linear" },
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: FADE_DURATION, ease: "easeInOut" },
          }}
          style={{ minHeight: 500 }}
        />
      </AnimatePresence>
    </div>
  );
}
