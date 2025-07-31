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
    <section className="h-screen w-full py-20 relative flex md:flex-row flex-col justify-center items-center gap-10 bg-gray-900 dark:bg-black">
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)] dark:from-[var(--hero-gradient-dark-from)] dark:to-[var(--hero-gradient-dark-to)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full h-full flex justify-center items-center">
            {/* Spinner colors for day and night */}
            <div className="absolute animate-spin h-[16rem] w-[16rem] rounded-full border-tr-4 border-b-4 border-[hsl(var(--brand-primary))] dark:border-[var(--spinner-dark-1)]"></div>
            <div className="absolute animate-spin h-[14rem] w-[14rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-secondary))] dark:border-[var(--spinner-dark-2)]"></div>
            <div className="absolute animate-spin h-[12rem] w-[12rem] rounded-full border-tr-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-3)]"></div>
            <div className="absolute animate-spin h-[10rem] w-[10rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-primary))] dark:border-[var(--spinner-dark-4)]"></div>
            <div className="absolute animate-spin h-[8rem] w-[8rem] rounded-full border-tr-4 border-b-4 border-[hsl(var(--brand-secondary))] dark:border-[var(--spinner-dark-5)]"></div>
            <div className="absolute animate-spin h-[6rem] w-[6rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-6)]"></div>

            <div className="rounded-full h-28 w-28 animate-bounce flex items-center justify-center font-semibold text-xl text-white">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
