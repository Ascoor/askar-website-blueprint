import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import clsx from 'clsx'

const NAVBAR_HEIGHT = 64
const SLIDE_DURATION = 5000 // 5 ثوانٍ بالمللي
const MOBILE_MIN_HEIGHT = 500

const slides = [
  { image: '/hero1.png', text: { en: 'Leading-edge technology.', ar: 'تكنولوجيا متقدمة.' } },
  { image: '/hero2.png', text: { en: 'Data that empowers growth.', ar: 'بيانات تُمكّن النمو.' } },
  { image: '/hero3.png', text: { en: 'Smart transformation partner.', ar: 'شريك التحول الذكي.' } },
  { image: '/hero4.png', text: { en: 'Innovate with confidence.', ar: 'ابتكار بثقة.' } },
  { image: '/hero5.png', text: { en: 'Connect seamlessly everywhere.', ar: 'اتصل بكل سلاسة في كل مكان.' } },
]

const HeroSlider: React.FC = () => {
  const { language } = useLanguage()
  const [index, setIndex] = useState(0)
  const isRTL = language !== 'en'
  const side = index % 2 === 0 ? 'left' : 'right'
  const actualSide = isRTL ? (side === 'left' ? 'right' : 'left') : side

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

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
            src={slides[index].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.05, 1],
              transition: { duration: SLIDE_DURATION / 1000, ease: 'easeInOut' },
            }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            style={{ minHeight: MOBILE_MIN_HEIGHT }}
          />
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.h2
          key={`text-${index}`}
          className={clsx(
            'absolute top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-5xl font-bold tracking-tight',
            actualSide === 'left' ? 'left-8' : 'right-8',
            isRTL ? 'text-right' : 'text-left',
          )}
          initial={{ opacity: 0, x: actualSide === 'left' ? -80 : 80 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          exit={{ opacity: 0, x: actualSide === 'left' ? 80 : -80, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {slides[index].text[language]}
        </motion.h2>
      </AnimatePresence>
    </section>
  )
}

export default HeroSlider
