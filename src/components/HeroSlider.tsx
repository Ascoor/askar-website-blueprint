import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import clsx from 'clsx'

const NAVBAR_HEIGHT = 64
const DISPLAY_DURATION = 7500 // ms
const MOBILE_MIN_HEIGHT = 500

const slides = [
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
]

const slideVariants = [
  // 1. Slow Zoom In (center)
  {
    initial: { opacity: 0, scale: 1, x: 0, y: 0 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1, 1.08, 1.12, 1, 0.98],
      x: [0, 0, 0, 0, 0],
      y: [0, 0, 0, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.18, 0.55, 0.8, 1],
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: easeInOut },
    },
  },
  // 2. Zoom Out with slight pan right
  {
    initial: { opacity: 0, scale: 1.1, x: 20, y: 0 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1.1, 1.04, 1, 0.96, 0.93],
      x: [20, 0, -10, -20, -30],
      y: [0, 0, 0, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.15, 0.55, 0.8, 1],
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.93,
      x: -40,
      y: 0,
      transition: { duration: 1.2, ease: easeInOut },
    },
  },
  // 3. Zoom In from left
  {
    initial: { opacity: 0, scale: 1, x: -40, y: 0 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1, 1.07, 1.12, 1, 0.97],
      x: [-40, 0, 10, 0, 0],
      y: [0, 0, 0, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.16, 0.58, 0.8, 1],
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      x: 40,
      y: 0,
      transition: { duration: 1.2, ease: easeInOut },
    },
  },
  // 4. Diagonal Zoom Out (up-right)
  {
    initial: { opacity: 0, scale: 1.1, x: 30, y: 20 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1.1, 1.05, 1, 0.97, 0.94],
      x: [30, 10, 0, -10, -20],
      y: [20, 10, 0, -10, -20],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.18, 0.55, 0.8, 1],
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      x: -30,
      y: -30,
      transition: { duration: 1.2, ease: easeInOut },
    },
  },
  // 5. Zoom In from bottom
  {
    initial: { opacity: 0, scale: 1, x: 0, y: 40 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1, 1.08, 1.12, 1, 0.96],
      x: [0, 0, 0, 0, 0],
      y: [40, 10, 0, -10, -20],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.16, 0.58, 0.8, 1],
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      x: 0,
      y: -40,
      transition: { duration: 1.2, ease: easeInOut },
    },
  },
]

const HeroSlider: React.FC = () => {
  const { language } = useLanguage()
  const [index, setIndex] = useState(0)

  const isRTL = language !== 'en'
  const side = index % 2 === 0 ? 'left' : 'right'
  const actualSide = isRTL ? (side === 'left' ? 'right' : 'left') : side
  const sign = actualSide === 'left' ? -1 : 1
  const fromX = 60 * sign
  const exitX = -60 * sign

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(i => (i + 1) % slides.length)
    }, DISPLAY_DURATION)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden mt-6 flex items-center justify-center"
      style={{
        paddingTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(115vh - ${NAVBAR_HEIGHT}px)`,
        maxHeight: '1024px',
      }}
    >
   <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={`Hero slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            variants={slideVariants[index % slideVariants.length]}
            initial="initial"
            animate="show"
            exit="exit"
            style={{
              minHeight: `${MOBILE_MIN_HEIGHT}px`,
              zIndex: 10,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-20 flex h-full w-full items-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={clsx(
              'absolute top-1/2 -translate-y-1/2 max-w-md md:max-w-lg text-white p-6 rounded-xl border border-white/30 backdrop-blur-md bg-white/20 shadow-glow',
              isRTL ? 'text-right' : 'text-left',
              actualSide === 'left' ? 'left-4 sm:left-16' : 'right-4 sm:right-16'
            )}
            initial={{ opacity: 0, x: fromX }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: exitX }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-bold text-2xl md:text-4xl">
              {slides[index].text[language]}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default HeroSlider
