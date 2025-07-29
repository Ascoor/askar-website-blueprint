// src/components/ui/Preloader.tsx
import React, { useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // مدة العرض قبل الإخفاء

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* صورة البطريق */}
        <img
 
  src="/logo.gif"
  alt="Loading Penguin"
  className="w-40 h-40 object-contain drop-shadow-2xl"
/>
 
        <p className="text-white text-lg animate-pulse font-medium tracking-wider">
          البطريق الذكي يعمل على تجهيز النظام...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
