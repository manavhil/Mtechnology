import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "./svg-nd31wxej9e";
import heroBgVideo from "../assets/hero-bg.mp4";
import imgImage5 from "../assets/b2ba6458ff60bedd391a7bf3329dfeb4e82b421a.png";
import imgSection from "../assets/3d73c22b108439f318a34075bd6078e873fa4205.png";
import imgImage71 from "../assets/b43c8538cfed6560da1728bb79a35b7cfb04f1b0.png";
import imgImage3 from "../assets/01d050ab95c8b6a9f03f5cafcf5006fde5a1997d.png";
import imgImage4 from "../assets/robx-logo.png";
import imgImage2 from "../assets/c3df601ada36baaff6cf9295053ce6769f3b061a.png";
import imgSection1 from "../assets/d2088fc1bf8613d5f1438e9cfadd3e94a21a6e6b.png";
import imgIntelligentProcessAutomation from "../assets/5d10e78ca0aa62fe1fa90609898b559c55d0fe0f.png";
import imgEnterpriseBlockchainInfrastructure from "../assets/0c4434e685a8b1c521bd4f0c6208f1578d113f3d.png";
import imgAdvancedArtificialIntelligence from "../assets/4088efd90e32ef15b9e7fbc9c777955680458281.png";
import imgAdvancedDigitalSecurity from "../assets/0f4cf11d0fdac056e8e0c8f851b0682b671abfa3.png";
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { Footer } from '../components/shared/Footer';

