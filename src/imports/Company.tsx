import { useEffect, useRef, useState } from 'react';
import svgPaths from "./svg-3gpd10rlbf";
import imgSection from "../assets/2fcbbc9e8c3c91c6feace3065593c8befacc69be.png";

import imgFahad from "../assets/fahad-alenezi.jpeg";
import imgHector from "../assets/hector-calderon.jpeg";
import imgHami from "../assets/hami-asan.jpeg";
import imgAseel from "../assets/aseel-asadah.jpeg";
import imgAtif from "../assets/atif-ali.jpeg";
import imgLailah from "../assets/laila-bukhamseen.jpeg";

/* ─── Translations Dictionary ─── */
const translations = {
  en: {
    company: "Company",
    heroH1Part1: "Technology That ",
    heroH1Part2: "Redefines",
    heroH1Part3: " Business",
    heroDesc1: "MTechnology is a technology company focused on building",
    heroDesc2: "advanced digital infrastructure that enables organizations to",
    heroDesc3: "operate with greater intelligence and efficiency.",
    heroDescMobile: "MTechnology is a technology company focused on building advanced digital infrastructure that enables organizations to operate with greater intelligence and efficiency.",

    leadership: "Leadership",
    leadWord1: "Meet Our",
    leadWord2: "Leadership",
    leadWord3: "Team",
    leadDesc: "Experienced leaders driving innovation in digital infrastructure.",

    vision: "Vision",
    visionH1Part1: "Empowering the ",
    visionH1Part2: "Next Generation",
    visionDesc1: "We aim to build intelligent digital ecosystems that help organizations innovate,",
    visionDesc2: "collaborate, and grow in a rapidly evolving digital world.",
    visionDescMobile: "We aim to build intelligent digital ecosystems that help organizations innovate, collaborate, and grow in a rapidly evolving digital world.",

    industries: "Industries",
    indH1Part1: "Digital Solutions for ",
    indH1Part2: "Multiple ",
    indH1Part3: "Industries",

    indLogistics: "Logistics & Supply Chain",
    indGov: "Government Sector",
    indFin: "Financial Services",
    indHealth: "Healthcare",
    indEnergy: "Energy & Utilities",
    indEnterprise: "Enterprise Corporations",

    teamFahadName: "Fahad Alenezi",
    teamFahadTitle: "Chief Executive Officer",
    teamHectorName: "Hector Calderon",
    teamHectorTitle: "Chief Technology Officer",
    teamHamiName: "Hami Asan",
    teamHamiTitle: "Chief Operating Officer",
    teamAseelName: "Aseel Alsadah",
    teamAseelTitle: "Business Development Specialist",
    teamAtifName: "Dr. Atif Ali",
    teamAtifTitle: "AI Scientist",
    teamLailaName: "Laila Bukhamseen",
    teamLailaTitle: "Marketing Specialist",
  },
  ar: {
    company: "الشركة",
    heroH1Part1: "تكنولوجيا ",
    heroH1Part2: "تعيد تعريف",
    heroH1Part3: " الأعمال",
    heroDesc1: "إم تيك هي شركة تكنولوجيا تركز على بناء",
    heroDesc2: "بنية تحتية رقمية متقدمة تمكن المؤسسات من",
    heroDesc3: "العمل بذكاء وكفاءة أكبر.",
    heroDescMobile: "إم تيك هي شركة تكنولوجيا تركز على بناء بنية تحتية رقمية متقدمة تمكن المؤسسات من العمل بذكاء وكفاءة أكبر.",

    leadership: "القيادة",
    leadWord1: "تعرف على",
    leadWord2: "فريق",
    leadWord3: "القيادة",
    leadDesc: "قادة من ذوي الخبرة يقودون الابتكار في البنية التحتية الرقمية.",

    vision: "الرؤية",
    visionH1Part1: "تمكين ",
    visionH1Part2: "الجيل القادم",
    visionDesc1: "نهدف إلى بناء أنظمة بيئية رقمية ذكية تساعد المؤسسات على الابتكار",
    visionDesc2: "والتعاون والنمو في عالم رقمي سريع التطور.",
    visionDescMobile: "نهدف إلى بناء أنظمة بيئية رقمية ذكية تساعد المؤسسات على الابتكار والتعاون والنمو في عالم رقمي سريع التطور.",

    industries: "الصناعات",
    indH1Part1: "حلول رقمية لـ ",
    indH1Part2: "مختلف ",
    indH1Part3: "الصناعات",

    indLogistics: "اللوجستيات وسلاسل الإمداد",
    indGov: "القطاع الحكومي",
    indFin: "الخدمات المالية",
    indHealth: "الرعاية الصحية",
    indEnergy: "الطاقة والمرافق",
    indEnterprise: "شركات المؤسسات",

    teamFahadName: "فهد العنزي",
    teamFahadTitle: "الرئيس التنفيذي",
    teamHectorName: "هيكتور كالديرون",
    teamHectorTitle: "الرئيس التنفيذي للتكنولوجيا",
    teamHamiName: "حامي آسان",
    teamHamiTitle: "الرئيس التنفيذي للعمليات",
    teamAseelName: "أسيل السادة",
    teamAseelTitle: "أخصائي تطوير أعمال",
    teamAtifName: "د. عاطف علي",
    teamAtifTitle: "عالم ذكاء اصطناعي",
    teamLailaName: "ليلى بوخمسين",
    teamLailaTitle: "أخصائي تسويق",
  }
};

