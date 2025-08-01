import React from 'react';
import { Star, Quote } from 'lucide-react';
import clsx from 'clsx';

interface SocialProofSectionProps {
  isArabic: boolean;
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  isArabic,
}) => {
  const clients = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateHub', logo: '🚀' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSystem', logo: '☁️' },
    { name: 'SecureNet', logo: '🔒' },
    { name: 'FastTrack', logo: '⚡' },
  ];

  const testimonials = isArabic
    ? [
        {
          text: 'فريق Ask-ar.net قدم لنا حلول تقنية متطورة ساعدتنا في تحسين أدائنا بشكل كبير',
          author: 'أحمد محمد',
          position: 'مدير التقنية',
          company: 'شركة التقنيات المتقدمة',
          rating: 5,
        },
        {
          text: 'جودة العمل والالتزام بالمواعيد أمر مميز جداً، أنصح بالتعامل معهم',
          author: 'سارة أحمد',
          position: 'مديرة المشاريع',
          company: 'مؤسسة الابتكار',
          rating: 5,
        },
        {
          text: 'الدعم الفني المستمر وجودة الحلول المقدمة فاقت توقعاتنا',
          author: 'محمد علي',
          position: 'المدير التنفيذي',
          company: 'شركة البيانات الذكية',
          rating: 5,
        },
      ]
    : [
        {
          text: 'Ask-ar.net team provided us with advanced technical solutions that significantly improved our performance',
          author: 'Ahmed Mohammed',
          position: 'CTO',
          company: 'Advanced Technologies Inc.',
          rating: 5,
        },
        {
          text: 'The quality of work and commitment to deadlines is exceptional, I highly recommend working with them',
          author: 'Sarah Ahmed',
          position: 'Project Manager',
          company: 'Innovation Enterprise',
          rating: 5,
        },
        {
          text: 'The continuous technical support and quality of solutions exceeded our expectations',
          author: 'Mohammed Ali',
          position: 'CEO',
          company: 'Smart Data Corp',
          rating: 5,
        },
      ];

  const sectionTitle = isArabic ? 'عملاؤنا يثقون بنا' : 'Our Clients Trust Us';

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            {sectionTitle}
          </h2>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-20 overflow-hidden relative">
          <div
            className={clsx(
              'flex w-max items-center',
              isArabic ? 'animate-marquee-rtl' : 'animate-marquee',
              'gap-8 sm:gap-12 md:gap-16',
            )}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex min-w-[8rem] sm:min-w-[9rem] h-16 items-center justify-center gap-2 bg-card border border-border rounded-2xl shadow-md hover:shadow-elegant transition-all"
              >
                <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <span className="font-medium text-sm text-foreground break-words min-w-0">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-elegant transition-all min-w-0"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-1 sm:gap-2">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p
                className={`text-foreground mb-6 leading-relaxed break-words ${isArabic ? 'text-right' : 'text-left'}`}
              >
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div
                className={`border-t border-border pt-4 mt-4 ${isArabic ? 'text-right' : 'text-left'}`}
              >
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
                <div className="text-sm text-primary font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground break-words">
                {isArabic ? 'عميل راضٍ' : 'Happy Clients'}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground break-words">
                {isArabic ? 'معدل النجاح' : 'Success Rate'}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground break-words">
                {isArabic ? 'دعم فني' : 'Technical Support'}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground break-words">
                {isArabic ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
