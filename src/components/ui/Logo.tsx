 
import { Link } from 'react-router-dom'; // أو 'next/link' إذا كنت تستخدم Next.js

export const Logo = () => (
  <Link href="/" className="group flex items-center space-x-3 rtl:space-x-reverse">
    <span className="
      w-12 h-12 
      flex items-center justify-center 
      rounded-2xl shadow-lg bg-gradient-to-tr from-turquoise to-blue-900 
      ring-2 ring-gold/40
      transition-all duration-300 ease-in-out
      group-hover:scale-105 group-hover:ring-gold/80
      backdrop-blur-lg
      ">
      <img
        src="/logo-4.svg"
        alt="Ask-ar Logo"
        className="w-10 h-10 object-contain select-none drop-shadow-xl transition-all duration-300 group-hover:brightness-125"
        style={{ filter: "drop-shadow(0 2px 10px #06B6D4aa)" }}
        draggable={false}
      />
    </span>
    <span className="text-2xl font-extrabold text-gradient bg-gradient-to-r from-blue-900 via-turquoise to-gold bg-clip-text text-transparent tracking-wide select-none shadow-sm">
      Ask-ar
    </span>
  </Link>
); 
