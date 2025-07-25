import React from "react";
import { cn } from "@/lib/utils";

export interface CodeOrbitLoaderProps {
  className?: string;
}

/**
 * CodeOrbitLoader shows dashed rings orbiting a
 * </> symbol to suggest programming activity.
 */
export const CodeOrbitLoader: React.FC<CodeOrbitLoaderProps> = ({ className }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-spin" />
      <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/60 animate-spin-reverse" />
      <span className="relative text-primary font-mono text-sm">{'</>'}</span>
    </div>
  );
};

export default CodeOrbitLoader;
