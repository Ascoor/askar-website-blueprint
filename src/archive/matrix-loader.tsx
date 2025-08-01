import React from 'react';
import { cn } from '@/lib/utils';

export interface MatrixLoaderProps {
  className?: string;
}

/**
 * MatrixLoader displays vertical bars that scale
 * up and down in sequence, evoking a digital code effect.
 */
export const MatrixLoader: React.FC<MatrixLoaderProps> = ({ className }) => {
  return (
    <div className={cn('flex items-end gap-1', className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.1}s` }}
          className="w-1.5 h-4 bg-primary rounded-sm animate-matrix"
        />
      ))}
    </div>
  );
};

export default MatrixLoader;
