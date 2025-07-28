import React from 'react';
import { Star, Quote } from 'lucide-react';

interface SocialProofSectionProps {
  isArabic: boolean;
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({ isArabic }) => {
  const clients = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateHub', logo: '🚀' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSystem', logo: '☁️' },
    { name: 'SecureNet', logo: '🔒' },
    { name: 'FastTrack', logo: '⚡' }
  ];

  const testimonials = isArabic ? [
    {
      text: 'فريق Ask-ar.net قدم لنا حلول تقنية متطورة ساعدتنا في تحسين أدائنا بشكل كبير',
      author: 'أحمد محمد',
      position: 'مدير التقنية',
      company: 'شركة التقنيات المتقدمة',
      rating: 5
    },
    {
      text: 'جودة العمل والالتزام بالمواعيد أمر مميز جداً، أنصح بالتعامل معهم',
      author: 'سارة أحمد',
      position: 'مديرة المشاريع',
      company: 'مؤسسة الابتكار',
      rating: 5
    },
    {
      text: 'الدعم الفني المستمر وجودة الحلول المقدمة فاقت توقعاتنا',
      author: 'محمد علي',
      position: 'المدير التنفيذي',
      company: 'شركة البيانات الذكية',
      rating: 5
    }
  ] : [
    {
      text: 'Ask-ar.net team provided us with advanced technical solutions that significantly improved our performance',
      author: 'Ahmed Mohammed',
      position: 'CTO',
      company: 'Advanced Technologies Inc.',
      rating: 5
    },
    {
      text: 'The quality of work and commitment to deadlines is exceptional, I highly recommend working with them',
      author: 'Sarah Ahmed',
      position: 'Project Manager',
      company: 'Innovation Enterprise',
      rating: 5
    },
    {
      text: 'The continuous technical support and quality of solutions exceeded our expectations',
      author: 'Mohammed Ali',
      position: 'CEO',
      company: 'Smart Data Corp',
      rating: 5
    }
  ];

  const sectionTitle = isArabic ? 'عملاؤنا يثقون بنا' : 'Our Clients Trust Us';

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isArabic ? 'rtl' : 'ltr'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-20 overflow-hidden">
          <div className="flex animate-scroll space-x-12 md:space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] h-16 bg-card border border-border rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <span className="ml-2 font-medium text-foreground text-sm">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className={`text-foreground mb-6 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className={`border-t border-border pt-4 ${isArabic ? 'text-right' : 'text-left'}`}>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground text-sm">
                {isArabic ? 'عميل راضٍ' : 'Happy Clients'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground text-sm">
                {isArabic ? 'معدل النجاح' : 'Success Rate'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">
                {isArabic ? 'دعم فني' : 'Technical Support'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground text-sm">
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