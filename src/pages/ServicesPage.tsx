import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ServicesSection from '@/components/sections/Services';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  const serviceDetails = [
    {
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        'تصميم متجاوب لجميع الأجهزة',
        'تحسين محركات البحث SEO',
        'أمان متقدم وحماية البيانات',
        'إدارة المحتوى بسهولة',
        'تحليلات مفصلة للأداء',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [
        'تطبيقات iOS و Android الأصلية',
        'تطبيقات متعددة المنصات',
        'واجهات مستخدم جذابة',
        'أداء عالي وسرعة استجابة',
        'تكامل مع الخدمات السحابية',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: t('services.software.title'),
      description: t('services.software.description'),
      features: [
        'أنظمة إدارة مخصصة',
        'حلول أتمتة العمليات',
        'تكامل مع الأنظمة الموجودة',
        'واجهات برمجة التطبيقات API',
        'دعم فني مستمر',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              تفاصيل خدماتنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعد في تطوير أعمالك
            </p>
          </motion.div>

          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button className="group hover:scale-105 transition-all duration-300">
                        اطلب الخدمة
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`w-full h-96 bg-gradient-to-br ${service.color} rounded-2xl shadow-xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;