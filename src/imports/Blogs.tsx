import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface BlogPost {
  id: string;
  category: string;
  categoryAr: string;
  date: string;
  dateAr: string;
  readTime: string;
  readTimeAr: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  industry: string;
  tags: string[];
  tagsAr: string[];
  content: string;
  contentAr: string;
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    category: 'AI', categoryAr: 'ذكاء اصطناعي',
    date: 'March 10, 2026', dateAr: '١٠ مارس ٢٠٢٦',
    readTime: '8 min read', readTimeAr: '٨ دقائق قراءة',
    title: 'How AI-Powered Automation Is Redefining Enterprise Operations in 2026',
    titleAr: 'كيف تُعيد الأتمتة المدعومة بالذكاء الاصطناعي تعريف عمليات المؤسسات في ٢٠٢٦',
    excerpt: 'Discover how forward-thinking enterprises are deploying intelligent automation to eliminate bottlenecks, reduce operational costs by up to 40%, and unlock new levels of workforce productivity.',
    excerptAr: 'اكتشف كيف تعتمد المؤسسات المتقدمة على الأتمتة الذكية للقضاء على نقاط الاختناق، وخفض التكاليف التشغيلية بنسبة تصل إلى ٤٠٪، وتحقيق مستويات جديدة من إنتاجية القوى العاملة.',
    industry: 'AI Automation',
    tags: ['Artificial Intelligence', 'Enterprise', 'Automation', 'Digital Transformation'],
    tagsAr: ['الذكاء الاصطناعي', 'المؤسسات', 'الأتمتة', 'التحول الرقمي'],
    content: `<h2>The Automation Revolution</h2><p>In 2026, artificial intelligence is no longer a futuristic concept — it is the operational backbone of the world's most competitive enterprises.</p><h2>Where the Gains Are Coming From</h2><p>Enterprises deploying AI automation are reporting operational cost reductions of up to 40%. These gains come from eliminating manual data entry, accelerating approval workflows, and enabling 24/7 processing without human intervention.</p><h2>Workforce Productivity, Redefined</h2><p>Contrary to early fears, AI automation is augmenting the workforce rather than replacing it. When routine tasks are handled by intelligent systems, human talent is freed to focus on strategic, creative, and relationship-driven work.</p><h2>Real-World Deployment Patterns</h2><p>The most successful enterprise automation deployments share a common pattern: they start narrow and expand deliberately. A single high-volume process becomes the beachhead. Once ROI is proven, automation expands horizontally across the organization.</p><h2>What's Next</h2><p>The frontier of enterprise AI automation is moving toward fully autonomous agents that can plan multi-step workflows, adapt to exceptions in real time, and self-optimize based on outcomes.</p>`,
    contentAr: `<h2>ثورة الأتمتة</h2><p>في عام ٢٠٢٦، لم يعد الذكاء الاصطناعي مجرد مفهوم مستقبلي — بل أصبح العمود الفقري التشغيلي للمؤسسات الأكثر تنافسية في العالم.</p><h2>مصادر المكاسب</h2><p>تُفيد المؤسسات التي تعتمد الأتمتة بالذكاء الاصطناعي بتحقيق تخفيضات في التكاليف التشغيلية تصل إلى ٤٠٪. تأتي هذه المكاسب من إلغاء إدخال البيانات اليدوي، وتسريع سير عمل الموافقات، وتمكين المعالجة على مدار الساعة دون تدخل بشري.</p><h2>إنتاجية القوى العاملة، معرَّفة من جديد</h2><p>خلافاً للمخاوف المبكرة، تعزز أتمتة الذكاء الاصطناعي القوى العاملة بدلاً من إحلالها. عندما تتولى الأنظمة الذكية المهام الروتينية، يتحرر المواهب البشرية للتركيز على العمل الاستراتيجي والإبداعي والعلائقي.</p><h2>أنماط النشر في العالم الواقعي</h2><p>تشترك أنجح عمليات نشر أتمتة المؤسسات في نمط مشترك: تبدأ ضيقة وتتوسع بشكل متعمد. تصبح عملية واحدة عالية الحجم نقطة انطلاق. بمجرد إثبات العائد على الاستثمار، تتوسع الأتمتة أفقياً عبر المؤسسة.</p><h2>ما التالي</h2><p>تتجه حدود أتمتة الذكاء الاصطناعي للمؤسسات نحو وكلاء مستقلين تماماً يمكنهم تخطيط سير العمل متعدد الخطوات، والتكيف مع الاستثناءات في الوقت الفعلي، والتحسين الذاتي بناءً على النتائج.</p>`,
  },
  {
    id: '2',
    category: 'BLOCKCHAIN', categoryAr: 'بلوكتشين',
    date: 'February 28, 2026', dateAr: '٢٨ فبراير ٢٠٢٦',
    readTime: '7 min read', readTimeAr: '٧ دقائق قراءة',
    title: 'Blockchain Beyond Crypto: Real-World Enterprise Asset Tracking Use Cases',
    titleAr: 'البلوكتشين ما وراء العملات: حالات استخدام تتبع أصول المؤسسات في العالم الحقيقي',
    excerpt: 'Explore how logistics giants, government agencies, and healthcare providers are using enterprise blockchain infrastructure to create tamper-proof, transparent records that cut fraud and audit costs dramatically.',
    excerptAr: 'استكشف كيف تستخدم شركات اللوجستيات العملاقة والوكالات الحكومية ومقدمو الرعاية الصحية البنية التحتية لبلوكتشين المؤسسات لإنشاء سجلات شفافة مقاومة للتلاعب تقلل تكاليف الاحتيال والتدقيق بشكل كبير.',
    industry: 'Blockchain',
    tags: ['Blockchain', 'Supply Chain', 'Asset Tracking', 'Transparency'],
    tagsAr: ['بلوكتشين', 'سلسلة التوريد', 'تتبع الأصول', 'الشفافية'],
    content: `<h2>Beyond the Hype</h2><p>For years, blockchain was synonymous with cryptocurrency speculation. That era is over. In 2026, enterprise blockchain has quietly become one of the most important infrastructure layers for organizations that need immutable, auditable records at scale.</p><h2>The Asset Tracking Problem</h2><p>Every enterprise faces the same fundamental challenge: how do you know where an asset is, who touched it, and whether the record is trustworthy? Traditional databases can be edited. Paper trails get lost. Blockchain solves this by creating an append-only ledger that no single party controls.</p><h2>Government & Public Sector Applications</h2><p>Several government agencies partnering with MTechnology have deployed blockchain for procurement tracking, reducing fraud incidents by over 60%.</p><h2>Healthcare Supply Chains</h2><p>Healthcare providers use MTechnology's blockchain platform to track pharmaceuticals from manufacturer to patient, eliminating counterfeit medications and providing instant recall capabilities.</p><h2>The ROI Case</h2><p>Enterprises typically see blockchain ROI through fraud reduction, audit cost savings of 50–70%, and faster dispute resolution between trading partners.</p>`,
    contentAr: `<h2>ما وراء الضجة</h2><p>لسنوات، كان البلوكتشين مرادفاً للمضاربة في العملات المشفرة. انتهى ذلك العصر. في ٢٠٢٦، أصبح بلوكتشين المؤسسات بهدوء أحد أهم طبقات البنية التحتية للمؤسسات التي تحتاج إلى سجلات ثابتة وقابلة للتدقيق على نطاق واسع.</p><h2>مشكلة تتبع الأصول</h2><p>تواجه كل مؤسسة التحدي الأساسي ذاته: كيف تعرف أين يوجد الأصل، ومن لمسه، وما إذا كان السجل موثوقاً؟ يمكن تعديل قواعد البيانات التقليدية. تضيع مسارات الورق. يحل البلوكتشين هذه المشكلة من خلال إنشاء دفتر إضافي فقط لا يتحكم فيه أي طرف واحد.</p><h2>تطبيقات الحكومة والقطاع العام</h2><p>نشرت عدة وكالات حكومية شريكة مع إم تكنولوجي البلوكتشين لتتبع المشتريات، مما قلل حوادث الاحتيال بأكثر من ٦٠٪.</p><h2>سلاسل التوريد في الرعاية الصحية</h2><p>يستخدم مقدمو الرعاية الصحية منصة البلوكتشين من إم تكنولوجي لتتبع الأدوية من الشركة المصنعة إلى المريض، مما يلغي الأدوية المزيفة ويوفر إمكانات استدعاء فورية.</p><h2>حالة العائد على الاستثمار</h2><p>تحقق المؤسسات عادةً عائداً على الاستثمار في البلوكتشين من خلال تقليل الاحتيال، وتوفير تكاليف التدقيق بنسبة ٥٠-٧٠٪، وتسريع حل النزاعات بين شركاء التداول.</p>`,
  },
  {
    id: '3',
    category: 'SECURITY', categoryAr: 'الأمن',
    date: 'March 5, 2026', dateAr: '٥ مارس ٢٠٢٦',
    readTime: '9 min read', readTimeAr: '٩ دقائق قراءة',
    title: 'Zero-Trust Architecture: The Security Standard Every Modern Enterprise Needs',
    titleAr: 'معمارية الثقة الصفرية: معيار الأمان الذي تحتاجه كل مؤسسة حديثة',
    excerpt: "As cyberattacks grow more sophisticated, Zero-Trust is no longer optional. Learn how MTechnology's security framework verifies every user, every device, and every transaction — before granting access.",
    excerptAr: 'مع تزايد تطور الهجمات الإلكترونية، لم تعد الثقة الصفرية اختيارية. تعرف كيف يتحقق إطار الأمان من إم تكنولوجي من كل مستخدم وكل جهاز وكل معاملة — قبل منح الوصول.',
    industry: 'Cybersecurity',
    tags: ['Zero-Trust', 'Cybersecurity', 'Enterprise Security', 'Data Protection'],
    tagsAr: ['الثقة الصفرية', 'الأمن السيبراني', 'أمن المؤسسات', 'حماية البيانات'],
    content: `<h2>The Perimeter Is Gone</h2><p>The traditional enterprise security model assumed a trusted interior and an untrusted exterior. This model collapsed with cloud adoption, remote work, and increasingly sophisticated supply chain attacks. Zero-Trust replaces this assumption with a simple principle: trust nothing, verify everything.</p><h2>What Zero-Trust Actually Means</h2><p>Zero-Trust architecture requires that every user, every device, and every network request be authenticated and authorized — regardless of whether the request originates inside or outside the corporate network.</p><h2>MTechnology's Implementation Framework</h2><p>MTechnology's Zero-Trust framework is built on four pillars: identity verification, device health attestation, micro-segmentation of network resources, and continuous session monitoring with AI-powered anomaly detection.</p><h2>The Threat Landscape in 2026</h2><p>Ransomware attacks now routinely target enterprise supply chains. Nation-state actors have demonstrated the ability to maintain persistent access inside enterprise networks for months before triggering attacks.</p><h2>Implementation Roadmap</h2><p>Enterprises transitioning to Zero-Trust don't need to rebuild overnight. MTechnology's phased approach starts with identity infrastructure, adds device management, then progressively applies micro-segmentation to the highest-value assets first.</p>`,
    contentAr: `<h2>اختفى المحيط</h2><p>افترض نموذج أمان المؤسسات التقليدي داخلاً موثوقاً وخارجاً غير موثوق. انهار هذا النموذج مع اعتماد السحابة والعمل عن بُعد والهجمات المتزايدة التطور على سلسلة التوريد. تحل الثقة الصفرية محل هذا الافتراض بمبدأ بسيط: لا تثق بشيء، وتحقق من كل شيء.</p><h2>ما تعنيه الثقة الصفرية فعلاً</h2><p>تتطلب معمارية الثقة الصفرية مصادقة وتفويض كل مستخدم وكل جهاز وكل طلب شبكة — بغض النظر عما إذا كان الطلب ينشأ داخل أو خارج شبكة الشركة.</p><h2>إطار تنفيذ إم تكنولوجي</h2><p>يُبنى إطار الثقة الصفرية من إم تكنولوجي على أربعة ركائز: التحقق من الهوية، وإثبات صحة الجهاز، والتجزئة الدقيقة لموارد الشبكة، والمراقبة المستمرة للجلسة مع اكتشاف الشذوذ المدعوم بالذكاء الاصطناعي.</p><h2>مشهد التهديدات في ٢٠٢٦</h2><p>تستهدف هجمات برامج الفدية الآن بشكل روتيني سلاسل التوريد للمؤسسات. أثبتت الجهات الفاعلة على مستوى الدول قدرتها على الحفاظ على وصول مستمر داخل شبكات المؤسسات لأشهر قبل شن الهجمات.</p><h2>خارطة طريق التنفيذ</h2><p>لا تحتاج المؤسسات التي تنتقل إلى الثقة الصفرية إلى إعادة البناء بين عشية وضحاها. يبدأ النهج المرحلي من إم تكنولوجي ببنية تحتية للهوية، ويضيف إدارة الأجهزة، ثم يطبق التجزئة الدقيقة تدريجياً على الأصول الأعلى قيمة أولاً.</p>`,
  },
  {
    id: '4',
    category: 'PLATFORM', categoryAr: 'المنصة',
    date: 'February 20, 2026', dateAr: '٢٠ فبراير ٢٠٢٦',
    readTime: '6 min read', readTimeAr: '٦ دقائق قراءة',
    title: 'Building Scalable Digital Infrastructure: Architecture Patterns That Work at Enterprise Scale',
    titleAr: 'بناء بنية تحتية رقمية قابلة للتطوير: أنماط معمارية تعمل على نطاق المؤسسات',
    excerpt: "From microservices to edge computing, the architectural decisions you make today will define your platform's ability to scale tomorrow.",
    excerptAr: 'من الخدمات الدقيقة إلى الحوسبة الطرفية، القرارات المعمارية التي تتخذها اليوم ستحدد قدرة منصتك على التوسع غداً.',
    industry: 'Platform',
    tags: ['Infrastructure', 'Scalability', 'Microservices', 'Cloud Architecture'],
    tagsAr: ['البنية التحتية', 'قابلية التطوير', 'الخدمات الدقيقة', 'معمارية السحابة'],
    content: `<h2>Architecture Is Strategy</h2><p>The most expensive technology decisions are the ones made early and revisited late. Architectural choices made in the first 18 months of a platform's life often determine its scalability ceiling for the next decade.</p><h2>The Microservices Case</h2><p>Monolithic architectures offer simplicity early but create compounding complexity at scale. Microservices decompose applications into independently deployable services, each owning its own data and business logic.</p><h2>Edge Computing for Latency-Sensitive Applications</h2><p>For applications where milliseconds matter, centralized cloud architectures introduce unacceptable latency. Edge computing moves processing closer to the data source, reducing round-trip latency from hundreds of milliseconds to single digits.</p><h2>Data Architecture Patterns</h2><p>Scalable platforms require deliberate data architecture. Event streaming, CQRS patterns for read/write optimization, and polyglot persistence are the foundational patterns that separate platforms that scale from those that collapse under load.</p><h2>The Infrastructure-as-Code Imperative</h2><p>Every infrastructure decision must be codified. When infrastructure is code, it becomes auditable, repeatable, and disaster-recoverable.</p>`,
    contentAr: `<h2>المعمارية هي الاستراتيجية</h2><p>أغلى قرارات التكنولوجيا هي تلك التي تُتخذ مبكراً وتُراجع متأخراً. كثيراً ما تحدد الخيارات المعمارية التي تُتخذ في الأشهر الثمانية عشر الأولى من عمر المنصة سقف قابليتها للتطوير للعقد التالي.</p><h2>حالة الخدمات الدقيقة</h2><p>توفر المعماريات المتجانسة البساطة في البداية لكنها تخلق تعقيداً متراكماً على نطاق واسع. تفكك الخدمات الدقيقة التطبيقات إلى خدمات قابلة للنشر بشكل مستقل، تمتلك كل منها بياناتها ومنطق أعمالها الخاص.</p><h2>الحوسبة الطرفية للتطبيقات الحساسة للتأخير</h2><p>بالنسبة للتطبيقات التي تهم فيها الميلي ثانية، تُدخل المعماريات السحابية المركزية تأخيراً غير مقبول. تنقل الحوسبة الطرفية المعالجة إلى أقرب من مصدر البيانات، مما يقلل تأخير الرحلة ذهاباً وإياباً من مئات الميلي ثانية إلى أرقام فردية.</p><h2>أنماط معمارية البيانات</h2><p>تتطلب المنصات القابلة للتطوير معمارية بيانات متعمدة. يعد تدفق الأحداث وأنماط CQRS لتحسين القراءة/الكتابة والمثابرة متعددة اللغات الأنماط الأساسية التي تفصل المنصات القابلة للتطوير عن تلك التي تنهار تحت الحمل.</p><h2>ضرورة البنية التحتية كرمز</h2><p>يجب تدوين كل قرار بنية تحتية. عندما تكون البنية التحتية رمزاً، تصبح قابلة للتدقيق وقابلة للتكرار وقابلة للاسترداد من الكوارث.</p>`,
  },
  {
    id: '5',
    category: 'INDUSTRIES', categoryAr: 'القطاعات',
    date: 'February 14, 2026', dateAr: '١٤ فبراير ٢٠٢٦',
    readTime: '7 min read', readTimeAr: '٧ دقائق قراءة',
    title: 'Digital Transformation in Government: How Public Sector Organizations Are Modernizing at Scale',
    titleAr: 'التحول الرقمي في الحكومة: كيف تُحدّث مؤسسات القطاع العام عملياتها على نطاق واسع',
    excerpt: "Government agencies face unique challenges — legacy systems, compliance mandates, and massive user bases. Here's how MTechnology helps public sector clients accelerate digital transformation.",
    excerptAr: 'تواجه الوكالات الحكومية تحديات فريدة — الأنظمة القديمة ومتطلبات الامتثال وقواعد المستخدمين الضخمة. إليك كيف تساعد إم تكنولوجي عملاء القطاع العام على تسريع التحول الرقمي.',
    industry: 'Government',
    tags: ['Government', 'Public Sector', 'Digital Transformation', 'Compliance'],
    tagsAr: ['الحكومة', 'القطاع العام', 'التحول الرقمي', 'الامتثال'],
    content: `<h2>The Public Sector Transformation Imperative</h2><p>Citizens increasingly expect government services to match the digital experience they receive from private sector applications. Yet most government agencies operate on technology stacks that predate the smartphone.</p><h2>The Unique Constraints of Government IT</h2><p>Procurement regulations, multi-year budget cycles, legacy system interdependencies, and strict compliance requirements create a complex constraint environment that demands specialized expertise.</p><h2>MTechnology's Government Practice</h2><p>MTechnology has built a dedicated government practice with deep experience navigating these constraints. Our approach prioritizes continuity — no citizen service is disrupted during the transformation.</p><h2>Case Pattern: Legacy Modernization</h2><p>The most common engagement starts with a legacy system that is too critical to shut down but too brittle to extend. MTechnology wraps these systems in modern APIs and migrates workloads incrementally.</p><h2>Citizen Experience as the North Star</h2><p>Every government digital transformation project MTechnology undertakes is evaluated against a single metric: does this make the citizen experience better?</p>`,
    contentAr: `<h2>ضرورة تحول القطاع العام</h2><p>يتوقع المواطنون بشكل متزايد أن تتطابق الخدمات الحكومية مع التجربة الرقمية التي يحصلون عليها من تطبيقات القطاع الخاص. ومع ذلك، تعمل معظم الوكالات الحكومية على حزم تقنية تسبق الهاتف الذكي.</p><h2>القيود الفريدة لتكنولوجيا المعلومات الحكومية</h2><p>تخلق لوائح المشتريات ودورات الميزانية متعددة السنوات والترابطات بين الأنظمة القديمة ومتطلبات الامتثال الصارمة بيئة قيود معقدة تتطلب خبرة متخصصة.</p><h2>ممارسة إم تكنولوجي الحكومية</h2><p>بنت إم تكنولوجي ممارسة حكومية مخصصة بخبرة عميقة في التعامل مع هذه القيود. نهجنا يُعطي الأولوية للاستمرارية — لا تتعطل أي خدمة مواطنين أثناء التحول.</p><h2>نمط الحالة: تحديث الإرث</h2><p>يبدأ أكثر أنواع التعاملات شيوعاً بنظام قديم بالغ الأهمية بحيث لا يمكن إغلاقه، لكنه هش جداً بحيث لا يمكن توسيعه. تلف إم تكنولوجي هذه الأنظمة بواجهات برمجة تطبيقات حديثة وتنقل أحمال العمل بشكل تدريجي.</p><h2>تجربة المواطن كنجم الشمال</h2><p>يُقيَّم كل مشروع تحول رقمي حكومي تتولاه إم تكنولوجي وفق مقياس واحد: هل يجعل هذا تجربة المواطن أفضل؟</p>`,
  },
  {
    id: '6',
    category: 'HEALTHCARE', categoryAr: 'الرعاية الصحية',
    date: 'February 5, 2026', dateAr: '٥ فبراير ٢٠٢٦',
    readTime: '8 min read', readTimeAr: '٨ دقائق قراءة',
    title: 'Securing Patient Data at Scale: How Healthcare Enterprises Are Winning the Cybersecurity Battle',
    titleAr: 'تأمين بيانات المرضى على نطاق واسع: كيف تكسب مؤسسات الرعاية الصحية معركة الأمن السيبراني',
    excerpt: 'Healthcare breaches cost an average of $10.9M per incident. Discover the multi-layered security and blockchain-powered data integrity strategies that top hospital networks use.',
    excerptAr: 'تكلف اختراقات الرعاية الصحية ما معدله ١٠.٩ مليون دولار لكل حادثة. اكتشف استراتيجيات الأمان متعدد الطبقات وسلامة البيانات المدعومة بالبلوكتشين التي تستخدمها أفضل شبكات المستشفيات.',
    industry: 'Healthcare',
    tags: ['Healthcare', 'Data Security', 'HIPAA', 'Patient Privacy'],
    tagsAr: ['الرعاية الصحية', 'أمن البيانات', 'HIPAA', 'خصوصية المرضى'],
    content: `<h2>The Most Targeted Industry</h2><p>Healthcare is now the most frequently targeted industry for cyberattacks, surpassing financial services. Patient records contain a uniquely valuable combination of personal, financial, and medical information.</p><h2>The Cost of a Breach</h2><p>The average healthcare data breach now costs $10.9 million per incident — the highest of any industry for thirteen consecutive years.</p><h2>The Multi-Layered Security Approach</h2><p>MTechnology's healthcare security framework combines Zero-Trust network architecture, end-to-end encryption, AI-powered threat detection, and mandatory multi-factor authentication for all clinical system access.</p><h2>Blockchain for Data Integrity</h2><p>Beyond perimeter security, MTechnology deploys blockchain technology to create tamper-evident audit trails for all patient data access. Every read, every modification, every export is recorded permanently.</p><h2>Compliance as a Byproduct</h2><p>When security is implemented correctly, compliance becomes a byproduct rather than a burden. MTechnology's healthcare clients consistently pass HIPAA audits with minimal preparation.</p>`,
    contentAr: `<h2>القطاع الأكثر استهدافاً</h2><p>أصبحت الرعاية الصحية الآن القطاع الأكثر استهدافاً للهجمات الإلكترونية، متجاوزةً الخدمات المالية. تحتوي سجلات المرضى على مزيج فريد القيمة من المعلومات الشخصية والمالية والطبية.</p><h2>تكلفة الاختراق</h2><p>يكلف متوسط اختراق بيانات الرعاية الصحية الآن ١٠.٩ مليون دولار لكل حادثة — الأعلى في أي صناعة لثلاثة عشر عاماً متتالية.</p><h2>نهج الأمان متعدد الطبقات</h2><p>يجمع إطار أمان الرعاية الصحية من إم تكنولوجي بين معمارية شبكة الثقة الصفرية والتشفير الكامل وكشف التهديدات المدعوم بالذكاء الاصطناعي والمصادقة متعددة العوامل الإلزامية لجميع وصول النظام السريري.</p><h2>البلوكتشين لسلامة البيانات</h2><p>إلى جانب أمان المحيط، تنشر إم تكنولوجي تقنية البلوكتشين لإنشاء مسارات تدقيق واضحة التلاعب لجميع عمليات الوصول إلى بيانات المرضى. كل قراءة وكل تعديل وكل تصدير يُسجَّل بشكل دائم.</p><h2>الامتثال كنتيجة ثانوية</h2><p>عند تطبيق الأمان بشكل صحيح، يصبح الامتثال نتيجة ثانوية وليس عبئاً. يجتاز عملاء الرعاية الصحية من إم تكنولوجي باستمرار عمليات تدقيق HIPAA بأدنى قدر من التحضير.</p>`,
  },
];

