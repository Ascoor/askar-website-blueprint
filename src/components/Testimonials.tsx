import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: {
      en: 'Ahmed Al-Rashid',
      ar: 'أحمد الراشد'
    },
    position: {
      en: 'CTO, TechCorp',
      ar: 'المدير التقني، تيك كورب'
    },
    content: {
      en: 'Ask-ar transformed our product visualization completely. The AR solution they developed increased our customer engagement by 300% and significantly reduced product returns.',
      ar: 'حولت أسك-أر تصور منتجاتنا بالكامل. حل الواقع المعزز الذي طوروه زاد من تفاعل عملائنا بنسبة 300% وقلل بشكل كبير من إرجاع المنتجات.'
    },
    rating: 5,
    avatar: '/placeholder.svg?height=60&width=60'
  },
  {
    id: 2,
    name: {
      en: 'Sarah Johnson',
      ar: 'سارة جونسون'
    },
    position: {
      en: 'Marketing Director, RetailPlus',
      ar: 'مديرة التسويق، ريتيل بلس'
    },
    content: {
      en: 'The team at Ask-ar delivered beyond our expectations. Their AR marketing campaign created an immersive brand experience that our customers absolutely love.',
      ar: 'فريق أسك-أر تجاوز توقعاتنا. حملة التسويق بالواقع المعزز التي أنشأوها خلقت تجربة علامة تجارية غامرة يحبها عملاؤنا تماماً.'
    },
    rating: 5,
    avatar: '/placeholder.svg?height=60&width=60'
  },
  {
    id: 3,
    name: {
      en: 'Omar Hassan',
      ar: 'عمر حسن'
    },
    position: {
      en: 'Founder, EduTech Solutions',
      ar: 'المؤسس، حلول التعليم التقني'
    },
    content: {
      en: 'Ask-ar\'s educational AR platform revolutionized how we teach complex concepts. Student engagement and comprehension improved dramatically.',
      ar: 'منصة الواقع المعزز التعليمية من أسك-أر ثورت طريقة تعليمنا للمفاهيم المعقدة. تحسن تفاعل الطلاب وفهمهم بشكل كبير.'
    },
    rating: 5,
    avatar: '/placeholder.svg?height=60&width=60'
  },
  {
    id: 4,
    name: {
      en: 'Lisa Chen',
      ar: 'ليزا تشين'
    },
    position: {
      en: 'Operations Manager, Manufacturing Co',
      ar: 'مديرة العمليات، شركة التصنيع'
    },
    content: {
      en: 'The AR training modules developed by Ask-ar reduced our onboarding time by 50% while improving safety compliance across all departments.',
      ar: 'وحدات التدريب بالواقع المعزز التي طورتها أسك-أر قللت وقت التأهيل بنسبة 50% مع تحسين الامتثال للسلامة في جميع الأقسام.'
    },
    rating: 5,
    avatar: '/placeholder.svg?height=60&width=60'
  }
];

export const Testimonials: React.FC = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative group hover-lift glass border-border/50 p-6">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-turquoise" />
              </div>

              <CardContent className="p-0 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground/90 leading-relaxed text-lg">
                  "{testimonial.content[direction === 'rtl' ? 'ar' : 'en']}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name[direction === 'rtl' ? 'ar' : 'en']} />
                    <AvatarFallback className="bg-turquoise text-white">
                      {testimonial.name[direction === 'rtl' ? 'ar' : 'en'].split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name[direction === 'rtl' ? 'ar' : 'en']}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position[direction === 'rtl' ? 'ar' : 'en']}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};