/* ─── Translations Dictionary ─── */
const tMobile = {
  en: {
    badge: "Infrastructure Platform — Live",
    h1_1: "Powering the",
    h1_2: "Next Generation",
    h1_3: "of Digital Operations",
    sub: "Turn ideas into action with technology that accelerates efficiency, agility, and growth.",
    btn1: "Get Started",
    btn2: "Explore Platform",
    aboutLabel: "About MTechnology",
    aboutH2_1: "Technology That ",
    aboutH2_2: "Redefines ",
    aboutH2_3: "Business",
    aboutDesc: "MTechnology builds advanced digital infrastructure that enables organizations to operate with greater intelligence and efficiency. We don't just build technology tools — we build the infrastructure for modern digital enterprises.",
    platformLabel: "Platform",
    platformH2_1: "One Platform. ",
    platformH2_2: "Integrated ",
    platformH2_3: "Power.",
    platformSub: "Smarter Systems. Stronger Security. Faster Operations.",
    solLabel: "Solutions",
    solH2_1: "Solutions for ",
    solH2_2: "Modern ",
    solH2_3: "Enterprises",
    whyLabel: "Why MTechnology",
    whyH2_1: "A ",
    whyH2_2: "Competitive Advantage ",
    whyH2_3: "for Enterprises",
    whySub: "With MTechnology, organizations can:",
    why1: "Accelerate digital transformation",
    why2: "Strengthen cybersecurity",
    why3: "Improve operational efficiency",
    why4: "Build scalable systems",
    why5: "Integrate easily with existing technologies",
    indLabel: "Industries",
    indH2_1: "Digital Solutions for ",
    indH2_2: "Multiple Industries",
    partLabel: "Partners",
    partH2_1: "Our ",
    partH2_2: "Partners",
    visLabel: "Vision",
    visH2_1: "Empowering the ",
    visH2_2: "Next Generation ",
    visH2_3: "of Digital Enterprises",
    visDesc: "We aim to build intelligent digital ecosystems that help organizations innovate, collaborate, and grow in a rapidly evolving digital world.",
    ctaLabel: "Contact",
    ctaH2_1: "Let's Innovate the ",
    ctaH2_2: "Future ",
    ctaH2_3: "Together",
    ctaDesc: "Contact the MTechnology team to discover how our platform can help your organization automate, secure, and scale with confidence.",
    ctaBtn: "Contact Us",
    stats: { uptime: "Uptime", latency: "Latency", arch: "Architecture", zeroTrust: "Zero-Trust", mon: "Monitoring" },
    cards: {
      autoTag: "AUTOMATION", autoTitle: "Intelligent Process Automation", autoDesc: "Transform traditional processes into intelligent workflows that operate faster and more efficiently.",
      blockTag: "BLOCKCHAIN", blockTitle: "Enterprise Blockchain Infrastructure", blockDesc: "Securely record and track assets and transactions in a transparent digital environment.",
      intelTag: "INTELLIGENCE", intelTitle: "Advanced Artificial Intelligence", intelDesc: "Analyze data and generate insights that support faster and more accurate decision‑making.",
      secTag: "SECURITY", secTitle: "Advanced Digital Security", secDesc: "A protection architecture based on Zero‑Trust principles ensuring every user and interaction is verified.",
    },
    industries:[
      "Logistics & Supply Chain", "Government Sector", "Financial Services",
      "Healthcare", "Energy & Utilities", "Enterprise Corporations"
    ]
  },
  ar: {
    badge: "منصة البنية التحتية — مباشر",
    h1_1: "تشغيل",
    h1_2: "الجيل القادم",
    h1_3: "من العمليات الرقمية",
    sub: "حوّل الأفكار إلى أفعال مع تكنولوجيا تسرّع الكفاءة والمرونة والنمو.",
    btn1: "ابدأ الآن",
    btn2: "استكشف المنصة",
    aboutLabel: "عن إم تيكنولوجي",
    aboutH2_1: "تكنولوجيا ",
    aboutH2_2: "تعيد تعريف ",
    aboutH2_3: "الأعمال",
    aboutDesc: "تبني إم تيكنولوجي بنية تحتية رقمية متقدمة تمكّن المؤسسات من العمل بذكاء وكفاءة أكبر. نحن لا نبني أدوات تكنولوجية فحسب — بل نبني البنية التحتية للمؤسسات الرقمية الحديثة.",
    platformLabel: "المنصة",
    platformH2_1: "منصة واحدة. ",
    platformH2_2: "قوة ",
    platformH2_3: "متكاملة.",
    platformSub: "أنظمة أذكى. أمان أقوى. عمليات أسرع.",
    solLabel: "الحلول",
    solH2_1: "حلول ",
    solH2_2: "للمؤسسات ",
    solH2_3: "الحديثة",
    whyLabel: "لماذا إم تيكنولوجي",
    whyH2_1: "ميزة ",
    whyH2_2: "تنافسية ",
    whyH2_3: "للمؤسسات",
    whySub: ":مع إم تيكنولوجي، يمكن للمؤسسات",
    why1: "تسريع التحول الرقمي",
    why2: "تعزيز الأمن السيبراني",
    why3: "تحسين الكفاءة التشغيلية",
    why4: "بناء أنظمة قابلة للتوسع",
    why5: "التكامل بسهولة مع التقنيات الحالية",
    indLabel: "الصناعات",
    indH2_1: "حلول رقمية ",
    indH2_2: "لقطاعات متعددة",
    partLabel: "الشركاء",
    partH2_1: "شركاؤنا",
    partH2_2: "",
    visLabel: "الرؤية",
    visH2_1: "تمكين ",
    visH2_2: "الجيل القادم ",
    visH2_3: "من المؤسسات الرقمية",
    visDesc: "نهدف إلى بناء أنظمة رقمية بيئية ذكية تساعد المؤسسات على الابتكار والتعاون والنمو في عالم رقمي سريع التطور.",
    ctaLabel: "اتصل بنا",
    ctaH2_1: "دعونا نبتكر ",
    ctaH2_2: "المستقبل ",
    ctaH2_3: "معاً",
    ctaDesc: "تواصل مع فريق إم تيكنولوجي لاكتشاف كيف يمكن لمنصتنا مساعدة مؤسستك على الأتمتة والتأمين والتوسع بثقة.",
    ctaBtn: "اتصل بنا",
    stats: { uptime: "التوافر", latency: "زمن الاستجابة", arch: "البنية", zeroTrust: "انعدام الثقة", mon: "المراقبة" },
    cards: {
      autoTag: "الأتمتة", autoTitle: "أتمتة العمليات الذكية", autoDesc: "تحويل العمليات التقليدية إلى سير عمل ذكي يعمل بشكل أسرع وأكثر كفاءة.",
      blockTag: "البلوكتشين", blockTitle: "البنية التحتية لتقنية البلوكتشين", blockDesc: "تسجيل وتتبع الأصول والمعاملات بأمان في بيئة رقمية شفافة.",
      intelTag: "الذكاء", intelTitle: "الذكاء الاصطناعي المتقدم", intelDesc: "تحليل البيانات واستخراج رؤى تدعم اتخاذ قرارات أسرع وأكثر دقة.",
      secTag: "الأمان", secTitle: "الأمن الرقمي المتقدم", secDesc: "بنية حماية تعتمد على مبادئ انعدام الثقة لضمان التحقق من كل مستخدم وتفاعل.",
    },
    industries:[
      "اللوجستيات وسلاسل الإمداد", "القطاع الحكومي", "الخدمات المالية",
      "الرعاية الصحية", "الطاقة والمرافق", "الشركات الكبرى"
    ]
  }
};

