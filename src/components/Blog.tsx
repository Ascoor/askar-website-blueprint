import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const blogPosts = [
  {
    id: 1,
    title: {
      en: 'The Future of AR in Enterprise Solutions',
      ar: 'مستقبل الواقع المعزز في حلول المؤسسات'
    },
    excerpt: {
      en: 'Explore how augmented reality is transforming business operations and creating new opportunities for innovation.',
      ar: 'اكتشف كيف يحول الواقع المعزز العمليات التجارية ويخلق فرصاً جديدة للابتكار.'
    },
    author: {
      en: 'Ask-ar Team',
      ar: 'فريق أسك-أر'
    },
    date: '2024-01-15',
    readTime: '5 min',
    category: {
      en: 'Innovation',
      ar: 'الابتكار'
    },
    image: '/placeholder.svg?height=300&width=500'
  },
  {
    id: 2,
    title: {
      en: 'AR Development Best Practices',
      ar: 'أفضل ممارسات تطوير الواقع المعزز'
    },
    excerpt: {
      en: 'Learn the essential techniques and methodologies for creating robust AR applications.',
      ar: 'تعلم التقنيات والمنهجيات الأساسية لإنشاء تطبيقات واقع معزز قوية.'
    },
    author: {
      en: 'Ask-ar Team',
      ar: 'فريق أسك-أر'
    },
    date: '2024-01-10',
    readTime: '7 min',
    category: {
      en: 'Development',
      ar: 'التطوير'
    },
    image: '/placeholder.svg?height=300&width=500'
  },
  {
    id: 3,
    title: {
      en: 'Mobile AR vs Web AR: Choosing the Right Platform',
      ar: 'الواقع المعزز للهواتف مقابل الويب: اختيار المنصة المناسبة'
    },
    excerpt: {
      en: 'Compare different AR platforms and understand which solution fits your business needs.',
      ar: 'قارن منصات الواقع المعزز المختلفة وافهم الحل الذي يناسب احتياجات عملك.'
    },
    author: {
      en: 'Ask-ar Team',
      ar: 'فريق أسك-أر'
    },
    date: '2024-01-05',
    readTime: '6 min',
    category: {
      en: 'Strategy',
      ar: 'الاستراتيجية'
    },
    image: '/placeholder.svg?height=300&width=500'
  }
];

export const Blog: React.FC = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('blog.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover-lift glass border-border/50 overflow-hidden">
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title[direction === 'rtl' ? 'ar' : 'en']}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-turquoise text-white">
                    {post.category[direction === 'rtl' ? 'ar' : 'en']}
                  </Badge>
                </div>
              </div>

              <CardHeader className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground line-clamp-2 group-hover:text-turquoise transition-colors">
                  {post.title[direction === 'rtl' ? 'ar' : 'en']}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt[direction === 'rtl' ? 'ar' : 'en']}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author[direction === 'rtl' ? 'ar' : 'en']}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString(direction === 'rtl' ? 'ar' : 'en')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-turquoise/10 group-hover:text-turquoise transition-colors"
                >
                  {direction === 'rtl' ? 'اقرأ المزيد' : 'Read More'}
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-turquoise hover:bg-turquoise-dark text-white px-8 py-4">
            {direction === 'rtl' ? 'عرض جميع المقالات' : 'View All Articles'}
            <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};