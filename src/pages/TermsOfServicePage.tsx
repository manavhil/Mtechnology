import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';

const sectionsEn = [
  { title:'1. Acceptance of Terms', content:`<p>By accessing or using any MTechnology platform, product, or service (collectively, the "Services"), you agree to be bound by these Terms of Service. If you are using our Services on behalf of an organization, you represent and warrant that you have authority to bind that organization to these Terms. If you do not agree to these Terms, you may not access or use our Services.</p>` },
  { title:'2. Description of Services', content:`<p>MTechnology provides enterprise technology infrastructure including AI-powered automation platforms for enterprise workflow optimization; blockchain infrastructure for asset tracking and tamper-proof record management; cybersecurity solutions including Zero-Trust architecture implementation; digital platform engineering and cloud infrastructure; and industry-specific solutions for government, healthcare, logistics, and financial services sectors.</p><p>The specific Services available to you depend on your subscription plan or contractual agreement with MTechnology. We reserve the right to modify, suspend, or discontinue any Service with reasonable notice.</p>` },
  { title:'3. Account Registration & Responsibilities', content:`<p>To access certain Services, you must create an account. You agree to provide accurate, complete, and current registration information; maintain the security of your account credentials; notify MTechnology immediately of any unauthorized access; accept responsibility for all activity that occurs under your account; and ensure all users within your organization comply with these Terms.</p><p>MTechnology reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a security risk.</p>` },
  { title:'4. Acceptable Use Policy', content:`<p>You agree to use our Services only for lawful purposes. You may not use our Services to violate any applicable law or regulation; transmit material that infringes intellectual property rights; attempt to gain unauthorized access to our platform; introduce malware or malicious code; engage in any activity that disrupts or degrades the Services; use automated scraping tools without prior written authorization; or reverse engineer our platform.</p><p>Violation of this Acceptable Use Policy may result in immediate suspension or termination without refund.</p>` },
  { title:'5. Intellectual Property', content:`<p>All intellectual property rights in our Services are owned by MTechnology or our licensors. These Terms do not grant you any rights to our intellectual property except as explicitly stated. Subject to your compliance with these Terms and payment of applicable fees, MTechnology grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes.</p><p>You retain ownership of any data or content you submit to our platform. By submitting it, you grant MTechnology a limited license to process and store it solely to provide the Services.</p>` },
  { title:'6. Payment & Subscription Terms', content:`<p>Subscription fees are billed in advance on a monthly or annual basis as specified in your agreement. All fees are non-refundable except as expressly stated or required by applicable law. MTechnology reserves the right to modify pricing with 30 days written notice. Failure to pay fees may result in suspension of Services after a 10-day cure period. Disputed charges must be raised within 30 days of the invoice date.</p>` },
  { title:'7. Confidentiality', content:`<p>Each party agrees to keep the other party's Confidential Information strictly confidential; use Confidential Information only for the purpose of fulfilling obligations under these Terms; disclose Confidential Information only to employees or contractors who need to know it and are bound by equivalent confidentiality obligations; and notify the other party promptly upon becoming aware of any unauthorized disclosure.</p>` },
  { title:'8. Service Level Agreement', content:`<p>MTechnology commits to 99.9% platform availability measured monthly, scheduled maintenance with at least 48 hours advance notice, support response times of 1 hour for critical issues and 4 hours for high priority issues, and recovery objectives of RPO 4 hours and RTO 8 hours. Service credits for SLA breaches are specified in individual enterprise agreements and are the sole remedy for availability failures.</p>` },
  { title:'9. Limitation of Liability', content:`<p>To the maximum extent permitted by applicable law, MTechnology shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill. MTechnology's total aggregate liability for all claims shall not exceed the greater of: (a) the total fees paid by you in the 12 months preceding the claim, or (b) USD $100. These limitations apply regardless of the theory of liability.</p>` },
  { title:'10. Termination', content:`<p>Either party may terminate these Terms for convenience with 30 days written notice, or for cause immediately upon written notice if the other party materially breaches these Terms and fails to cure within 15 days. MTechnology may terminate immediately if you violate the Acceptable Use Policy or fail to pay fees.</p><p>Upon termination, your right to access the Services ceases immediately. MTechnology will make your Customer Data available for export for 30 days following termination, after which it will be securely deleted.</p>` },
  { title:'11. Governing Law & Disputes', content:`<p>These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of the Kingdom of Saudi Arabia. Before initiating formal proceedings, both parties agree to attempt good-faith negotiation for 30 days.</p>` },
  { title:'12. Changes to Terms', content:`<p>MTechnology reserves the right to modify these Terms at any time. When we make material changes, we will update the "Last Updated" date, provide at least 30 days advance notice to registered users via email, and obtain written acknowledgment from enterprise clients where required. Your continued use of the Services after changes take effect constitutes acceptance.</p>` },
  { title:'13. Contact Information', content:`<p>For questions about these Terms, please contact us at <a href="mailto:info@mtechnology.sa" style="color:#86a3f9">info@mtechnology.sa</a>. We aim to respond to all legal inquiries within 5 business days.</p>` },
];

