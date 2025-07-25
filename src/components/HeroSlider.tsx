import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import clsx from 'clsx'

const NAVBAR_HEIGHT = 64
const SLIDE_DURATION = 10000 // 10 ثواني
const TEXT_APPEAR_AFTER = 6000 // النص يظهر بعد 6 ثواني
const TEXT_VISIBLE_TIME = 3000  // النص يبقى ظاهر 3 ثواني
const MOBILE_MIN_HEIGHT = 500

const slides = [
  { image: '/hero1.png', text: { en: 'Technology that leads.', ar: 'تقنية تقود.' } },
  { image: '/hero2.png', text: { en: 'Data flows, growth follows.', ar: 'تدفق البيانات... ينمو.' } },
  { image: '/hero3.png', text: { en: 'Smart partner in transformation.', ar: 'شريك ذكي للتحول.' } },
  { image: '/hero4.png', text: { en: 'Innovation with trust.', ar: 'ابتكار بثقة.' } },
  { image: '/hero5.png', text: { en: 'Seamless connectivity everywhere.', ar: 'اتصال سلس في كل مكان.' } },
]

export default function HeroSlider() {
  const { language } = useLanguage()
  const [index, setIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const isRTL = language !== 'en'
  const slide = slides[index]
  const textSide = isRTL ? (index % 2 ? 'left' : 'right') : (index % 2 ? 'right' : 'left')

  // Main timing control
  useEffect(() => {
    setShowText(false)
    const textTimer = setTimeout(() => setShowText(true), TEXT_APPEAR_AFTER)
    const hideTextTimer = setTimeout(() => setShowText(false), SLIDE_DURATION - 500)
    const slideTimer = setTimeout(() => {
      setIndex(i => (i + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(hideTextTimer)
      clearTimeout(slideTimer)
    }
  }, [index])

  // Choose zoom effect: even = zoom in, odd = zoom out (always covers container)
  const isZoomIn = index % 2 === 0
  const imgVariants = isZoomIn
    ? {
        initial: { scale: 1, opacity: 0 },
        animate: {
          scale: 1.12, opacity: 1,
          transition: { duration: SLIDE_DURATION / 1000, ease: easeInOut }
        },
        exit: { opacity: 0, transition: { duration: 1, ease: easeInOut } }
      }
    : {
        initial: { scale: 1.12, opacity: 0 },
        animate: {
          scale: 1, opacity: 1,
          transition: { duration: SLIDE_DURATION / 1000, ease: easeInOut }
        },
        exit: { opacity: 0, transition: { duration: 1, ease: easeInOut } }
      }

  // Text animation: magic fade/slide, alternates left/right, floats over with glow/shadow
  const textMotion = {
    initial: { opacity: 0, x: textSide === 'left' ? -60 : 60, filter: 'blur(4px)' },
    animate: {
      opacity: 1, x: 0, filter: 'blur(0px)',
      transition: { duration: 1, ease: easeInOut }
    },
    exit: { opacity: 0, x: textSide === 'left' ? 60 : -60, filter: 'blur(10px)', transition: { duration: 1, ease: easeInOut } }
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: NAVBAR_HEIGHT,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={`slide-${index}`}
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            style={{ minHeight: MOBILE_MIN_HEIGHT, zIndex: 10 }}
            {...imgVariants}
          />
        </AnimatePresence>
        {/* Glow gradient for overlay magic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
      </div>

      <AnimatePresence>
        {showText && (
          <motion.h2
            key={`text-${index}`}
            className={clsx(
              'absolute top-1/2 -translate-y-1/2 px-6 py-3 text-3xl md:text-5xl lg:text-6xl font-bold',
              'drop-shadow-xl shadow-black/60 rounded-3xl text-white select-none',
              'backdrop-blur-sm bg-white/10',
              textSide === 'left' ? 'left-6 md:left-20 text-left' : 'right-6 md:right-20 text-right',
              isRTL ? 'font-[Tajawal] tracking-wide' : 'font-[Montserrat] tracking-tight'
            )}
            {...textMotion}
            style={{
              letterSpacing: isRTL ? '0.03em' : '0.01em',
              lineHeight: 1.18,
              border: '1.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 4px 40px 0 rgba(15,40,100,0.15)',
              textShadow: '0 4px 40px rgba(5,20,60,0.13),0 1px 2px #000c',
              zIndex: 22,
              fontWeight: 800
            }}
          >
            {slide.text[language]}
          </motion.h2>
        )}
      </AnimatePresence>
    </section>
  )
}