/* ─── Scroll visibility hook ─── */
function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  },[]);
  return { ref, visible };
}

/* ─── Count-up hook ─── */
function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

/* ─── Mobile animation styles ─── */
const mobileStyles = `
  .scroll-to-top, [aria-label="Scroll to top"] { display: none !important; }

  @keyframes mFadeUp { from { opacity:0; transform:translateY(22px); filter:blur(4px); } to { opacity:1; transform:translateY(0); filter:blur(0); } }
  @keyframes mScaleUp { from { opacity:0; transform:scale(0.93) translateY(18px); filter:blur(4px); } to { opacity:1; transform:scale(1) translateY(0); filter:blur(0); } }
  @keyframes mDemoGrad { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
  @keyframes mShimmer { 0%{transform:translateX(-150%) skewX(-20deg);} 25%,100%{transform:translateX(250%) skewX(-20deg);} }
  @keyframes mMarquee { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
  @keyframes mIndPop { from { opacity:0; transform:translateY(24px) scale(0.94); filter:blur(4px); } to { opacity:1; transform:translateY(0) scale(1); filter:blur(0); } }
  @keyframes mCircFloat { 0%,100%{ transform:scale(1) translateY(0); } 50% { transform:scale(1.04) translateY(-10px); } }

  .m-fu { opacity:0; }
  .m-fu.go { animation: mFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
  .m-su { opacity:0; }
  .m-su.go { animation: mScaleUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }

  .m-btn-grad { background: linear-gradient(-45deg,#3562e9,#6b8fff,#86a3f9,#3562e9); background-size: 300% 300%; animation: mDemoGrad 3s ease infinite; box-shadow: 0 0 18px 4px rgba(53,98,233,0.5); overflow: hidden; position: relative; transition: box-shadow 0.3s ease, transform 0.2s ease; }
  .m-btn-shimmer { position:absolute; inset:0; pointer-events:none; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent); animation: mShimmer 3s ease infinite; }
  .m-marquee-track { display:flex; align-items:center; gap:40px; animation: mMarquee 16s linear infinite; width:max-content; }

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
          [dir="rtl"] .wa-fab {
            right: auto;
            left: 24px;
          }
        }
`;

/* ─── Shared glass card ─── */
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 rounded-[16px] pointer-events-none" style={{ backgroundImage: 'linear-gradient(157deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 50%)' }} />
      <div className="absolute -translate-x-1/2 left-1/2 bg-[rgba(53,98,233,0.08)] blur-[50px] rounded-full pointer-events-none" style={{ width: 260, height: 130, top: -65 }} />
      {children}
    </div>
  );
}

function SLabel({ text }: { text: string }) {
  return <p className="font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-3 text-center">{text}</p>;
}

