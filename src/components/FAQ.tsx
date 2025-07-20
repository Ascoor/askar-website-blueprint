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
    id: 'faq-1',
    question: {
      en: 'What types of AR solutions does Ask-ar develop?',
      ar: 'ما أنواع حلول الواقع المعزز التي تطورها أسك-أر؟'
    },
    answer: {
      en: 'We develop a wide range of AR solutions including mobile AR applications, web-based AR experiences, enterprise AR platforms, educational AR tools, and custom AR integrations for various industries.',
      ar: 'نطور مجموعة واسعة من حلول الواقع المعزز بما في ذلك تطبيقات الهواتف المحمولة، تجارب الواقع المعزز على الويب، منصات المؤسسات، أدوات التعليم، والتكاملات المخصصة لمختلف الصناعات.'
    }
  },
  {
    id: 'faq-2',
    question: {
      en: 'How long does it typically take to develop an AR project?',
      ar: 'كم من الوقت يستغرق عادة تطوير مشروع الواقع المعزز؟'
    },
    answer: {
      en: 'Project timelines vary based on complexity and requirements. Simple AR applications typically take 4-8 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation.',
      ar: 'تختلف مواعيد المشاريع حسب التعقيد والمتطلبات. التطبيقات البسيطة تستغرق عادة 4-8 أسابيع، بينما الحلول المؤسسية المعقدة قد تتطلب 3-6 أشهر. نقدم جداول زمنية مفصلة خلال استشارتنا الأولى.'
    }
  },
  {
    id: 'faq-3',
    question: {
      en: 'Which devices and platforms do you support?',
      ar: 'ما الأجهزة والمنصات التي تدعمونها؟'
    },
    answer: {
      en: 'We support iOS and Android devices, web browsers with WebXR capabilities, AR glasses like HoloLens and Magic Leap, and various enterprise AR headsets. Our solutions are designed to work across multiple platforms.',
      ar: 'ندعم أجهزة iOS و Android، متصفحات الويب مع إمكانيات WebXR، نظارات الواقع المعزز مثل HoloLens و Magic Leap، ومختلف سماعات المؤسسات. حلولنا مصممة للعمل عبر منصات متعددة.'
    }
  },
  {
    id: 'faq-4',
    question: {
      en: 'Do you provide ongoing support and maintenance?',
      ar: 'هل تقدمون الدعم والصيانة المستمرة؟'
    },
    answer: {
      en: 'Yes, we offer comprehensive support packages including regular updates, bug fixes, performance optimization, and technical support. Our maintenance plans ensure your AR solutions continue to perform optimally.',
      ar: 'نعم، نقدم حزم دعم شاملة تشمل التحديثات المنتظمة، إصلاح الأخطاء، تحسين الأداء، والدعم التقني. خطط الصيانة لدينا تضمن استمرار أداء حلول الواقع المعزز بشكل مثالي.'
    }
  },
  {
    id: 'faq-5',
    question: {
      en: 'Can you integrate AR solutions with existing systems?',
      ar: 'هل يمكنكم دمج حلول الواقع المعزز مع الأنظمة الموجودة؟'
    },
    answer: {
      en: 'Absolutely! We specialize in integrating AR solutions with existing enterprise systems, databases, CRM platforms, and third-party applications. Our integration approach ensures seamless workflow continuity.',
      ar: 'بالطبع! نتخصص في دمج حلول الواقع المعزز مع أنظمة المؤسسات الحالية، قواعد البيانات، منصات إدارة العلاقات، وتطبيقات الطرف الثالث. نهج التكامل لدينا يضمن استمرارية سير العمل بسلاسة.'
    }
  },
  {
    id: 'faq-6',
    question: {
      en: 'What industries do you serve?',
      ar: 'ما الصناعات التي تخدمونها؟'
    },
    answer: {
      en: 'We serve various industries including retail, manufacturing, education, healthcare, real estate, automotive, tourism, and marketing. Our AR solutions are customized to meet the specific needs of each industry.',
      ar: 'نخدم صناعات متنوعة تشمل التجارة، التصنيع، التعليم، الرعاية الصحية، العقارات، السيارات، السياحة، والتسويق. حلول الواقع المعزز لدينا مخصصة لتلبية الاحتياجات المحددة لكل صناعة.'
    }
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
        </div>
      </div>
    </section>
  );
};