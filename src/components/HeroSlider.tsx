import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAVBAR_HEIGHT = 64
const DISPLAY_DURATION = 3000 // ms
const MOBILE_MIN_HEIGHT = 500

const slides = [
  { image: '/hero1.png' },
  { image: '/hero2.png' },
  { image: '/hero3.png' },
  { image: '/hero4.png' },
  { image: '/hero5.png' },
]

const slideVariants = [
  // 1. slow zoom-in from center
  {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 1.1, transition: { duration: DISPLAY_DURATION / 1000 } },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 0.8 } },
  },
  // 2. fade-in with gentle zoom
  {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 1.05, transition: { duration: DISPLAY_DURATION / 1000 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.8 } },
  },
  // 3. slide in from right with light zoom
  {
    initial: { opacity: 0, x: 80, scale: 1 },
    animate: { opacity: 1, x: 0, scale: 1.05, transition: { duration: DISPLAY_DURATION / 1000 } },
    exit: { opacity: 0, x: -80, scale: 1.05, transition: { duration: 0.8 } },
  },
  // 4. subtle scale from center
  {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: DISPLAY_DURATION / 1000 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.8 } },
  },
  // 5. rise from bottom with zoom out
  {
    initial: { opacity: 0, y: 60, scale: 1.05 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: DISPLAY_DURATION / 1000 } },
    exit: { opacity: 0, y: -60, scale: 0.95, transition: { duration: 0.8 } },
  },
]

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, DISPLAY_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        paddingTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
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

      {/* overlay gradients for cinematic depth */}
    </section>
  )
}

export default HeroSlider
