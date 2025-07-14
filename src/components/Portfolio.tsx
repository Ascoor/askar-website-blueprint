import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Interactive Product Showcase',
      description: 'AR application allowing customers to visualize products in their space before purchase.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
      tags: ['Mobile AR', 'E-commerce', 'iOS/Android'],
      category: 'Retail'
    },
    {
      id: 2,
      title: 'Virtual Training Platform',
      description: 'Immersive AR training modules for industrial equipment maintenance.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tags: ['Enterprise AR', 'Training', 'WebAR'],
      category: 'Education'
    },
    {
      id: 3,
      title: 'AR Navigation System',
      description: 'Smart indoor navigation using AR markers and real-time positioning.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      tags: ['Navigation', 'IoT', 'Computer Vision'],
      category: 'Smart City'
    },
    {
      id: 4,
      title: 'Medical AR Assistant',
      description: 'AR visualization tool for medical procedures and anatomy education.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['Healthcare', 'Education', 'HoloLens'],
      category: 'Healthcare'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift shadow-medium"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-turquoise text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" variant="secondary" className="rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};