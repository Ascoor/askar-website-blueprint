**Section 1: Image prompts**

1. *Digital Transformation Panorama* – "Ultra-wide 16:9 view of a cutting-edge digital workspace, sleek glass buildings glowing with blue neon, people interacting with holographic data interfaces, futuristic city skyline in the background, vibrant lights, modern tech vibe."
2. *Cloud Solutions Skyline* – "Panoramic cloud-computing concept, skyscrapers merging into floating servers, streams of data flowing upward into the sky, soft clouds illuminated by sunrise hues, dynamic perspective, modern corporate style."
3. *AI Insights Visualization* – "Wide-angle 16:9 scene of a high-tech command center, large screens displaying AI-generated analytics and graphs, diverse team collaborating, deep blue and purple color palette, subtle tech glow, forward-looking ambience."

---

**Section 2: React + Tailwind + Framer Motion**

```tsx
// HeroSlideshow.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/slide1.jpg", // Digital Transformation
    title: "Empower Digital Change",
    subtitle: "Streamline operations with cutting-edge solutions.",
  },
  {
    image: "/images/slide2.jpg", // Cloud Solutions
    title: "Scale with the Cloud",
    subtitle: "Reliable, secure, and scalable infrastructure.",
  },
  {
    image: "/images/slide3.jpg", // AI Insights
    title: "Leverage AI Insights",
    subtitle: "Data-driven decisions for tomorrow’s success.",
  },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = slides[index];

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={image}
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
```

---

**Section 3: Titles and Subtitles per Slide**

1. **Empower Digital Change** – "Streamline operations with cutting-edge solutions."
2. **Scale with the Cloud** – "Reliable, secure, and scalable infrastructure."
3. **Leverage AI Insights** – "Data-driven decisions for tomorrow’s success."