/* ─── hook: is mobile? ─── */
function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 1024);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  },[]);
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
        
        /* 🔥 SHIFT TO LEFT ON MOBILE FOR ARABIC (RTL) 🔥 */
        @media (max-width: 768px) {[dir="rtl"] .wa-fab {
            right: auto;
            left: 24px;
          }
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

/* ─── shared animation keyframes ─── */
const sharedStyles = `
  @keyframes bgBreathe {
    0%, 100% { transform: scale(1);    filter: brightness(0.85); }
    50%       { transform: scale(1.06); filter: brightness(1.05); }
  }
  @keyframes blurFadeUp {
    from { opacity: 0; transform: translateY(28px); filter: blur(8px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
  }
  @keyframes gradientShimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes labelTrackIn {
    from { opacity: 0; letter-spacing: 10px; filter: blur(3px); }
    to   { opacity: 1; letter-spacing: 1.2px; filter: blur(0); }
  }
  @keyframes wordZoomUp {
    from { opacity: 0; transform: translateY(22px) scale(0.88); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    filter: blur(0);   }
  }
  @keyframes descFadeIn {
    from { opacity: 0; transform: translateX(-8px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes glassReveal {
    from { opacity: 0; transform: translateY(36px) scale(0.97); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  @keyframes visionCardReveal {
    from { opacity: 0; transform: translateY(32px) scale(0.98); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  @keyframes indLabelIn {
    from { opacity: 0; letter-spacing: 8px; filter: blur(3px); }
    to   { opacity: 1; letter-spacing: 1.2px; filter: blur(0); }
  }
  @keyframes indHeadingIn {
    from { opacity: 0; transform: translateY(32px) skewY(2deg); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0) skewY(0deg); filter: blur(0); }
  }
  @keyframes indCardPop {
    from { opacity: 0; transform: translateY(28px) scale(0.94); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }

  .hero-bg { animation: bgBreathe 7s ease-in-out infinite !important; transform-origin: center center !important; will-change: transform, filter; }
  .hero-label   { animation: blurFadeUp 1.2s cubic-bezier(0.22,1,0.36,1) 300ms both; }
  .hero-h1      { animation: blurFadeUp 1.4s cubic-bezier(0.22,1,0.36,1) 500ms both; }
  .hero-shimmer { background-size: 200% auto !important; animation: blurFadeUp 1.4s cubic-bezier(0.22,1,0.36,1) 500ms both, gradientShimmer 4s linear 2s infinite !important; }
  .hero-desc    { animation: blurFadeUp 1.3s cubic-bezier(0.22,1,0.36,1) 800ms both; }

  .leadership-label { opacity: 0; }
  .leadership-label.visible { animation: labelTrackIn 1.2s cubic-bezier(0.22,1,0.36,1) 0ms forwards; }
  .leadership-word { opacity: 0; display: inline-block; }
  .leadership-word.visible { animation: wordZoomUp 0.9s cubic-bezier(0.34,1.3,0.64,1) forwards; }
  .leadership-desc { opacity: 0; }
  .leadership-desc.visible { animation: descFadeIn 1.2s cubic-bezier(0.22,1,0.36,1) forwards; }

  .team-card { opacity: 0; transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease !important; }
  .team-card.visible { animation: glassReveal 1.2s cubic-bezier(0.22,1,0.36,1) forwards; }
  .team-card-0.visible { animation-delay: 150ms; }
  .team-card-1.visible { animation-delay: 350ms; }
  .team-card-2.visible { animation-delay: 550ms; }
  .team-card-3.visible { animation-delay: 250ms; }
  .team-card-4.visible { animation-delay: 450ms; }
  .team-card-5.visible { animation-delay: 650ms; }
  .team-card.visible:hover { transform: translateY(-8px) scale(1.015) !important; box-shadow: 0 20px 60px -12px rgba(53,98,233,0.4) !important; border-color: rgba(53,98,233,0.4) !important; }
  .team-card:hover .team-photo img { transform: scale(1.05) !important; }
  .team-photo img { transition: transform 0.6s ease !important; }

  .vision-card    { opacity: 0; }
  .vision-label2  { opacity: 0; }
  .vision-heading2 { opacity: 0; }
  .vision-desc2   { opacity: 0; }
  .vision-card.vis      { animation: visionCardReveal 1.2s cubic-bezier(0.22,1,0.36,1) 0ms forwards; }
  .vision-label2.vis    { animation: labelTrackIn 1s cubic-bezier(0.22,1,0.36,1) 300ms forwards; }
  .vision-heading2.vis  { animation: blurFadeUp 1.2s cubic-bezier(0.22,1,0.36,1) 480ms forwards; }
  .vision-desc2.vis     { animation: descFadeIn 1s cubic-bezier(0.22,1,0.36,1) 780ms forwards; }

  .ind-label   { opacity: 0; }
  .ind-heading { opacity: 0; }
  .ind-label.go   { animation: indLabelIn   0.9s cubic-bezier(0.22,1,0.36,1) 0ms   forwards; }
  .ind-heading.go { animation: indHeadingIn 1.1s cubic-bezier(0.22,1,0.36,1) 150ms forwards; }
`;

interface TeamMember {
  name: string;
  title: string;
  img: string;
  cardClass: string;
  visible?: boolean;
}

/* ─── Shared Components ─── */
function TeamCard({ name, title, img, cardClass, visible }: TeamMember) {
  return (
    <div
      className={`team-card ${cardClass}${visible ? ' visible' : ''} relative flex flex-col bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid rounded-[20px] overflow-hidden`}
      style={{ width: '340px', flexShrink: 0 }}
    >
      <div className="team-photo relative w-full overflow-hidden" style={{ height: '380px' }}>
        <img alt={name} src={img} className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(13,13,18,0.95), transparent)' }} />
        <div className="absolute bg-[rgba(53,98,233,0.08)] blur-[60px] rounded-[9999px] pointer-events-none" style={{ width: '300px', height: '300px', top: '-150px', left: '50%', transform: 'translateX(-50%)' }} />
      </div>
      <div className="relative flex flex-col px-[24px] pt-[18px] pb-[24px] overflow-hidden" style={{ background: 'rgba(11,11,15,0.98)', borderTop: '0.5px solid rgba(53,98,233,0.25)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 140% at 50% 110%, rgba(53,98,233,0.22) 0%, rgba(53,98,233,0.08) 45%, transparent 70%)' }} />
        <div className="absolute inset-x-0 top-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(134,163,249,0.55) 50%, transparent 100%)' }} />
        <p className="relative z-10 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fafafa] text-[18px] tracking-[-0.45px] leading-[26px] mb-[6px]">{name}</p>
        <p className="relative z-10 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#86a3f9] text-[11px] tracking-[1.4px] uppercase leading-[16px]">{title}</p>
      </div>
    </div>
  );
}

