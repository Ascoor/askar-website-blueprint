import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  question: { en: string; ar: string; eg: string };
  answer: { en: string; ar: string; eg: string };
}

const items: FAQItem[] = [
  {
    question: {
      en: 'What services do you offer?',
      ar: 'ما هي الخدمات التي تقدمونها؟',
      eg: 'إيه الخدمات اللي بتقدموها؟',
    },
    answer: {
      en: 'We provide custom software development, mobile apps, and cloud solutions tailored to business needs.',
      ar: 'نقدم تطوير برمجيات مخصصة وتطبيقات جوال وحلول سحابية مصممة لاحتياجات الأعمال.',
      eg: 'بنقدم تطوير برمجيات مخصوص، تطبيقات موبايل، وحلول سحابية على حسب احتياجك.',
    },
  },
  {
    question: {
      en: 'How can I request a project estimate?',
      ar: 'كيف يمكنني طلب تقدير لمشروعي؟',
      eg: 'إزاي أطلب تقدير لمشروعي؟',
    },
    answer: {
      en: 'Simply contact us through the form and our team will get back to you with details.',
      ar: 'ما عليك سوى التواصل معنا عبر النموذج وسنعود إليك بالتفاصيل.',
      eg: 'كل اللي عليك تبعتلنا من خلال الفورم، وهنتواصل معاك بالتفاصيل.',
    },
  },
  {
    question: {
      en: 'Do you support long-term maintenance?',
      ar: 'هل تقدمون دعم وصيانة على المدى الطويل؟',
      eg: 'فيه صيانة ودعم لفترة طويلة؟',
    },
    answer: {
      en: 'Yes, we offer maintenance packages to keep your project running smoothly.',
      ar: 'نعم، نوفر باقات صيانة لضمان استمرار مشروعك بسلاسة.',
      eg: 'أيوه، عندنا باقات صيانة عشان مشروعك يفضل شغال تمام.',
    },
  },
];

const FAQSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t('faqTitle')}
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          {t('faqSubtitle')}
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg">
              <AccordionTrigger className="px-4">
                {item.question[language]}
              </AccordionTrigger>
              <AccordionContent className="px-4">
                {item.answer[language]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
