import React from 'react';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound: React.FC = () => {
  const { direction } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-turquoise/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary-light/30 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {direction === 'rtl' ? 'الصفحة غير موجودة' : 'Page Not Found'}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto leading-relaxed">
              {direction === 'rtl' 
                ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر.'
                : 'Sorry, the page you are looking for does not exist or has been moved to another location.'
              }
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-turquoise hover:bg-turquoise-dark text-white px-8 py-4 text-lg font-semibold hover-lift shadow-glow"
            >
              <Link to="/">
                <Home className="w-5 h-5" />
                {direction === 'rtl' ? 'العودة للرئيسية' : 'Go Home'}
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold hover-lift"
            >
              <Link to="/">
                <Search className="w-5 h-5" />
                {direction === 'rtl' ? 'البحث' : 'Search'}
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-16 glass rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-white font-semibold mb-3">
              {direction === 'rtl' ? 'تحتاج مساعدة؟' : 'Need Help?'}
            </h3>
            <p className="text-white/80 text-sm mb-4">
              {direction === 'rtl' 
                ? 'تواصل مع فريق الدعم للحصول على المساعدة'
                : 'Contact our support team for assistance'
              }
            </p>
            <Button
              asChild
              variant="ghost"
              className="text-turquoise hover:text-turquoise-light hover:bg-turquoise/10"
            >
              <Link to="#contact">
                {direction === 'rtl' ? 'اتصل بنا' : 'Contact Us'}
                <ArrowLeft className={`w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
