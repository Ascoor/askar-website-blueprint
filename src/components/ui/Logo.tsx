import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Logo = () => {
  const { direction } = useLanguage();
  
  return (
    <Link to="/" className="group flex items-center space-x-3 rtl:space-x-reverse">
      <span className="
        w-12 h-12 
        flex items-center justify-center 
        rounded-2xl shadow-medium bg-gradient-turquoise
        ring-2 ring-gold/40
        transition-all duration-300 ease-in-out
        group-hover:scale-105 group-hover:ring-gold/80 group-hover:shadow-glow
        backdrop-blur-lg
        ">
        <span className="text-white font-bold text-xl select-none">AR</span>
      </span>
      <span className="text-2xl font-extrabold text-gradient-turquoise tracking-wide select-none">
        Ask-ar
      </span>
    </Link>
  );
};