function SHeading({ children, delay = 0, visible = true }: { children: React.ReactNode; delay?: number; visible?: boolean }) {
  return (
    <h2 className={`m-fu${visible ? ' go' : ''} font-bold text-[#fafafa] tracking-[-0.8px] leading-[1.2] text-center`} style={{ fontSize: 'clamp(24px,7vw,34px)', opacity: 0, animationDelay: `${delay}ms` }}>
      {children}
    </h2>
  );
}

function GText({ children }: { children: React.ReactNode }) {
  return <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(146deg,#3562e9 0%,#86a3f9 100%)' }}>{children}</span>;
}

function IndPill({ label, icon, visible, delay, isAr }: { label: string; icon: React.ReactNode; visible: boolean; delay: number; isAr: boolean }) {
  return (
    <div className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px] flex items-center overflow-hidden" style={{ height: 68, opacity: 0, ...(visible ? { animation: `mIndPop 0.7s cubic-bezier(0.34,1.3,0.64,1) ${delay}ms forwards` } : {}) }}>
      <div className="absolute inset-0 rounded-[14px]" style={{ backgroundImage: 'linear-gradient(162deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 50%)' }} />
      <div className="relative bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[10px] size-[38px] flex items-center justify-center shrink-0" style={{ margin: isAr ? '0 16px 0 0' : '0 0 0 16px' }}>{icon}</div>
      <p className="relative font-semibold text-[#fafafa] text-[13px] leading-[18px]" style={{ margin: isAr ? '0 12px 0 0' : '0 0 0 12px' }}>{label}</p>
    </div>
  );
}

