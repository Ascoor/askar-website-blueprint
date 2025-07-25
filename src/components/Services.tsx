
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Brain, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Code,
  Smartphone,
  Database,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Cloud,
      key: 'cloudSolutions',
      features: ['cloudFeature1', 'cloudFeature2', 'cloudFeature3']
    },
    {
      icon: Brain,
      key: 'aiSolutions',
      features: ['aiFeature1', 'aiFeature2', 'aiFeature3']
    },
    {
      icon: Code,
      key: 'customDevelopment',
      features: ['devFeature1', 'devFeature2', 'devFeature3']
    },
    {
      icon: Smartphone,
      key: 'mobileApps',
      features: ['mobileFeature1', 'mobileFeature2', 'mobileFeature3']
    },
    {
      icon: Database,
      key: 'dataAnalytics',
      features: ['dataFeature1', 'dataFeature2', 'dataFeature3']
    },
    {
      icon: Globe,
      key: 'webSolutions',
      features: ['webFeature1', 'webFeature2', 'webFeature3']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const whileHover = {
    y: -10,
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={itemVariants}
                whileHover={whileHover}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t(service.key)}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(`${service.key}Desc`)}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('learnMore')}
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
