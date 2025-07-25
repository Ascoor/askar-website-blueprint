import React from 'react';
import { siteData } from '@/data/data';

const SiteServices: React.FC = () => {
  return (
    <section id="services" className="py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">خدمات</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 text-3xl">
                <i className={srv.icon}></i>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{srv.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{srv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteServices;
