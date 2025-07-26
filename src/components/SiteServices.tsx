import React from 'react';
import { siteData } from '@/data/data';

const SiteServices: React.FC = () => {
  return (
    <section id="services" className="py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">خدمات</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="text-primary mb-4 text-3xl">
                <i className={srv.icon}></i>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-card-foreground">{srv.title}</h3>
              <p className="text-muted-foreground text-sm">{srv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteServices;
