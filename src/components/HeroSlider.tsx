import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence ,easeInOut} from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
 
const NAVBAR_HEIGHT = 64
const DISPLAY_DURATION = 7500 // ms
const MOBILE_MIN_HEIGHT = 500

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
  '/hero4.png',
  '/hero5.png',
]

const slideVariants = [
  // 1. Zoom In (center)
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
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98, 
      x: 0, 
      y: 0, 
      transition: { duration: 1.2, ease: easeInOut }
    }
  },
  // 2. Zoom Out (bottom-right)
  {
    initial: { opacity: 0, scale: 1.10, x: 0, y: 0 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1.10, 1.04, 1, 0.96, 0.93],
      x: [0, 0, 0, 0, 0],
      y: [0, 0, 0, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.15, 0.55, 0.8, 1],
        ease: easeInOut,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.93, 
      x: 0, 
      y: 0, 
      transition: { duration: 1.2, ease: easeInOut }
    }
  },
  // ... وباقي الأنيميشن بنفس الطريقة
  {
    initial: { opacity: 0, scale: 1, x: -40, y: 0 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1, 1.03, 1.04, 1, 0.97],
      x: [-40, 0, 20, 0, 0],
      y: [0, 0, 0, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.15, 0.55, 0.8, 1],
        ease: easeInOut,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.97, 
      x: 40, 
      y: 0, 
      transition: { duration: 1.2, ease: easeInOut }
    }
  },
  // 4. Diagonal Move (Up-Right)
  {
    initial: { opacity: 0, scale: 1.01, x: 0, y: 30 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1.01, 1.07, 1.09, 1, 0.97],
      x: [0, 0, 20, 0, 0],
      y: [30, 0, -20, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.18, 0.55, 0.8, 1],
        
ease: easeInOut,
      }
    },
    exit: { opacity: 0, scale: 0.97, x: 0, y: -20, transition: { duration: 1.2, ease: "easeInOut" } }
  },
  // 5. Zoom In + Slide Left
  {
    initial: { opacity: 0, scale: 1, x: 40, y: 0 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      scale: [1, 1.08, 1.12, 1, 0.96],
      x: [40, 0, -20, 0, 0],
      y: [0, 0, 0, 0, 0],
      transition: {
        duration: DISPLAY_DURATION / 1000,
        times: [0, 0.16, 0.58, 0.8, 1],
        
ease: easeInOut,
      }
    },
    exit: { opacity: 0, scale: 0.96, x: -40, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }
  }
]

const HeroSlider: React.FC = () => {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(i => (i + 1) % images.length)
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
