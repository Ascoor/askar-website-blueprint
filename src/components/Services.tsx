
import React from 'react';
import { Code, Smartphone, Cloud, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, easeInOut } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('webDev'),
      description: t('webDevDesc'),
      color: 'bg-blue-500',
      delay: 0,
    },
    {
      icon: Smartphone,
      title: t('mobileDev'),
      description: t('mobileDevDesc'),
      color: 'bg-green-500',
      delay: 0.2,
    },
    {
      icon: Cloud,
      title: t('cloudSolutions'),
      description: t('cloudSolutionsDesc'),
      color: 'bg-purple-500',
      delay: 0.4,
    },
    {
      icon: Users,
      title: t('consulting'),
      description: t('consultingDesc'),
      color: 'bg-orange-500',
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: easeInOut }
                }}
                className="group"
              >
                <Card className="relative overflow-hidden h-full shadow-elegant hover:shadow-premium transition-all duration-500 border-0 bg-white dark:bg-gray-800">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
