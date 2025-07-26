import React from 'react';
import { siteData } from '@/data/data';
import { motion } from 'framer-motion';

const SitePortfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 bg-muted" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.portfolio.map((item, idx) => (
            <motion.a
              whileHover={{ translateY: -8 }}
              transition={{ duration: 0.3 }}
              key={idx}
              href={item.link}
              className="block bg-card shadow rounded overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitePortfolio;
