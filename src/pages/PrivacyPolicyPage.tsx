import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';

const sectionsEn = [
  { title:'1. Information We Collect', content:`<p>MTechnology collects information you provide directly to us when you request a demo, contact our team, or interact with our platform. This includes contact information such as your name, email address, phone number, and job title; company information including organization name, size, and industry; usage data including how you interact with our platform; technical data such as IP address, browser type, and device identifiers; and communications you send us.</p><p>We do not sell, rent, or trade your personal information to third parties under any circumstances.</p>` },
  { title:'2. How We Use Your Information', content:`<p>MTechnology uses the information we collect to operate, maintain, and improve our services. We use your data to provide and personalize our enterprise platform; process and respond to demo requests and support tickets; send transactional communications including service updates; analyze usage patterns to improve performance; comply with legal obligations; and detect, prevent, and respond to fraud or security incidents.</p><p>We will never use your data for purposes materially different from those described here without your explicit consent.</p>` },
  { title:'3. Data Storage & Security', content:`<p>MTechnology employs enterprise-grade security measures to protect your data at every layer. All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Access to personal data is strictly controlled with full audit logging. Our infrastructure operates under a Zero-Trust architecture. We conduct regular penetration testing and third-party security audits, and our incident response procedures are tested and maintained to meet enterprise SLA requirements.</p>` },
  { title:'4. Data Retention', content:`<p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy. Account and contact data is retained for the duration of our business relationship plus 3 years. Usage and analytics data is retained for up to 24 months. Communications and support records are retained for 5 years. Billing and transaction records are retained for 7 years as required by applicable tax law.</p>` },
  { title:'5. Sharing & Disclosure', content:`<p>MTechnology does not sell your personal information. We may share your data only with trusted service providers who process data on our behalf under strict contractual obligations; when disclosure is required by applicable law or court order; in the event of a merger, acquisition, or sale of assets; or with your explicit consent for any other purpose.</p>` },
  { title:'6. Your Rights', content:`<p>Depending on your jurisdiction, you may have rights to access, rectify, erase, or port your personal data; object to processing; or request restriction of processing. To exercise any of these rights, contact us at <a href="mailto:info@mtechnology.sa" style="color:#86a3f9">info@mtechnology.sa</a>. We will respond within 30 days.</p>` },
  { title:'7. Cookies & Tracking', content:`<p>MTechnology uses essential cookies required for the platform to function, analytics cookies to understand how visitors use our platform, and preference cookies to remember your settings. You may control cookie preferences through your browser settings. Disabling essential cookies may impact platform functionality.</p>` },
  { title:'8. International Transfers', content:`<p>MTechnology operates globally and may transfer your data to servers located outside your country of residence. Where such transfers occur, we ensure appropriate safeguards are in place including Standard Contractual Clauses approved by relevant data protection authorities and adequacy decisions where applicable.</p>` },
  { title:'9. Changes to This Policy', content:`<p>We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last Updated" date, notify registered users by email at least 14 days before changes take effect, and request renewed consent where legally required. Your continued use of our platform after changes take effect constitutes acceptance.</p>` },
  { title:'10. Contact Us', content:`<p>If you have questions relating to this Privacy Policy or your personal data, please contact us at <a href="mailto:info@mtechnology.sa" style="color:#86a3f9">info@mtechnology.sa</a>. We take all privacy inquiries seriously and are committed to resolving concerns promptly.</p>` },
];