function IndustryCard({ label, icon, visible, delay, lang }: { label: string; icon: React.ReactNode; visible: boolean; delay: number; lang: string }) {
  return (
    <div
      className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid overflow-clip rounded-[16px] flex items-center"
      style={{
        width: 376, height: 95, flexShrink: 0,
        opacity: 0,
        ...(visible ? { animation: `indCardPop 0.75s cubic-bezier(0.34,1.3,0.64,1) ${delay}ms forwards` } : {}),
      }}
    >
      <div className="absolute bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[-1px_-1.5px_-1px_-0.5px] overflow-clip rounded-[16px]">
        <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]">
          <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
          <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" />
          <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
        </div>
      </div>
      <div className={`relative bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid rounded-[12px] size-[44px] flex items-center justify-center shrink-0 ${lang === 'ar' ? 'mr-[24px]' : 'ml-[24px]'}`}>
        <div className="size-[20px] relative">{icon}</div>
      </div>
      <p className={`relative font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fafafa] text-[14px] leading-[20px] whitespace-nowrap ${lang === 'ar' ? 'mr-[16px]' : 'ml-[16px]'}`}>{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DESKTOP SUB-COMPONENTS
───────────────────────────────────────────────────────────── */

function DesktopContainer1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[53.86px] opacity-42 rounded-[9999px] size-[3.24px] top-[860.02px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[846.65px] opacity-25 rounded-[9999px] size-[3.86px] top-[1516px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[862.46px] opacity-32 rounded-[9999px] size-[3.73px] top-[270px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[251.35px] opacity-26 rounded-[9999px] size-[3.38px] top-[785.33px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[98.39px] opacity-30 rounded-[9999px] size-[2.09px] top-[521.15px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1107.24px] opacity-21 rounded-[9999px] size-[2.54px] top-[187.79px]" />
    </div>
  );
}

function DesktopSectionIndustries({ t, lang }: { t: any, lang: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const[visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  },[]);

  const row1Icons =[
    <svg key="1" className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p9300c80} stroke="url(#ind1a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M14.1667 15H15" stroke="url(#ind1b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M10 15H10.8333" stroke="url(#ind1c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.83333 15H6.66667" stroke="url(#ind1d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="ind1a" x1="10" x2="10" y1="1.66667" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind1b" x1="14.5833" x2="14.5833" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind1c" x1="10.4167" x2="10.4167" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind1d" x1="6.25" x2="6.25" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    <svg key="2" className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d="M2.5 18.3333H17.5" stroke="url(#ind2a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5 15V9.16667" stroke="url(#ind2b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 15V9.16667" stroke="url(#ind2c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M11.6667 15V9.16667" stroke="url(#ind2d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M15 15V9.16667" stroke="url(#ind2e)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p2524ba40} stroke="url(#ind2f)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="ind2a" x1="10" x2="10" y1="18.3333" y2="19.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind2b" x1="5.5" x2="5.5" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind2c" x1="8.83333" x2="8.83333" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind2d" x1="12.1667" x2="12.1667" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind2e" x1="15.5" x2="15.5" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind2f" x1="10" x2="10" y1="1.66667" y2="5.83333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    <svg key="3" className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p39783000} stroke="url(#ind3a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p25499600} stroke="url(#ind3b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5 10H5.00833M15 10H15.0083" stroke="url(#ind3c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="ind3a" x1="10" x2="10" y1="5" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind3b" x1="10" x2="10" y1="8.33333" y2="11.6667"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind3c" x1="10.0042" x2="10.0042" y1="10" y2="11"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
  ];
  const row2Icons =[
    <svg key="4" className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p2f84f400} stroke="url(#ind4a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.paebea00} stroke="url(#ind4b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="ind4a" x1="10" x2="10" y1="2.5" y2="17.5"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind4b" x1="9.99583" x2="9.99583" y1="7.08333" y2="12.9167"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    <svg key="5" className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p15015780} stroke="url(#ind5a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p20d10600} stroke="url(#ind5b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="ind5a" x1="10" x2="10" y1="1.66838" y2="18.3316"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind5b" x1="10" x2="10" y1="6.66667" y2="13.3333"><stop stopColor="#3562E9" /><stop stopColor="#86A3F9" offset="1" /></linearGradient></defs></svg>,
    <svg key="6" className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p37143280} stroke="url(#ind6a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p1d7f0000} stroke="url(#ind6b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p2b722f80} stroke="url(#ind6c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 5H11.6667" stroke="url(#ind6d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 8.33333H11.6667" stroke="url(#ind6e)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 11.6667H11.6667" stroke="url(#ind6f)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 15H11.6667" stroke="url(#ind6g)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="ind6a" x1="10" x2="10" y1="1.66667" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind6b" x1="3.33333" x2="3.33333" y1="10" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind6c" x1="16.6667" x2="16.6667" y1="7.5" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind6d" x1="10" x2="10" y1="5" y2="6"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind6e" x1="10" x2="10" y1="8.33333" y2="9.33333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind6f" x1="10" x2="10" y1="11.6667" y2="12.6667"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ind6g" x1="10" x2="10" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
  ];
  const row1Labels =[t.indLogistics, t.indGov, t.indFin];
  const row2Labels =[t.indHealth, t.indEnergy, t.indEnterprise];

  return (
    <div ref={ref} className="absolute h-[717px] left-0 right-0 top-[3649.83px]">
      <div className="absolute blur-[50px] inset-[calc(36.92%-0.63px)_4.39%_calc(18.7%+0.19px)_74.35%] opacity-44 rounded-[9999px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 318.23 318.23\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.502 0 0 22.502 159.12 159.12)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className={`ind-label${visible ? ' go' : ''} -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[168px] tracking-[1.2px] uppercase w-[84.129px]`}>
        <p className="leading-[16px]">{t.industries}</p>
      </div>
      <div className={`ind-heading${visible ? ' go' : ''} -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+1.26px)] not-italic text-[#fafafa] text-[48px] text-center top-[240px] tracking-[-1.2px] w-[628.81px]`}>
        <p className="mb-0"><span className="leading-[48px]">{t.indH1Part1}</span><span className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.93deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>{t.indH1Part2}</span></p>
        <p className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.93deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>{t.indH1Part3}</p>
      </div>
      <div className="absolute" style={{ top: 352, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, justifyContent: 'center', padding: '0 48px' }}>
          {row1Labels.map((label, i) => <IndustryCard key={label} label={label} icon={row1Icons[i]} visible={visible} delay={400 + i * 130} lang={lang} />)}
        </div>
      </div>
      <div className="absolute" style={{ top: 462, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, justifyContent: 'center', padding: '0 48px' }}>
          {row2Labels.map((label, i) => <IndustryCard key={label} label={label} icon={row2Icons[i]} visible={visible} delay={530 + (2 - i) * 130} lang={lang} />)}
        </div>
      </div>
    </div>
  );
}

function DesktopSectionVision({ t }: { t: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute h-[611px] left-0 right-0 top-[3164px]">
      <div className={`vision-card${visible ? ' vis' : ''} absolute backdrop-blur-[12px] border border-solid overflow-clip rounded-[24px]`} style={{ left: '300.5px', right: '300.5px', top: '160px', height: '290px', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.12)] blur-[60px] left-1/2 rounded-[9999px] size-[320px] top-[-160px]" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(53,98,233,0.06) 0%, rgba(53,98,233,0.02) 40%, transparent 100%)' }} />
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(157.444deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
        <div className={`vision-label2${visible ? ' vis' : ''} -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#3562e9] text-[12px] text-center top-[72px] tracking-[1.2px] uppercase w-[49.059px]`}>
          <p className="leading-[16px]">{t.vision}</p>
        </div>
        <div className={`vision-heading2${visible ? ' vis' : ''} -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-[calc(50%+1.9px)] not-italic text-[#fafafa] text-[48px] text-center top-[120px] tracking-[-1.2px] w-[741.899px]`}>
          <p><span className="leading-[48px]">{t.visionH1Part1}</span><span className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(157.931deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>{t.visionH1Part2}</span></p>
        </div>
        <div className={`vision-desc2${visible ? ' vis' : ''} -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[28px] left-[calc(50%+0.94px)] not-italic text-[#73798c] text-[18px] text-center top-[196px] w-[664.981px]`}>
          <p className="mb-0">{t.visionDesc1}</p>
          <p>{t.visionDesc2}</p>
        </div>
      </div>
    </div>
  );
}

function DesktopSectionLeadership({ t, lang }: { t: any, lang: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const[visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  },[]);

  const row1: TeamMember[] =[
    { name: t.teamFahadName,   title: t.teamFahadTitle,         img: imgFahad,  cardClass: 'team-card-0' },
  ];
  const row2: TeamMember[] =[
    { name: t.teamHectorName, title: t.teamHectorTitle,        img: imgHector, cardClass: 'team-card-1' },
    { name: t.teamHamiName,       title: t.teamHamiTitle,         img: imgHami,   cardClass: 'team-card-2' },
  ];
  const row3: TeamMember[] =[
    { name: t.teamAtifName,  title: t.teamAtifTitle, img: imgAtif,  cardClass: 'team-card-4' },
  ];
  const row4: TeamMember[] =[
    { name: t.teamLailaName, title: t.teamLailaTitle, img: imgLailah, cardClass: 'team-card-5' },
    { name: t.teamAseelName, title: t.teamAseelTitle, img: imgAseel, cardClass: 'team-card-3' },
  ];

  const words = lang === 'ar' ?[
    { text: t.leadWord1, gradient: false },
    { text: t.leadWord2, gradient: false },
    { text: t.leadWord3, gradient: true },
  ] :[
    { text: t.leadWord1, gradient: false },
    { text: t.leadWord2, gradient: true },
    { text: t.leadWord3, gradient: false },
  ];

  return (
    <div ref={sectionRef} className="absolute left-0 right-0" style={{ top: '760px', minHeight: '2624px' }}>
      <div className="absolute blur-[50px] opacity-40 rounded-[9999px] pointer-events-none" style={{ top: '100px', left: '-5%', width: '25%', height: '420px', backgroundImage: "radial-gradient(circle, rgba(53,98,233,0.15), transparent 70%)" }} />
      <div className={`leadership-label${visible ? ' visible' : ''} absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic text-[#3562e9] text-[12px] text-center top-[60px] tracking-[1.2px] uppercase w-full`}>
        <p className="leading-[16px]">{t.leadership}</p>
      </div>
      <div className="absolute flex justify-center gap-[14px] font-['Inter:Bold',sans-serif] font-bold not-italic text-[48px] text-center top-[92px] tracking-[-1.2px] w-full" style={{ height: '56px', alignItems: 'center' }}>
        {words.map((w, i) => (
          <span key={i} className={`leadership-word${visible ? ' visible' : ''}${w.gradient ? ' bg-clip-text text-[transparent]' : ' text-[#fafafa]'}`} style={{ animationDelay: visible ? `${i * 200}ms` : '0ms', lineHeight: '56px', ...(w.gradient ? { backgroundImage: "linear-gradient(161.066deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" } : {}) }}>
            {w.text}
          </span>
        ))}
      </div>
      <div className={`leadership-desc${visible ? ' visible' : ''} absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#73798c] text-[18px] text-center top-[162px] w-full`} style={{ height: '28px', animationDelay: visible ? '700ms' : '0ms' }}>
        <p className="leading-[28px]">{t.leadDesc}</p>
      </div>
      
      {/* ── Pyramid Structure Rows ── */}
      <div className="absolute flex gap-[24px] justify-center" style={{ top: '230px', left: 0, right: 0 }}>
        {row1.map((m) => <TeamCard key={m.name} {...m} visible={visible} />)}
      </div>
      <div className="absolute flex gap-[160px] justify-center" style={{ top: '762px', left: 0, right: 0 }}>
        {row2.map((m) => <TeamCard key={m.name} {...m} visible={visible} />)}
      </div>
      <div className="absolute flex gap-[24px] justify-center" style={{ top: '1294px', left: 0, right: 0 }}>
        {row3.map((m) => <TeamCard key={m.name} {...m} visible={visible} />)}
      </div>
      <div className="absolute flex gap-[160px] justify-center" style={{ top: '1826px', left: 0, right: 0 }}>
        {row4.map((m) => <TeamCard key={m.name} {...m} visible={visible} />)}
      </div>
    </div>
  );
}

function DesktopSectionHero({ t }: { t: any }) {
  return (
    <div className="absolute h-[705px] left-0 right-0 top-0">
      <img alt="" className="hero-bg absolute inset-0 max-w-none object-cover opacity-10 pointer-events-none size-full" src={imgSection} />
      <div className="absolute blur-[50px] inset-[8.63%_-5.8%_42.76%_77.48%] opacity-44 rounded-[9999px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 423.87 332.97\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(29.972 0 0 23.545 211.93 166.49)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="hero-label -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[50%] not-italic text-[#3562e9] text-[12px] text-center top-[234px] tracking-[1.2px] uppercase w-[71.029px]">
        <p className="leading-[16px]">{t.company}</p>
      </div>
      <div className="hero-h1 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[132.5px] justify-center leading-[0] left-[50%] not-italic text-[#fafafa] text-[60px] text-center top-[317.75px] tracking-[-1.5px] w-[551.112px]">
        <p className="leading-[60px] mb-0">{t.heroH1Part1}</p>
        <p><span className="hero-shimmer bg-clip-text text-[transparent]" style={{ backgroundImage: "linear-gradient(136.935deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>{t.heroH1Part2}</span><span className="leading-[60px]">{t.heroH1Part3}</span></p>
      </div>
      <div className="hero-desc -translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[28px] left-[50%] not-italic text-[#73798c] text-[18px] text-center top-[440px] w-[512.792px]">
        <p className="mb-0">{t.heroDesc1}</p>
        <p className="mb-0">{t.heroDesc2}</p>
        <p>{t.heroDesc3}</p>
      </div>
    </div>
  );
}

function DesktopCompany({ t, lang }: { t: any, lang: string }) {
  return (
    <div className="relative w-full" data-name="Company" style={{ height: "4366px", overflowX: "hidden", backgroundImage: "linear-gradient(90deg, rgb(11,11,15) 0%, rgb(11,11,15) 100%)" }}>
      <DesktopContainer1 />
      <DesktopSectionIndustries t={t} lang={lang} />
      <DesktopSectionVision t={t} />
      <DesktopSectionLeadership t={t} lang={lang} />
      <DesktopSectionHero t={t} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE SUB-COMPONENTS, HOOKS & DATA
───────────────────────────────────────────────────────────── */

function useVisible(threshold = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const[visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function MobileTeamCard({ name, title, img, cardClass, visible }: TeamMember) {
  return (
    <div className={`team-card ${cardClass}${visible ? ' visible' : ''} relative flex flex-col bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden w-full`}>
      <div className="team-photo relative w-full overflow-hidden" style={{ height: '320px' }}>
        <img alt={name} src={img} className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 h-[60px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(13,13,18,0.95), transparent)' }} />
      </div>
      <div className="relative flex flex-col px-5 pt-4 pb-5" style={{ background: 'rgba(11,11,15,0.98)', borderTop: '0.5px solid rgba(53,98,233,0.25)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 140% at 50% 110%, rgba(53,98,233,0.22) 0%, rgba(53,98,233,0.08) 45%, transparent 70%)' }} />
        <div className="absolute inset-x-0 top-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(134,163,249,0.55) 50%, transparent)' }} />
        <p className="relative z-10 font-semibold text-[#fafafa] text-[17px] tracking-[-0.4px] leading-[24px] mb-1">{name}</p>
        <p className="relative z-10 font-semibold text-[#86a3f9] text-[10px] tracking-[1.4px] uppercase leading-[16px]">{title}</p>
      </div>
    </div>
  );
}

function MobileIndustryCard({ label, icon, visible, delay, lang }: { label: string; icon: React.ReactNode; visible: boolean; delay: number; lang: string }) {
  return (
    <div
      className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px] flex items-center overflow-hidden"
      style={{ height: 76, opacity: 0, ...(visible ? { animation: `indCardPop 0.75s cubic-bezier(0.34,1.3,0.64,1) ${delay}ms forwards` } : {}) }}
    >
      <div className="absolute inset-0 rounded-[14px]" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)" }} />
      <div className={`relative bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[10px] size-[40px] flex items-center justify-center shrink-0 ${lang === 'ar' ? 'mr-4' : 'ml-4'}`}>
        <div className="size-[18px] relative">{icon}</div>
      </div>
      <p className={`relative font-semibold text-[#fafafa] text-[13px] leading-[18px] ${lang === 'ar' ? 'mr-3' : 'ml-3'}`}>{label}</p>
    </div>
  );
}

function MobileCompany({ t, lang }: { t: any, lang: string }) {
  const { ref: heroRef, visible: heroVisible } = useVisible(0.6);
  const { ref: leaderRef, visible: leaderVisible } = useVisible(0.2);
  const { ref: visionRef, visible: visionVisible } = useVisible(0.6);
  const { ref: indRef, visible: indVisible } = useVisible(0.6);

  const mobileIndustryItems =[
    {
      label: t.indLogistics,
      icon: <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p9300c80} stroke="url(#m-ind1a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M14.1667 15H15" stroke="url(#m-ind1b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M10 15H10.8333" stroke="url(#m-ind1c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.83333 15H6.66667" stroke="url(#m-ind1d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="m-ind1a" x1="10" x2="10" y1="1.66667" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind1b" x1="14.5833" x2="14.5833" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind1c" x1="10.4167" x2="10.4167" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind1d" x1="6.25" x2="6.25" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    },
    {
      label: t.indGov,
      icon: <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d="M2.5 18.3333H17.5" stroke="url(#m-ind2a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5 15V9.16667" stroke="url(#m-ind2b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 15V9.16667" stroke="url(#m-ind2c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M11.6667 15V9.16667" stroke="url(#m-ind2d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M15 15V9.16667" stroke="url(#m-ind2e)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p2524ba40} stroke="url(#m-ind2f)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="m-ind2a" x1="10" x2="10" y1="18.3333" y2="19.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind2b" x1="5.5" x2="5.5" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind2c" x1="8.83333" x2="8.83333" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind2d" x1="12.1667" x2="12.1667" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind2e" x1="15.5" x2="15.5" y1="9.16667" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind2f" x1="10" x2="10" y1="1.66667" y2="5.83333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    },
    {
      label: t.indFin,
      icon: <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p39783000} stroke="url(#m-ind3a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p25499600} stroke="url(#m-ind3b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5 10H5.00833M15 10H15.0083" stroke="url(#m-ind3c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="m-ind3a" x1="10" x2="10" y1="5" y2="15"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind3b" x1="10" x2="10" y1="8.33333" y2="11.6667"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind3c" x1="10.0042" x2="10.0042" y1="10" y2="11"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    },
    {
      label: t.indHealth,
      icon: <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p2f84f400} stroke="url(#m-ind4a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.paebea00} stroke="url(#m-ind4b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="m-ind4a" x1="10" x2="10" y1="2.5" y2="17.5"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind4b" x1="9.99583" x2="9.99583" y1="7.08333" y2="12.9167"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    },
    {
      label: t.indEnergy,
      icon: <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p15015780} stroke="url(#m-ind5a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p20d10600} stroke="url(#m-ind5b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="m-ind5a" x1="10" x2="10" y1="1.66838" y2="18.3316"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind5b" x1="10" x2="10" y1="6.66667" y2="13.3333"><stop stopColor="#3562E9" /><stop stopColor="#86A3F9" offset="1" /></linearGradient></defs></svg>,
    },
    {
      label: t.indEnterprise,
      icon: <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p37143280} stroke="url(#m-ind6a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p1d7f0000} stroke="url(#m-ind6b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p2b722f80} stroke="url(#m-ind6c)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 5H11.6667" stroke="url(#m-ind6d)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 8.33333H11.6667" stroke="url(#m-ind6e)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 11.6667H11.6667" stroke="url(#m-ind6f)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M8.33333 15H11.6667" stroke="url(#m-ind6g)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><defs><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6a" x1="10" x2="10" y1="1.66667" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6b" x1="3.33333" x2="3.33333" y1="10" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6c" x1="16.6667" x2="16.6667" y1="7.5" y2="18.3333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6d" x1="10" x2="10" y1="5" y2="6"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6e" x1="10" x2="10" y1="8.33333" y2="9.33333"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6f" x1="10" x2="10" y1="11.6667" y2="12.6667"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="m-ind6g" x1="10" x2="10" y1="15" y2="16"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient></defs></svg>,
    },
  ];

  const mobileTeamMembers: TeamMember[] =[
    { name: t.teamFahadName,   title: t.teamFahadTitle,         img: imgFahad,  cardClass: 'team-card-0' },
    { name: t.teamHectorName, title: t.teamHectorTitle,        img: imgHector, cardClass: 'team-card-1' },
    { name: t.teamHamiName,       title: t.teamHamiTitle,         img: imgHami,   cardClass: 'team-card-2' },
    { name: t.teamAtifName,    title: t.teamAtifTitle,                    img: imgAtif,   cardClass: 'team-card-3' },
    { name: t.teamAseelName,   title: t.teamAseelTitle, img: imgAseel,  cardClass: 'team-card-4' },
    { name: t.teamLailaName, title: t.teamLailaTitle,            img: imgLailah, cardClass: 'team-card-5' },
  ];

  const words = lang === 'ar' ?[
    { text: t.leadWord1, gradient: false },
    { text: t.leadWord2, gradient: false },
    { text: t.leadWord3, gradient: true },
  ] :[
    { text: t.leadWord1, gradient: false },
    { text: t.leadWord2, gradient: true },
    { text: t.leadWord3, gradient: false },
  ];

  return (
    <div
      className="relative w-full overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, rgb(11,11,15) 0%, rgb(11,11,15) 100%)' }}
    >
      {/* ── 1. HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center px-5 pt-[120px] pb-16 overflow-hidden"
        style={{ minHeight: '930px' }}
      >
        <img alt="" className="hero-bg absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" src={imgSection} />
        <div className="absolute inset-x-0 top-0 h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(53,98,233,0.15), transparent)' }} />

        <p className={heroVisible ? 'hero-label font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-3' : 'opacity-0 font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-3'}>{t.company}</p>
        <h1 className={heroVisible ? 'hero-h1 font-bold text-[#fafafa] text-[36px] leading-[1.15] tracking-[-1px] mb-4' : 'opacity-0 font-bold text-[#fafafa] text-[36px] leading-[1.15] tracking-[-1px] mb-4'}>
          {t.heroH1Part1}{' '}
          <span className="hero-shimmer bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(136.935deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)' }}>
            {t.heroH1Part2}
          </span>{' '}
          {t.heroH1Part3}
        </h1>
        <p className={heroVisible ? 'hero-desc text-[#73798c] text-[15px] leading-[1.7] max-w-[320px]' : 'opacity-0 text-[#73798c] text-[15px] leading-[1.7] max-w-[320px]'}>
          {t.heroDescMobile}
        </p>
      </section>

      {/* ── 2. LEADERSHIP ── */}
      <section ref={leaderRef} className="relative px-4 pb-16">
        <div className="absolute top-0 left-[-20%] w-[60%] h-[300px] pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle, rgba(53,98,233,0.2), transparent 70%)' }} />

        <div className="text-center mb-8">
          <p className={`leadership-label${leaderVisible ? ' visible' : ''} font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-3 mt-16`}>{t.leadership}</p>
          <div className="flex flex-wrap justify-center gap-x-2 font-bold text-[30px] tracking-[-0.8px] leading-[1.2] mb-3">
            {words.map((w, i) => (
              <span
                key={i}
                className={`leadership-word${leaderVisible ? ' visible' : ''}${w.gradient ? ' bg-clip-text text-transparent' : ' text-[#fafafa]'}`}
                style={{ animationDelay: leaderVisible ? `${i * 200}ms` : '0ms', ...(w.gradient ? { backgroundImage: 'linear-gradient(161.066deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)' } : {}) }}
              >
                {w.text}
              </span>
            ))}
          </div>
          <p className={`leadership-desc${leaderVisible ? ' visible' : ''} text-[#73798c] text-[14px] leading-[1.6]`} style={{ animationDelay: leaderVisible ? '700ms' : '0ms' }}>
            {t.leadDesc}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-[275px] mx-auto">
          {mobileTeamMembers.map((m) => (
            <MobileTeamCard key={m.name} {...m} visible={leaderVisible} />
          ))}
        </div>
      </section>

      {/* ── 3. VISION ── */}
      <section ref={visionRef} className="relative px-4 pb-16">
        <div
          className={`vision-card${visionVisible ? ' vis' : ''} relative backdrop-blur-[12px] border border-solid rounded-[20px] overflow-hidden text-center px-6 py-10 mt-24`}
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="absolute -translate-x-1/2 left-1/2 bg-[rgba(53,98,233,0.12)] blur-[60px] rounded-full pointer-events-none" style={{ width: 280, height: 280, top: -140 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(53,98,233,0.06) 0%, transparent 100%)' }} />
          <div className="absolute inset-0 rounded-[20px]" style={{ backgroundImage: 'linear-gradient(157.444deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)' }} />

          <p className={`vision-label2${visionVisible ? ' vis' : ''} relative z-10 font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-4`}>{t.vision}</p>
          <h2 className={`vision-heading2${visionVisible ? ' vis' : ''} relative z-10 font-bold text-[28px] tracking-[-0.8px] leading-[1.2] mb-4`}>
            <span className="text-[#fafafa]">{t.visionH1Part1}</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(157.931deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)' }}>{t.visionH1Part2}</span>
          </h2>
          <p className={`vision-desc2${visionVisible ? ' vis' : ''} relative z-10 text-[#73798c] text-[14px] leading-[1.7]`}>
            {t.visionDescMobile}
          </p>
        </div>
      </section>

      {/* ── 4. INDUSTRIES ── */}
      <section ref={indRef} className="relative px-4 pb-20">
        <div className="text-center mb-8">
          <p className={`ind-label${indVisible ? ' go' : ''} font-semibold text-[#3562e9] text-[11px] tracking-[1.2px] uppercase mb-3 mt-24`}>{t.industries}</p>
          <h2 className={`ind-heading${indVisible ? ' go' : ''} font-bold text-[28px] tracking-[-0.8px] leading-[1.2]`}>
            <span className="text-[#fafafa]">{t.indH1Part1}</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(145.93deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)' }}>{t.indH1Part2}{t.indH1Part3}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 max-w-[420px] mx-auto">
          {mobileIndustryItems.map((item, i) => (
            <MobileIndustryCard key={item.label} label={item.label} icon={item.icon} visible={indVisible} delay={300 + i * 100} lang={lang} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────────────────────────── */
interface CompanyProps {
  onRequestDemo?: () => void;
}

export default function Company({ onRequestDemo }: CompanyProps = {}) {
  const isMobile = useIsMobile();
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
      className="relative w-full min-h-screen overflow-x-hidden" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} /* Automatically switches text direction */
    >
      <style>{sharedStyles}</style>
      <WhatsAppButton />
      {isMobile ? <MobileCompany t={t} lang={lang} /> : <DesktopCompany t={t} lang={lang} />}
    </div>
  );
}