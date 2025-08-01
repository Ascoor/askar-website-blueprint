import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Server, Cloud, Database, Code, Globe, Layers } from 'lucide-react';

interface Tech {
  name: string;
  icon: React.ElementType;
}

const TechnologiesSection: React.FC = () => {
  const { t } = useLanguage();

  const techs: Tech[] = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'GraphQL', icon: Layers },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Database },
    { name: 'Global Partners', icon: Globe },
  ];

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('technologiesTitle')}
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('technologiesSubtitle')}
        </p>
        <Carousel className="relative" opts={{ loop: true }}>
          <CarouselContent className="-ml-4">
            {techs.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <CarouselItem
                  key={idx}
                  className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-6 bg-muted rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow">
                    <Icon className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default TechnologiesSection;