const sectionsAr = [
  { title:'١. قبول الشروط', content:`<p>بالوصول إلى أي منصة أو منتج أو خدمة من خدمات إم تكنولوجي (يُشار إليها مجتمعةً بـ"الخدمات") أو استخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت تستخدم خدماتنا نيابةً عن مؤسسة، فإنك تُقر وتضمن أن لديك صلاحية إلزام تلك المؤسسة بهذه الشروط. إذا كنت لا توافق على هذه الشروط، فلا يحق لك الوصول إلى خدماتنا أو استخدامها.</p>` },
  { title:'٢. وصف الخدمات', content:`<p>توفر إم تكنولوجي بنية تحتية تقنية مؤسسية تشمل: منصات أتمتة مدعومة بالذكاء الاصطناعي لتحسين سير العمل المؤسسي؛ وبنية تحتية للبلوكتشين لتتبع الأصول وإدارة السجلات المقاومة للتلاعب؛ وحلول الأمن السيبراني بما فيها تطبيق معمارية الثقة الصفرية؛ وهندسة المنصات الرقمية والبنية التحتية السحابية؛ وحلول خاصة بالقطاعات كالحكومة والرعاية الصحية واللوجستيات والخدمات المالية.</p><p>تعتمد الخدمات المتاحة لك على خطة اشتراكك أو اتفاقيتك التعاقدية مع إم تكنولوجي. نحتفظ بالحق في تعديل أي خدمة أو تعليقها أو إيقافها مع إشعار معقول.</p>` },
  { title:'٣. تسجيل الحساب والمسؤوليات', content:`<p>للوصول إلى بعض الخدمات، يجب عليك إنشاء حساب. توافق على تقديم معلومات تسجيل دقيقة وكاملة وحديثة؛ والحفاظ على أمان بيانات اعتماد حسابك؛ وإخطار إم تكنولوجي فوراً بأي وصول غير مصرح به؛ وتحمّل المسؤولية عن جميع الأنشطة التي تجري تحت حسابك؛ والتأكد من امتثال جميع المستخدمين داخل مؤسستك لهذه الشروط.</p><p>تحتفظ إم تكنولوجي بالحق في تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط أو تمارس نشاطاً احتيالياً أو تشكّل خطراً أمنياً.</p>` },
  { title:'٤. سياسة الاستخدام المقبول', content:`<p>توافق على استخدام خدماتنا للأغراض المشروعة فقط. لا يجوز لك استخدام خدماتنا لانتهاك أي قانون أو لائحة معمول بها؛ أو نقل مواد تنتهك حقوق الملكية الفكرية؛ أو محاولة الوصول غير المصرح به إلى منصتنا؛ أو إدخال برامج ضارة أو أكواد خبيثة؛ أو الانخراط في أي نشاط يعطّل الخدمات أو يُضرّ بجودتها؛ أو استخدام أدوات استخراج البيانات الآلية دون إذن كتابي مسبق؛ أو الهندسة العكسية لمنصتنا.</p><p>قد يؤدي انتهاك سياسة الاستخدام المقبول هذه إلى الإيقاف أو الإنهاء الفوري دون استرداد المبالغ المدفوعة.</p>` },
  { title:'٥. الملكية الفكرية', content:`<p>جميع حقوق الملكية الفكرية في خدماتنا مملوكة لإم تكنولوجي أو مرخِّصيها. لا تمنحك هذه الشروط أي حقوق في ملكيتنا الفكرية إلا ما نُصّ عليه صراحةً. رهناً بامتثالك لهذه الشروط وسداد الرسوم المعمول بها، تمنحك إم تكنولوجي ترخيصاً محدوداً وغير حصري وغير قابل للتحويل وقابل للإلغاء للوصول إلى الخدمات واستخدامها لأغراضك التجارية الداخلية.</p><p>تحتفظ بملكية أي بيانات أو محتوى تقدمه إلى منصتنا. بتقديمه، تمنح إم تكنولوجي ترخيصاً محدوداً لمعالجته وتخزينه فقط لغرض تقديم الخدمات.</p>` },
  { title:'٦. شروط الدفع والاشتراك', content:`<p>تُحصَّل رسوم الاشتراك مقدماً على أساس شهري أو سنوي وفقاً لما هو محدد في اتفاقيتك. جميع الرسوم غير قابلة للاسترداد إلا ما نُصّ عليه صراحةً أو اقتضاه القانون المعمول به. تحتفظ إم تكنولوجي بالحق في تعديل الأسعار مع إشعار مدته ٣٠ يوماً. قد يؤدي عدم سداد الرسوم إلى تعليق الخدمات بعد فترة معالجة مدتها ١٠ أيام. يجب الطعن في الرسوم المتنازع عليها خلال ٣٠ يوماً من تاريخ الفاتورة.</p>` },
  { title:'٧. السرية', content:`<p>يوافق كل طرف على الحفاظ على سرية المعلومات السرية للطرف الآخر بشكل صارم؛ واستخدام المعلومات السرية فقط لغرض الوفاء بالالتزامات بموجب هذه الشروط؛ والإفصاح عن المعلومات السرية فقط للموظفين أو المقاولين الذين يحتاجون إليها ويلتزمون بالتزامات سرية مماثلة؛ وإخطار الطرف الآخر فوراً عند العلم بأي إفصاح غير مصرح به.</p>` },
  { title:'٨. اتفاقية مستوى الخدمة', content:`<p>تلتزم إم تكنولوجي بتوفر المنصة بنسبة ٩٩.٩٪ مقاساً شهرياً، وصيانة مجدولة مع إشعار مسبق لا يقل عن ٤٨ ساعة، وأوقات استجابة للدعم تبلغ ساعة واحدة للمشكلات الحرجة و٤ ساعات للمشكلات ذات الأولوية العالية، وأهداف استرداد تبلغ RPO أربع ساعات وRTO ثماني ساعات. تُحدَّد أرصدة الخدمة في حالات انتهاك اتفاقية مستوى الخدمة في الاتفاقيات المؤسسية الفردية وتمثّل العلاج الوحيد لحالات عدم التوفر.</p>` },
  { title:'٩. تحديد المسؤولية', content:`<p>إلى أقصى حد يسمح به القانون المعمول به، لن تكون إم تكنولوجي مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك خسارة الأرباح أو البيانات أو الشهرة التجارية. لن تتجاوز المسؤولية الإجمالية لإم تكنولوجي عن جميع المطالبات: (أ) إجمالي الرسوم التي دفعتها في الأشهر الاثني عشر السابقة للمطالبة، أو (ب) ١٠٠ دولار أمريكي، أيهما أكبر. تسري هذه القيود بصرف النظر عن نظرية المسؤولية.</p>` },
  { title:'١٠. الإنهاء', content:`<p>يجوز لأي من الطرفين إنهاء هذه الشروط لأسباب تقديرية مع إشعار كتابي مدته ٣٠ يوماً، أو لأسباب مبررة فوراً عند إشعار كتابي إذا انتهك الطرف الآخر هذه الشروط انتهاكاً جوهرياً وأخفق في التصحيح خلال ١٥ يوماً. يجوز لإم تكنولوجي الإنهاء الفوري في حالة انتهاك سياسة الاستخدام المقبول أو الإخفاق في سداد الرسوم.</p><p>عند الإنهاء، يتوقف حقك في الوصول إلى الخدمات فوراً. ستتيح إم تكنولوجي بيانات العميل للتصدير لمدة ٣٠ يوماً بعد الإنهاء، وبعد ذلك سيتم حذفها بشكل آمن.</p>` },
  { title:'١١. القانون الحاكم والنزاعات', content:`<p>تخضع هذه الشروط لقوانين المملكة العربية السعودية. يخضع أي نزاع ينشأ عن هذه الشروط للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية. قبل الشروع في الإجراءات الرسمية، يوافق الطرفان على محاولة التفاوض بحسن نية لمدة ٣٠ يوماً.</p>` },
  { title:'١٢. التغييرات على الشروط', content:`<p>تحتفظ إم تكنولوجي بالحق في تعديل هذه الشروط في أي وقت. عند إجراء تغييرات جوهرية، سنحدّث تاريخ "آخر تحديث"، ونقدم إشعاراً مسبقاً للمستخدمين المسجلين عبر البريد الإلكتروني لا يقل عن ٣٠ يوماً قبل سريان التغييرات، ونحصل على إقرار كتابي من العملاء المؤسسيين عند الاقتضاء. يُعدّ استمرارك في استخدام الخدمات بعد سريان التغييرات قبولاً منك لها.</p>` },
  { title:'١٣. معلومات الاتصال', content:`<p>للاستفسار عن هذه الشروط، يُرجى التواصل معنا على <a href="mailto:info@mtechnology.sa" style="color:#86a3f9">info@mtechnology.sa</a>. نهدف إلى الرد على جميع الاستفسارات القانونية خلال ٥ أيام عمل.</p>` },
];

