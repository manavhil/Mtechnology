import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import svgPaths from "./svg-icnt8qr94q";
import imgSecureDigitalInfrastructure from "../assets/df22b2f75585259b2e09521e2a097302808c4023.png";
import imgBlockchainAssetTracking from "../assets/1b4ff614acc02ec50f2fc05f5cb3d7ac0640e059.png";
import imgIntelligentAutomation from "../assets/bfa38edc8bd11d372aa9ef831fbc51a4779d905a.png";
import imgSection from "../assets/0ff8488b280397e5a1217e73f8fdb8db53c31775.png";
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer as SharedFooter } from '../components/shared/Footer';

/* ─── Translations Dictionary ─── */
const translations = {
  en: {
    solutions: "Solutions",
    heroW0: "Solutions",
    heroW1: "for",
    heroW2: "Modern",
    heroW3: "Enterprises",
    heroDesc: "MTechnology unifies AI automation, blockchain tracking, and secure infrastructure into one powerful platform for modern enterprises.",
    
    f1Title: "Intelligent Automation",
    f1Desc:[
      "Reduce manual work and accelerate operations using AI‑powered",
      "automation. Our platform learns from your workflows and continuously",
      "optimizes for efficiency."
    ],
    f1Pills:["50% reduction in manual tasks", "Real-time workflow optimization", "Seamless system integration"],
    
    f2Title: "Blockchain Asset Tracking",
    f2Desc:[
      "Create trusted, tamper‑proof digital records for assets and supply",
      "chains. Full transparency from origin to delivery with cryptographic",
      "verification."
    ],
    f2Pills:["End-to-end supply chain visibility", "Tamper-proof records", "Regulatory compliance built-in"],
    
    f3Title: "Secure Digital Infrastructure",
    f3Desc:[
      "A platform designed to protect sensitive data and ensure business",
      "continuity. Enterprise-grade security with Zero-Trust principles at every",
      "layer."
    ],
    f3Pills:["Zero-Trust architecture", "Continuous threat monitoring", "Automated compliance reporting"],
    
    ctaBefore: "Ready to ",
    ctaTransform: "transform",
    ctaAfter: " your operations?",
    contactUs: "Contact Us"
  },
  ar: {
    solutions: "الحلول",
    heroW0: "حلول",
    heroW1: "للمؤسسات",
    heroW2: "الحديثة",
    heroW3: "", 
    heroDesc: "توحد إم تيك الأتمتة بالذكاء الاصطناعي، تتبع البلوكتشين، والبنية التحتية الآمنة في منصة واحدة قوية للمؤسسات الحديثة.",
    
    f1Title: "الأتمتة الذكية",
    f1Desc:[
      "قلل العمل اليدوي وسرّع العمليات باستخدام الأتمتة المدعومة بالذكاء الاصطناعي.",
      "منصتنا تتعلم من سير عملك وتتحسن باستمرار من أجل الكفاءة."
    ],
    f1Pills:["تقليل المهام اليدوية بنسبة 50%", "تحسين سير العمل في الوقت الفعلي", "تكامل سلس للأنظمة"],
    
    f2Title: "تتبع الأصول عبر البلوكتشين",
    f2Desc:[
      "أنشئ سجلات رقمية موثوقة ومضادة للتلاعب للأصول وسلاسل الإمداد.",
      "شفافية كاملة من المصدر إلى التسليم مع التحقق المشفّر."
    ],
    f2Pills:["رؤية شاملة لسلسلة الإمداد", "سجلات مضادة للتلاعب", "امتثال تنظيمي مدمج"],
    
    f3Title: "بنية تحتية رقمية آمنة",
    f3Desc:[
      "منصة مصممة لحماية البيانات الحساسة وضمان استمرارية الأعمال.",
      "أمان على مستوى المؤسسات مع مبادئ انعدام الثقة في كل طبقة."
    ],
    f3Pills:["بنية انعدام الثقة (Zero-Trust)", "مراقبة مستمرة للتهديدات", "تقارير امتثال مؤتمتة"],
    
    ctaBefore: "مستعد لـ ",
    ctaTransform: "تحويل",
    ctaAfter: " عملياتك؟",
    contactUs: "اتصل بنا"
  }
};

