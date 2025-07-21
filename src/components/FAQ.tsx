import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const faqData = [
  {
    id: "faq-1",
    question: { en: "Do I fully own the source code for my app?", ar: "هل سأمتلك الكود المصدري بالكامل لتطبيقي؟" },
    answer: { en: "Absolutely. All solutions we deliver are 100% owned by you, including the original source code2014no rentals, no lock-ins!", ar: "نعم، جميع الأنظمة التي نطورها لك مملوكة لك بالكامل مع الكود الأصلي 2014 لا إيجار، ولا حلول مغلقة!" }
  },
  {
    id: "faq-2",
    question: { en: "What technologies do you use in your projects?", ar: "ما هي التقنيات التي تستخدمونها في المشاريع؟" },
    answer: { en: "We use cutting-edge stacks like React, Node.js, Flutter and Python, always choosing the best tools for your needs.", ar: "نستخدم أحدث التقنيات مثل React وNode.js وFlutter وPython، ونختار الأنسب لكل مشروع." }
  },
  {
    id: "faq-3",
    question: { en: "Do you provide post-launch support and training?", ar: "هل تقدمون دعمًا فنيًا وتدريبًا بعد التسليم؟" },
    answer: { en: "Of course! We offer full onboarding, documentation and ongoing support for all delivered systems.", ar: "بالتأكيد! نقدم تدريبًا كاملًا ودعمًا فنيًا مستمرًا لضمان نجاح نظامك." }
  },
  {
    id: "faq-4",
    question: { en: "How long does a typical project take?", ar: "كم يستغرق تنفيذ مشروع برمجي عادةً؟" },
    answer: { en: "Timelines vary, but most projects are delivered in 4201312 weeks with a clear, agreed-upon workflow.", ar: "تختلف المدة حسب حجم وتعقيد المشروع، لكن غالبية الأعمال تُسلَّم خلال 4201312 أسبوعًا وفق خطة وجدول متفق عليه." }
  },
  {
    id: "faq-5",
    question: { en: "Can you tailor the system to my unique needs?", ar: "هل أستطيع تخصيص النظام بالكامل حسب احتياجاتي؟" },
    answer: { en: "Yes2014every solution is custom-built for you with no off-the-shelf packages.", ar: "نعم2014جميع الحلول مصممة خصيصًا لك دون قوالب جاهزة." }
  },
  {
    id: "faq-6",
    question: { en: "Is there a free consultation? Are your solutions expensive?", ar: "هل هناك استشارة مجانية؟ هل حلولكم مكلفة؟" },
    answer: { en: "We start with a free consultation to understand your needs. Pricing is transparent and based on the scope2014no hidden fees.", ar: "نبدأ باستشارة مجانية لفهم متطلباتك، والأسعار شفافة وتعتمد على نطاق العمل دون أي رسوم مخفية." }
  },
  {
    id: "faq-7",
    question: { en: "How do you handle data privacy?", ar: "كيف تتعاملون مع خصوصية البيانات؟" },
    answer: { en: "We follow industry best practices and comply with privacy regulations to keep your data secure.", ar: "نتبع أفضل الممارسات ونلتزم بمعايير الخصوصية لحماية بياناتك بأعلى مستوى." }
  }
];

export const FAQ: React.FC = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {direction === 'rtl' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {direction === 'rtl' 
              ? 'احصل على إجابات لأهم الأسئلة حول خدمات الواقع المعزز لدينا'
              : 'Get answers to the most common questions about our AR services'
            }
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="glass border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-turquoise transition-colors py-6">
                  {faq.question[direction === 'rtl' ? 'ar' : 'en']}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer[direction === 'rtl' ? 'ar' : 'en']}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-center mt-6 text-muted-foreground">
            {direction === 'rtl' ? 'لم تجد سؤالك؟ ' : "Didn't find your question? "}
            <a href="#contact" className="text-turquoise hover:underline">
              {direction === 'rtl' ? 'تواصل معنا' : 'Contact us'}
            </a>
            {direction === 'rtl' ? ' وسنكون سعداء بمساعدتك.' : " and we'll be happy to help."}
          </p>
        </div>
      </div>
    </section>
  );
};