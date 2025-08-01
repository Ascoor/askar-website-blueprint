import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { cn } from '@/lib/utils';

interface Client {
  name: string;
  logo: string;
}

interface Testimonial {
  text: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const clients: Client[] = [
  { name: 'TechCorp', logo: '🏢' },
  { name: 'InnovateHub', logo: '🚀' },
  { name: 'DataFlow', logo: '📊' },
  { name: 'CloudSystem', logo: '☁️' },
  { name: 'SecureNet', logo: '🔒' },
  { name: 'FastTrack', logo: '⚡' },
];

const testimonials: Record<string, Testimonial[]> = {
  ar: [
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
  ],
  eg: [
    {
      text: 'فريق Ask-ar.net قدم لنا حلول تقنية متطورة ساعدتنا في تحسين أدائنا بشكل كبير',
      author: 'أحمد محمد',
      position: 'مدير التقنية',
      company: 'شركة التقنيات المتقدمة',
      rating: 5,
    },
    {
      text: 'جودة الشغل والالتزام بالمواعيد حاجة مميزة جدًا، أنصحكم تتعاملوا معاهم',
      author: 'سارة أحمد',
      position: 'مديرة المشاريع',
      company: 'مؤسسة الابتكار',
      rating: 5,
    },
    {
      text: 'الدعم الفني المستمر وجودة الحلول فاقت توقعاتنا',
      author: 'محمد علي',
      position: 'المدير التنفيذي',
      company: 'شركة البيانات الذكية',
      rating: 5,
    },
  ],
  en: [
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
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const SocialProofSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const data = testimonials[language] ?? testimonials.en;

  const sectionTitle =
    language === 'ar' || language === 'eg'
      ? 'عملاؤنا يثقون بنا'
      : 'Our Clients Trust Us';

  return (
    <section
      id="social-proof"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-section bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold font-heading text-foreground mb-12"
        >
          {sectionTitle}
        </motion.h2>

        <div
          className="mb-20 overflow-hidden relative"
          aria-label={
            language === 'ar' || language === 'eg'
              ? 'شعارات العملاء'
              : 'Client logos'
          }
        >
          <motion.div
            className={cn(
              'flex w-max items-center gap-8 sm:gap-12 md:gap-16',
              isRTL ? 'animate-marquee-rtl' : 'animate-marquee',
            )}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                tabIndex={0}
                whileHover={{ scale: 1.05 }}
                className="flex min-w-[8rem] sm:min-w-[9rem] h-16 items-center justify-center gap-2 bg-card border border-border rounded-card shadow-md hover:shadow-elegant focus-visible:ring-2 focus-visible:ring-primary transition-all"
              >
                <span className="text-2xl sm:text-3xl" aria-hidden="true">
                  {client.logo}
                </span>
                <span className="font-medium text-sm text-foreground break-words min-w-0">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -4,
                boxShadow: '0 0 20px hsl(var(--brand-glow))',
              }}
              className="bg-card border border-border rounded-card p-6 shadow-md focus-within:ring-2 focus-within:ring-primary transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote
                  className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                  aria-hidden="true"
                />
                <div
                  className="flex items-center gap-1 sm:gap-2"
                  aria-label={`${testimonial.rating} stars`}
                >
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-pulse-glow"
                    />
                  ))}
                </div>
              </div>

              <p
                className={cn(
                  'text-foreground mb-6 leading-relaxed break-words',
                  isRTL ? 'text-right' : 'text-left',
                )}
              >
                {testimonial.text}
              </p>

              <div
                className={cn(
                  'border-t border-border pt-4 mt-4',
                  isRTL ? 'text-right' : 'text-left',
                )}
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
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground break-words">
                {language === 'ar' || language === 'eg'
                  ? 'عميل راضٍ'
                  : 'Happy Clients'}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground break-words">
                {language === 'ar' || language === 'eg'
                  ? 'معدل النجاح'
                  : 'Success Rate'}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground break-words">
                {language === 'ar' || language === 'eg'
                  ? 'دعم فني'
                  : 'Technical Support'}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground break-words">
                {language === 'ar' || language === 'eg'
                  ? 'سنوات خبرة'
                  : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