/* ─── WhatsApp floating button ─── */
function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.35); }
          50%      { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 10px rgba(37,211,102,0); }
        }
        .wa-fab {
          position: fixed; bottom: 24px; right: 24px; z-index: 9999;
          width: 56px; height: 56px; background: #25D366; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          animation: wa-pulse 2.5s ease-in-out infinite;
          transition: transform 0.2s ease, left 0.3s ease, right 0.3s ease;
        }
        .wa-fab:hover { transform: scale(1.12); }
        
        /* 🔥 SHIFT TO LEFT ON MOBILE FOR ARABIC (RTL) 🔥 */
        @media (max-width: 768px) {
          [dir="rtl"] .wa-fab { right: auto; left: 24px; }
        }
      `}</style>
      <a className="wa-fab" href="https://wa.me/18008324600" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

/* ─── Mobile detection hook ─── */
function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 1024);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  },[]);
  return mobile;
}

/* ─── Scroll-triggered visibility hook ─── */
function useScrollVisible(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const check = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * threshold) {
        setVisible(true);
        window.removeEventListener('scroll', check);
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  },[]);
  return { ref, visible };
}

/* ─── Typewriter hook ─── */
function useTypewriter(text: string, active: boolean, speed = 55, startDelay = 0) {
  const[displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!active) return;
    setDisplayed(''); setDone(false);
    let i = 0;
    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delayTimer);
  },[active, text, speed, startDelay]);
  return { displayed, done };
}

/* ─── Shared animation styles ─── */
const sharedStyles = `
  @keyframes slideFromRight { from{opacity:0;transform:translateX(350px);filter:blur(6px);} to{opacity:1;transform:translateX(0);filter:blur(0);} }
  @keyframes slideFromLeft  { from{opacity:0;transform:translateX(-350px);filter:blur(6px);} to{opacity:1;transform:translateX(0);filter:blur(0);} }
  @keyframes secWordIn      { from{opacity:0;transform:translateY(28px) skewX(-3deg);filter:blur(4px);} to{opacity:1;transform:translateY(0) skewX(0deg);filter:blur(0);} }
  @keyframes secBoxLeft     { from{opacity:0;transform:translateX(-28px) scale(0.95);filter:blur(3px);} to{opacity:1;transform:translateX(0) scale(1);filter:blur(0);} }
  @keyframes secBoxRight    { from{opacity:0;transform:translateX(28px) scale(0.95);filter:blur(3px);} to{opacity:1;transform:translateX(0) scale(1);filter:blur(0);} }
  @keyframes ctaFadeUp      { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
  @keyframes demoGradient   { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
  @keyframes demoShimmer    { 0%{transform:translateX(-150%) skewX(-20deg);} 25%,100%{transform:translateX(250%) skewX(-20deg);} }
  @keyframes tw-blink       { 0%,100%{opacity:1;} 50%{opacity:0;} }
  @keyframes mobileFadeUp   { from{opacity:0;transform:translateY(20px);filter:blur(4px);} to{opacity:1;transform:translateY(0);filter:blur(0);} }

  .s-img-r{opacity:0;} .s-img-l{opacity:0;} .s-title{opacity:0;} .s-desc{opacity:0;}
  .s-box-l-0{opacity:0;} .s-box-l-1{opacity:0;} .s-box-l-2{opacity:0;}
  .s-box-r-0{opacity:0;} .s-box-r-1{opacity:0;} .s-box-r-2{opacity:0;}
  .s-img-r.go   { animation: slideFromRight 1.1s cubic-bezier(0.22,1,0.36,1) 0ms    forwards; }
  .s-img-l.go   { animation: slideFromLeft  1.1s cubic-bezier(0.22,1,0.36,1) 0ms    forwards; }
  .s-title.go   { animation: secWordIn      1.0s cubic-bezier(0.22,1,0.36,1) 200ms  forwards; }
  .s-desc.go    { animation: secWordIn      1.0s cubic-bezier(0.22,1,0.36,1) 380ms  forwards; }
  .s-box-l-0.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 300ms forwards; }
  .s-box-l-1.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 440ms forwards; }
  .s-box-l-2.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 580ms forwards; }
  .s-box-r-0.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 300ms forwards; }
  .s-box-r-1.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 440ms forwards; }
  .s-box-r-2.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 580ms forwards; }
  .cta-heading{opacity:0;} .cta-btn{opacity:0;}
  .cta-heading.go { animation: ctaFadeUp 0.6s ease forwards; }
  .cta-btn.go     { animation: ctaFadeUp 0.6s ease 0.2s forwards; }

  .btn-req-demo {
    background: linear-gradient(-45deg, #3562e9, #6b8fff, #86a3f9, #3562e9);
    background-size: 300% 300%;
    animation: demoGradient 3s ease infinite;
    box-shadow: 0 0 18px 4px rgba(53,98,233,0.45);
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    overflow: hidden; position: relative;
  }
  .btn-req-demo:hover { box-shadow: 0 0 32px 10px rgba(134,163,249,0.6); transform: scale(1.04); }
  .btn-req-shimmer { position:absolute; inset:0; pointer-events:none; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent); animation:demoShimmer 3s ease infinite; }
  .tw-cursor { display:inline-block; width:2px; height:0.85em; background:#86a3f9; margin-inline-start:3px; vertical-align:middle; border-radius:1px; animation:tw-blink 0.8s step-start infinite; }
  .tw-cursor.hide { display:none; }

  @keyframes sol-label-in { from{opacity:0;letter-spacing:10px;transform:translateY(-8px);} to{opacity:1;letter-spacing:1.2px;transform:translateY(0);} }
  @keyframes sol-w0-in { 0%{opacity:0;transform:translateY(-48px) skewX(-6deg);filter:blur(6px);} 70%{opacity:1;transform:translateY(6px) skewX(1deg);filter:blur(0);} 100%{opacity:1;transform:translateY(0) skewX(0deg);} }
  @keyframes sol-w1-in { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
  @keyframes sol-w2-in { 0%{opacity:0;transform:scale(0.6) translateY(20px);filter:blur(12px);} 60%{opacity:1;transform:scale(1.06) translateY(-4px);filter:blur(0);} 100%{opacity:1;transform:scale(1) translateY(0);} }
  @keyframes sol-w3-in { from{opacity:0;transform:translateX(60px);filter:blur(4px);} to{opacity:1;transform:translateX(0);filter:blur(0);} }
  @keyframes sol-desc-in { from{opacity:0;transform:translateY(20px) scale(0.97);filter:blur(3px);} to{opacity:1;transform:translateY(0) scale(1);filter:blur(0);} }
  @keyframes sol-img-in { from{opacity:0;} to{opacity:1;} }
  .sol-label{opacity:0;} .sol-w0{opacity:0;display:inline-block;} .sol-w1{opacity:0;display:inline-block;} .sol-w2{opacity:0;display:inline-block;} .sol-w3{opacity:0;display:inline-block;} .sol-desc{opacity:0;} .sol-img{opacity:0;}
  .sol-label.go{animation:sol-label-in 0.8s cubic-bezier(0.22,1,0.36,1) forwards;animation-delay:0ms;}
  .sol-w0.go{animation:sol-w0-in 1.1s cubic-bezier(0.22,1,0.36,1) forwards;animation-delay:120ms;}
  .sol-w1.go{animation:sol-w1-in 0.6s ease-out forwards;animation-delay:340ms;}
  .sol-w2.go{animation:sol-w2-in 1.0s cubic-bezier(0.34,1.56,0.64,1) forwards;animation-delay:460ms;}
  .sol-w3.go{animation:sol-w3-in 0.9s cubic-bezier(0.22,1,0.36,1) forwards;animation-delay:580ms;}
  .sol-desc.go{animation:sol-desc-in 1.2s cubic-bezier(0.22,1,0.36,1) forwards;animation-delay:800ms;}
  .sol-img.go{animation:sol-img-in 1.6s cubic-bezier(0.22,1,0.36,1) forwards;animation-delay:0ms;}
  .hero-img-3d{will-change:transform;transform-style:preserve-3d;}

  .m-fade{opacity:0;}
  .m-fade.go{animation:mobileFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;}
`;

/* ─── Shared: Contact Us button ─── */
function ContactButton({ text, lang, className = "" }: { text: string; lang: string; className?: string }) {
  return (
    <RouterLink
      to="/contact"
      className={`btn-req-demo flex items-center justify-center gap-2 rounded-[12px] h-[40px] px-6 cursor-pointer ${className}`}
    >
      <div className="btn-req-shimmer" />
      {/* ⚠️ whitespace-nowrap prevents it from breaking into 2 lines ⚠️ */}
      <span className="relative z-10 font-medium text-[14px] text-white tracking-[0.35px] whitespace-nowrap">{text}</span>
      <svg className={`relative z-10 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3.33333 8H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p1d405500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </RouterLink>
  );
}

