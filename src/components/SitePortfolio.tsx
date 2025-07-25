import React from 'react';
import { siteData } from '@/data/data';
import { motion } from 'framer-motion';

const SitePortfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.portfolio.map((item, idx) => (
            <motion.a
              whileHover={{ translateY: -8 }}
              transition={{ duration: 0.3 }}
              key={idx}
              href={item.link}
              className="block bg-white dark:bg-gray-800 shadow rounded overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitePortfolio;
