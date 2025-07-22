
import React from 'react';
import { Code, Smartphone, Cloud, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('webDev'),
      description: t('webDevDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: t('mobileDev'),
      description: t('mobileDevDesc'),
      color: 'bg-green-500'
    },
    {
      icon: Cloud,
      title: t('cloudSolutions'),
      description: t('cloudSolutionsDesc'),
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: t('consulting'),
      description: t('consultingDesc'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
