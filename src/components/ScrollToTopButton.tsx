import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t, direction } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        'fixed z-50 bottom-6 md:bottom-8',
        direction === 'rtl' ? 'left-6 md:left-8' : 'right-6 md:right-8'
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="default"
            aria-label={t('back_to_top')}
            onClick={handleClick}
            className={cn(
              'group rounded-full bg-gradient-turquoise text-white shadow-medium hover:shadow-glow transition-transform',
              'motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95',
              visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
          >
            <ChevronUp className="size-6 transition-transform group-hover:-translate-y-1 group-hover:rotate-90 motion-safe:group-hover:animate-spin" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{t('back_to_top')}</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ScrollToTopButton;
