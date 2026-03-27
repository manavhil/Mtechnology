// Platform.tsx

import { useEffect, useRef, useState } from 'react';
import svgPaths from "./svg-g5r824u9k3";
import imgAdvancedDigitalSecurity from "../assets/0f4cf11d0fdac056e8e0c8f851b0682b671abfa3.png";
import imgAdvancedArtificialIntelligence from "../assets/4088efd90e32ef15b9e7fbc9c777955680458281.png";
import imgEnterpriseBlockchainInfrastructure from "../assets/0c4434e685a8b1c521bd4f0c6208f1578d113f3d.png";
import imgIntelligentProcessAutomation from "../assets/5d10e78ca0aa62fe1fa90609898b559c55d0fe0f.png";
import imgSection from "../assets/6e98d239f5965ceb7858a7a7daeefbc940740f7b.png";

import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer as SharedFooter } from '../components/shared/Footer';

/* ─── Translations Dictionary ─── */
const translations = {
  en: {
    platform: "Platform",
    heroLine1: "One Platform.",
    heroLine2: "Integrated",
    heroLine3: "Technology Power.",
    heroDesc: "MTechnology combines Artificial Intelligence, Blockchain, and Zero-Trust security into a single, unified platform designed for enterprise-scale operations.",

    s1Label: "Automation",
    s1Title: "Intelligent Process Automation",
    s1Desc: ["Transform traditional processes into intelligent workflows that operate", "faster and more efficiently. Our AI-driven automation engine reduces", "manual intervention while increasing accuracy and throughput."],
    s1Pills: ["Workflow orchestration", "Predictive task routing", "Real-time monitoring", "API-first integration"],

    s2Label: "Blockchain",
    s2Title: "Enterprise Blockchain Infrastructure",
    s2Desc: ["Securely record and track assets and transactions in a transparent digital", "environment. Built on enterprise-grade distributed ledger technology", "with full audit capabilities."],
    s2Pills: ["Immutable audit trails", "Smart contract execution", "Multi-chain support", "Tokenization engine"],

    s3Label: "Intelligence",
    s3Title: "Advanced Artificial Intelligence",
    s3Desc: ["Analyze data and generate insights that support faster and more", "accurate decision‑making. From NLP to predictive analytics, our AI layer", "adapts to your domain."],
    s3Pills: ["NLP & document analysis", "Predictive modeling", "Anomaly detection", "Custom model training"],

    s4Label: "Security",
    s4Title: "Advanced Digital Security",
    s4Desc: ["A protection architecture based on Zero‑Trust principles ensuring every", "user and interaction is verified. Multi-layered defense with continuous", "monitoring."],
    s4Pills: ["Zero-Trust architecture", "Identity verification", "Threat intelligence", "Compliance automation"],
  },
  ar: {
    platform: "المنصة",
    heroLine1: "منصة واحدة.",
    heroLine2: "متكاملة",
    heroLine3: "قوة تكنولوجية.",
    heroDesc: "تجمع إم تيك الذكاء الاصطناعي، والبلوكتشين، وأمان انعدام الثقة في منصة موحدة واحدة مصممة للعمليات على مستوى المؤسسات.",

    s1Label: "الأتمتة",
    s1Title: "أتمتة العمليات الذكية",
    s1Desc: ["حوّل العمليات التقليدية إلى سير عمل ذكية تعمل بشكل أسرع وأكثر كفاءة.", "يقلل محرك الأتمتة المدعوم بالذكاء الاصطناعي التدخل اليدوي", "مع زيادة الدقة والإنتاجية."],
    s1Pills: ["تنسيق سير العمل", "توجيه المهام التنبؤي", "المراقبة الفورية", "تكامل API أولاً"],

    s2Label: "البلوكتشين",
    s2Title: "بنية تحتية لبلوكتشين المؤسسات",
    s2Desc: ["سجّل الأصول والمعاملات وتتبعها بأمان في بيئة رقمية شفافة.", "مبنية على تقنية دفتر الأستاذ الموزع على مستوى المؤسسات", "مع إمكانات تدقيق كاملة."],
    s2Pills: ["مسارات تدقيق غير قابلة للتغيير", "تنفيذ العقود الذكية", "دعم السلاسل المتعددة", "محرك الترميز"],

    s3Label: "الذكاء",
    s3Title: "الذكاء الاصطناعي المتقدم",
    s3Desc: ["حلّل البيانات وأنتج رؤى تدعم اتخاذ قرارات أسرع وأكثر دقة.", "من معالجة اللغة الطبيعية إلى التحليلات التنبؤية،", "تتكيف طبقة الذكاء الاصطناعي لدينا مع مجالك."],
    s3Pills: ["معالجة اللغة وتحليل المستندات", "النمذجة التنبؤية", "كشف الشذوذات", "تدريب نماذج مخصصة"],

    s4Label: "الأمان",
    s4Title: "الأمان الرقمي المتقدم",
    s4Desc: ["بنية حماية مبنية على مبادئ انعدام الثقة تضمن التحقق من كل مستخدم وتفاعل.", "دفاع متعدد الطبقات مع مراقبة مستمرة."],
    s4Pills: ["بنية انعدام الثقة", "التحقق من الهوية", "استخبارات التهديدات", "أتمتة الامتثال"],
  },
};

/* ─── Mobile detection hook ─── */
function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 1024);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
}

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

