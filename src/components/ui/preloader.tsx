import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  /** Optional additional classes for container */
  className?: string;
  /** Time in ms before the loader disappears */
  duration?: number;
  /** Called after the loader is fully hidden */
  onComplete?: () => void;
}

/**
 * Preloader displays the brand acronym "ASK" with futuristic
 * line animations on a dark background during initial page load.
 */
export const Preloader: React.FC<PreloaderProps> = ({
  className,
  duration = 3200,
  onComplete,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  useEffect(() => {
    if (!visible && onComplete) {
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
  }, [visible, onComplete]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  } as const;

  const letterVariants = {
    hidden: { pathLength: 0, fillOpacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        pathLength: { duration: 0.8, ease: 'easeInOut', delay: i * 0.05 },
        fillOpacity: { duration: 0.3, delay: 0.8 + i * 0.05 },
      },
    }),
  } as const;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center bg-[#0B0E14]',
            'overflow-hidden',
            className,
          )}
          variants={containerVariants}
          initial="visible"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="flex space-x-4 text-6xl font-heading drop-shadow-[0_0_15px_#36B3F5] text-[#36B3F5]"
            animate={{ scale: [1, 1.05, 1], opacity: [1, 1, 1] }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            {['A', 'S', 'K'].map((_, idx) => (
              <motion.svg
                key={idx}
                width="80"
                height="100"
                viewBox="0 0 120 100"
                fill="none"
                stroke="#5DCBFF"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={letterVariants}
                custom={idx}
                initial="hidden"
                animate="visible"
              >
                {idx === 0 && (
                  <motion.path d="M10 80 L30 20 L50 80 M20 60 H40" />
                )}
                {idx === 1 && (
                  <motion.path d="M70 20 C50 20 50 40 70 40 C90 40 90 60 70 60 C50 60 50 80 70 80" />
                )}
                {idx === 2 && (
                  <motion.path d="M90 20 V80 M90 50 L110 20 M90 50 L110 80" />
                )}
              </motion.svg>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
