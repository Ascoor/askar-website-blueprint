# خطة التطوير الأولية لمشروع الواجهة

هذه الوثيقة تضع خطوات عملية لمعالجة أبرز نقاط الضعف الحالية في المشروع، مع اقتراح الأدوات المناسبة وترتيب التنفيذ.

## 1. تحسين الوصولية (Accessibility)

1. **تحليل الواجهة بالأدوات** – استخدام إضافة **axe DevTools** لمتصفح كروم أو **eslint-plugin-jsx-a11y** لاكتشاف المشاكل.
2. **إضافة سمات ARIA** للعناصر التفاعلية وتحديد العناوين البديلة للصور.
3. **التأكد من التباين** عبر أداة مثل **a11ycolor** وضبط ألوان Tailwind حسب الحاجة.
4. **التأكد من دعم لوحة المفاتيح** في جميع المكونات.

> أولوية التنفيذ: **Must‑have** لأن الوصولية أساس تجربة المستخدم.

## 2. تحسين الأمان (Security)

1. **تفعيل رؤوس الأمان** في `index.html` أو الخادم المستضيف: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`.
2. **مراجعة التبعيات** باستخدام `npm audit` وإصلاح الثغرات عند الحاجة.
3. **إزالة جميع `console.log`** من الشيفرة الإنتاجية أو استبدالها بأداة تتبع رسمية.

> أولوية التنفيذ: **Must‑have** لتجنب المخاطر الأمنية.

## 3. تقسيم الكود (Code Splitting)

1. **استخدام `React.lazy` و`Suspense`** لتأجيل تحميل الصفحات والمكونات الثقيلة.
2. **تحميل الترجمات والمعرض (Slider) بشكل كسول** لتسريع زمن التحميل الأولي.
3. **تفعيل تقسيم الكود في إعدادات `vite`** لضمان إنشاء حزم منفصلة (chunks).

> أولوية التنفيذ: **Must‑have** لأنها تؤثر مباشرة على الأداء وتجربة المستخدم.

## 4. إضافة اختبارات وCI

1. **اختبارات الوحدة** عبر **Vitest** أو **Jest** مع مكتبة **React Testing Library**.
2. **اختبارات التفاعل** للأجزاء المهمة مثل اختيار اللغة أو تغيير الوضع (فاتح/غامق).
3. **إعداد GitHub Actions** لتشغيل الاختبارات و`eslint` عند كل طلب دمج (Pull Request).
4. **إضافة فحص `lighthouse` اختياري** للتأكد من الأداء وإمكانية الوصول.

> أولوية التنفيذ: **Must‑have** للاختبارات الأساسية وCI؛ الفحوص المتقدمة تعتبر **Nice‑to‑have**.

## 5. تحسين التوثيق

1. **إضافة توثيق بالإنجليزية** يشرح طريقة الإعداد، تشغيل المشروع، وهيكل المجلدات.
2. **شرح المكوّنات الرئيسية** وكيفية استخدام إعدادات RTL وتعدد اللغات.
3. **توثيق عملية المساهمة** ومعايير كتابة الكود.

> أولوية التنفيذ: التوثيق الأساسي **Must‑have**، بينما التوسع في الأمثلة التفصيلية **Nice‑to‑have**.

## 6. تحسين تجربة المستخدم (UX)

1. **مراجعة الأنيميشنات** عبر مكتبة **Framer Motion** للتأكد من أنها خفيفة وغير مشتتة.
2. **ضبط السلايدر الرئيسي** ليعمل بسلاسة مع دعم السحب (Swipe) على الهواتف.
3. **إضافة مؤشر تحميل بسيط** عند تبديل اللغة أو تغيير الوضع لتوضيح التفاعل.
4. **مراجعة الخطوط وتناسق الألوان** كما هو موضّح في `design-system.md`.

> أولوية التنفيذ: معظمها **Nice‑to‑have** بعد معالجة النقاط السابقة.

---

## قالب المهمة الأولى (Task Template)

**العنوان:** تفعيل رؤوس الأمان وإزالة console logs

**الهدف:** رفع مستوى أمان التطبيق ومنع طباعة البيانات الحساسة في المتصفح.

**الخطوات:**

1. بحث سريع عن جميع أوامر `console.log` في المجلد `src` وحذفها أو استبدالها بأداة تتبع إن لزم الأمر.
2. إضافة الوسوم التالية إلى ملف `index.html` أو إعداد الخادم:
   - `Content-Security-Policy`
   - `Strict-Transport-Security`
   - `X-Frame-Options`
   - `X-Content-Type-Options`
3. اختبار أن الصفحات تعمل بشكل طبيعي بعد التعديل.
4. تحديث ملف `README.md` ليشير إلى تفعيل رؤوس الأمان.
5. رفع التغييرات على فرع جديد وفتح Pull Request مع وصف مختصر.

## أفضل الممارسات التالية (Best Practices)

- اعتماد تنسيق موحد باستخدام **Prettier** و**ESLint** في كل عملية حفظ.
- استخدام فروع صغيرة (feature branches) مع طلب دمج لكل تغيير منطقي.
- كتابة اختبارات لكل مكوّن جديد قبل دمجه في الفرع الرئيسي.
- المراجعة الجماعية للكود لضمان الجودة ومشاركة المعرفة بين أعضاء الفريق.
- تحديث التوثيق بشكل مستمر وتوضيح أي قرار تقني جديد.