/* ─────────────────────────────────────────────
   SCROLL VISIBILITY HOOK
───────────────────────────────────────────── */
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
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   ALL ANIMATION STYLES
───────────────────────────────────────────── */
const heroStyles = `
  @keyframes heroPan {
    0%   { transform: scale(1.08) translate(0px, 0px); }
    30%  { transform: scale(1.12) translate(-8px, -4px); }
    60%  { transform: scale(1.10) translate(6px, 3px); }
    100% { transform: scale(1.08) translate(0px, 0px); }
  }
  @keyframes scanline {
    0%   { background-position: 0 0; }
    100% { background-position: 0 -200px; }
  }
  @keyframes vignettePulse {
    0%,100% { opacity: 0.72; }
    50%      { opacity: 0.82; }
  }
  @keyframes heroSlideUp {
    from { opacity: 0; transform: translateY(40px) skewY(-1deg); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0) skewY(0deg); filter: blur(0); }
  }
  @keyframes labelExpand {
    from { opacity: 0; letter-spacing: 10px; }
    to   { opacity: 1; letter-spacing: 1.2px; }
  }
  @keyframes wordShimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes descIn {
    from { opacity: 0; transform: translateY(20px); filter: blur(3px); }
    to   { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
  @keyframes particleFloat {
    0%,100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
    33%     { transform: translateY(-18px) translateX(8px); opacity: 1; }
    66%     { transform: translateY(-8px) translateX(-6px); opacity: 0.7; }
  }
  @keyframes glitch {
    0%,95%,100% { clip-path: inset(0 0 0 0); transform: translate(0); }
    96%          { clip-path: inset(20% 0 40% 0); transform: translate(-2px, 1px); }
    97%          { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
    98%          { clip-path: inset(40% 0 20% 0); transform: translate(-1px, 2px); }
  }
  @keyframes glowPulse {
    0%,100% { opacity: 0.2; box-shadow: 0 0 6px 2px rgba(53,98,233,0.3); }
    50%     { opacity: 0.7; box-shadow: 0 0 18px 6px rgba(134,163,249,0.6); }
  }
  @keyframes slideFromRight {
    from { opacity: 0; transform: translateX(350px); filter: blur(6px); }
    to   { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
  }
  @keyframes slideFromLeft {
    from { opacity: 0; transform: translateX(-350px); filter: blur(6px); }
    to   { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
  }
  @keyframes secWordIn {
    from { opacity: 0; transform: translateY(28px) skewX(-3deg); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0) skewX(0deg); filter: blur(0); }
  }
  @keyframes secBoxLeft {
    from { opacity: 0; transform: translateX(-28px) scale(0.95); filter: blur(3px); }
    to   { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
  }
  @keyframes secBoxRight {
    from { opacity: 0; transform: translateX(28px) scale(0.95); filter: blur(3px); }
    to   { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
  }
  @keyframes mobileFadeUp {
    from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0); filter: blur(0); }
  }

  .h-label   { opacity: 0; }
  .h-line1   { opacity: 0; }
  .h-line2   { opacity: 0; }
  .h-desc    { opacity: 0; }
  .h-divider { opacity: 0; }

  .h-label.go   { animation: labelExpand 0.9s cubic-bezier(0.22,1,0.36,1) 0.10s forwards; }
  .h-line1.go   { animation: heroSlideUp 1.0s cubic-bezier(0.22,1,0.36,1) 0.28s forwards; }
  .h-line2.go   { animation: heroSlideUp 1.0s cubic-bezier(0.22,1,0.36,1) 0.46s forwards; }
  .h-line3      { opacity: 0; }
  .h-line3.go   { animation: heroSlideUp 1.0s cubic-bezier(0.22,1,0.36,1) 0.62s forwards; }
  .h-desc.go    { animation: descIn 1.1s cubic-bezier(0.22,1,0.36,1) 0.82s forwards; }
  .h-divider.go { animation: descIn 0.8s ease 1.0s forwards; }

  .hero-bracket {
    position: absolute; width: 32px; height: 32px;
    opacity: 0; transition: opacity 0.6s ease;
  }
  .hero-bracket.go { opacity: 0.4; }
  .hero-bracket::before, .hero-bracket::after { content:''; position:absolute; background:rgba(134,163,249,0.6); }
  .hero-bracket.tl::before { top:0; left:0; width:100%; height:2px; }
  .hero-bracket.tl::after  { top:0; left:0; width:2px; height:100%; }
  .hero-bracket.tr::before { top:0; right:0; width:100%; height:2px; }
  .hero-bracket.tr::after  { top:0; right:0; width:2px; height:100%; }
  .hero-bracket.bl::before { bottom:0; left:0; width:100%; height:2px; }
  .hero-bracket.bl::after  { bottom:0; left:0; width:2px; height:100%; }
  .hero-bracket.br::before { bottom:0; right:0; width:100%; height:2px; }
  .hero-bracket.br::after  { bottom:0; right:0; width:2px; height:100%; }

  .hero-gradient-word {
    background: linear-gradient(90deg, rgb(53,98,233) 0%, rgb(134,163,249) 30%, rgba(255,255,255,0.9) 50%, rgb(134,163,249) 70%, rgb(53,98,233) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: wordShimmer 3.5s linear 1.2s infinite;
  }
  .hero-glitch-word { animation: glitch 8s ease-in-out 2s infinite; }
  .hero-img-kb { animation: heroPan 22s ease-in-out infinite; will-change: transform; }
  .hero-scanlines {
    background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
    animation: scanline 8s linear infinite;
    pointer-events: none;
  }
  .hero-vignette {
    background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(11,11,15,0.85) 100%);
    animation: vignettePulse 6s ease-in-out infinite;
    pointer-events: none;
  }
  .hero-particle {
    border-radius: 9999px;
    background: rgba(53,98,233,0.5);
    position: absolute;
    pointer-events: none;
    animation: particleFloat var(--dur, 6s) ease-in-out var(--delay, 0s) infinite;
  }
  .hero-particle.glow {
    animation: particleFloat var(--dur, 6s) ease-in-out var(--delay, 0s) infinite,
               glowPulse var(--pulse, 3s) ease-in-out var(--delay, 0s) infinite;
  }
  .hero-accent-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(134,163,249,0.5) 30%, rgba(53,98,233,0.8) 50%, rgba(134,163,249,0.5) 70%, transparent);
    width: 0;
    margin: 0 auto;
    transition: width 1.2s cubic-bezier(0.22,1,0.36,1);
  }
  .hero-accent-line.go { width: 320px; }

  .s-img-r { opacity: 0; } .s-img-l { opacity: 0; }
  .s-title { opacity: 0; } .s-desc  { opacity: 0; }
  .s-box-l-0,.s-box-l-1,.s-box-l-2,.s-box-l-3 { opacity: 0; }
  .s-box-r-0,.s-box-r-1,.s-box-r-2,.s-box-r-3 { opacity: 0; }
  .s-img-r.go   { animation: slideFromRight 1.1s cubic-bezier(0.22,1,0.36,1) 0ms    forwards; }
  .s-img-l.go   { animation: slideFromLeft  1.1s cubic-bezier(0.22,1,0.36,1) 0ms    forwards; }
  .s-title.go   { animation: secWordIn      1.0s cubic-bezier(0.22,1,0.36,1) 200ms  forwards; }
  .s-desc.go    { animation: secWordIn      1.0s cubic-bezier(0.22,1,0.36,1) 380ms  forwards; }
  .s-box-l-0.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 300ms forwards; }
  .s-box-l-1.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 440ms forwards; }
  .s-box-l-2.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 580ms forwards; }
  .s-box-l-3.go { animation: secBoxLeft  0.8s cubic-bezier(0.34,1.2,0.64,1) 720ms forwards; }
  .s-box-r-0.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 300ms forwards; }
  .s-box-r-1.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 440ms forwards; }
  .s-box-r-2.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 580ms forwards; }
  .s-box-r-3.go { animation: secBoxRight 0.8s cubic-bezier(0.34,1.2,0.64,1) 720ms forwards; }

  .m-fade { opacity: 0; }
  .m-fade.go { animation: mobileFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
  .m-fade-1.go { animation: mobileFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 120ms forwards; }
  .m-fade-2.go { animation: mobileFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 240ms forwards; }
  .m-fade-3.go { animation: mobileFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 360ms forwards; }
  .m-fade-4.go { animation: mobileFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 480ms forwards; }
  .m-fade-img.go { animation: mobileFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 600ms forwards; }
`;

