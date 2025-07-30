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
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#030c2e] to-[#020816] dark:bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full h-full flex justify-center items-center">
            {/* Spinner colors for day and night */}
            <div className="absolute animate-spin h-[16rem] w-[16rem] rounded-full border-tr-4 border-b-4 border-[#36B3F5] dark:border-[#004C7C]"></div>
            <div className="absolute animate-spin h-[14rem] w-[14rem] rounded-full border-tl-4 border-b-4 border-[#81D4FA] dark:border-[#0066CC]"></div>
            <div className="absolute animate-spin h-[12rem] w-[12rem] rounded-full border-tr-4 border-b-4 border-[#004C7C] dark:border-[#2C3E50]"></div>
            <div className="absolute animate-spin h-[10rem] w-[10rem] rounded-full border-tl-4 border-b-4 border-[#36B3F5] dark:border-[#3498DB]"></div>
            <div className="absolute animate-spin h-[8rem] w-[8rem] rounded-full border-tr-4 border-b-4 border-[#81D4FA] dark:border-[#2980B9]"></div>
            <div className="absolute animate-spin h-[6rem] w-[6rem] rounded-full border-tl-4 border-b-4 border-[#004C7C] dark:border-[#1ABC9C]"></div>

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
