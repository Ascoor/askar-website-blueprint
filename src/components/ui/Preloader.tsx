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
            <div className="absolute animate-spin h-[28rem] w-[28rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-6)]"></div>
            <div className="absolute animate-spin h-[28rem] w-[28rem] rounded-full border-tr-4 border-b-4 border-[hsl(var(--brand-primary))] dark:border-[var(--spinner-dark-1)]"></div>
            <div className="absolute animate-spin h-[26rem] w-[26rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-6)]"></div>
            <div className="absolute animate-spin h-[24rem] w-[24rem] rounded-full border-tr-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-1)]"></div>
            <div className="absolute animate-spin h-[22rem] w-[22rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-primary))] dark:border-[var(--spinner-dark-4)]"></div>
            <div className="absolute animate-spin h-[20rem] w-[20rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-6)]"></div>
            <div className="absolute animate-spin h-[18rem] w-[18rem] rounded-full border-tr-4 border-b-4 border-[hsl(var(--brand-secondary))] dark:border-[var(--spinner-dark-5)]"></div>
            <div className="absolute animate-spin h-[16rem] w-[16rem] rounded-full border-tl-4 border-b-4 border-[hsl(var(--brand-accent))] dark:border-[var(--spinner-dark-6)]"></div>

            <div className="rounded-full h-36 w-36 animate-bounce flex items-center justify-center font-semibold text-xl text-white">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