/* ─────────────────────────────────────────────
   SHARED DESKTOP COMPONENTS
───────────────────────────────────────────── */
function FeatureBox({
  visible, boxClass, text, top, left, right, lang,
}: {
  visible: boolean; boxClass: string; text: string;
  top: number; left: number; right: number; lang: string;
}) {
  // Mirror left/right for RTL
  const resolvedLeft = lang === 'ar' ? right : left;
  const resolvedRight = lang === 'ar' ? left : right;
  const isRightAligned = boxClass.includes('s-box-r');
  const resolvedClass = lang === 'ar'
    ? boxClass.replace('s-box-r', 's-box-l').replace('s-box-l', isRightAligned ? 's-box-l' : 's-box-r')
    : boxClass;

  return (
    <div
      className={`${resolvedClass}${visible ? ' go' : ''} absolute h-[54px]`}
      style={{ top: `${top}px`, left: `${resolvedLeft}px`, right: `${resolvedRight}px` }}
    >
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[-4px_-1.5px_-1px_-0.5px] overflow-clip rounded-[16px]">
        <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[245px] left-[-7px] overflow-clip right-[-172px] rounded-[24px] top-[-21.81px]">
          <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
          <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" />
          <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(161.518deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
        </div>
        <div className="absolute inset-[-1px_-1px_-1.25px_-1px] opacity-0 rounded-[16px]" style={{ backgroundImage: "linear-gradient(174.079deg, rgba(53,98,233,0.2) 0%, rgba(53,98,233,0) 50%, rgba(53,98,233,0.05) 100%)" }} />
        <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" />
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] text-[#fafafa] text-[14px] top-[26px]"
        style={{ [lang === 'ar' ? 'right' : 'left']: '40px', [lang === 'ar' ? 'left' : 'right']: '16px' }}
      >
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function SectionIcon({ left, top, right, lang, children }: {
  left?: number; top: number; right?: number; lang: string; children: React.ReactNode;
}) {
  const style: React.CSSProperties = { top: `${top}px` };
  if (lang === 'ar') {
    if (right !== undefined) style.right = `${right}px`;
    else if (left !== undefined) style.right = `${left}px`;
  } else {
    if (left !== undefined) style.left = `${left}px`;
    else if (right !== undefined) style.right = `${right}px`;
  }
  return (
    <div
      className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid rounded-[12px] size-[48px]"
      style={style}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACKGROUND CONTAINER
───────────────────────────────────────────── */
function Container1() {
  return (
    <div className="absolute inset-0 overflow-clip pointer-events-none" data-name="Container">
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1188.71px] opacity-21 rounded-[9999px] size-[1.45px] top-[3162.03px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[40.13px] opacity-33 rounded-[9999px] size-[1.79px] top-[414.52px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1441.39px] opacity-32 rounded-[9999px] size-[1.2px] top-[2873.69px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[624.5px] opacity-26 rounded-[9999px] size-[2.12px] top-[548.12px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1110.27px] opacity-20 rounded-[9999px] size-[2.02px] top-[838.21px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[530.75px] opacity-20 rounded-[9999px] size-[1.04px] top-[1368.37px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[962.81px] opacity-21 rounded-[9999px] size-[3.05px] top-[2870.92px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1383.25px] opacity-29 rounded-[9999px] size-[1.28px] top-[1026.37px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[234.41px] opacity-20 rounded-[9999px] size-[3.39px] top-[407.41px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[223.99px] opacity-20 rounded-[9999px] size-[2.16px] top-[3509.57px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[781.98px] opacity-20 rounded-[9999px] size-[1.91px] top-[1928.98px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[779.63px] opacity-20 rounded-[9999px] size-[1.13px] top-[2121.19px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[755.15px] opacity-22 rounded-[9999px] size-[2.89px] top-[1404.11px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1216.81px] opacity-34 rounded-[9999px] size-[1.88px] top-[3048.07px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[498.95px] opacity-28 rounded-[9999px] size-[3.97px] top-[96.84px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[940.97px] opacity-21 rounded-[9999px] size-[3.42px] top-[3240.23px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[123.2px] opacity-29 rounded-[9999px] size-[2.3px] top-[2425.28px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[921.16px] opacity-20 rounded-[9999px] size-[3.66px] top-[588.79px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[889.31px] opacity-28 rounded-[9999px] size-[3.31px] top-[2889.19px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[527.88px] opacity-20 rounded-[9999px] size-[3.45px] top-[2807.39px]" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Section4({ t }: { t: typeof translations['en'] }) {
  const [started, setStarted] = useState(false);
  const [lineGo, setLineGo] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setStarted(true), 80);
    const t2 = setTimeout(() => setLineGo(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  const particles = [
    { left: '8%', top: '18%', size: 3, dur: '7s', delay: '0s', pulse: '3.2s', glow: true },
    { left: '15%', top: '65%', size: 2, dur: '9s', delay: '1.2s', pulse: '4s', glow: false },
    { left: '22%', top: '40%', size: 1.5, dur: '6s', delay: '0.6s', pulse: '2.8s', glow: false },
    { left: '78%', top: '22%', size: 2.5, dur: '8s', delay: '0.3s', pulse: '3.6s', glow: true },
    { left: '85%', top: '58%', size: 2, dur: '10s', delay: '1.8s', pulse: '4.5s', glow: false },
    { left: '92%', top: '35%', size: 1.5, dur: '7s', delay: '0.9s', pulse: '3s', glow: false },
    { left: '50%', top: '12%', size: 2, dur: '8.5s', delay: '2s', pulse: '3.8s', glow: true },
    { left: '35%', top: '80%', size: 1.5, dur: '6.5s', delay: '0.4s', pulse: '3.2s', glow: false },
    { left: '65%', top: '75%', size: 2, dur: '9.5s', delay: '1.5s', pulse: '4.2s', glow: false },
  ];
  return (
    <div className="absolute left-0 right-0 top-0 overflow-hidden" style={{ height: '680px' }}>
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" src={imgSection} className="hero-img-kb absolute" style={{ width: '110%', height: '110%', top: '-5%', left: '-5%', objectFit: 'cover', objectPosition: 'center center', opacity: 0.18 }} />
      </div>
      <div className="absolute inset-0 hero-scanlines" style={{ opacity: 0.4 }} />
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none" style={{ height: '200px', background: 'linear-gradient(to bottom, transparent, rgb(11,11,15))' }} />
      <div className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: '120px', background: 'linear-gradient(to right, rgb(11,11,15), transparent)' }} />
      <div className="absolute inset-y-0 right-0 pointer-events-none" style={{ width: '120px', background: 'linear-gradient(to left, rgb(11,11,15), transparent)' }} />
      <div className="absolute left-0 right-0 top-0 pointer-events-none" style={{ height: '100px', background: 'linear-gradient(to bottom, rgb(11,11,15), transparent)' }} />
      <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(53,98,233,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '300px', left: '20%', top: '20%', background: 'radial-gradient(circle, rgba(134,163,249,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      <div className="absolute pointer-events-none" style={{ width: '280px', height: '280px', right: '15%', top: '30%', background: 'radial-gradient(circle, rgba(53,98,233,0.07) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      {particles.map((p, i) => (
        <div key={i} className={`hero-particle${p.glow ? ' glow' : ''}`} style={{ left: p.left, top: p.top, width: `${p.size}px`, height: `${p.size}px`, '--dur': p.dur, '--delay': p.delay, '--pulse': p.pulse } as React.CSSProperties} />
      ))}
      <div style={{ position: 'absolute', top: '148px', left: 0, right: 0 }}>
        <div className={`hero-accent-line${lineGo ? ' go' : ''}`} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: '74px' }}>
        <p className={`h-label${started ? ' go' : ''} font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#3562e9] text-[12px] text-center tracking-[1.2px] uppercase mb-5`}>{t.platform}</p>
        <div className={`h-line1${started ? ' go' : ''} font-['Inter:Bold',sans-serif] font-bold text-center text-[#fafafa] tracking-[-1.5px] leading-[1.1]`} style={{ fontSize: 'clamp(44px,5.5vw,60px)' }}>
          {t.heroLine1} <span className="hero-gradient-word hero-glitch-word">{t.heroLine2}</span>
        </div>
        <div className={`h-line2${started ? ' go' : ''} font-['Inter:Bold',sans-serif] font-bold text-center text-[#fafafa] tracking-[-1.5px] leading-[1.1] mb-6`} style={{ fontSize: 'clamp(44px,5.5vw,60px)' }}>
          {t.heroLine3}
        </div>
        <div className={`h-divider${started ? ' go' : ''} mb-6`} style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #3562e9, #86a3f9)', borderRadius: '2px' }} />
        <p className={`h-desc${started ? ' go' : ''} font-['Inter:Regular',sans-serif] font-normal text-[#73798c] text-[18px] text-center leading-[28px] px-8`} style={{ maxWidth: '621px' }}>
          {t.heroDesc}
        </p>
      </div>
    </div>
  );
}

/* ─── Desktop section SVG icons ─── */
function Svg3() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.pc216af0} stroke="url(#paint0_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p3e31fef0} stroke="url(#paint1_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M15 2V4" stroke="url(#paint2_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M15 20V22" stroke="url(#paint3_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M2 15H4" stroke="url(#paint4_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M2 9H4" stroke="url(#paint5_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M20 15H22" stroke="url(#paint6_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M20 9H22" stroke="url(#paint7_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M9 2V4" stroke="url(#paint8_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M9 20V22" stroke="url(#paint9_linear_1_304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_304" x1="12" x2="12" y1="4" y2="20"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_304" x1="12" x2="12" y1="9" y2="15"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_304" x1="15.5" x2="15.5" y1="2" y2="4"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_304" x1="15.5" x2="15.5" y1="20" y2="22"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_304" x1="3" x2="3" y1="15" y2="16"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_304" x1="3" x2="3" y1="9" y2="10"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_304" x1="21" x2="21" y1="15" y2="16"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_304" x1="21" x2="21" y1="9" y2="10"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_304" x1="9.5" x2="9.5" y1="2" y2="4"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_304" x1="9.5" x2="9.5" y1="20" y2="22"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg></div>;
}
function Svg2() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.p2209c100} stroke="url(#paint0_linear_1_316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p2ba7e470} stroke="url(#paint1_linear_1_316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_316" x1="17.5" x2="17.5" y1="3" y2="10"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_316" x1="10" x2="10" y1="7" y2="21"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg></div>;
}
function Svg1() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.p199fee00} stroke="url(#paint0_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p18d2fde0} stroke="url(#paint1_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p30453a80} stroke="url(#paint2_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p10ece300} stroke="url(#paint3_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p259d3500} stroke="url(#paint4_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M12 13H16" stroke="url(#paint5_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p1aa35400} stroke="url(#paint6_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M12 8H20" stroke="url(#paint7_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p3eeb5a80} stroke="url(#paint8_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p153c4d80} stroke="url(#paint9_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p18fdbf00} stroke="url(#paint10_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p9284100} stroke="url(#paint11_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d={svgPaths.p24941100} stroke="url(#paint12_linear_1_320)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_320" x1="6.9996" x2="6.9996" y1="1.99116" y2="21.9957"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_320" x1="10.5" x2="10.5" y1="9" y2="13"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_320" x1="6.202" x2="6.202" y1="5.125" y2="6.5"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_320" x1="3.7695" x2="3.7695" y1="10.5" y2="10.896"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_320" x1="5.0165" x2="5.0165" y1="17.484" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_320" x1="14" x2="14" y1="13" y2="14"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_320" x1="16" x2="16" y1="18" y2="21"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_320" x1="16" x2="16" y1="8" y2="9"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_320" x1="17" x2="17" y1="3" y2="8"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_320" x1="16" x2="16" y1="12.5" y2="13.5"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_320" x1="18" x2="18" y1="2.5" y2="3.5"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_320" x1="20" x2="20" y1="20.5" y2="21.5"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_320" x1="20" x2="20" y1="7.5" y2="8.5"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg></div>;
}
function Svg() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.p3f3d8e00} stroke="url(#paint0_linear_1_335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M9 12L11 14L15 10" stroke="url(#paint1_linear_1_335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_335" x1="12" x2="12" y1="1.99955" y2="22.0029"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_335" x1="12" x2="12" y1="10" y2="14"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg></div>;
}

/* ─── Desktop image panels ─── */
function AutomationImage({ visible, lang }: { visible: boolean; lang: string }) {
  const isRtl = lang === 'ar';
  return (
    <div className={`${isRtl ? 's-img-l' : 's-img-r'}${visible ? ' go' : ''} absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[552px] overflow-clip rounded-[16px] top-[96px]`}
      style={isRtl ? { right: '775px', left: 0 } : { left: '775px', right: 0 }}>
      <div className="absolute aspect-[725/674] left-[-1px] right-[6px] rounded-[12px] top-[6px]"><div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]"><img alt="" className="absolute h-[112.47%] left-[-2.07%] max-w-none top-[-14.96%] w-[104.56%]" src={imgIntelligentProcessAutomation} /></div></div>
      <div className="absolute inset-[6px_14px_-6px_-24px] rounded-[16px]" style={{ backgroundImage: "linear-gradient(143.563deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
    </div>
  );
}
function BlockchainImage({ visible, lang }: { visible: boolean; lang: string }) {
  const isRtl = lang === 'ar';
  return (
    <div className={`${isRtl ? 's-img-r' : 's-img-l'}${visible ? ' go' : ''} absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.02)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid h-[552px] overflow-clip rounded-[16px] top-[96px]`}
      style={isRtl ? { left: '780px', right: 0 } : { left: 0, right: '780px' }}>
      <div className="absolute aspect-[538/538] left-[6.5px] right-[6.5px] rounded-[12px] top-[6.5px]"><div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEnterpriseBlockchainInfrastructure} /></div></div>
      <div className="absolute inset-[0.5px_0.5px_0.5px_-184.5px] rounded-[16px]" style={{ backgroundImage: "linear-gradient(148.99deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
    </div>
  );
}
function AIImage({ visible, lang }: { visible: boolean; lang: string }) {
  const isRtl = lang === 'ar';
  return (
    <div className={`${isRtl ? 's-img-l' : 's-img-r'}${visible ? ' go' : ''} absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.02)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid h-[552px] overflow-clip rounded-[16px] top-[96px]`}
      style={isRtl ? { right: '780px', left: 0 } : { left: '780px', right: 0 }}>
      <div className="absolute aspect-[718/634] left-[6.5px] right-[6.5px] rounded-[12px] top-[6.5px]"><div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]"><img alt="" className="absolute h-[113.25%] left-[0.01%] max-w-none top-[-13.3%] w-full" src={imgAdvancedArtificialIntelligence} /></div></div>
      <div className="absolute inset-[0.5px] rounded-[16px]" style={{ backgroundImage: "linear-gradient(143.005deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
    </div>
  );
}
function SecurityImage({ visible, lang }: { visible: boolean; lang: string }) {
  const isRtl = lang === 'ar';
  return (
    <div className={`${isRtl ? 's-img-r' : 's-img-l'}${visible ? ' go' : ''} absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.02)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid h-[552px] overflow-clip rounded-[16px] top-[96px]`}
      style={isRtl ? { left: '780px', right: 0 } : { left: 0, right: '780px' }}>
      <div className="absolute aspect-[538/538] left-[6.5px] right-[6.5px] rounded-[12px] top-[6.5px]"><div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]"><img alt="" className="absolute left-[-0.23%] max-w-none size-[101.76%] top-[-11.59%]" src={imgAdvancedDigitalSecurity} /></div></div>
      <div className="absolute inset-[0.5px] rounded-[16px]" style={{ backgroundImage: "linear-gradient(143.005deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
    </div>
  );
}

/* ─── Desktop feature sections ─── */
function Section3({ t, lang }: { t: typeof translations['en']; lang: string }) {
  const { ref, visible } = useScrollVisible();
  const isRtl = lang === 'ar';
  const textLeft = isRtl ? undefined : 81;
  const textRight = isRtl ? 81 : undefined;
  const iconLeft = isRtl ? undefined : 81;
  const iconRight = isRtl ? 81 : undefined;
  return (
    <div ref={ref} className="absolute border-[rgba(255,255,255,0.06)] h-[745px] left-0 right-0 top-[724px]">
      <SectionIcon left={iconLeft} right={iconRight} top={117} lang={lang}><Svg3 /></SectionIcon>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-semibold h-[16px] justify-center leading-[0] text-[#3562e9] text-[12px] top-[193px] tracking-[1.2px] uppercase`} style={{ left: textLeft, right: textRight, width: '94.776px' }}><p className="leading-[16px]">{t.s1Label}</p></div>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-bold h-[36px] justify-center leading-[0] text-[#fafafa] text-[30px] top-[231px] tracking-[-0.75px]`} style={{ left: textLeft, right: textRight, width: '431.748px' }}><p className="leading-[36px]">{t.s1Title}</p></div>
      <div className={`s-desc${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-normal h-[71.5px] justify-center leading-[26px] text-[#73798c] text-[16px] top-[303.75px]`} style={{ left: textLeft, right: textRight, width: '530.034px' }}>
        {t.s1Desc.map((line, i) => <p key={i} className={i < t.s1Desc.length - 1 ? 'mb-0' : ''}>{line}</p>)}
      </div>
      <FeatureBox visible={visible} boxClass="s-box-l-0" top={375} left={81} right={879} text={t.s1Pills[0]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-l-1" top={441} left={81} right={879} text={t.s1Pills[1]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-l-2" top={507} left={81} right={879} text={t.s1Pills[2]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-l-3" top={573} left={81} right={879} text={t.s1Pills[3]} lang={lang} />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[25px] inset-[72px_156px_72px_756px] rounded-[24px]" />
      <AutomationImage visible={visible} lang={lang} />
    </div>
  );
}

function Section2({ t, lang }: { t: typeof translations['en']; lang: string }) {
  const { ref, visible } = useScrollVisible();
  const isRtl = lang === 'ar';
  const textLeft = isRtl ? undefined : 880;
  const textRight = isRtl ? 880 : undefined;
  const iconLeft = isRtl ? undefined : 880;
  const iconRight = isRtl ? 880 : undefined;
  return (
    <div ref={ref} className="absolute border-[rgba(255,255,255,0.06)] h-[745px] left-0 right-0 top-[1469px]">
      <SectionIcon left={iconLeft} right={iconRight} top={117} lang={lang}><Svg2 /></SectionIcon>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-semibold h-[16px] justify-center leading-[0] text-[#3562e9] text-[12px] top-[193px] tracking-[1.2px] uppercase`} style={{ left: textLeft, right: textRight, width: '91.701px' }}><p className="leading-[16px]">{t.s2Label}</p></div>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-bold h-[36px] justify-center leading-[0] text-[#fafafa] text-[30px] top-[231px] tracking-[-0.75px]`} style={{ left: textLeft, right: textRight, width: '506.688px' }}><p className="leading-[36px]">{t.s2Title}</p></div>
      <div className={`s-desc${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-normal h-[71.5px] justify-center leading-[26px] text-[#73798c] text-[16px] top-[303.75px]`} style={{ left: textLeft, right: textRight, width: '552.58px' }}>
        {t.s2Desc.map((line, i) => <p key={i} className={i < t.s2Desc.length - 1 ? 'mb-0' : ''}>{line}</p>)}
      </div>
      <FeatureBox visible={visible} boxClass="s-box-r-0" top={375} left={880} right={80} text={t.s2Pills[0]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-r-1" top={441} left={880} right={80} text={t.s2Pills[1]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-r-2" top={507} left={880} right={80} text={t.s2Pills[2]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-r-3" top={573} left={880} right={80} text={t.s2Pills[3]} lang={lang} />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[25px] inset-[72px_756px_72px_156px] rounded-[24px]" />
      <BlockchainImage visible={visible} lang={lang} />
    </div>
  );
}

function Section1({ t, lang }: { t: typeof translations['en']; lang: string }) {
  const { ref, visible } = useScrollVisible();
  const isRtl = lang === 'ar';
  const textLeft = isRtl ? undefined : 79;
  const textRight = isRtl ? 79 : undefined;
  const iconLeft = isRtl ? undefined : 79;
  const iconRight = isRtl ? 79 : undefined;
  return (
    <div ref={ref} className="absolute border-[rgba(255,255,255,0.06)] h-[745px] left-0 right-0 top-[2214px]">
      <SectionIcon left={iconLeft} right={iconRight} top={117} lang={lang}><Svg1 /></SectionIcon>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-semibold h-[16px] justify-center leading-[0] text-[#3562e9] text-[12px] top-[193px] tracking-[1.2px] uppercase`} style={{ left: textLeft, right: textRight, width: '100.735px' }}><p className="leading-[16px]">{t.s3Label}</p></div>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-bold h-[36px] justify-center leading-[0] text-[#fafafa] text-[30px] top-[231px] tracking-[-0.75px]`} style={{ left: textLeft, right: textRight, width: '437.821px' }}><p className="leading-[36px]">{t.s3Title}</p></div>
      <div className={`s-desc${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-normal h-[71.5px] justify-center leading-[26px] text-[#73798c] text-[16px] top-[303.75px]`} style={{ left: textLeft, right: textRight, width: '545.36px' }}>
        {t.s3Desc.map((line, i) => <p key={i} className={i < t.s3Desc.length - 1 ? 'mb-0' : ''}>{line}</p>)}
      </div>
      <FeatureBox visible={visible} boxClass="s-box-l-0" top={375} left={79} right={881} text={t.s3Pills[0]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-l-1" top={441} left={79} right={881} text={t.s3Pills[1]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-l-2" top={507} left={79} right={881} text={t.s3Pills[2]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-l-3" top={573} left={79} right={881} text={t.s3Pills[3]} lang={lang} />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[25px] inset-[72px_156px_72px_756px] rounded-[24px]" />
      <AIImage visible={visible} lang={lang} />
    </div>
  );
}

function Section({ t, lang }: { t: typeof translations['en']; lang: string }) {
  const { ref, visible } = useScrollVisible();
  const isRtl = lang === 'ar';
  const textLeft = isRtl ? undefined : 890;
  const textRight = isRtl ? 890 : undefined;
  const iconLeft = isRtl ? undefined : 890;
  const iconRight = isRtl ? 890 : undefined;
  return (
    <div ref={ref} className="absolute border-[rgba(255,255,255,0.06)] h-[745px] left-0 right-0 top-[2959px]">
      <SectionIcon left={iconLeft} right={iconRight} top={117} lang={lang}><Svg /></SectionIcon>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-semibold h-[16px] justify-center leading-[0] text-[#3562e9] text-[12px] top-[193px] tracking-[1.2px] uppercase`} style={{ left: textLeft, right: textRight, width: '70.438px' }}><p className="leading-[16px]">{t.s4Label}</p></div>
      <div className={`s-title${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-bold h-[36px] justify-center leading-[0] text-[#fafafa] text-[30px] top-[231px] tracking-[-0.75px]`} style={{ left: textLeft, right: textRight, width: '362.561px' }}><p className="leading-[36px]">{t.s4Title}</p></div>
      <div className={`s-desc${visible ? ' go' : ''} -translate-y-1/2 absolute flex flex-col font-normal h-[71.5px] justify-center leading-[26px] text-[#73798c] text-[16px] top-[303.75px]`} style={{ left: textLeft, right: textRight, width: '541.76px' }}>
        {t.s4Desc.map((line, i) => <p key={i} className={i < t.s4Desc.length - 1 ? 'mb-0' : ''}>{line}</p>)}
      </div>
      <FeatureBox visible={visible} boxClass="s-box-r-0" top={375} left={890} right={70} text={t.s4Pills[0]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-r-1" top={441} left={890} right={70} text={t.s4Pills[1]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-r-2" top={507} left={890} right={70} text={t.s4Pills[2]} lang={lang} />
      <FeatureBox visible={visible} boxClass="s-box-r-3" top={573} left={890} right={70} text={t.s4Pills[3]} lang={lang} />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[25px] inset-[72px_756px_72px_156px] rounded-[24px]" />
      <SecurityImage visible={visible} lang={lang} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MOBILE COMPONENTS
═══════════════════════════════════════════════════════════ */


function MobilePill({ visible, delay, text }: { visible: boolean; delay: number; text: string }) {
  return (
    <div
      className={`m-fade${visible ? ' go' : ''} relative h-[52px] w-full mb-3 overflow-hidden rounded-[14px] flex items-center px-4`}
      style={{ opacity: 0, animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px]">
        <div className="absolute inset-0 rounded-[14px]" style={{ backgroundImage: "linear-gradient(161.518deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)" }} />
        <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.08)] blur-[40px] left-1/2 rounded-[9999px] size-[200px] top-[-100px]" />
      </div>
      <p className="relative font-medium text-[#fafafa] text-[14px] leading-[20px]">{text}</p>
    </div>
  );
}

function MobileImg({ visible, src }: { visible: boolean; src: string }) {
  return (
    <div
      className={`m-fade-img${visible ? ' go' : ''} relative w-full mt-6 rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)]`}
      style={{ opacity: 0, aspectRatio: '4/3' }}
    >
      <img alt="" src={src} className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 rounded-[16px]" style={{ backgroundImage: "linear-gradient(143.563deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%)" }} />
    </div>
  );
}

function MobileFeatureSection({ icon, label, title, desc, pills, imgSrc, lang }: {
  icon: React.ReactNode; label: string; title: string; desc: string[];
  pills: string[]; imgSrc: string; lang: string;
}) {
  const { ref, visible } = useScrollVisible(0.1);
  const isRtl = lang === 'ar';
  return (
    <div
      ref={ref}
      className={`relative w-full border-t border-[rgba(255,255,255,0.06)] px-5 py-14 overflow-hidden${isRtl ? ' text-right' : ''}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(53,98,233,0.08), transparent)' }} />
      {/* Icon box */}
      <div className="mb-5 mt-24 bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[12px] size-[48px] shrink-0 flex items-center justify-center" style={isRtl ? { marginRight: 0, marginLeft: 'auto' } : { marginLeft: 0, marginRight: 'auto' }}>
        <div className="size-[24px] flex items-center justify-center">{icon}</div>
      </div>
      <p className={`m-fade${visible ? ' go' : ''} font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-3`} style={{ opacity: 0 }}>
        {label}
      </p>
      <h2 className={`m-fade-1${visible ? ' go' : ''} font-bold text-[#fafafa] text-[26px] leading-[1.2] tracking-[-0.6px] mb-4`} style={{ opacity: 0 }}>
        {title}
      </h2>
      <p className={`m-fade-2${visible ? ' go' : ''} text-[#73798c] text-[15px] leading-[1.7] mb-6`} style={{ opacity: 0 }}>
        {desc.join(' ')}
      </p>
      <div className="flex flex-col w-full">
        {pills.map((p, i) => (
          <MobilePill key={p} visible={visible} delay={300 + i * 100} text={p} />
        ))}
      </div>
      <MobileImg visible={visible} src={imgSrc} />
    </div>
  );
}

function MobileHero({ t }: { t: typeof translations['en'] }) {
  const [started, setStarted] = useState(false);
  const [lineGo, setLineGo] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStarted(true), 80);
    const t2 = setTimeout(() => setLineGo(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const particles = [
    { left: '8%', top: '18%', size: 3, dur: '7s', delay: '0s', pulse: '3.2s', glow: true },
    { left: '80%', top: '22%', size: 2.5, dur: '8s', delay: '0.3s', pulse: '3.6s', glow: true },
    { left: '50%', top: '10%', size: 2, dur: '8.5s', delay: '2s', pulse: '3.8s', glow: true },
    { left: '20%', top: '72%', size: 1.5, dur: '6s', delay: '0.6s', pulse: '2.8s', glow: false },
    { left: '70%', top: '78%', size: 2, dur: '9.5s', delay: '1.5s', pulse: '4.2s', glow: false },
    { left: '15%', top: '45%', size: 1.5, dur: '7s', delay: '1s', pulse: '3s', glow: false },
    { left: '88%', top: '55%', size: 2, dur: '9s', delay: '0.8s', pulse: '4s', glow: false },
  ];

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: '100svh', paddingTop: '90px', paddingBottom: '60px' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" src={imgSection} className="hero-img-kb" style={{ position: 'absolute', width: '110%', height: '110%', top: '-5%', left: '-5%', objectFit: 'cover', objectPosition: 'center center', opacity: 0.18 }} />
      </div>
      <div className="absolute inset-0 hero-scanlines" style={{ opacity: 0.4 }} />
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '200px', background: 'linear-gradient(to bottom, transparent, rgb(11,11,15))' }} />
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '100px', background: 'linear-gradient(to bottom, rgb(11,11,15), transparent)' }} />
      <div className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: '60px', background: 'linear-gradient(to right, rgb(11,11,15), transparent)' }} />
      <div className="absolute inset-y-0 right-0 pointer-events-none" style={{ width: '60px', background: 'linear-gradient(to left, rgb(11,11,15), transparent)' }} />
      <div className="absolute pointer-events-none" style={{ width: '400px', height: '400px', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(53,98,233,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      {particles.map((p, i) => (
        <div key={i} className={`hero-particle${p.glow ? ' glow' : ''}`} style={{ left: p.left, top: p.top, width: `${p.size}px`, height: `${p.size}px`, '--dur': p.dur, '--delay': p.delay, '--pulse': p.pulse } as React.CSSProperties} />
      ))}
      {(['tl', 'tr', 'bl', 'br'] as const).map(pos => (
        <div key={pos} className={`hero-bracket ${pos}${started ? ' go' : ''}`} style={{ top: pos.startsWith('t') ? '16px' : undefined, bottom: pos.startsWith('b') ? '16px' : undefined, left: pos.endsWith('l') ? '16px' : undefined, right: pos.endsWith('r') ? '16px' : undefined, transitionDelay: started ? '1.0s' : '0s' }} />
      ))}
      <div className="absolute left-0 right-0" style={{ top: '86px' }}>
        <div className={`hero-accent-line${lineGo ? ' go' : ''}`} />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full px-5">
        <p className={`h-label${started ? ' go' : ''} font-semibold text-[#3562e9] text-[11px] text-center tracking-[1.2px] uppercase mb-5`}>{t.platform}</p>
        <div className={`h-line1${started ? ' go' : ''} font-bold text-center text-[#fafafa] tracking-[-1.2px] leading-[1.1]`} style={{ fontSize: 'clamp(34px,9vw,52px)', marginBottom: '4px' }}>{t.heroLine1}</div>
        <div className={`h-line2${started ? ' go' : ''} hero-gradient-word hero-glitch-word font-bold text-center tracking-[-1.2px] leading-[1.1]`} style={{ fontSize: 'clamp(34px,9vw,52px)', marginBottom: '4px' }}>{t.heroLine2}</div>
        <div className={`h-line3${started ? ' go' : ''} font-bold text-center text-[#fafafa] tracking-[-1.2px] leading-[1.1] mb-6`} style={{ fontSize: 'clamp(34px,9vw,52px)' }}>{t.heroLine3}</div>
        <div className={`h-divider${started ? ' go' : ''} mb-6`} style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #3562e9, #86a3f9)', borderRadius: '2px' }} />
        <p className={`h-desc${started ? ' go' : ''} text-[#73798c] text-[15px] text-center leading-[1.75] max-w-[320px]`}>
          {t.heroDesc}
        </p>
      </div>
    </div>
  );
}

/* SVG nodes for mobile (reused from original) */
const mSvgAutomation = (
  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
    <path d={svgPaths.pc216af0} stroke="url(#m-a0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p3e31fef0} stroke="url(#m-a1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M15 2V4" stroke="url(#m-a2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M15 20V22" stroke="url(#m-a3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M2 15H4" stroke="url(#m-a4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M2 9H4" stroke="url(#m-a5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M20 15H22" stroke="url(#m-a6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M20 9H22" stroke="url(#m-a7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M9 2V4" stroke="url(#m-a8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M9 20V22" stroke="url(#m-a9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <defs>
      {['m-a0', 'm-a1', 'm-a2', 'm-a3', 'm-a4', 'm-a5', 'm-a6', 'm-a7', 'm-a8', 'm-a9'].map((id, i) => (
        <linearGradient key={id} gradientUnits="userSpaceOnUse" id={id} x1="12" x2="12" y1={i < 2 ? 4 : 2} y2={i < 2 ? 20 : 22}>
          <stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" />
        </linearGradient>
      ))}
    </defs>
  </svg>
);
const mSvgBlockchain = (
  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
    <path d={svgPaths.p2209c100} stroke="url(#m-b0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p2ba7e470} stroke="url(#m-b1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="m-b0" x1="17.5" x2="17.5" y1="3" y2="10"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="m-b1" x1="10" x2="10" y1="7" y2="21"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
    </defs>
  </svg>
);
const mSvgAI = (
  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
    <path d={svgPaths.p199fee00} stroke="url(#m-i0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p18d2fde0} stroke="url(#m-i1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p30453a80} stroke="url(#m-i2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p10ece300} stroke="url(#m-i3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p259d3500} stroke="url(#m-i4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M12 13H16" stroke="url(#m-i5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p1aa35400} stroke="url(#m-i6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M12 8H20" stroke="url(#m-i7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p3eeb5a80} stroke="url(#m-i8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p153c4d80} stroke="url(#m-i9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p18fdbf00} stroke="url(#m-i10)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p9284100} stroke="url(#m-i11)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p24941100} stroke="url(#m-i12)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <defs>
      {Array.from({ length: 13 }, (_, i) => (
        <linearGradient key={`m-i${i}`} gradientUnits="userSpaceOnUse" id={`m-i${i}`} x1="12" x2="12" y1="2" y2="22">
          <stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" />
        </linearGradient>
      ))}
    </defs>
  </svg>
);
const mSvgSecurity = (
  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
    <path d={svgPaths.p3f3d8e00} stroke="url(#m-s0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M9 12L11 14L15 10" stroke="url(#m-s1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="m-s0" x1="12" x2="12" y1="1.99955" y2="22.0029"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="m-s1" x1="12" x2="12" y1="10" y2="14"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
    </defs>
  </svg>
);

/* ─────────────────────────────────────────────
   DESKTOP LAYOUT
───────────────────────────────────────────── */
function DesktopPlatform({ t, lang }: { t: typeof translations['en']; lang: string }) {
  return (
    <div className="relative w-full" style={{ height: '3704px', overflowX: 'hidden' }}>
      <Container1 />
      <Section4 t={t} />
      <Section3 t={t} lang={lang} />
      <Section2 t={t} lang={lang} />
      <Section1 t={t} lang={lang} />
      <Section t={t} lang={lang} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE LAYOUT
───────────────────────────────────────────── */
function MobilePlatform({ t, lang }: { t: typeof translations['en']; lang: string }) {
  return (
    <div className="relative w-full" style={{ background: 'rgb(11,11,15)' }}>
      <MobileHero t={t} />
      <MobileFeatureSection
        icon={mSvgAutomation}
        label={t.s1Label}
        title={t.s1Title}
        desc={t.s1Desc}
        pills={t.s1Pills}
        imgSrc={imgIntelligentProcessAutomation}
        lang={lang}
      />
      <MobileFeatureSection
        icon={mSvgBlockchain}
        label={t.s2Label}
        title={t.s2Title}
        desc={t.s2Desc}
        pills={t.s2Pills}
        imgSrc={imgEnterpriseBlockchainInfrastructure}
        lang={lang}
      />
      <MobileFeatureSection
        icon={mSvgAI}
        label={t.s3Label}
        title={t.s3Title}
        desc={t.s3Desc}
        pills={t.s3Pills}
        imgSrc={imgAdvancedArtificialIntelligence}
        lang={lang}
      />
      <MobileFeatureSection
        icon={mSvgSecurity}
        label={t.s4Label}
        title={t.s4Title}
        desc={t.s4Desc}
        pills={t.s4Pills}
        imgSrc={imgAdvancedDigitalSecurity}
        lang={lang}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
interface PlatformProps {
  onRequestDemo?: () => void;
}

export default function Platform({ onRequestDemo }: PlatformProps = {}) {
  const isMobile = useIsMobile();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
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
  }, []);

  return (
    <div
      className="relative w-full overflow-x-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      style={{ backgroundColor: 'rgb(11,11,15)', ...(lang === 'ar' ? { fontFamily: "'Cairo', sans-serif" } : {}) }}      
    >
      <style>{heroStyles}</style>
      <WhatsAppButton />
      <FunctionalHeader onRequestDemo={handleRequestDemo} />

      {isMobile
        ? <MobilePlatform t={t} lang={lang} />
        : <DesktopPlatform t={t} lang={lang} />
      }

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}