/* ══════════════════════════════════════════════════════════
   DESKTOP LAYOUT (original, pixel-perfect, adapted for RTL)
══════════════════════════════════════════════════════════ */
function DesktopSolutions({ t, lang }: { t: any; lang: string }) {
  /* particles */
  function Container1() {
    return (
      <div className="absolute inset-0 overflow-clip">
        {[[864.25,1523.1,2.66,31],[491.73,1835.08,1.57,49],[923.77,3025.49,3.1,59],[60.14,2236.84,2.96,39],[1165.23,403.57,1.79,25],[1096.17,2333.42,2.8,56],[1461.09,2809.29,3.49,38],[907.41,952.32,1.88,41],[890.39,1955.76,1.78,43],[340.84,2121.31,2.79,40],[982.05,904.16,2.8,23],[1204.91,2307.76,2.56,53],[311.55,1585.91,3.51,55],[232.04,2337.42,2.46,49],[123.68,1654.55,3.88,49],[1180.88,2817.42,1.99,39],[963.81,2343.71,1.11,46],[73.98,2585.67,3.36,56],[895.96,728.06,1.76,59],[270.47,2799.91,3.07,54],
        ].map(([l,t,s,o],i) => (
          <div key={i} className="absolute bg-[rgba(53,98,233,0.3)] rounded-[9999px]" style={{ left:l, top:t, width:s, height:s, opacity:o/100 }} />
        ))}
      </div>
    );
  }

  /* CTA */
  function Section() {
    const { ref, visible } = useScrollVisible(0.3);
    const fullText = t.ctaBefore + t.ctaTransform + t.ctaAfter;
    const { displayed, done } = useTypewriter(fullText, visible, 45, 100);
    const before = t.ctaBefore; const transformWord = t.ctaTransform;
    
    let renderedText: React.ReactNode;
    if (displayed.length <= before.length) {
      renderedText = <span className="leading-[36px]">{displayed}</span>;
    } else if (displayed.length <= before.length + transformWord.length) {
      renderedText = (<><span className="leading-[36px]">{before}</span><span className="bg-clip-text bg-gradient-to-r from-[#3562e9] leading-[36px] text-[transparent] to-[#86a3f9]">{displayed.slice(before.length)}</span></>);
    } else {
      renderedText = (<><span className="leading-[36px]">{before}</span><span className="bg-clip-text bg-gradient-to-r from-[#3562e9] leading-[36px] text-[transparent] to-[#86a3f9]">{transformWord}</span><span className="leading-[36px]">{displayed.slice(before.length + transformWord.length)}</span></>);
    }
    
    return (
      <div ref={ref} className="absolute h-[500px] left-0 right-0 top-[2827px] flex flex-col items-center pt-[212px]">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:"url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1497 500\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(119.76 0 0 25 748.5 500)\\'><stop stop-color=\\'rgba(53,98,233,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
        
        {/* Safely centered heading using Flexbox instead of absolute translate to survive animation transforms */}
        <div className={`cta-heading${visible?' go':''} z-10 font-bold h-[36px] text-[#fafafa] text-[30px] text-center tracking-[-0.75px] w-full max-w-[600px] mb-[24px]`}>
          <p className="leading-[36px] m-0">{renderedText}<span className={`tw-cursor${done?' hide':''}`} /></p>
        </div>
        
        {/* Safely centered button container */}
        <div className={`cta-btn${visible?' go':''} z-10 flex justify-center`}>
          <ContactButton text={t.contactUs} lang={lang} className="w-max" />
        </div>
      </div>
    );
  }

  function BoxPill({ label, visible, top, boxClass, textSide }: { label:string; visible:boolean; top:string; boxClass:string; textSide: string }) {
    // ⚠️ CRITICAL FIX: Properly flip Left/Right positioning for the absolute boxes in Arabic ⚠️
    const startPos = textSide === 'left' ? '870px' : '75px';
    const endPos = textSide === 'left' ? '75px' : '870px';
    const finalLeft = lang === 'ar' ? endPos : startPos;
    const finalRight = lang === 'ar' ? startPos : endPos;

    return (
      <div className={`s-box ${boxClass}${visible?' go':''} absolute h-[54px]`} style={{ top, left: finalLeft, right: finalRight }}>
        <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] inset-[-4px_-1.5px_-1px_-0.5px] overflow-clip rounded-[16px]">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] h-[245px] overflow-clip rounded-[24px] top-[-21.81px]" style={{ left: lang === 'ar' ? '-172px' : '-7px', right: lang === 'ar' ? '-7px' : '-172px' }}>
            <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
            <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" />
            <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage:"linear-gradient(161.518deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)" }} />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-medium h-[20px] justify-center leading-[0] text-[#fafafa] text-[14px] top-[26px]" style={{[lang === 'ar' ? 'right' : 'left']: '40px' }}>
          <p className="leading-[20px]">{label}</p>
        </div>
      </div>
    );
  }

  function SectionCard({ top, image, imageAlt, imgSide, icon, title, desc, pills }: {
    top: string; image: string; imageAlt: string; imgSide: 'left'|'right';
    icon: React.ReactNode; title: string; desc: string[];
    pills: string[];
  }) {
    const { ref, visible } = useScrollVisible();
    
    // Automatically mirror layout for Arabic while preserving absolute physical positioning exactness
    const imgStart = imgSide === 'left' ? '0' : '772px';
    const imgEnd   = imgSide === 'left' ? '772px' : '0';
    const textStart = imgSide === 'left' ? '870px' : '75px';
    const textEnd   = imgSide === 'left' ? '75px' : '870px';
    
    const imgStyle = lang === 'ar' ? { right: imgStart, left: imgEnd } : { left: imgStart, right: imgEnd };
    const textStyle = lang === 'ar' ? { right: textStart, left: textEnd } : { left: textStart, right: textEnd };
    const iconStyle = lang === 'ar' ? { right: textStart } : { left: textStart };

    const pillSide = imgSide === 'left' ? 'right' : 'left';
    const logicalPillSide = lang === 'ar' ? (pillSide === 'left' ? 'right' : 'left') : pillSide;
    const boxClasses = logicalPillSide === 'left' ?['s-box-l-0','s-box-l-1','s-box-l-2'] :['s-box-r-0','s-box-r-1','s-box-r-2'];
    
    const logicalImgSide = lang === 'ar' ? (imgSide === 'left' ? 'right' : 'left') : imgSide;
    const animClass = logicalImgSide === 'left' ? 's-img-l' : 's-img-r';
    
    const blurInset = logicalImgSide === 'left'
      ? 'calc(36.48%-0.64px) 5% calc(29.96%+0.3px) 78.3%'
      : 'calc(30.09%-0.7px) 78.3% calc(36.35%+0.36px) 5%';

    return (
      <div ref={ref} className="absolute h-[745px] left-0 right-0 overflow-hidden" style={{ top }}>
        <div className="absolute blur-[50px] opacity-40 rounded-[9999px]" style={{ backgroundImage:"url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 250.01 250.01\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(17.678 0 0 17.678 125 125)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')", inset: blurInset }} />
        
        <div className={`absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[12px] size-[48px] top-[164px]`} style={iconStyle}>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2">{icon}</div>
        </div>
        
        <div className={`s-title${visible?' go':''} -translate-y-1/2 absolute flex flex-col font-bold h-[36px] justify-center leading-[0] not-italic text-[#fafafa] text-[30px] top-[250px] tracking-[-0.75px]`} style={textStyle}>
          <p className="leading-[36px]">{title}</p>
        </div>
        
        <div className={`s-desc${visible?' go':''} -translate-y-1/2 absolute flex flex-col font-normal h-[71.5px] justify-center leading-[26px] not-italic text-[#73798c] text-[16px] top-[322.75px]`} style={textStyle}>
          {desc.map((line, idx) => <p key={idx} className={idx === desc.length - 1 ? '' : 'mb-0'}>{line}</p>)}
        </div>
        
        {pills.map((label, i) => (
          <BoxPill key={label} label={label} visible={visible} top={`${394 + i * 66}px`} boxClass={boxClasses[i]} textSide={imgSide === 'left' ? 'left' : 'right'} />
        ))}
        
        <div className={`${animClass}${visible?' go':''} absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] h-[552px] overflow-clip rounded-[16px] top-[96px] p-[24px]`} style={imgStyle}>
          <div className="relative size-full rounded-[12px] overflow-hidden">
            <img alt={imageAlt} className="absolute inset-0 size-full object-cover object-center" src={image} />
          </div>
          <div className="absolute inset-0 rounded-[16px]" style={{ backgroundImage:"linear-gradient(142.739deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%)" }} />
        </div>
      </div>
    );
  }

  /* SVG icons */
  const svgSecurity = <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p2dfab7c0} stroke="url(#s1a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p2c300c0} stroke="url(#s1b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="s1a" x1="12" x2="12" y1="11" y2="22"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="s1b" x1="12" x2="12" y1="2" y2="11"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
  const svgBlockchain = <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p36c5af80} stroke="url(#s2a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M18 17V9" stroke="url(#s2b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M13 17V5" stroke="url(#s2c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M8 17V14" stroke="url(#s2d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="s2a" x1="12" x2="12" y1="3" y2="21"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="s2b" x1="18.5" x2="18.5" y1="9" y2="17"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="s2c" x1="13.5" x2="13.5" y1="5" y2="17"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="s2d" x1="8.5" x2="8.5" y1="14" y2="17"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
  const svgAutomation = <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p1b8b3180} stroke="url(#s3a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="s3a" x1="12" x2="12" y1="1.9974" y2="22.0026"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;

  function HeroSection() {
    const imgRef = useRef<HTMLDivElement>(null);
    const[started, setStarted] = useState(false);
    const animFrame = useRef<number>(0);
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ rotX: 0, rotY: 0 });
    const time = useRef(0);

    useEffect(() => { const tim = setTimeout(() => setStarted(true), 80); return () => clearTimeout(tim); },[]);
    useEffect(() => {
      const onMouseMove = (e: MouseEvent) => { mouse.current.x = (e.clientX/window.innerWidth-0.5)*2; mouse.current.y = (e.clientY/window.innerHeight-0.5)*2; };
      window.addEventListener('mousemove', onMouseMove);
      const tick = () => {
        time.current += 0.006;
        const autoX = Math.sin(time.current*0.6)*12 + Math.sin(time.current*0.25)*6;
        const autoY = Math.cos(time.current*0.45)*10 + Math.cos(time.current*0.9)*5;
        const targetX = autoX + mouse.current.y*14;
        const targetY = autoY + mouse.current.x*14;
        current.current.rotX += (targetX - current.current.rotX)*0.06;
        current.current.rotY += (targetY - current.current.rotY)*0.06;
        if (imgRef.current) imgRef.current.style.transform = `perspective(800px) rotateX(${current.current.rotX}deg) rotateY(${current.current.rotY}deg) scale(1.1)`;
        animFrame.current = requestAnimationFrame(tick);
      };
      animFrame.current = requestAnimationFrame(tick);
      return () => { window.removeEventListener('mousemove', onMouseMove); cancelAnimationFrame(animFrame.current); };
    },[]);

    return (
      <div className="absolute left-0 right-0 top-0" style={{ height:'100vh', minHeight:'640px' }}>
        <div className="absolute inset-0 overflow-hidden" style={{ perspective:'1000px' }}>
          <div className={`sol-img${started?' go':''}`} style={{ position:'absolute', inset:0 }}>
            <div ref={imgRef} className="hero-img-3d" style={{ position:'absolute', inset:'-6%', transformOrigin:'center center' }}>
              <img alt="" src={imgSection} className="absolute inset-0 w-full h-full" style={{ objectFit:'contain', objectPosition:'center', opacity:0.12 }} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none" style={{ background:'linear-gradient(to bottom, transparent, rgb(11,11,15))' }} />
          <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background:'linear-gradient(to right, rgb(11,11,15), transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background:'linear-gradient(to left, rgb(11,11,15), transparent)' }} />
        </div>
        <div className="absolute blur-[50px] opacity-40 pointer-events-none" style={{[lang === 'ar' ? 'left' : 'right']: '-80px', top:'20%', width:'400px', height:'520px', background:'radial-gradient(circle, rgba(53,98,233,0.15), transparent 70%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop:'74px' }}>
          <p className={`sol-label${started?' go':''} font-semibold text-[#3562e9] text-[18px] text-center tracking-[1.2px] uppercase mb-5`}>{t.solutions}</p>
          <h1 className="text-center font-bold tracking-[-1.5px] leading-[1.1] text-[#fafafa] mb-6 px-8" style={{ fontSize:'60px', maxWidth:'700px' }}>
            <span className={`sol-w0${started?' go':''}`}>{t.heroW0}</span>{' '}
            <span className={`sol-w1${started?' go':''}`}>{t.heroW1}</span>{' '}
            <span className={`sol-w2${started?' go':''} bg-clip-text text-transparent`} style={{ backgroundImage:'linear-gradient(145.676deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)' }}>{t.heroW2}</span>{' '}
            {t.heroW3 && <span className={`sol-w3${started?' go':''}`}>{t.heroW3}</span>}
          </h1>
          <p className={`sol-desc${started?' go':''} font-normal text-[#73798c] text-[18px] text-center leading-[28px] px-8`} style={{ maxWidth:'621px' }}>
            {t.heroDesc}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-[#0b0b0f]" style={{ height:'3327px', overflowX:'hidden' }}>
      <Container1 />
      <HeroSection />
      <SectionCard
        top="664px"
        image={imgIntelligentAutomation} imageAlt={t.f1Title}
        imgSide="right" icon={svgAutomation}
        title={t.f1Title}
        desc={t.f1Desc}
        pills={t.f1Pills}
      />
      <SectionCard
        top="1409px"
        image={imgBlockchainAssetTracking} imageAlt={t.f2Title}
        imgSide="left" icon={svgBlockchain}
        title={t.f2Title}
        desc={t.f2Desc}
        pills={t.f2Pills}
      />
      <SectionCard
        top="2154px"
        image={imgSecureDigitalInfrastructure} imageAlt={t.f3Title}
        imgSide="right" icon={svgSecurity}
        title={t.f3Title}
        desc={t.f3Desc}
        pills={t.f3Pills}
      />
      <Section />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MOBILE LAYOUT
══════════════════════════════════════════════════════════ */
function MobileSolutions({ t, lang }: { t: any; lang: string }) {
  const[started, setStarted] = useState(false);
  useEffect(() => { const tim = setTimeout(() => setStarted(true), 80); return () => clearTimeout(tim); },[]);

  function useVisible(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const[visible, setVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [threshold]);
    return { ref, visible };
  }

  function MobileSection({ image, imageAlt, icon, title, desc, pills }: {
    image: string; imageAlt: string; icon: React.ReactNode;
    title: string; desc: string; pills: string[];
  }) {
    const { ref, visible } = useVisible();
    return (
      <section ref={ref} className="relative px-4 pb-14">
        <div className={`m-fade${visible ? ' go' : ''} flex items-center gap-3 mb-3 mt-24`}>
          <div className="bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[12px] size-[44px] flex items-center justify-center shrink-0">
            <div className="size-[22px] relative">{icon}</div>
          </div>
          <h2 className="font-bold text-[#fafafa] text-[24px] leading-[1.2] tracking-[-0.6px]">{title}</h2>
        </div>

        <p className={`m-fade${visible ? ' go' : ''} text-[#73798c] text-[15px] leading-[1.7] mb-5`} style={{ animationDelay:'100ms' }}>
          {desc}
        </p>

        <div className="flex flex-col gap-3 mb-6">
          {pills.map((label, i) => (
            <div
              key={label}
              className={`m-fade${visible ? ' go' : ''} relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px] h-[52px] flex items-center px-4 overflow-hidden`}
              style={{ animationDelay: `${150 + i * 80}ms` }}
            >
              <div className="absolute inset-0 rounded-[14px]" style={{ backgroundImage:'linear-gradient(162.789deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)' }} />
              <p className="relative font-medium text-[#fafafa] text-[13px] leading-[18px]">{label}</p>
            </div>
          ))}
        </div>

        <div
          className={`m-fade${visible ? ' go' : ''} relative backdrop-blur-[2px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden`}
          style={{ height: 220, animationDelay:'400ms' }}
        >
          <img alt={imageAlt} src={image} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 rounded-[16px]" style={{ backgroundImage:'linear-gradient(142.739deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%)' }} />
        </div>
      </section>
    );
  }

  function MobileCTA() {
    const { ref, visible } = useVisible(0.2);
    const fullText = t.ctaBefore + t.ctaTransform + t.ctaAfter;
    const { displayed, done } = useTypewriter(fullText, visible, 40, 100);
    const before = t.ctaBefore; const transformWord = t.ctaTransform;
    let renderedText: React.ReactNode;
    if (displayed.length <= before.length) {
      renderedText = <span>{displayed}</span>;
    } else if (displayed.length <= before.length + transformWord.length) {
      renderedText = (<><span>{before}</span><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3562e9] to-[#86a3f9]">{displayed.slice(before.length)}</span></>);
    } else {
      renderedText = (<><span>{before}</span><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3562e9] to-[#86a3f9]">{transformWord}</span><span>{displayed.slice(before.length + transformWord.length)}</span></>);
    }
    return (
      <section ref={ref} className="relative px-6 py-16 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(53,98,233,0.12), transparent)' }} />
        <h2 className={`m-fade${visible?' go':''} font-bold text-[#fafafa] text-[26px] leading-[1.3] tracking-[-0.6px] mb-6`}>
          {renderedText}
          <span className={`tw-cursor${done?' hide':''}`} />
        </h2>
        <div className={`m-fade${visible?' go':''} flex justify-center`} style={{ animationDelay:'200ms' }}>
          <ContactButton text={t.contactUs} lang={lang} className="w-max" />
        </div>
      </section>
    );
  }

  const svgSecurity = <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p2dfab7c0} stroke="url(#ms1a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p2c300c0} stroke="url(#ms1b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="ms1a" x1="12" x2="12" y1="11" y2="22"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ms1b" x1="12" x2="12" y1="2" y2="11"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
  const svgBlockchain = <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p36c5af80} stroke="url(#ms2a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M18 17V9" stroke="url(#ms2b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M13 17V5" stroke="url(#ms2c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M8 17V14" stroke="url(#ms2d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="ms2a" x1="12" x2="12" y1="3" y2="21"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ms2b" x1="18.5" x2="18.5" y1="9" y2="17"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ms2c" x1="13.5" x2="13.5" y1="5" y2="17"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ms2d" x1="8.5" x2="8.5" y1="14" y2="17"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
  const svgAutomation = <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p1b8b3180} stroke="url(#ms3a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="ms3a" x1="12" x2="12" y1="1.9974" y2="22.0026"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;

  return (
    <div className="relative w-full overflow-x-hidden" style={{ background:'rgb(11,11,15)' }}>
      <section className="relative flex flex-col items-center justify-center text-center px-5 overflow-hidden" style={{ minHeight:'100svh', paddingTop:'90px', paddingBottom:'48px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" src={imgSection} className="absolute inset-0 w-full h-full object-contain object-center opacity-[0.10]" />
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background:'linear-gradient(to bottom, transparent, rgb(11,11,15))' }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-[400px] pointer-events-none" style={{ background:'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(53,98,233,0.12), transparent)' }} />

        <p className={`sol-label${started?' go':''} font-semibold text-[#3562e9] text-[12px] tracking-[1.2px] uppercase mb-4`}>{t.solutions}</p>
        <h1 className="font-bold text-[#fafafa] tracking-[-1px] leading-[1.15] mb-4" style={{ fontSize:'clamp(32px,8vw,48px)', maxWidth:'340px' }}>
          <span className={`sol-w0${started?' go':''}`}>{t.heroW0}</span>{' '}
          <span className={`sol-w1${started?' go':''}`}>{t.heroW1}</span>{' '}
          <span className={`sol-w2${started?' go':''} bg-clip-text text-transparent`} style={{ backgroundImage:'linear-gradient(145.676deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)' }}>{t.heroW2}</span>{' '}
          {t.heroW3 && <span className={`sol-w3${started?' go':''}`}>{t.heroW3}</span>}
        </h1>
        <p className={`sol-desc${started?' go':''} text-[#73798c] text-[15px] leading-[1.7] max-w-[320px]`}>
          {t.heroDescMobile || t.heroDesc}
        </p>
      </section>

      <MobileSection
        image={imgIntelligentAutomation} imageAlt={t.f1Title}
        icon={svgAutomation}
        title={t.f1Title}
        desc={t.f1Desc.join(" ")}
        pills={t.f1Pills}
      />
      <MobileSection
        image={imgBlockchainAssetTracking} imageAlt={t.f2Title}
        icon={svgBlockchain}
        title={t.f2Title}
        desc={t.f2Desc.join(" ")}
        pills={t.f2Pills}
      />
      <MobileSection
        image={imgSecureDigitalInfrastructure} imageAlt={t.f3Title}
        icon={svgSecurity}
        title={t.f3Title}
        desc={t.f3Desc.join(" ")}
        pills={t.f3Pills}
      />

      <MobileCTA />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════════════════════ */
interface SolutionsProps {
  onRequestDemo?: () => void;
}

export default function Solutions({ onRequestDemo }: SolutionsProps = {}) {
  const isMobile = useIsMobile();
  const[isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const handleRequestDemo = onRequestDemo ?? (() => setIsDemoModalOpen(true));

  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });
  const t = translations[lang];

  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang((localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
    };
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  },[]);

  return (
    <div 
      className="relative w-full overflow-x-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'} /* Automatically switches text direction */
      style={lang === 'ar' ? { fontFamily: "'Cairo', sans-serif" } : {}}
>
      <style>{`[data-name="Header"] { display: none !important; }`}</style>
      <style>{sharedStyles}</style>
      
      <WhatsAppButton />
      <FunctionalHeader onRequestDemo={handleRequestDemo} />
      
      {isMobile ? <MobileSolutions t={t} lang={lang} /> : <DesktopSolutions t={t} lang={lang} />}
      
      <SharedFooter />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}