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
        en: "Your Digital Power.",
        ar: "قوتك الرقمية.",
        eg: "قوتك الرقمية بإيدك."
      },
      subtitle: {
        en: "Own your digital world.",
        ar: "امتلك عالمك الرقمي.",
        eg: "عيش عالمك بطريقتك."
      }
    },
    {
      image: "/hero-3.png",
      text: {
        en: "Ideas That Grow.",
        ar: "أفكار تنمو.",
        eg: "فكرة تكبر وتغيّر."
      },
      subtitle: {
        en: "Tomorrow starts now.",
        ar: "المستقبل يبدأ الآن.",
        eg: "بكرة بيبدأ دلوقتي."
      }
    },
    {
      image: "/hero-4.png",
      text: {
        en: "Smart. Simple. Infinite.",
        ar: "ذكي. بسيط. لا نهائي.",
        eg: "ذكاء وسهولة مالهمش نهاية."
      },
      subtitle: {
        en: "No limits, just possibilities.",
        ar: "لا حدود، فقط إمكانيات.",
        eg: "إمكانياتك ملهاش آخر."
      }
    },
    {
      image: "/hero-5.png",
      text: {
        en: "Meet Tomorrow Today.",
        ar: "قابل بكرة النهاردة.",
        eg: "بكرة عندك دلوقتي."
      },
      subtitle: {
        en: "Step ahead. Always.",
        ar: "خطوة للأمام… دايمًا.",
        eg: "دايمًا سابق بخطوة."
      }
    },
    {
      image: "/hero-6.png",
      text: {
        en: "Dream Digital.",
        ar: "احلم رقمي.",
        eg: "احلمها رقمية."
      },
      subtitle: {
        en: "We build your vision.",
        ar: "نبني رؤيتك.",
        eg: "حلمك على أرض الواقع."
      }
    },
    {
      image: "/hero-7.png",
      text: {
        en: "Inspire. Invent. Impact.",
        ar: "ألهم، ابتكر، غيّر.",
        eg: "ألهم وابتكر وسيب بصمتك."
      },
      subtitle: {
        en: "Your impact begins here.",
        ar: "أثرك يبدأ من هنا.",
        eg: "أثرك يبدأ من عندنا."
      }
    },
    {
      image: "/hero-8.png",
      text: {
        en: "Empower Your Journey.",
        ar: "قوّي رحلتك.",
        eg: "رحلتك أقوى معانا."
      },
      subtitle: {
        en: "Together, we go further.",
        ar: "معًا نصل أبعد.",
        eg: "مع بعض نوصل لأبعد."
      }
    },
    {
      image: "/hero-9.png",
      text: {
        en: "Open New Worlds.",
        ar: "افتح عوالم جديدة.",
        eg: "عالم جديد بين إيديك."
      },
      subtitle: {
        en: "Endless doors to explore.",
        ar: "أبواب بلا نهاية.",
        eg: "فرص مابتخلصش."
      }
    },
    {
      image: "/hero-10.png",
      text: {
        en: "Make It Real.",
        ar: "حوّلها لواقع.",
        eg: "خليها حقيقة."
      },
      subtitle: {
        en: "Tech that delivers dreams.",
        ar: "تقنية تحقق الأحلام.",
        eg: "حلمك بيكبر مع تقنيتنا."
      }
    },
    {
      image: "/hero-11.png",
      text: {
        en: "Digital Redefined.",
        ar: "رقمي بشكل جديد.",
        eg: "الرقمي ليه معنى تاني."
      },
      subtitle: {
        en: "Excellence is our standard.",
        ar: "التميّز هو الأساس.",
        eg: "التميّز على أصوله."
      }
    },
    {
      image: "/hero-12.png",
      text: {
        en: "Your Vision, Our Code.",
        ar: "رؤيتك، كودنا.",
        eg: "رؤيتك، برمجتنا."
      },
      subtitle: {
        en: "Let’s build the future.",
        ar: "نبني المستقبل سويًا.",
        eg: "نكتب بكرة مع بعض."
      }
    }
  ];

const SLIDE_DURATION = 10000;
const FADE_DURATION = 1.6;

export default function HeroSlider({ lang = "en" }) {
  const [active, setActive] = useState(0);
  const [showText, setShowText] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "eg";

  useEffect(() => {
    setShowText(false);
    const textIn = setTimeout(() => setShowText(true), SLIDE_DURATION / 2.2);
    const textOut = setTimeout(() => setShowText(false), SLIDE_DURATION - 200);
    const nextSlide = setTimeout(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(textIn);
      clearTimeout(textOut);
      clearTimeout(nextSlide);
    };
  }, [active, language]);

  const textParentVariants = {
    initial: { opacity: 0, y: 40, filter: "blur(15px)", scale: 0.98 },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
    exit: { opacity: 0, y: 30, scale: 1.05, filter: "blur(10px)" }
  };
  const textChildVariants = {
    initial: { opacity: 0, x: isRTL ? 120 : -120, scale: 0.94, filter: "blur(14px)" },
    animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, x: isRTL ? -35 : 35, scale: 1.08, filter: "blur(10px)" }
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-gradient-to-br from-[#030c2e] to-[#020816]">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={SLIDES[active].image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            scale: (active % 2 === 0) ? 1.16 : 1,
          }}
          animate={{
            opacity: 1,
            scale: (active % 2 === 0) ? 1 : 1.16,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: { duration: FADE_DURATION, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000, ease: "linear" }
          }}
          style={{
            minHeight: 500,
            transform: isRTL ? "scaleX(-1)" : "none"
          }}
        />
      </AnimatePresence>

      {/* طبقة تدرج أعلى الصورة */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none z-10" />

      {/* النص في منتصف نصف الشاشة المناسب */}
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
              variants={textParentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`
                flex flex-col max-w-xl w-full
                ${isRTL ? "items-end text-right" : "items-start text-left"}
              `}
              transition={{
                duration: 1.0,
                staggerChildren: 0.22,
              }}
            >
              <motion.h1
                variants={textChildVariants}
                className={`
                  text-white/90 
                  text-xl sm:text-3xl md:text-5xl 
                  font-black 
                  drop-shadow-[0_3px_20px_rgba(64,168,255,0.30)]
                  tracking-tight mb-2 animate-pulse
                  ${isRTL ? "text-right" : "text-left"}
                `}
                transition={{
                  duration: 1.1,
                  type: "spring"
                }}
              >
                {SLIDES[active].text[language]}
              </motion.h1>
              <motion.p
                variants={textChildVariants}
                className={`
                  text-white/70
                  text-base sm:text-xl md:text-2xl
                  font-medium 
                  tracking-wide
                  drop-shadow
                  ${isRTL ? "text-right" : "text-left"}
                `}
                transition={{
                  duration: 1.1,
                  type: "spring"
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