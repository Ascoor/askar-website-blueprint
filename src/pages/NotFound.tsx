
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const NotFound = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1], delay: 0.4 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('notFound')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            {t('notFoundDesc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1], delay: 0.6 }}
        >
          <Button
            onClick={handleGoHome}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            {isRTL ? <ArrowLeft className="w-5 h-5 mr-2 rotate-180" /> : <Home className="w-5 h-5 mr-2" />}
            {t('backToHome')}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
