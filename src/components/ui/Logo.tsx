import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
export const Logo = () => {
  const { direction } = useLanguage();
  const { theme } = useTheme(); // 'dark' أو 'light'

  // حدد مسار الشعار حسب الوضع
  const logoVariant = theme === 'dark' ? 'patren-wh.png' : 'patren-blue.png';

  return (
    <Link to="/" className="flex items-center">
      <span className="flex items-center justify-center rounded-2xl">
        <img
          src={`/${logoVariant}`}
          alt="Ask-ar Logo"
          className="w-24 h-12 object-contain select-none drop-shadow-md"
          draggable={false}
        />
      </span>
    </Link>
  );
};
