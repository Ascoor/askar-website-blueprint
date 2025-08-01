import React from 'react';
import { cn } from '@/lib/utils';

interface MascotProps {
  className?: string;
}

export const PenguinMascot: React.FC<MascotProps> = ({ className }) => (
  <img
    src="/penguin.gif"
    alt="Futuristic Penguin Mascot"
    className={cn(
      'mx-auto w-32 md:w-48 drop-shadow-[0_0_20px_theme(colors.brand-glow)]',
      className,
    )}
    draggable={false}
  />
);

export default PenguinMascot;
