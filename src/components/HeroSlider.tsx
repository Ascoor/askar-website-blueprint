import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
  '/hero4.png',
  '/hero5.png'
];

const transitionDuration = 1.4; // seconds
const displayDuration = 5000; // milliseconds

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, displayDuration);
    return () => clearTimeout(timer);
  }, [index, paused]);

  const pause = () => setPaused(true);
  const play = () => setPaused(false);

  return (
    <section
      id="hero"
      className="relative h-[90vh] w-full overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={play}
      onTouchStart={pause}
      onTouchEnd={play}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
        />
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;