function PlatformAccordion({ visible, t }: { visible: boolean; t: any }) {
  const [active, setActive] = useState(0);
  const cards =[
    { label: t.cards.autoTag, title: t.cards.autoTitle, desc: t.cards.autoDesc, img: imgIntelligentProcessAutomation },
    { label: t.cards.blockTag, title: t.cards.blockTitle, desc: t.cards.blockDesc, img: imgEnterpriseBlockchainInfrastructure },
    { label: t.cards.intelTag, title: t.cards.intelTitle, desc: t.cards.intelDesc, img: imgAdvancedArtificialIntelligence },
    { label: t.cards.secTag, title: t.cards.secTitle, desc: t.cards.secDesc, img: imgAdvancedDigitalSecurity },
  ];
  return (
    <div className={`m-fu${visible ? ' go' : ''} flex flex-col gap-3`} style={{ opacity: 0, animationDelay: '150ms' }}>
      {cards.map((card, i) => {
        const isActive = active === i;
        return (
          <div key={i} className="relative rounded-[14px] border overflow-hidden cursor-pointer" style={{ borderColor: isActive ? 'rgba(53,98,233,0.45)' : 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', boxShadow: isActive ? '0 8px 32px -8px rgba(53,98,233,0.35)' : 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }} onClick={() => setActive(i)}>
            <div className="relative w-full overflow-hidden" style={{ height: isActive ? 150 : 68, transition: 'height 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
              <img src={card.img} alt="" className="w-full h-full object-cover" style={{ opacity: isActive ? 0.7 : 0.4, transition: 'opacity 0.3s ease' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,11,15,0.92) 0%, rgba(11,11,15,0.15) 100%)' }} />
              {!isActive && (
                <div className="absolute inset-x-0 bottom-0 px-4 pb-3 flex items-center gap-2">
                  <span className="font-semibold text-[#3562e9] text-[9px] tracking-[1px] uppercase shrink-0">{card.label}</span>
                  <span className="font-semibold text-[#fafafa] text-[13px] truncate">{card.title}</span>
                </div>
              )}
            </div>
            <div style={{ overflow: 'hidden', maxHeight: isActive ? 160 : 0, transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
              <div className="px-4 pb-4 pt-3">
                <p className="font-semibold text-[#3562e9] text-[9px] tracking-[1px] uppercase mb-1">{card.label}</p>
                <p className="font-bold text-[#fafafa] text-[15px] tracking-[-0.3px] leading-[1.3] mb-2">{card.title}</p>
                <p className="text-[#73798c] text-[12px] leading-[1.65]">{card.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StatCards({ visible, t }: { visible: boolean; t: any }) {
  const whole = useCountUp(99, 1400, visible);
  const [dec, setDec] = useState(0);
  useEffect(() => { if (visible) { const timer = setTimeout(() => setDec(99), 1600); return () => clearTimeout(timer); } }, [visible]);
  const latency = useCountUp(10, 1200, visible);
  const stats =[
    { v: `${whole}.${dec}%`, l: t.stats.uptime },
    { v: `<${latency}ms`, l: t.stats.latency },
    { v: t.stats.zeroTrust, l: t.stats.arch },
    { v: '24/7', l: t.stats.mon },
  ];
  return (
    <div className={`m-fu${visible ? ' go' : ''} grid grid-cols-2 gap-3`} style={{ opacity: 0, animationDelay: '350ms' }}>
      {stats.map((s, i) => (
        <div key={i} className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[12px] py-4 text-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: 'linear-gradient(90deg,transparent,rgba(134,163,249,0.3),transparent)' }} />
          <p className="font-bold text-[17px] tracking-[-0.5px] bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#3562e9 0%,#86a3f9 100%)' }}>{s.v}</p>
          <p className="font-semibold text-[#73798c] text-[9px] tracking-[1px] uppercase mt-1">{s.l}</p>
        </div>
      ))}
    </div>
  );
}

const IndIcon1 = () => <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p9300c80} stroke="url(#mi1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d="M14.1667 15H15M10 15H10.8333M5.83333 15H6.66667" stroke="url(#mi1b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><defs><linearGradient id="mi1" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="1.7" y2="18.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi1b" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="15" y2="16"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
const IndIcon2 = () => <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M2.5 18.3333H17.5M5 15V9.16667M8.33333 15V9.16667M11.6667 15V9.16667M15 15V9.16667" stroke="url(#mi2a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d={svgPaths.p2524ba40} stroke="url(#mi2b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><defs><linearGradient id="mi2a" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="1.7" y2="18.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi2b" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="1.7" y2="5.8"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
const IndIcon3 = () => <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p39783000} stroke="url(#mi3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d={svgPaths.p25499600} stroke="url(#mi3b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><defs><linearGradient id="mi3" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="5" y2="15"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi3b" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="8.3" y2="11.7"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
const IndIcon4 = () => <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p2f84f400} stroke="url(#mi4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d={svgPaths.paebea00} stroke="url(#mi4b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><defs><linearGradient id="mi4" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="2.5" y2="17.5"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi4b" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="7" y2="13"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
const IndIcon5 = () => <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p15015780} stroke="url(#mi5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d={svgPaths.p20d10600} stroke="url(#mi5b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><defs><linearGradient id="mi5" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="1.7" y2="18.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi5b" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="6.7" y2="13.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;
const IndIcon6 = () => <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p37143280} stroke="url(#mi6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d={svgPaths.p1d7f0000} stroke="url(#mi6b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d={svgPaths.p2b722f80} stroke="url(#mi6c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><path d="M8.33333 5H11.6667M8.33333 8.33333H11.6667M8.33333 11.6667H11.6667M8.33333 15H11.6667" stroke="url(#mi6d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"/><defs><linearGradient id="mi6" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="1.7" y2="18.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi6b" gradientUnits="userSpaceOnUse" x1="3.3" x2="3.3" y1="10" y2="18.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi6c" gradientUnits="userSpaceOnUse" x1="16.7" x2="16.7" y1="7.5" y2="18.3"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient><linearGradient id="mi6d" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="5" y2="16"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient></defs></svg>;

export default function HomeMobile({ onRequestDemo }: { onRequestDemo?: () => void } = {}) {
  const navigate = useNavigate();
  const [heroGo, setHeroGo] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>(() => (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
  const t = tMobile[lang];
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleGlobalLangChange = () => setLang((localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  },[]);

  useEffect(() => { const timer = setTimeout(() => setHeroGo(true), 80); return () => clearTimeout(timer); },[]);

  const logos =[imgImage2, imgImage71, imgImage3, imgImage4];
  const { ref: aboutRef, visible: aboutV } = useVisible();
  const { ref: platformRef, visible: platformV } = useVisible();
  const { ref: solRef, visible: solV } = useVisible();
  const { ref: whyRef, visible: whyV } = useVisible();
  const { ref: indRef, visible: indV } = useVisible();
  const { ref: partnersRef, visible: partnersV } = useVisible();
  const { ref: visionRef, visible: visionV } = useVisible();
  const { ref: ctaRef, visible: ctaV } = useVisible();

  const [typed, setTyped] = useState('');
  useEffect(() => {
    if (!visionV) return;
    setTyped('');
    let i = 0;
    const iv = setInterval(() => { i++; setTyped(t.visDesc.slice(0, i)); if (i >= t.visDesc.length) clearInterval(iv); }, 18);
    return () => clearInterval(iv);
  },[visionV, t.visDesc]);

  return (
    <div className="relative w-full overflow-x-hidden" style={{ background: 'rgb(11,11,15)' }} dir={isAr ? 'rtl' : 'ltr'}>
      <style>{mobileStyles}</style>
      <FunctionalHeader onRequestDemo={onRequestDemo || (() => {})} />

      {/* ════ 1. HERO ════ */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-5" style={{ minHeight: '100svh', paddingTop: '88px', paddingBottom: '52px' }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none">
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(53,98,233,0.13), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgb(11,11,15))' }} />
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgb(11,11,15), transparent)' }} />

        <div className={`m-fu${heroGo ? ' go' : ''} flex flex-row items-center justify-center gap-3 mb-5`} style={{ opacity: 0 }}>
          <img src={imgImage5} alt="Vision 2030" className="h-[32px] w-auto opacity-80" />
          <div className="inline-flex items-center gap-2 bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1.5">
            <div className="size-[6px] rounded-full bg-gradient-to-b from-[#3562e9] to-[#86a3f9]" style={{ boxShadow: '0 0 8px 3px rgba(53,98,233,0.6)' }} />
            <span className="text-[#73798c] text-[11px] font-medium">{t.badge}</span>
          </div>
        </div>

        <h1 className={`m-fu${heroGo ? ' go' : ''} font-bold text-[#fafafa] tracking-[-1.4px] leading-[1.12] mb-4`} style={{ fontSize: 'clamp(32px,9vw,50px)', opacity: 0, animationDelay: '100ms' }}>
          {t.h1_1} <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(132deg,#3562e9 0%,#86a3f9 100%)' }}>{t.h1_2}</span> <br />{t.h1_3}
        </h1>

        <p className={`m-fu${heroGo ? ' go' : ''} text-[#73798c] text-[14px] leading-[1.7] max-w-[300px] mb-7`} style={{ opacity: 0, animationDelay: '200ms' }}>
          {t.sub}
        </p>

        <div className={`m-fu${heroGo ? ' go' : ''} flex gap-3 mb-8 flex-wrap justify-center`} style={{ opacity: 0, animationDelay: '280ms' }}>
          <button className="m-btn-grad h-[42px] px-6 rounded-[10px] cursor-pointer" onClick={() => navigate('/contact')}>
            <div className="m-btn-shimmer" />
            <span className="relative z-10 font-medium text-[14px] text-white tracking-[0.3px]">{t.btn1} {isAr ? '←' : '→'}</span>
          </button>
          <button className="h-[42px] px-5 rounded-[10px] cursor-pointer font-medium text-[14px] border-[0.5px] border-[rgba(255,255,255,0.15)]" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} onClick={() => navigate('/platform')}>
            <span style={{ background: 'linear-gradient(120deg,#3562e9,#86a3f9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.btn2}</span>
          </button>
        </div>

        <div className="w-full max-w-[360px]"><StatCards visible={heroGo} t={t} /></div>
      </section>

      {/* ════ 2. ABOUT ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={aboutRef} className="px-5 pb-24 pt-8">
        <GlassCard>
          <div className="px-5 py-8 text-center">
            <SLabel text={t.aboutLabel} />
            <SHeading visible={aboutV} delay={100}>
              {t.aboutH2_1} <GText>{t.aboutH2_2}</GText> {t.aboutH2_3}
            </SHeading>
            <p className={`m-fu${aboutV ? ' go' : ''} text-[#73798c] text-[13px] leading-[1.75]`} style={{ opacity: 0, animationDelay: '200ms' }}>{t.aboutDesc}</p>
          </div>
        </GlassCard>
      </section>

      {/* ════ 3. PLATFORM ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={platformRef} className="px-5 pb-24 pt-8">
        <div className="text-center mb-5">
          <SLabel text={t.platformLabel} />
          <SHeading visible={platformV}>{t.platformH2_1} <GText>{t.platformH2_2}</GText> {t.platformH2_3}</SHeading>
          <p className={`m-fu${platformV ? ' go' : ''} text-[#73798c] text-[13px] leading-[1.6] mt-2`} style={{ opacity: 0, animationDelay: '100ms' }}>{t.platformSub}</p>
        </div>
        <PlatformAccordion visible={platformV} t={t} />
      </section>

      {/* ════ 4. SOLUTIONS ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={solRef} className="px-5 pb-24 pt-8">
        <div className="text-center mb-5">
          <SLabel text={t.solLabel} />
          <SHeading visible={solV}>{t.solH2_1} <GText>{t.solH2_2}</GText> {t.solH2_3}</SHeading>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { tag: t.cards.autoTag, title: t.cards.autoTitle, desc: t.cards.autoDesc, img: imgIntelligentProcessAutomation },
            { tag: t.cards.blockTag, title: t.cards.blockTitle, desc: t.cards.blockDesc, img: imgEnterpriseBlockchainInfrastructure },
            { tag: t.cards.secTag, title: t.cards.secTitle, desc: t.cards.secDesc, img: imgAdvancedDigitalSecurity },
          ].map((c, i) => (
            <div key={i} className={`m-su${solV ? ' go' : ''} relative rounded-[16px] border border-[rgba(255,255,255,0.08)] overflow-hidden`} style={{ opacity: 0, animationDelay: `${i * 90}ms`, background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}>
              <div className="relative w-full overflow-hidden" style={{ height: 130 }}>
                <img src={c.img} alt="" className="w-full h-full object-cover opacity-55" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,11,15,0.95) 0%, rgba(11,11,15,0.1) 100%)' }} />
              </div>
              <div className="px-4 pb-4 pt-2">
                <p className="font-semibold text-[#3562e9] text-[9px] tracking-[1px] uppercase mb-1">{c.tag}</p>
                <p className="font-bold text-[#fafafa] text-[15px] tracking-[-0.3px] leading-[1.3] mb-1">{c.title}</p>
                <p className="text-[#73798c] text-[12px] leading-[1.65]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ 5. WHY MTECHNOLOGY ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={whyRef} className="px-5 pb-24 pt-8">
        <div className="relative rounded-[20px] border border-[rgba(255,255,255,0.08)] overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)' }}>
          <img src={imgSection1} alt="" className="absolute inset-0 w-full h-full object-contain opacity-18 pointer-events-none" style={{ animation: 'mCircFloat 10s ease-in-out infinite' }} />
          <div className="relative z-10 px-5 py-8">
            <SLabel text={t.whyLabel} />
            <SHeading visible={whyV}>{t.whyH2_1} <GText>{t.whyH2_2}</GText> {t.whyH2_3}</SHeading>
            <p className={`m-fu${whyV ? ' go' : ''} text-[#73798c] text-[13px] leading-[1.6] mt-2 mb-5 text-center`} style={{ opacity: 0, animationDelay: '100ms' }}>{t.whySub}</p>
            <div className="flex flex-col gap-3">
              {[t.why1, t.why2, t.why3, t.why4, t.why5].map((item, i) => (
                <div key={i} className={`m-fu${whyV ? ' go' : ''} flex items-center gap-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[12px] px-4 py-3`} style={{ opacity: 0, animationDelay: `${160 + i * 75}ms` }}>
                  <div className="size-[7px] rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#3562e9,#86a3f9)', boxShadow: '0 0 6px 2px rgba(53,98,233,0.5)' }} />
                  <p className="font-medium text-[#fafafa] text-[13px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ 6. INDUSTRIES ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={indRef} className="px-5 pb-24 pt-8">
        <div className="text-center mb-5">
          <SLabel text={t.indLabel} />
          <SHeading visible={indV}>{t.indH2_1} <GText>{t.indH2_2}</GText></SHeading>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: t.industries[0], icon: <IndIcon1 /> },
            { label: t.industries[1], icon: <IndIcon2 /> },
            { label: t.industries[2], icon: <IndIcon3 /> },
            { label: t.industries[3], icon: <IndIcon4 /> },
            { label: t.industries[4], icon: <IndIcon5 /> },
            { label: t.industries[5], icon: <IndIcon6 /> },
          ].map((item, i) => (
            <IndPill key={item.label} label={item.label} icon={item.icon} visible={indV} delay={180 + i * 85} isAr={isAr} />
          ))}
        </div>
      </section>

      {/* ════ 7. PARTNERS ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={partnersRef} className="px-5 pb-24 pt-8">
        <div className="text-center mb-5">
          <SLabel text={t.partLabel} />
          <SHeading visible={partnersV}>{t.partH2_1} <GText>{t.partH2_2}</GText></SHeading>
        </div>
        <div className={`m-fu${partnersV ? ' go' : ''} relative rounded-[16px] border border-[rgba(255,255,255,0.08)] overflow-hidden py-5`} style={{ opacity: 0, animationDelay: '150ms', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)' }}>
          <div className="absolute inset-y-0 left-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgb(11,11,15), transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgb(11,11,15), transparent)' }} />
          <div className="overflow-hidden">
            <div className="m-marquee-track">
              {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
                <div key={i} style={{ flexShrink: 0, height: 38, display: 'flex', alignItems: 'center' }}>
                  <img src={src} alt="" style={{ height: '100%', width: 'auto', maxWidth: 110, objectFit: 'contain', opacity: 0.85 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ 8. VISION ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={visionRef} className="px-5 pb-24 pt-8">
        <GlassCard>
          <div className="px-5 py-8 text-center">
            <SLabel text={t.visLabel} />
            <SHeading visible={visionV} delay={100}>{t.visH2_1} <GText>{t.visH2_2}</GText> {t.visH2_3}</SHeading>
            <p className="text-[#73798c] text-[13px] leading-[1.75] min-h-[60px]">
              {typed}<span style={{ opacity: typed.length < t.visDesc.length ? 1 : 0, borderRight: '2px solid #86a3f9', marginLeft: '1px' }}>​</span>
            </p>
          </div>
        </GlassCard>
      </section>

      {/* ════ 9. CTA ════ */}
      <div className="w-full h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.25), transparent)' }} />
      <section ref={ctaRef} className="relative px-5 pt-8 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(53,98,233,0.1), transparent)' }} />
        <SLabel text={t.ctaLabel} />
        <SHeading visible={ctaV}>{t.ctaH2_1} <GText>{t.ctaH2_2}</GText> {t.ctaH2_3}</SHeading>
        <p className={`m-fu${ctaV ? ' go' : ''} text-[#73798c] text-[13px] leading-[1.7] mb-7 max-w-[300px] mx-auto`} style={{ opacity: 0, animationDelay: '100ms' }}>{t.ctaDesc}</p>
        <div className={`m-fu${ctaV ? ' go' : ''} flex justify-center`} style={{ opacity: 0, animationDelay: '200ms' }}>
          <button className="m-btn-grad h-[44px] px-8 rounded-[12px] cursor-pointer" onClick={() => navigate('/contact')}>
            <div className="m-btn-shimmer" />
            <span className="relative z-10 font-medium text-[14px] text-white tracking-[0.3px]">{t.ctaBtn} {isAr ? '←' : '→'}</span>
          </button>
        </div>
      </section>    
    </div>
  );
}