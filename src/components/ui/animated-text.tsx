import * as React from 'react';
import { motion, type Variants } from 'framer-motion';

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { ease: 'easeIn', duration: 0.3 } },
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ display: 'inline-block' }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
