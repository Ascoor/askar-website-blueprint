import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/navLinks';

const NAV_HEIGHT = 64;

const NavigationBar = () => {
  const [theme, setTheme] = useState(() =>
    (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light'
  );
  const [direction, setDirection] = useState('ltr');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = '';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - NAV_HEIGHT <= 0 && rect.bottom - NAV_HEIGHT > 0) {
            current = id;
          }
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  const toggleDir = () => setDirection(d => (d === 'ltr' ? 'rtl' : 'ltr'));

  const navClass = `fixed top-0 w-full z-50 transition-colors duration-300 ${
    scrolled
      ? theme === 'light'
        ? 'bg-white text-gray-800 shadow'
        : 'bg-gray-900 text-gray-100 shadow'
      : 'bg-transparent text-white'
  }`;

  return (
    <header className={navClass} style={{ height: NAV_HEIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 ${
            direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <a href="#" className="font-bold text-xl">
            Logo
          </a>
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-300 hover:text-[#2563EB] ${
                  active === link.id ? 'text-[#3B82F6]' : ''
                }`}
              >
                {direction === 'rtl' ? link.ar : link.en}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={toggleDir}
              aria-label="Toggle Language"
              className="p-2 rounded text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {direction === 'rtl' ? 'EN' : 'AR'}
            </button>
            <button
              onClick={() => setIsOpen(o => !o)}
              className="p-2 md:hidden"
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav
          className={`${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'} pb-4`}
        >
          <ul className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 transition-colors duration-300 hover:text-[#2563EB]"
                >
                  {direction === 'rtl' ? link.ar : link.en}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