const ui = {
  en: {
    legal: 'Legal', title: 'Terms of Service', lastUpdated: 'Last updated:', effective: '· Effective:', date: 'March 1, 2026',
    intro: "Please read these Terms carefully before using MTechnology's platform or services. By accessing our Services, you agree to be bound by these Terms.",
    contents: 'Contents', back: 'Back',
  },
  ar: {
    legal: 'قانوني', title: 'شروط الخدمة', lastUpdated: 'آخر تحديث:', effective: '· السريان:', date: '١ مارس ٢٠٢٦',
    intro: 'يُرجى قراءة هذه الشروط بعناية قبل استخدام منصة أو خدمات إم تكنولوجي. بالوصول إلى خدماتنا، فإنك توافق على الالتزام بهذه الشروط.',
    contents: 'المحتويات', back: 'رجوع',
  },
};

export default function TermsOfServicePage() {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });

  const isAr = lang === 'ar';
  const t = ui[lang];
  const sections = isAr ? sectionsAr : sectionsEn;

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setStarted(true), 80);
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
    <div style={{ overflow: 'hidden', backgroundColor: 'rgb(11,11,15)', position: 'relative' }} dir={isAr ? 'rtl' : 'ltr'}>
      <style>{`
        [data-name="Header"] { display: none !important; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);filter:blur(4px);}to{opacity:1;transform:translateY(0);filter:blur(0);} }
        .fade-up{opacity:0;} .fade-up.go{animation:fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;}

        .policy-body p {
          font-size:15px; color:#9ba3b8; line-height:1.9; margin-bottom:16px;
          text-align:${isAr ? 'right' : 'justify'};
          font-family:${isAr ? "'Noto Sans Arabic', 'Cairo', Tahoma, sans-serif" : 'inherit'};
        }
        .policy-body ul { margin:0 0 16px; padding-left:0; padding-right:0; }
        .policy-body ul li {
          font-size:15px; color:#9ba3b8; line-height:1.8; margin-bottom:8px;
          list-style:none; padding-${isAr ? 'right' : 'left'}:20px; position:relative;
          font-family:${isAr ? "'Noto Sans Arabic', 'Cairo', Tahoma, sans-serif" : 'inherit'};
        }
        .policy-body ul li::before {
          content:''; position:absolute; ${isAr ? 'right' : 'left'}:0; top:11px;
          width:5px; height:5px; border-radius:50%; background:#3562e9;
        }
        .policy-body strong { color:#c8cfe0; font-weight:600; }
        .policy-body a { color:#86a3f9; text-decoration:none; }

        .nav-item {
          display:block; padding:8px 14px; border-radius:8px; font-size:13px; color:#73798c;
          cursor:pointer; transition:color 0.2s,background 0.2s; border:none; background:none;
          text-align:${isAr ? 'right' : 'left'}; width:100%; line-height:1.6;
          font-family:${isAr ? "'Noto Sans Arabic', 'Cairo', Tahoma, sans-serif" : 'inherit'};
        }
        .nav-item:hover { color:#c8cfe0; background:rgba(255,255,255,0.04); }
        .nav-item.active { color:#86a3f9; background:rgba(53,98,233,0.1); }

        .back-btn {
          display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:500;
          color:#73798c; background:rgba(255,255,255,0.04); border:0.5px solid rgba(255,255,255,0.08);
          border-radius:8px; padding:8px 16px; cursor:pointer; transition:color 0.2s,background 0.2s;
        }
        .back-btn:hover { color:#86a3f9; background:rgba(53,98,233,0.08); }

        .section-card {
          background:rgba(255,255,255,0.03); border:0.5px solid rgba(255,255,255,0.08);
          border-radius:16px; padding:28px; margin-bottom:16px; scroll-margin-top:120px;
          transition:border-color 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter:blur(12px); position:relative; overflow:hidden;
        }
        .section-card:hover { border-color:rgba(53,98,233,0.35); box-shadow:0 0 30px -8px rgba(53,98,233,0.3); }

        .policy-layout { display:grid; grid-template-columns:240px 1fr; gap:48px; align-items:start; }
        .policy-main { max-width:1200px; margin:0 auto; padding:120px 48px 80px; }

        @media (max-width: 900px) {
          .policy-layout { grid-template-columns: 1fr; }
          .policy-sidebar { display: none; }
          .policy-main { padding: 100px 24px 60px; }
        }
        @media (max-width: 480px) {
          .policy-main { padding: 90px 16px 48px; }
          .section-card { padding: 20px; }
        }
      `}</style>

      <FunctionalHeader onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[[12.8,960.72,1.34,28],[1133.3,295.57,1.69,20],[174.09,716.45,2.91,21],[360.33,318.06,2.32,20],[802,832.08,2.03,29],[845.75,824.24,3.55,21],[865.23,792.64,3.58,31],[662.21,234.11,3.97,20],[637.83,433.53,1.02,21],[41.23,576.3,1.14,40],[155.95,652.42,1.11,26],[744.67,685.46,2.16,41]].map(([left,top,size,opacity],i) => (
          <div key={i} className="absolute bg-[rgba(53,98,233,0.3)] rounded-full" style={{left:`${left}px`,top:`${top}px`,width:`${size}px`,height:`${size}px`,opacity:opacity/100}} />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-[700px] opacity-40 pointer-events-none" style={{background:"radial-gradient(ellipse 60% 50% at 50% 0%, rgba(53,98,233,0.15), transparent)"}} />
      <div className="absolute blur-[50px] opacity-40 right-[-79px] top-[195px] rounded-full pointer-events-none" style={{width:"409px",height:"409px",background:"radial-gradient(circle, rgba(53,98,233,0.15), transparent 70%)"}} />
      <div className="absolute blur-[50px] opacity-40 left-[-78px] bottom-[300px] rounded-full pointer-events-none" style={{width:"307px",height:"307px",background:"radial-gradient(circle, rgba(53,98,233,0.15), transparent 70%)"}} />

      <main className="policy-main">
        {/* Back button only */}
        <div className={`fade-up${started ? ' go' : ''}`} style={{ marginBottom:'40px' }}>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>
              <path d="M12.6667 8H3.33333M6.66667 4.66667L3.33333 8L6.66667 11.3333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.back}
          </button>
        </div>

        {/* Page header */}
        <div className={`fade-up${started ? ' go' : ''}`} style={{ animationDelay:'80ms', marginBottom:'48px' }}>
          <p style={{ fontSize:'12px', fontWeight:600, letterSpacing:'1.2px', color:'#3562e9', textTransform:'uppercase', marginBottom:'12px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}>{t.legal}</p>
          <h1 style={{ fontSize:'clamp(32px, 5vw, 48px)', fontWeight:700, letterSpacing: isAr ? '-0.5px' : '-1.5px', lineHeight:1.15, background:'linear-gradient(135deg, #fafafa 0%, #86a3f9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'16px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}>{t.title}</h1>
          <p style={{ fontSize:'15px', color:'#73798c', lineHeight:1.6 }}>{t.lastUpdated} <strong style={{ color:'#9ba3b8' }}>{t.date}</strong> {t.effective} <strong style={{ color:'#9ba3b8' }}>{t.date}</strong></p>
          <p style={{ fontSize:'15px', color:'#73798c', lineHeight:1.8, marginTop:'12px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit', textAlign: isAr ? 'right' : 'left' }}>{t.intro}</p>
        </div>

        <div className="policy-layout">
          {/* Sidebar */}
          <div className={`fade-up${started ? ' go' : ''} policy-sidebar`} style={{ animationDelay:'160ms', position:'sticky', top:'100px' }}>
            <p style={{ fontSize:'11px', color:'#4a5068', textTransform:'uppercase', letterSpacing:'1px', fontWeight:600, marginBottom:'12px', paddingLeft: isAr ? '0' : '14px', paddingRight: isAr ? '14px' : '0', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit' }}>{t.contents}</p>
            {sections.map((s, i) => (
              <button key={i} className={`nav-item${activeSection === i ? ' active' : ''}`}
                onClick={() => { setActiveSection(i); document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {s.title}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className={`fade-up${started ? ' go' : ''}`} style={{ animationDelay:'220ms' }}>
            {sections.map((s, i) => (
              <div key={i} id={`section-${i}`} className="section-card">
                <div style={{ position:"absolute", inset:0, borderRadius:"16px", pointerEvents:"none", backgroundImage:"linear-gradient(170.687deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)" }} />
                <h2 style={{ fontSize:'18px', fontWeight:700, color:'#fafafa', marginBottom:'16px', letterSpacing: isAr ? '0' : '-0.3px', fontFamily: isAr ? "'Noto Sans Arabic','Cairo',Tahoma,sans-serif" : 'inherit', textAlign: isAr ? 'right' : 'left' }}>{s.title}</h2>
                <div className="policy-body" dangerouslySetInnerHTML={{ __html: s.content }} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}