export const siteData = {
  siteInfo: {
    title: "Ask-AR Technology Solutions",
    logo: "/images/logo-sm4.png",
    copyright: "© حقوق النشر 2024 لشركة Ask-ar.net. جميع الحقوق محفوظة."
  },
  navbar: [
    { id: "hero", label: "الرئيسية" },
    { id: "portfolio", label: "أعمالنا" },
    { id: "services", label: "خدمات" },
    { id: "contact", label: "تواصل معنا" }
  ],
  portfolio: [
    {
      title: "حداثة",
      image: "/images/projects/hadathah.webp",
      link: "/app-hadatha/",
      description: "أحد الأعمال الإبداعية لشركة عريقة في مجال الدعاية والإعلان"
    },
    {
      title: "تطبيق الموبيل",
      image: "/images/projects/webapp.webp",
      link: "/app/",
      description: "تطبيقات الويب أصبحت هي أفضل الحلول للإقتراب من العملاء بشكل ملموس"
    },
    {
      title: "لوحة التحكم",
      image: "/images/projects/dashboard.webp",
      link: "/dash/",
      description: "نضمن للعملاء لوحات تحكم بسيطة وسهلة وديناميكية لضمان تجربة مستخدم سهلة"
    }
  ],
  services: [
    {
      title: "تطوير المواقع الإلكترونية",
      icon: "fas fa-laptop-code",
      description:
        "نقدم خدمات تطوير المواقع الإلكترونية بتصاميم حديثة واحترافية تلبي احتياجات عملك وتجذب الزوار."
    },
    {
      title: "تطوير تطبيقات الجوال",
      icon: "fas fa-mobile-alt",
      description:
        "نصمم ونطور تطبيقات جوال مبتكرة وسهلة الاستخدام تلبي احتياجات عملك وتساهم في تحقيق أهدافك بكل سلاسة وكفاءة."
    },
    {
      title: "التسويق الرقمي",
      icon: "fas fa-bullhorn",
      description:
        "نقدم خدمات تسويق رقمي شاملة تتضمن استراتيجيات تسويق مبتكرة تساعدك على الوصول إلى جمهورك المستهدف وزيادة مبيعاتك."
    },
    {
      title: "تحليل البيانات",
      icon: "fas fa-chart-line",
      description:
        "نوفر خدمات تحليل بيانات متقدمة تساعدك على اتخاذ قرارات مستنيرة بناءً على بيانات دقيقة وموثوقة لتحسين أداء عملك."
    },
    {
      title: "الدعم الفني",
      icon: "fas fa-headset",
      description:
        "فريقنا المتخصص متاح على مدار الساعة لتقديم الدعم الفني والمساعدة في حل أي مشكلات قد تواجهك لضمان استمرارية عملك."
    },
    {
      title: "خدمات السحابة",
      icon: "fas fa-cloud",
      description:
        "نقدم حلول سحابية متكاملة تساعدك على تخزين بياناتك وإدارة أعمالك بكفاءة وأمان مع إمكانية الوصول إليها من أي مكان."
    }
  ],
  contact: {
    fields: ["الاسم", "البريد الإلكتروني", "الرسالة"],
    button: "إرسال الرسالة"
  }
} as const;

export type SiteData = typeof siteData;
