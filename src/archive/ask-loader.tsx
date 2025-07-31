import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AskLoaderProps {
  /** Optional additional container classes */
  className?: string;
  /** Color of the letters */
  color?: string;
  /** Width/height of the SVG */
  size?: number;
}

/**
 * AskLoader displays the company initials "ASK" drawn with
 * animated stroke lines on a dark background.
 */
export const AskLoader: React.FC<AskLoaderProps> = ({
  className,
  color = 'currentColor',
  size = 120,
}) => {
  const paths = [
    'M10 80 L30 20 L50 80 M20 60 H40', // A
    'M70 20 C50 20 50 40 70 40 C90 40 90 60 70 60 C50 60 50 80 70 80', // S
    'M90 20 V80 M90 50 L110 20 M90 50 L110 80', // K
  ];
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-neutral-900',
        className,
      )}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 120 100"
        fill="none"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={color}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default AskLoader;
