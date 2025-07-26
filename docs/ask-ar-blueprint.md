# Ask-ar Blueprint: TailwindCSS + TypeScript

هذه الوثيقة توضح خطوات إنشاء موقع React + Vite باستخدام TailwindCSS و TypeScript مع دعم الوضعين الفاتح والداكن واللغتين العربية والإنجليزية.

## المميزات

- تصميم متجاوب احترافي
- دعم الوضعين (Light/Dark)
- دعم اللغتين مع اتجاه RTL
- قسم Hero متحرك مع Slider
- أقسام للخدمات والمشاريع ومن نحن وتواصل معنا
- تحسينات SEO عبر مكون `<Seo>`
- تحسين الأداء عبر Lazy Loading و Preload
- تحسين إمكانية الوصول (WCAG 2.1 AA)
- دعم PWA وبنية جاهزة لـ CI/CD

## هيكل المشروع

```text
ask-ar/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── public/
│   ├── logo.png
│   ├── logo-dark.png
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── contexts/
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Seo.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Button.tsx
│   │   │   └── NavBar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   └── services.ts
│   ├── hooks/
│   │   └── useDarkMode.ts
│   └── router/
│       └── index.tsx
```

## التهيئة الأولى

```bash
npm create vite@latest ask-ar -- --template react-ts
cd ask-ar
npm install tailwindcss postcss autoprefixer react-helmet-async framer-motion i18next react-i18next @headlessui/react @heroicons/react
npx tailwindcss init -p
```

### إعداد `tailwind.config.ts`

```ts
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00b4d8",
        secondary: "#0077b6",
      },
    },
  },
  plugins: [],
};
```

### ملف `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

## سياق الوضع الداكن

```tsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

## مكون SEO

```tsx
import { Helmet } from "react-helmet-async";

export const Seo = ({ title, description }: { title: string; description: string }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);
```

## مكون الشعار

```tsx
import { useTheme } from "@/contexts/ThemeContext";

export const Logo = () => {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
      alt="Ask-ar Logo"
      className="h-12 w-auto sm:h-14 md:h-16"
    />
  );
};
```

## قسم Hero المتحرك

```tsx
import { motion } from "framer-motion";

export const Hero = () => (
  <section className="bg-gradient-to-r from-primary to-secondary text-white min-h-screen flex flex-col items-center justify-center text-center">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
    >
      Building Future-Ready Software Solutions
    </motion.h1>
    <p className="text-lg sm:text-xl max-w-2xl mb-6">
      Ask-ar delivers cutting-edge technology and digital transformation services tailored for your business.
    </p>
    <a href="#services" className="bg-white text-primary px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
      Explore Services
    </a>
  </section>
);
```

## التجميع في الصفحة الرئيسية

```tsx
import { Seo } from "@/components/ui/Seo";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const Home = () => (
  <>
    <Seo title="Ask-ar | Software Solutions" description="Innovative software and digital solutions by Ask-ar." />
    <Hero />
    <Services />
    <Projects />
    <About />
    <Contact />
  </>
);
```

## التشغيل

```bash
npm run dev
```

