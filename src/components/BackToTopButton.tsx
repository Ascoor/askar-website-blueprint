import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t, direction } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const positionClass = direction === 'rtl' ? 'left-5' : 'right-5';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          aria-label={t('back_to_top')}
          onClick={scrollToTop}
          className={`fixed bottom-5 ${positionClass} z-40 rounded-full bg-turquoise text-white shadow-glow hover:shadow-strong transition-smooth hover:rotate-90 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side={direction === 'rtl' ? 'left' : 'right'}>
        {t('back_to_top')}
      </TooltipContent>
    </Tooltip>
  );
};
