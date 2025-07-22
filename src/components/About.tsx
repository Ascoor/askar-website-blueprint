
import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '5+', label: t('yearsExperience') },
    { icon: Target, value: '100+', label: t('projectsCompleted') },
    { icon: Users, value: '50+', label: t('happyClients') },
    { icon: Zap, value: '15+', label: t('teamMembers') }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {t('aboutDesc')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden relative">
              {/* Floating elements */}
              <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">5+</div>
                  <div className="text-xl opacity-90">{t('yearsExperience')}</div>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-4 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
