import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye, Filter } from 'lucide-react';
import portfolioMobile from '@/assets/portfolio-mobile.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';
import portfolioAI from '@/assets/portfolio-ai.jpg';

interface PortfolioSectionProps {
  isArabic: boolean;
}

const PortfolioPage: React.FC<PortfolioSectionProps> = ({ isArabic }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = isArabic
    ? [
        {
          id: 1,
          title: 'تطبيق التجارة الإلكترونية',
          description:
            'تطبيق جوال متقدم للتسوق الإلكتروني مع تجربة مستخدم استثنائية',
          category: 'mobile',
          image: portfolioMobile,
          technologies: ['React Native', 'Node.js', 'MongoDB'],
          link: '#',
          year: '2024',
        },
        {
          id: 2,
          title: 'منصة إدارة المحتوى',
          description: 'نظام إدارة محتوى متطور مع لوحة تحكم ذكية',
          category: 'web',
          image: portfolioWeb,
          technologies: ['React', 'Next.js', 'PostgreSQL'],
          link: '#',
          year: '2024',
        },
        {
          id: 3,
          title: 'نظام الذكاء الاصطناعي',
          description: 'منصة ذكية لتحليل البيانات والتنبؤات باستخدام AI',
          category: 'ai',
          image: portfolioAI,
          technologies: ['Python', 'TensorFlow', 'React'],
          link: '#',
          year: '2023',
        },
        {
          id: 4,
          title: 'موقع شركة تقنية',
          description: 'موقع ويب احترافي لشركة تقنية مع تصميم متجاوب',
          category: 'web',
          image: portfolioWeb,
          technologies: ['Vue.js', 'Tailwind', 'Laravel'],
          link: '#',
          year: '2023',
        },
        {
          id: 5,
          title: 'تطبيق اللياقة البدنية',
          description: 'تطبيق جوال لتتبع اللياقة البدنية والتمارين',
          category: 'mobile',
          image: portfolioMobile,
          technologies: ['Flutter', 'Firebase', 'Dart'],
          link: '#',
          year: '2023',
        },
        {
          id: 6,
          title: 'نظام التعلم الآلي',
          description: 'حل متقدم للتعلم الآلي ومعالجة البيانات الضخمة',
          category: 'ai',
          image: portfolioAI,
          technologies: ['Python', 'PyTorch', 'AWS'],
          link: '#',
          year: '2024',
        },
      ]
    : [
        {
          id: 1,
          title: 'E-commerce Mobile App',
          description:
            'Advanced mobile shopping application with exceptional user experience',
          category: 'mobile',
          image: portfolioMobile,
          technologies: ['React Native', 'Node.js', 'MongoDB'],
          link: '#',
          year: '2024',
        },
        {
          id: 2,
          title: 'Content Management Platform',
          description:
            'Advanced content management system with smart dashboard',
          category: 'web',
          image: portfolioWeb,
          technologies: ['React', 'Next.js', 'PostgreSQL'],
          link: '#',
          year: '2024',
        },
        {
          id: 3,
          title: 'AI Analytics System',
          description:
            'Smart platform for data analysis and predictions using AI',
          category: 'ai',
          image: portfolioAI,
          technologies: ['Python', 'TensorFlow', 'React'],
          link: '#',
          year: '2023',
        },
        {
          id: 4,
          title: 'Tech Company Website',
          description:
            'Professional website for tech company with responsive design',
          category: 'web',
          image: portfolioWeb,
          technologies: ['Vue.js', 'Tailwind', 'Laravel'],
          link: '#',
          year: '2023',
        },
        {
          id: 5,
          title: 'Fitness Mobile App',
          description:
            'Mobile application for fitness tracking and workout management',
          category: 'mobile',
          image: portfolioMobile,
          technologies: ['Flutter', 'Firebase', 'Dart'],
          link: '#',
          year: '2023',
        },
        {
          id: 6,
          title: 'Machine Learning System',
          description:
            'Advanced solution for machine learning and big data processing',
          category: 'ai',
          image: portfolioAI,
          technologies: ['Python', 'PyTorch', 'AWS'],
          link: '#',
          year: '2024',
        },
      ];

  const filters = isArabic
    ? [
        { key: 'all', label: 'الكل' },
        { key: 'web', label: 'مواقع ويب' },
        { key: 'mobile', label: 'تطبيقات جوال' },
        { key: 'ai', label: 'ذكاء اصطناعي' },
      ]
    : [
        { key: 'all', label: 'All' },
        { key: 'web', label: 'Web Apps' },
        { key: 'mobile', label: 'Mobile Apps' },
        { key: 'ai', label: 'AI Solutions' },
      ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const sectionTitle = isArabic ? 'معرض أعمالنا' : 'Our Portfolio';
  const sectionSubtitle = isArabic
    ? 'استكشف مجموعة من مشاريعنا المتميزة والحلول التقنية المبتكرة'
    : 'Explore our collection of outstanding projects and innovative technical solutions';

  return (
    <section
      id="portfolio"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className={`text-center mb-16 ${isArabic ? 'rtl font-cairo' : 'ltr font-inter'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {sectionTitle}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className={`${
                activeFilter === filter.key
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow-primary'
                  : 'glass-card border-glass-border hover:bg-glass-bg/50'
              } transition-all duration-300`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="glass-card border-glass-border overflow-hidden group cursor-pointer hover:shadow-glow-primary transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass text-primary-foreground border-glass-border"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          {isArabic ? 'معاينة' : 'Preview'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass text-primary-foreground border-glass-border"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {isArabic ? 'زيارة' : 'Visit'}
                        </Button>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-primary text-primary-foreground shadow-glow-primary">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3
                      className={`text-xl font-bold text-foreground mb-2 ${isArabic ? 'text-right font-cairo' : 'text-left font-inter'}`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-muted-foreground mb-4 ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="glass text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
          >
            {isArabic ? 'عرض المزيد من الأعمال' : 'View More Projects'}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPage;
