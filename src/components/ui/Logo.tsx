import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
export const Logo = () => {
  const { direction } = useLanguage();
  const { theme } = useTheme(); // 'dark' أو 'light'

  // حدد مسار الشعار حسب الوضع
  const logoVariant = theme === 'dark' ? 'logo-dark.png' : 'logo-day.png';

  return (
    <Link to="/" className="group flex items-center space-x-3 rtl:space-x-reverse">
      <span className="
        flex items-center justify-center
        rounded-2xl transition-all duration-300 ease-in-out
        group-hover:scale-105 group-hover:shadow-lg
        bg-transparent
      ">
        <img
          src={`/${logoVariant}`}
          alt="Ask-ar Logo"
          className="w-21 h-12 object-contain select-none"
          style={{ filter: "drop-shadow(0 4px 14px #06B6D499)" }}
          draggable={false}
        />
      </span>
    </Link>
  );
};