const sectionsAr = [
  { title:'١. المعلومات التي نجمعها', content:`<p>تجمع إم تكنولوجي المعلومات التي تقدمها مباشرةً عند طلب عرض تجريبي، أو التواصل مع فريقنا، أو التفاعل مع منصتنا. يشمل ذلك معلومات الاتصال كالاسم وعنوان البريد الإلكتروني ورقم الهاتف والمسمى الوظيفي؛ ومعلومات الشركة كاسم المؤسسة وحجمها وقطاعها؛ وبيانات الاستخدام التي تعكس تفاعلك مع المنصة؛ والبيانات التقنية كعنوان IP ونوع المتصفح ومعرّفات الأجهزة؛ فضلاً عن المراسلات التي ترسلها إلينا.</p><p>لا نبيع معلوماتك الشخصية أو نؤجرها أو نتداولها مع أطراف ثالثة تحت أي ظرف من الظروف.</p>` },
  { title:'٢. كيف نستخدم معلوماتك', content:`<p>تستخدم إم تكنولوجي المعلومات التي نجمعها لتشغيل خدماتنا وصيانتها وتحسينها. نستخدم بياناتك لتوفير منصتنا المؤسسية وتخصيصها؛ ومعالجة طلبات العروض التجريبية وتذاكر الدعم والرد عليها؛ وإرسال اتصالات المعاملات بما في ذلك تحديثات الخدمة؛ وتحليل أنماط الاستخدام لتحسين الأداء؛ والامتثال للالتزامات القانونية؛ واكتشاف حالات الاحتيال والحوادث الأمنية والوقاية منها والرد عليها.</p><p>لن نستخدم بياناتك لأغراض مختلفة جوهرياً عن تلك الموضحة هنا دون موافقتك الصريحة.</p>` },
  { title:'٣. تخزين البيانات والأمان', content:`<p>تعتمد إم تكنولوجي تدابير أمنية على مستوى المؤسسات لحماية بياناتك في كل طبقة. تُشفَّر جميع البيانات أثناء النقل باستخدام TLS 1.3 وأثناء التخزين باستخدام AES-256. يخضع الوصول إلى البيانات الشخصية لضوابط صارمة مع تسجيل تدقيق كامل. تعمل بنيتنا التحتية في إطار معمارية الثقة الصفرية. نجري اختبارات اختراق منتظمة وعمليات تدقيق أمني من طرف ثالث، وتُختبر إجراءات الاستجابة للحوادث لدينا وتُصان لتلبية متطلبات اتفاقية مستوى الخدمة للمؤسسات.</p>` },
  { title:'٤. الاحتفاظ بالبيانات', content:`<p>نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتحقيق الأغراض الموضحة في هذه السياسة. تُحتفظ ببيانات الحساب والاتصال طوال مدة علاقتنا التجارية إضافةً إلى ٣ سنوات. تُحتفظ ببيانات الاستخدام والتحليلات لمدة تصل إلى ٢٤ شهراً. تُحتفظ بسجلات الاتصالات والدعم لمدة ٥ سنوات. تُحتفظ بسجلات الفوترة والمعاملات لمدة ٧ سنوات وفقاً لما يقتضيه قانون الضرائب المعمول به.</p>` },
  { title:'٥. المشاركة والإفصاح', content:`<p>لا تبيع إم تكنولوجي معلوماتك الشخصية. قد نشارك بياناتك فقط مع مزودي الخدمات الموثوقين الذين يعالجون البيانات نيابةً عنا بموجب التزامات تعاقدية صارمة؛ أو عند الإفصاح المطلوب بموجب القانون المعمول به أو أمر المحكمة؛ أو في حالة الاندماج أو الاستحواذ أو بيع الأصول؛ أو بموافقتك الصريحة لأي غرض آخر.</p>` },
  { title:'٦. حقوقك', content:`<p>اعتماداً على اختصاصك القضائي، قد تتمتع بحقوق الوصول إلى بياناتك الشخصية وتصحيحها ومحوها أو نقلها؛ والاعتراض على المعالجة؛ أو طلب تقييد المعالجة. لممارسة أي من هذه الحقوق، تواصل معنا على <a href="mailto:info@mtechnology.sa" style="color:#86a3f9">info@mtechnology.sa</a>. سنرد خلال ٣٠ يوماً.</p>` },
  { title:'٧. ملفات تعريف الارتباط والتتبع', content:`<p>تستخدم إم تكنولوجي ملفات تعريف الارتباط الأساسية اللازمة لعمل المنصة، وملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الزوار لمنصتنا، وملفات تعريف الارتباط التفضيلية لتذكر إعداداتك. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد يؤثر تعطيل ملفات تعريف الارتباط الأساسية على وظائف المنصة.</p>` },
  { title:'٨. النقل الدولي', content:`<p>تعمل إم تكنولوجي على المستوى العالمي وقد تنقل بياناتك إلى خوادم خارج بلد إقامتك. عند حدوث مثل هذه النقلات، نضمن وجود ضمانات مناسبة تشمل البنود التعاقدية النموذجية المعتمدة من قِبل سلطات حماية البيانات المعنية وقرارات الملاءمة عند الاقتضاء.</p>` },
  { title:'٩. التغييرات على هذه السياسة', content:`<p>قد نحدّث سياسة الخصوصية هذه من وقت لآخر. عند إجراء تغييرات جوهرية، سنحدّث تاريخ "آخر تحديث"، ونخطر المستخدمين المسجلين عبر البريد الإلكتروني قبل ١٤ يوماً على الأقل من سريان التغييرات، ونطلب تجديد الموافقة عند الاقتضاء قانونياً. يُعدّ استمرارك في استخدام منصتنا بعد سريان التغييرات قبولاً منك لها.</p>` },
  { title:'١٠. اتصل بنا', content:`<p>إذا كانت لديك أسئلة تتعلق بسياسة الخصوصية هذه أو بياناتك الشخصية، يُرجى التواصل معنا على <a href="mailto:info@mtechnology.sa" style="color:#86a3f9">info@mtechnology.sa</a>. نأخذ جميع استفسارات الخصوصية بجدية تامة ونلتزم بحل المخاوف على الفور.</p>` },
];

const ui = {
  en: {
    legal: 'Legal', title: 'Privacy Policy', lastUpdated: 'Last updated:', effective: '· Effective:', date: 'March 1, 2026',
    intro: 'MTechnology is committed to protecting your privacy. This policy explains what data we collect, how we use it, and the rights you have over your information.',
    contents: 'Contents', back: 'Back',
  },
  ar: {
    legal: 'قانوني', title: 'سياسة الخصوصية', lastUpdated: 'آخر تحديث:', effective: '· السريان:', date: '١ مارس ٢٠٢٦',
    intro: 'تلتزم إم تكنولوجي بحماية خصوصيتك. توضح هذه السياسة البيانات التي نجمعها، وكيفية استخدامها، والحقوق التي تتمتع بها فيما يخص معلوماتك.',
    contents: 'المحتويات', back: 'رجوع',
  },
};

export default function PrivacyPolicyPage() {
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