import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const NAVBAR_HEIGHT = 64
const TRANSITION_DURATION = 3.5 // Slower, smoother
const DISPLAY_DURATION = 8000 // Slower change
const MOBILE_MIN_HEIGHT = 500

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
  '/hero4.png',
  '/hero5.png',
]

// Alternate directions (slide in/out from left/right)
const directions = [
  { in: 100, out: -100 },
  { in: -100, out: 100 },
]

const HeroSlider: React.FC = () => {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [directionIdx, setDirectionIdx] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(i => (i + 1) % images.length)
      setDirectionIdx(d => (d + 1) % directions.length)
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
            src={images[index]}
            alt={`Hero slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{
              opacity: 0,
              x: directions[directionIdx].in,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: directions[directionIdx].out,
            }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: 'easeInOut',
            }}
            style={{
              minHeight: `${MOBILE_MIN_HEIGHT}px`,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('heroSubtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