const uiText = {
  en: {
    label: 'Blog',
    heading1: 'Insights &',
    heading2: 'Perspectives',
    subheading: 'Expert analysis on AI, blockchain, cybersecurity, and digital infrastructure for modern enterprises.',
    readArticle: 'Read Article',
  },
  ar: {
    label: 'المدونة',
    heading1: 'رؤى و',
    heading2: 'وجهات نظر',
    subheading: 'تحليل متخصص في الذكاء الاصطناعي والبلوكتشين والأمن السيبراني والبنية التحتية الرقمية للمؤسسات الحديثة.',
    readArticle: 'اقرأ المقال',
  },
};

interface HomeProps {
  onRequestDemo?: () => void;
}

export default function Blogs({ onRequestDemo }: HomeProps = {}) {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });

  const isAr = lang === 'ar';
  const t = uiText[lang];

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang((localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
    };
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'rgb(11,11,15)', paddingTop: '100px', paddingBottom: '80px' }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <style>{`
        @keyframes blogFadeUp {
          from { opacity: 0; transform: translateY(32px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes blogLabelIn {
          from { opacity: 0; letter-spacing: 6px; }
          to   { opacity: 1; letter-spacing: 1.2px; }
        }
        .blog-label   { opacity: 0; }
        .blog-heading { opacity: 0; }
        .blog-card    { opacity: 0; }
        .blog-label.go   { animation: blogLabelIn 0.7s ease forwards; }
        .blog-heading.go { animation: blogFadeUp 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 150ms; }
        .blog-card.go    { animation: blogFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }

        .blog-post-card {
          background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }
        .blog-post-card:hover {
          border-color: rgba(53,98,233,0.4);
          background: rgba(53,98,233,0.04);
          transform: translateY(-4px);
        }
        .blog-post-card .card-glow {
          position: absolute; inset: 0; border-radius: 16px; pointer-events: none;
          background: radial-gradient(ellipse at 50% 0%, rgba(53,98,233,0.12) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .blog-post-card:hover .card-glow { opacity: 1; }
        .blog-tag {
          display: inline-flex; align-items: center;
          padding: 3px 10px; border-radius: 9999px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.5px;
          background: rgba(53,98,233,0.12); color: #86a3f9;
          border: 0.5px solid rgba(134,163,249,0.2);
          font-family: ${isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit'};
        }
        .read-more {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 500; color: #86a3f9;
          transition: gap 0.2s ease;
          font-family: ${isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit'};
        }
        .blog-post-card:hover .read-more { gap: 10px; }

        .blog-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .blog-wrap { padding: 0 60px; }

        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-wrap { padding: 0 24px; }
        }
        @media (max-width: 480px) {
          .blog-wrap { padding: 0 16px; }
        }
      `}</style>

      <div style={{ maxWidth: '1320px', margin: '0 auto' }} className="blog-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p
            className={`blog-label${started ? ' go' : ''}`}
            style={{ fontSize:'16px', fontWeight:600, letterSpacing:'1.2px', color:'#3562e9', textTransform:'uppercase', marginBottom:'16px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}
          >{t.label}</p>
          <h1
            className={`blog-heading${started ? ' go' : ''}`}
            style={{ fontSize:'clamp(32px, 5vw, 52px)', fontWeight:700, letterSpacing: isAr ? '-0.5px' : '-1.5px', lineHeight:1.1, color:'#fafafa', marginBottom:'20px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}
          >
            {t.heading1}{' '}
            <span style={{ background:'linear-gradient(135deg, #3562e9, #86a3f9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              {t.heading2}
            </span>
          </h1>
          <p
            className={`blog-heading${started ? ' go' : ''}`}
            style={{ fontSize:'clamp(14px, 2vw, 18px)', color:'#73798c', lineHeight:1.7, maxWidth:'560px', margin:'0 auto', animationDelay:'250ms', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}
          >{t.subheading}</p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((post, i) => (
            <div
              key={post.id}
              className={`blog-post-card blog-card${started ? ' go' : ''}`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
              onClick={() => navigate('/blog/' + post.id)}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-glow" />
              <div style={{ padding:'24px', display:'flex', flexDirection:'column', height:'100%', minHeight:'300px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px', flexWrap:'wrap' }}>
                  <span style={{ padding:'4px 12px', borderRadius:'9999px', fontSize:'11px', fontWeight:700, letterSpacing:'0.8px', background:'rgba(53,98,233,0.15)', color:'#3562e9', border:'0.5px solid rgba(53,98,233,0.4)', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}>
                    {isAr ? post.categoryAr : post.category}
                  </span>
                  <span style={{ fontSize:'13px', color:'#73798c', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}>{isAr ? post.dateAr : post.date}</span>
                  <span style={{ fontSize:'13px', color:'#73798c', marginLeft: isAr ? '0' : 'auto', marginRight: isAr ? 'auto' : '0', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}>{isAr ? post.readTimeAr : post.readTime}</span>
                </div>
                <h2 style={{ fontSize:'clamp(15px, 2vw, 18px)', fontWeight:600, background:'linear-gradient(135deg, #fafafa 0%, #86a3f9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1.5, letterSpacing: isAr ? '0' : '-0.3px', marginBottom:'12px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit', textAlign: isAr ? 'right' : 'left' }}>
                  {isAr ? post.titleAr : post.title}
                </h2>
                <p style={{ fontSize:'14px', color:'#73798c', lineHeight:1.8, marginBottom:'20px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit', textAlign: isAr ? 'right' : 'left' }}>
                  {isAr ? post.excerptAr : post.excerpt}
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'20px', marginTop:'auto', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
                  {(isAr ? post.tagsAr : post.tags).map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
                </div>
                <div style={{ borderTop:'0.5px solid rgba(255,255,255,0.06)', paddingTop:'16px', display:'flex', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
                  <span className="read-more">
                    {isAr && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink:0, transform:'scaleX(-1)' }}>
                        <path d="M3.33333 8H12.6667M9.33333 4.66667L12.6667 8L9.33333 11.3333" stroke="#86a3f9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {t.readArticle}
                    {!isAr && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink:0 }}>
                        <path d="M3.33333 8H12.6667M9.33333 4.66667L12.6667 8L9.33333 11.3333" stroke="#86a3f9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}