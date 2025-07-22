import React from 'react';
import { Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className="flex items-center gap-2 text-foreground hover:text-turquoise"
      >
        <Languages size={18} />
        <span className="font-medium">
          {language === 'en' ? 'العربية' : 'English'}
        </span>
      </Button>
    </div>
  );
};