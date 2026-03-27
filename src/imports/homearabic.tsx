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
import imgSection2 from "../assets/dd4c3d9d1444cce5121d61a5c8f6f03e7e61dc49.png";
import imgIntelligentProcessAutomation from "../assets/5d10e78ca0aa62fe1fa90609898b559c55d0fe0f.png";
import imgEnterpriseBlockchainInfrastructure from "../assets/0c4434e685a8b1c521bd4f0c6208f1578d113f3d.png";
import imgAdvancedArtificialIntelligence from "../assets/4088efd90e32ef15b9e7fbc9c777955680458281.png";
import imgAdvancedDigitalSecurity from "../assets/0f4cf11d0fdac056e8e0c8f851b0682b671abfa3.png";

interface HomeProps {
  onRequestDemo?: () => void;
  hideHeader?: boolean;
}

// ─── Contact CTA (Section) — matches English Section ──────────────────────────

function ContactButtonAr() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @keyframes contactBtnGradientAr {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes contactBtnShimmerAr {
          0%        { transform: translateX(150%) skewX(20deg); }
          25%, 100% { transform: translateX(-250%) skewX(20deg); }
        }
        .btn-contact-ar {
          background: linear-gradient(120deg, #3562e9, #6b8fff, #86a3f9, #3562e9);
          background-size: 300% 300%;
          animation: contactBtnGradientAr 2.8s ease infinite;
          box-shadow: 0 0 18px 4px rgba(53,98,233,0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          overflow: hidden;
          position: relative;
        }
        .btn-contact-ar:hover {
          animation: contactBtnGradientAr 1.2s ease infinite;
          transform: scale(1.05);
          box-shadow: 0 0 32px 10px rgba(134,163,249,0.6);
        }
        .btn-contact-shimmer-ar {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: contactBtnShimmerAr 2.8s ease infinite;
        }
        .btn-platform-ar {
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .btn-platform-ar:hover {
          border-color: rgba(134,163,249,0.5) !important;
          box-shadow: 0 0 22px 6px rgba(53,98,233,0.35);
          transform: scale(1.03);
        }
      `}</style>
        <div
        onClick={() => navigate('/contact')}
        className="btn-contact-ar absolute h-[40px] right-[119px] rounded-[10px] top-[495px] w-[149.86px] cursor-pointer"
      >
        <div className="btn-contact-shimmer-ar" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-medium h-[17px] justify-center leading-[0] left-1/2 not-italic text-[14px] text-center text-white top-1/2 tracking-[0.35px] w-[100px]" style={{ zIndex: 1 }}>
          <p className="leading-[20px]">ابدأ الآن</p>
        </div>
      </div>
    </>
  );
}

function ExplorePlatformBtnAr() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/platform')}
      className="btn-platform-ar absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.15)] border-solid h-[40px] right-[275px] rounded-[10px] top-[495px] w-[149.86px] cursor-pointer"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Cairo',sans-serif] font-medium from-[#3562e9] h-[17px] justify-center leading-[0] left-1/2 not-italic text-[14px] text-[transparent] text-center to-[#86a3f9] top-1/2 tracking-[0.35px] w-[120px]">
        <p className="leading-[20px]">استكشف المنصة</p>
      </div>
    </div>
  );
}

// ─── Hero stat cards (same logic as English) ──────────────────────────────────

function useCountUpAr(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function UptimeCardAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const whole = useCountUpAr(99, 1400, started);
  const [dec, setDec] = useState(0);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setDec(99), 1600);
    return () => clearTimeout(t);
  }, [started]);
  return (
    <div ref={ref} className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ flex: 1, height: 80, position: 'relative' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Cairo',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.17px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(124.037deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">{whole}.{dec}%</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.17px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">الجاهزية</p>
      </div>
    </div>
  );
}

function LatencyCardAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUpAr(10, 1200, started);
  return (
    <div ref={ref} className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ flex: 1, height: 80, position: 'relative' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Cairo',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.15px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(120.782deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">&lt;{count}ms</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.18px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">الاستجابة</p>
      </div>
    </div>
  );
}

function ZeroTrustCardAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [displayed, setDisplayed] = useState('');
  const target = 'Zero-Trust';
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(target.slice(0, i));
      if (i >= target.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [started]);
  return (
    <div ref={ref} className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ flex: 1, height: 80, position: 'relative' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Cairo',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.15px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(133.636deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">{displayed || '\u00A0'}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.16px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">الهيكل الأمني</p>
      </div>
    </div>
  );
}

function MonitoringCardAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [displayed, setDisplayed] = useState('');
  const target = '24/7';
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(target.slice(0, i));
      if (i >= target.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [started]);
  return (
    <div ref={ref} className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ flex: 1, height: 80, position: 'relative' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Cairo',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.19px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(112.17deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">{displayed || '\u00A0'}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.16px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">المراقبة</p>
      </div>
    </div>
  );
}

// ─── Hero Headline (RTL slideDown) ────────────────────────────────────────────

function HeroHeadlineAr() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const gradientStyle = { backgroundImage: "linear-gradient(131.672deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" };

  return (
    <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[232px] justify-center leading-[0] right-[119px] not-italic text-[#fafafa] text-[72px] top-[305px] tracking-[-1.8px] w-[1412px] text-right">
      <style>{`
        @keyframes slideDownAr {
          from { opacity: 0; transform: translateY(-32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-line-1-ar { animation: slideDownAr 0.9s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.2s; }
        .hero-line-2-ar { animation: slideDownAr 0.9s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.45s; }
      `}</style>
      <p className="mb-0 hero-line-1-ar" style={{ opacity: 0 }}>
        <span className="leading-[72px]">تمكين </span>
        <span className="bg-clip-text leading-[72px] text-[transparent]" style={gradientStyle}>
          الجيل القادم
        </span>
      </p>
      <p className="hero-line-2-ar leading-[72px]" style={{ opacity: 0 }}>من العمليات الرقمية</p>
    </div>
  );
}

// ─── Hero particles container (same as English Container5) ───────────────────

function Container5Ar() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1132.11px] opacity-29 rounded-[9999px] size-[1.33px] top-[41.61px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[38.25px] opacity-36 rounded-[9999px] size-[1.58px] top-[520.45px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[400.21px] opacity-28 rounded-[9999px] size-[2.57px] top-[477.05px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1261.19px] opacity-59 rounded-[9999px] size-[1.84px] top-[710.45px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1490.64px] opacity-58 rounded-[9999px] size-[1.84px] top-[181.99px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[64.94px] opacity-20 rounded-[9999px] size-[3.81px] top-[603.5px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1193.92px] opacity-43 rounded-[9999px] size-[1.31px] top-[51.5px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[695.22px] opacity-48 rounded-[9999px] size-[3.3px] top-[66.18px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1257.6px] opacity-21 rounded-[9999px] size-[3.8px] top-[488.72px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1256.94px] opacity-26 rounded-[9999px] size-[3.33px] top-[541.59px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[880.27px] opacity-54 rounded-[9999px] size-[3.13px] top-[513.19px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[476.84px] opacity-20 rounded-[9999px] size-[2.31px] top-[166.58px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1087.73px] opacity-31 rounded-[9999px] size-[2.16px] top-[831.97px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[676.87px] opacity-44 rounded-[9999px] size-[1.04px] top-[686.62px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1294.32px] opacity-51 rounded-[9999px] size-[2.13px] top-[254.95px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[852.43px] opacity-21 rounded-[9999px] size-[3.41px] top-[248.12px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1137.81px] opacity-30 rounded-[9999px] size-[2.38px] top-[110.75px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1506.31px] opacity-31 rounded-[9999px] size-[2.51px] top-[75.3px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[743.74px] opacity-20 rounded-[9999px] size-[2.46px] top-[116.63px]" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1186.01px] opacity-59 rounded-[9999px] size-[2.06px] top-[167.92px]" />
    </div>
  );
}

// ─── Section8 — Hero (same structure, RTL text) ───────────────────────────────

function Section8Ar() {
  return (
    <div className="absolute h-[725px] left-px right-[-1px] top-0" data-name="Section">
      <video autoPlay muted className="absolute max-w-none object-cover opacity-15 size-full" controlsList="nodownload" loop playsInline>
        <source src={heroBgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 858\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 51.48 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute inset-0 opacity-20" data-name="Gradient" style={{ backgroundImage: "linear-gradient(rgba(33, 35, 44, 0.5) 1.6667%, rgba(33, 35, 44, 0) 1.6667%), linear-gradient(90deg, rgba(33, 35, 44, 0.5) 1.6667%, rgba(33, 35, 44, 0) 1.6667%)" }} />
      <Container5Ar />
      {/* Glow orbs — mirrored positions */}
      <div className="absolute blur-[50px] opacity-49 left-[-180.55px] rounded-[9999px] size-[558.71px] top-[56.14px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 558.71 558.71\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.507 0 0 39.507 279.36 279.36)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] bottom-[64.95px] right-[-96.14px] opacity-49 rounded-[9999px] size-[391.1px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 391.1 391.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.655 0 0 27.655 195.55 195.55)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <HeroHeadlineAr />
      {/* Subtitle */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-normal h-[78px] justify-center leading-[0] right-[119px] not-italic text-[#73798c] text-[18px] top-[419px] w-[844px] text-right">
        <p className="leading-[28px]">حوّل الأفكار إلى تنفيذ فعلي باستخدام تقنيات تسرّع الكفاءة والمرونة والنمو.</p>
      </div>
      {/* CTA Buttons */}
      <ContactButtonAr />
      <ExplorePlatformBtnAr />
      <div className="absolute blur-[30px] inset-[40px_756px_151px_92px] rounded-[24px]" data-name="Blur" />
      {/* Stat cards row */}
      <div style={{ position: 'absolute', top: 575, left: 372, right: 372, display: 'flex', gap: 16 }}>
        <UptimeCardAr />
        <LatencyCardAr />
        <ZeroTrustCardAr />
        <MonitoringCardAr />
      </div>
      {/* Logo */}
      <div className="absolute h-[106px] right-[122px] top-[119px] w-[117px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.38%] right-0 max-w-none top-0 w-full" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

// ─── Section7 — About (word-by-word reveal, RTL) ──────────────────────────────

function AboutCardAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.01, rootMargin: '0px 0px -80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words1 = ['تقنية', 'تُعيد'];
  const words2 = ['تعريف'];
  const words3 = ['الأعمال'];
  const allWords = [...words1, ...words2, ...words3];

  return (
    <div
      ref={ref}
      className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[366px] left-[308px] overflow-clip right-[308px] rounded-[24px] top-[193px]"
    >
      <style>{`
        @keyframes wordUpAr {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
        .word-reveal-ar { opacity: 0; }
        .word-reveal-ar.go { animation: wordUpAr 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>

      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[50px] left-1/2 rounded-[9999px] size-[256px] top-[-128px]" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.03)] inset-0 to-[rgba(53,98,233,0)]" />
      <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(157.846deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />

      {/* Label */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[72px] tracking-[1.2px] uppercase w-[180px]">
        <p className={`leading-[16px] word-reveal-ar${started ? ' go' : ''}`} style={{ animationDelay: '0ms' }}>
          نبذة عن MTechnology
        </p>
      </div>

      {/* Headline */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+0.51px)] not-italic text-[#fafafa] text-[48px] text-center top-[144px] tracking-[-1.2px] w-[613.446px]">
        <p className="mb-0">
          {words1.map((w, i) => (
            <span key={i}>
              <span
                className={`leading-[52px] word-reveal-ar${started ? ' go' : ''}`}
                style={{ display: 'inline-block', animationDelay: `${300 + i * 150}ms` }}
              >
                {w}
              </span>
              {' '}
            </span>
          ))}
          <span
            className={`bg-clip-text leading-[52px] text-[transparent] word-reveal-ar${started ? ' go' : ''}`}
            style={{
              display: 'inline-block',
              backgroundImage: "linear-gradient(146.109deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)",
              animationDelay: `${300 + words1.length * 150}ms`
            }}
          >
            {words2[0]}
          </span>
        </p>
        <p className="leading-[52px]">
          <span
            className={`word-reveal-ar${started ? ' go' : ''}`}
            style={{ display: 'inline-block', animationDelay: `${300 + (words1.length + words2.length) * 150}ms` }}
          >
            {words3[0]}
          </span>
        </p>
      </div>

      {/* Body text */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-normal h-[78px] justify-center leading-[28px] left-[calc(50%+0.1px)] not-italic text-[#73798c] text-[18px] text-center top-[258px] w-[666.1px] word-reveal-ar${started ? ' go' : ''}`}
        style={{ animationDelay: `${300 + allWords.length * 150}ms` }}
      >
        <p className="mb-0">تبني MTechnology بنية تحتية رقمية متقدمة تُمكّن المؤسسات من</p>
        <p className="mb-0">العمل بذكاء وكفاءة أعلى. نحن لا نبني أدوات تقنية فحسب —</p>
        <p>بل نبني البنية التحتية للمؤسسات الرقمية الحديثة.</p>
      </div>
    </div>
  );
}

function Section7Ar() {
  return (
    <div className="absolute h-[752px] left-0 right-0 top-[725px]" data-name="Section">
      <div className="absolute blur-[50px] inset-[16.51%_18.42%_18.2%_51.96%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 447.89 447.89\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(31.671 0 0 31.671 223.95 223.95)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <AboutCardAr />
    </div>
  );
}

// ─── Section2 — Partners (same marquee) ───────────────────────────────────────

function Group() {
  const logos = [imgImage2, imgImage71, imgImage3, imgImage4, imgImage2, imgImage71, imgImage3, imgImage4];
  return (
    <div className="absolute left-[244px] right-[244px] top-[280px]">
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 64px;
          animation: marqueeScroll 18s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-wrap {
          overflow: hidden;
          position: relative;
        }
        .marquee-fade-l {
          position: absolute; left: 0; top: 0; bottom: 0; width: 80px; z-index: 2;
          background: linear-gradient(to right, rgba(11,11,15,0.95), transparent);
          pointer-events: none;
        }
        .marquee-fade-r {
          position: absolute; right: 0; top: 0; bottom: 0; width: 80px; z-index: 2;
          background: linear-gradient(to left, rgba(11,11,15,0.95), transparent);
          pointer-events: none;
        }
      `}</style>
      {/* Glass container */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        padding: '28px 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      }}>
        {/* Blue tint overlay like other cards */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(53,98,233,0.05) 0%, rgba(53,98,233,0.02) 50%, transparent 100%)', pointerEvents: 'none' }} />
        {/* Top corner glow */}
        <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 320, height: 160, background: 'rgba(53,98,233,0.08)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }} />
        {/* Top shimmer line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
        <div className="marquee-wrap">
          <div className="marquee-fade-l" />
          <div className="marquee-fade-r" />
          <div className="marquee-track">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((src, i) => (
              <div key={i} style={{ flexShrink: 0, height: '52px', display: 'flex', alignItems: 'center' }}>
                <img src={src} alt="" style={{ height: '100%', width: 'auto', maxWidth: '160px', objectFit: 'contain', opacity: 0.85, filter: 'brightness(1.1)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function Section2Ar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.intersectionRatio >= 0.2) { setStarted(true); observer.disconnect(); } },
      { threshold: [0.1, 0.2, 0.3] }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="absolute h-[716px] left-0 right-0 top-[4315px]" data-name="Section">
      <style>{`
        @keyframes partnersUpAr {
          from { opacity: 0; transform: translateY(30px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .partners-label-ar  { opacity: 0; }
        .partners-heading-ar { opacity: 0; }
        .partners-marquee-ar { opacity: 0; }
        .partners-label-ar.go   { animation: partnersUpAr 0.9s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0ms; }
        .partners-heading-ar.go { animation: partnersUpAr 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 150ms; }
        .partners-marquee-ar.go { animation: partnersUpAr 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 300ms; }
      `}</style>
      <div className="absolute inset-0 opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 716\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 42.96 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%-20px)] not-italic text-[#3562e9] text-[12px] text-center top-[100px] tracking-[1.2px] uppercase w-[84.129px] partners-label-ar${started ? ' go' : ''}`}>
        <p className="leading-[16px]">الشركاء</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%-20px)] not-italic text-[#fafafa] text-[48px] text-center top-[172px] tracking-[-1.2px] w-[628.81px] partners-heading-ar${started ? ' go' : ''}`}>
        <p>
          <span className="leading-[52px]">شركاؤنا </span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3562e9] leading-[52px] text-[transparent] to-[#86a3f9]">الاستراتيجيون</span>
        </p>
      </div>
      <div className={`partners-marquee-ar${started ? ' go' : ''}`}>
        <Group />
      </div>
    </div>
  );
}

// ─── Section1 — Vision (circularFloat + typewriter) ───────────────────────────

function VisionCardAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.intersectionRatio >= 0.15) { setStarted(true); observer.disconnect(); } },
      { threshold: [0.1, 0.15, 0.2] }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fullText = "نهدف إلى بناء منظومات رقمية ذكية تساعد المؤسسات على الابتكار والتعاون والنمو في عالم رقمي سريع التطور.";
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <div
      ref={ref}
      className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[366px] left-[308px] overflow-clip right-[308px] rounded-[24px] top-[90px]"
    >
      <style>{`
        @keyframes visionLabelUpAr { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes visionHeadingUpAr { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .vision-label-ar { opacity: 0; }
        .vision-label-ar.go { animation: visionLabelUpAr 0.7s cubic-bezier(0.22,1,0.36,1) 0ms forwards; }
        .vision-heading-ar { opacity: 0; }
        .vision-heading-ar.go { animation: visionHeadingUpAr 1s cubic-bezier(0.22,1,0.36,1) 100ms forwards; }
      `}</style>
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[50px] left-1/2 rounded-[9999px] size-[256px] top-[-128px]" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.03)] inset-0 to-[rgba(53,98,233,0)]" />
      <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(157.846deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />

      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#3562e9] text-[12px] text-center top-[88px] tracking-[1.2px] uppercase w-[60px] vision-label-ar${started ? ' go' : ''}`}>
        <p className="leading-[16px]">الرؤية</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+2.28px)] not-italic text-[#fafafa] text-[48px] text-center top-[160px] tracking-[-1.2px] w-[727.159px] vision-heading-ar${started ? ' go' : ''}`}>
        <p className="mb-0">
          <span className="leading-[52px]">تمكين </span>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(140.408deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>الجيل</span>
        </p>
        <p>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(140.408deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>القادم</span>
          <span className="leading-[52px]"> من المؤسسات الرقمية</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-normal h-[50px] justify-center leading-[28px] left-[calc(50%+0.94px)] not-italic text-[#73798c] text-[18px] text-center top-[260px] w-[664.981px]">
        <p style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {typed}
          <span style={{ opacity: typed.length < fullText.length ? 1 : 0, borderRight: '2px solid #86a3f9', marginRight: '1px', animation: 'none' }}>​</span>
        </p>
      </div>
    </div>
  );
}

function Section1Ar() {
  return (
    <div className="absolute h-[587px] left-[5px] right-[3px] top-[4882px]" data-name="Section">
      <style>{`
        @keyframes circularFloatAr {
          0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          25%  { transform: translate(18px, -22px) rotate(90deg) scale(1.04); }
          50%  { transform: translate(0px, -38px) rotate(180deg) scale(1.07); }
          75%  { transform: translate(-18px, -22px) rotate(270deg) scale(1.04); }
          100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
        }
        .section1-bg-ar { animation: circularFloatAr 32s ease-in-out infinite; transform-origin: center center; }
      `}</style>
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full section1-bg-ar" style={{ opacity: 0.25 }} src={imgSection} />
      <div className="absolute blur-[50px] inset-[5.62%_18%_13.15%_44.93%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 557.54 476.84\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.424 0 0 33.718 278.77 238.42)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] inset-[33.89%_68.96%_17.37%_8.8%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 334.53 286.11\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(23.655 0 0 20.231 167.27 143.05)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <VisionCardAr />
    </div>
  );
}

// ─── Section3 — Industries (ind-fog cards, RTL) ────────────────────────────────

function IndCardGlowBg() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" />
      <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function IndCardAr({ label, SvgIcon, visible, delay }: { label: string; SvgIcon: () => React.ReactElement; visible: boolean; delay: number }) {
  return (
    <div
      className={`ind-fog-ar${visible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid flex-1 overflow-clip rounded-[16px] relative`}
      style={{ animationDelay: `${delay}ms`, minWidth: 0, height: '94px' }}
    >
      <IndCardGlowBg />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 left-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" />
      {/* Icon on the right side for RTL */}
      <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid right-[24.5px] rounded-[12px] size-[44px] top-1/2">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
          <SvgIcon />
        </div>
      </div>
      {/* Text on the left side for RTL */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[20px] justify-center leading-[0] right-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] whitespace-nowrap">
        <p className="leading-[20px]">{label}</p>
      </div>
    </div>
  );
}

function LogisticsIconAr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5H12V13H3V5Z" stroke="url(#l1ar)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8H15L17 10V13H12V8Z" stroke="url(#l2ar)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="15" r="1.5" stroke="url(#l3ar)" strokeWidth="1.25" />
      <circle cx="14" cy="15" r="1.5" stroke="url(#l4ar)" strokeWidth="1.25" />
      <defs>
        <linearGradient id="l1ar" x1="10" y1="5" x2="10" y2="16.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="l2ar" x1="14.5" y1="8" x2="14.5" y2="13" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="l3ar" x1="6" y1="13.5" x2="6" y2="16.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="l4ar" x1="14" y1="13.5" x2="14" y2="16.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function GovernmentIconAr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 17.5H17.5" stroke="url(#g1ar)" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M4 17.5V8H7V17.5M8.5 17.5V8H11.5V17.5M13 17.5V8H16V17.5" stroke="url(#g2ar)" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M10 3L3 6.5H17L10 3Z" stroke="url(#g3ar)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="g1ar" x1="10" y1="3" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="g2ar" x1="10" y1="3" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="g3ar" x1="10" y1="3" x2="10" y2="6.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function FinanceIconAr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 16V10M8 16V7M12 16V11M16 16V5" stroke="url(#f1ar)" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M3 17.5H17" stroke="url(#f2ar)" strokeWidth="1.25" strokeLinecap="round" />
      <defs>
        <linearGradient id="f1ar" x1="10" y1="5" x2="10" y2="16" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="f2ar" x1="10" y1="5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function HealthcareIconAr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3V17M3 10H17" stroke="url(#h1ar)" strokeWidth="1.25" strokeLinecap="round" />
      <rect x="4" y="4" width="12" height="12" rx="3" stroke="url(#h2ar)" strokeWidth="1.25" />
      <defs>
        <linearGradient id="h1ar" x1="10" y1="3" x2="10" y2="17" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="h2ar" x1="10" y1="4" x2="10" y2="16" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function EnergyIconAr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11.5 2.5L5.5 10.5H9L8.5 17.5L14.5 9.5H11L11.5 2.5Z" stroke="url(#e1ar)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="e1ar" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function EnterpriseIconAr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 17.5V5.5L10 3L16.5 5.5V17.5" stroke="url(#en1ar)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7H7.01M10 7H10.01M13 7H13.01M7 10H7.01M10 10H10.01M13 10H13.01M7 13H7.01M10 13H10.01M13 13H13.01" stroke="url(#en2ar)" strokeWidth="1.25" strokeLinecap="round" />
      <defs>
        <linearGradient id="en1ar" x1="10" y1="3" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="en2ar" x1="10" y1="7" x2="10" y2="13" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function Section3Ar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const row1 = [
    { label: 'اللوجستيات وسلاسل الإمداد', Icon: LogisticsIconAr },
    { label: 'القطاع الحكومي', Icon: GovernmentIconAr },
    { label: 'الخدمات المالية', Icon: FinanceIconAr },
  ];
  const row2 = [
    { label: 'الرعاية الصحية', Icon: HealthcareIconAr },
    { label: 'الطاقة والمرافق', Icon: EnergyIconAr },
    { label: 'الشركات الكبرى', Icon: EnterpriseIconAr },
  ];

  return (
    <div ref={ref} className="absolute h-[800px] left-0 right-0 top-[3617px]" data-name="Section">
      <style>{`
        @keyframes indFogAr {
          from { opacity: 0; transform: translateY(22px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .ind-fog-ar { opacity: 0; }
        .ind-fog-ar.go { animation: indFogAr 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes solLabelUpAr {
          from { opacity: 0; transform: translateY(16px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes solHeadingUpAr {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .sol-label-ar { opacity: 0; }
        .sol-label-ar.go { animation: solLabelUpAr 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .sol-heading-ar { opacity: 0; }
        .sol-heading-ar.go { animation: solHeadingUpAr 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; }
      `}</style>
      <div className="absolute inset-0 opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 716\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 42.96 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />

      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[168px] tracking-[1.2px] uppercase w-[84.129px] sol-label-ar${started ? ' go' : ''}`}>
        <p className="leading-[16px]">القطاعات</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+1.26px)] not-italic text-[#fafafa] text-[48px] text-center top-[240px] tracking-[-1.2px] w-[628.81px] sol-heading-ar${started ? ' go' : ''}`}>
        <p className="mb-0">
          <span className="leading-[52px]">حلول رقمية </span>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.93deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>لقطاعات</span>
        </p>
        <p className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.93deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>متعددة</p>
      </div>

      {/* Row 1 */}
      <div className="absolute" style={{ top: 352, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, justifyContent: 'center', padding: '0 48px' }}>
          {row1.map(({ label, Icon }, i) => (
            <IndCardAr key={label} label={label} SvgIcon={Icon} visible={started} delay={400 + i * 130} />
          ))}
        </div>
      </div>
      {/* Row 2 */}
      <div className="absolute" style={{ top: 463, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, justifyContent: 'center', padding: '0 48px' }}>
          {row2.map(({ label, Icon }, i) => (
            <IndCardAr key={label} label={label} SvgIcon={Icon} visible={started} delay={530 + (2 - i) * 130} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section4 — Why Us (imgBreathe + benefit cards, RTL) ─────────────────────

function CheckIconAr() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0CheckAr)">
        <path
          d="M14.534 6.66667C14.8385 8.16087 14.6215 9.71428 13.9192 11.0679C13.217 12.4214 12.0719 13.4934 10.675 14.1049C9.27809 14.7164 7.71375 14.8305 6.24287 14.4282C4.77198 14.026 3.48346 13.1316 2.59218 11.8943C1.70091 10.657 1.26075 9.15149 1.34511 7.62892C1.42947 6.10636 2.03325 4.65873 3.05577 3.52745C4.07828 2.39617 5.45772 1.64962 6.96404 1.4123C8.47037 1.17498 10.0125 1.46124 11.3333 2.22333"
          stroke="url(#paint0CheckAr)"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7.33333L8 9.33333L14.6667 2.66667"
          stroke="url(#paint1CheckAr)"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0CheckAr"
          x1="8.00157"
          y1="1.33106"
          x2="8.00157"
          y2="14.6644"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3562E9" />
          <stop offset="1" stopColor="#86A3F9" />
        </linearGradient>
        <linearGradient
          id="paint1CheckAr"
          x1="10.3333"
          y1="2.66667"
          x2="10.3333"
          y2="9.33333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3562E9" />
          <stop offset="1" stopColor="#86A3F9" />
        </linearGradient>
        <clipPath id="clip0CheckAr">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BenefitCardAr({ text, visible, delay }: { text: string; visible: boolean; delay: number }) {
  return (
    <div
      className={`ind-fog-ar2${visible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid overflow-clip rounded-[16px] relative`}
      style={{ animationDelay: `${delay}ms`, height: '78px' }}
    >
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[115px] left-[-7px] overflow-clip right-[-12px] rounded-[24px] top-[-22px]">
        <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
        <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)]" />
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(167.339deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
      </div>
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[15px] opacity-0 left-[-32px] rounded-[9999px] size-[80px] top-[-32px]" />
      {/* Icon on right for RTL */}
      <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid right-[20px] rounded-[12px] size-[36px] top-1/2">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2">
          <CheckIconAr />
        </div>
      </div>
      {/* Text to the left of icon for RTL */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-medium h-[20px] justify-center leading-[0] right-[72px] not-italic text-[#fafafa] text-[14px] top-[38px] whitespace-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function Section4Ar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.intersectionRatio >= 0.4) { setStarted(true); observer.disconnect(); } },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5] }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    'تسريع التحول الرقمي',
    'تعزيز الأمن السيبراني',
    'تحسين الكفاءة التشغيلية',
    'بناء أنظمة قابلة للتوسع',
    'التكامل بسهولة مع التقنيات الحالية',
  ];

  return (
    <div ref={ref} className="absolute h-[632px] left-[-9px] right-[9px] top-[2985px]" data-name="Section">
      <style>{`
        @keyframes imgBreatheAr {
          0%   { opacity: 0.18; transform: scale(1) translateY(0px); }
          50%  { opacity: 0.35; transform: scale(1.07) translateY(-14px); }
          100% { opacity: 0.18; transform: scale(1) translateY(0px); }
        }
        .img-breathe-ar { animation: imgBreatheAr 10s ease-in-out infinite; transform-origin: center center; }
        @keyframes indFogAr2 {
          from { opacity: 0; transform: translateY(22px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .ind-fog-ar2 { opacity: 0; }
        .ind-fog-ar2.go { animation: indFogAr2 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes solLabelUpAr2 { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .sol-label-ar2 { opacity: 0; }
        .sol-label-ar2.go { animation: solLabelUpAr2 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full img-breathe-ar" src={imgSection1} />
      <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 632\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 31.6 756 632)\\'><stop stop-color=\\'rgba(53,98,233,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] inset-[16.81%_61.94%_24.04%_8.4%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 448.41 373.87\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(31.707 0 0 26.437 224.21 186.94)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />

      {/* Left side text (RTL: text starts from right side, so right-aligned at right=[244px]) */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] right-[244px] not-italic text-[#3562e9] text-[12px] top-[168px] tracking-[1.2px] uppercase w-[160px]">
        <p className={`leading-[16px] sol-label-ar2${started ? ' go' : ''}`}>لماذا MTechnology</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[154px] justify-center leading-[0] right-[244px] not-italic text-[#fafafa] text-[48px] top-[264px] tracking-[-1.2px] w-[340px] text-right">
        <p className="mb-0">
          <span className="leading-[48px]">ميزة </span>
          <span className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(124.846deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>تنافسية</span>
        </p>
        <p className="mb-0">
          <span className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(124.846deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>حقيقية</span>
          <span className="leading-[48px]"> للمؤسسات</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-normal h-[28px] justify-center leading-[0] right-[244px] not-italic text-[#73798c] text-[18px] top-[374px] w-[340px] text-right">
        <p className="leading-[28px]">مع MTechnology، يمكن للمؤسسات أن:</p>
      </div>

      {/* Benefit cards on the left side (mirrored from English right side at left=[780px]) */}
      <div className="absolute" style={{ top: 160, left: 244, right: 780 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {benefits.map((text, i) => (
            <BenefitCardAr key={text} text={text} visible={started} delay={i * 80} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section5 — Solutions (glass cards with spring-scale reveal, RTL) ─────────

function SolIconAr1() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5A7.5 7.5 0 1 0 17.5 10" stroke="url(#a1sol)" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M10 6V10L12.5 12.5" stroke="url(#a2sol)" strokeWidth="1.25" strokeLinecap="round" />
      <defs>
        <linearGradient id="a1sol" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="a2sol" x1="11.25" y1="6" x2="11.25" y2="12.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function SolIconAr2() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="7" y="2.5" width="6" height="4.5" rx="1" stroke="url(#b1sol)" strokeWidth="1.25" />
      <rect x="2.5" y="13" width="4.5" height="4.5" rx="1" stroke="url(#b2sol)" strokeWidth="1.25" />
      <rect x="13" y="13" width="4.5" height="4.5" rx="1" stroke="url(#b3sol)" strokeWidth="1.25" />
      <path d="M10 7V10M5 13V10H15V13" stroke="url(#b4sol)" strokeWidth="1.25" strokeLinecap="round" />
      <defs>
        <linearGradient id="b1sol" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="b2sol" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="b3sol" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="b4sol" x1="10" y1="7" x2="10" y2="13" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function SolIconAr3() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 5V10C3 14.18 6.04 17.62 10 18C13.96 17.62 17 14.18 17 10V5L10 2Z" stroke="url(#d1sol)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10L9 12L13 8" stroke="url(#d2sol)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="d1sol" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
        <linearGradient id="d2sol" x1="10" y1="8" x2="10" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9" /><stop offset="1" stopColor="#86A3F9" /></linearGradient>
      </defs>
    </svg>
  );
}

function SolutionCardAr({ title, description, SvgIcon, visible, delay }: {
  title: string; description: string; SvgIcon: () => React.ReactElement; visible: boolean; delay: number;
}) {
  return (
    <div
      className="sol-glass-card-ar backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] border-solid flex-1 overflow-clip rounded-[16px] relative p-7 text-right"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.97)',
        transition: `opacity 1s ease ${delay}ms, transform 1s cubic-bezier(0.34,1.4,0.64,1) ${delay}ms`
      }}
    >
      <div className="sol-glass-glow-ar" />
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/10 bg-black/70 mr-">
        <SvgIcon />
      </div>
      <h3 className="text-[18px] font-semibold leading-[24px] text-[#fafafa] font-['Cairo',sans-serif]">{title}</h3>
      <p className="mt-4 text-[14px] leading-[23px] text-[#73798c] font-['Cairo',sans-serif]">{description}</p>
    </div>
  );
}

function Section5Ar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.intersectionRatio >= 0.3) { setStarted(true); observer.disconnect(); } },
      { threshold: [0.1, 0.2, 0.3] }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { title: 'الأتمتة الذكية', description: 'قلّل العمل اليدوي وسرّع العمليات باستخدام الأتمتة المدعومة بالذكاء الاصطناعي.', Icon: SolIconAr1 },
    { title: 'تتبع الأصول بالبلوك تشين', description: 'أنشئ سجلات رقمية موثوقة وغير قابلة للعبث للأصول وسلاسل الإمداد.', Icon: SolIconAr2 },
    { title: 'بنية تحتية رقمية آمنة', description: 'منصة مصممة لحماية البيانات الحساسة وضمان استمرارية الأعمال.', Icon: SolIconAr3 },
  ];

  return (
    <div ref={ref} className="absolute h-[584px] left-0 right-0 top-[2366px]" data-name="Section">
      <style>{`
        @keyframes solLabelUpAr3 { from { opacity: 0; transform: translateY(16px); filter: blur(4px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes solHeadingUpAr3 { from { opacity: 0; transform: translateY(20px); filter: blur(5px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .sol-label-ar3 { opacity: 0; }
        .sol-label-ar3.go { animation: solLabelUpAr3 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .sol-heading-ar3 { opacity: 0; }
        .sol-heading-ar3.go { animation: solHeadingUpAr3 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; }
        .sol-glass-card-ar { cursor: pointer; position: relative; }
        .sol-glass-glow-ar {
          position: absolute; inset: 0; border-radius: 16px; pointer-events: none;
          background: radial-gradient(ellipse at 50% 0%, rgba(53,98,233,0.15) 0%, rgba(134,163,249,0.06) 50%, transparent 70%);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .sol-glass-card-ar:hover .sol-glass-glow-ar { opacity: 1; }
        .sol-glass-card-ar:hover { border-color: rgba(134,163,249,0.4) !important; }
      `}</style>
      <div className="absolute blur-[50px] inset-[37.1%_-6.4%_9.17%_80.45%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 392.36 392.36\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.744 0 0 27.744 196.18 196.18)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />

      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#3562e9] text-[12px] text-center top-[168px] tracking-[1.2px] uppercase w-[81.155px] sol-label-ar3${started ? ' go' : ''}`}>
        <p className="leading-[16px]">الحلول</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+0.47px)] not-italic text-[#fafafa] text-[48px] text-center top-[240px] tracking-[-1.2px] w-[500px] sol-heading-ar3${started ? ' go' : ''}`}>
        <p className="mb-0">
          <span className="leading-[52px]">حلول </span>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.682deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>حديثة</span>
        </p>
        <p className="leading-[52px]">للمؤسسات</p>
      </div>

      <div className="absolute" style={{ top: 352, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, padding: '0 48px' }}>
          {cards.map(({ title, description, Icon }, i) => (
            <SolutionCardAr key={title} title={title} description={description} SvgIcon={Icon} visible={started} delay={200 + i * 150} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section6 — Platform cards (hover accordion, RTL) ─────────────────────────

function PlatformCardImageAr({ src }: { src: string }) {
  return (
    <div className="absolute aspect-[213/119.81] left-0 right-0 top-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={src} />
      </div>
    </div>
  );
}

function PlatformCardBorderAr({ src }: { src: string }) {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[121.81px] left-[28px] overflow-clip right-[28px] rounded-[12px] top-[28px]">
      <PlatformCardImageAr src={src} />
    </div>
  );
}

function PlatformCardAr({ tx, active, onMouseEnter, onMouseLeave, inset, label, title, desc, src, iconSvg, animDelay = 0 }: {
  tx?: number; active?: boolean; onMouseEnter?: () => void; onMouseLeave?: () => void;
  inset: string; label: string; title: string; desc: string; src: string; iconSvg: React.ReactElement; animDelay?: number;
}) {
  return (
    <div
      className="absolute platform-card-ar backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid overflow-clip rounded-[16px]"
      style={{
        inset,
        transform: `translateX(${tx ?? 0}px)`,
        transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease',
        zIndex: active ? 10 : 1,
        borderColor: active ? 'rgba(53,98,233,0.4)' : undefined,
        boxShadow: active ? '0 0 40px -10px rgba(53,98,233,0.35)' : undefined
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[451px] left-[-7px] overflow-clip right-[-227px] rounded-[24px] top-[-22px]">
        <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
        <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)]" />
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(138.246deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
      </div>
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" style={{ backgroundImage: "linear-gradient(122.422deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" />
      <PlatformCardBorderAr src={src} />
      {/* Icon */}
      <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid right-[28px] rounded-[12px] size-[44px] top-[169.81px]">
        {iconSvg}
      </div>
      {/* Label */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[15px] justify-center leading-[0] right-[28px] not-italic text-[#3562e9] text-[10px] top-[237.31px] tracking-[1px] uppercase w-[140px]">
        <p className="leading-[15px]">{label}</p>
      </div>
      {/* Title */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[43px] justify-center leading-[24px] left-[28px] not-italic text-[#fafafa] text-[16px] top-[272.5px] tracking-[-0.4px] w-[210px]">
        <p className="leading-[24px]">{title}</p>
      </div>
      {/* Description */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[85.25px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[335px] w-[210px]">
        <p>{desc}</p>
      </div>
    </div>
  );
}

function PlatformCardIcon1() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2.5A7.5 7.5 0 1 0 17.5 10" stroke="url(#a1)" strokeWidth="1.25" strokeLinecap="round"/>
        <path d="M10 6v4l2.5 2.5" stroke="url(#a2)" strokeWidth="1.25" strokeLinecap="round"/>
        <defs>
          <linearGradient id="a1" x1="10" y1="2.5" x2="10" y2="17.5">
            <stop stopColor="#3562E9"/>
            <stop offset="1" stopColor="#86A3F9"/>
          </linearGradient>
          <linearGradient id="a2" x1="10" y1="6" x2="10" y2="12.5">
            <stop stopColor="#3562E9"/>
            <stop offset="1" stopColor="#86A3F9"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PlatformCardIcon2() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="7" y="2" width="6" height="5" rx="1" stroke="url(#b1)" strokeWidth="1.25"/>
        <rect x="2" y="13" width="5" height="5" rx="1" stroke="url(#b2)" strokeWidth="1.25"/>
        <rect x="13" y="13" width="5" height="5" rx="1" stroke="url(#b3)" strokeWidth="1.25"/>
        <path d="M10 7v3M5 13v-3h10v3" stroke="url(#b4)" strokeWidth="1.25" strokeLinecap="round"/>
        <defs>
          <linearGradient id="b1" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          <linearGradient id="b2" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          <linearGradient id="b3" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          <linearGradient id="b4" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PlatformCardIcon3() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="3" stroke="url(#c1)" strokeWidth="1.25"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
          stroke="url(#c2)" strokeWidth="1.25" strokeLinecap="round"/>
        <defs>
          <linearGradient id="c1" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          <linearGradient id="c2" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PlatformCardIcon4() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2L3 5v5c0 4.18 3.04 7.62 7 8 3.96-.38 7-3.82 7-8V5l-7-3z"
          stroke="url(#d1)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4"
          stroke="url(#d2)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="d1" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          <linearGradient id="d2" x1="10" y1="2" x2="10" y2="18"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PlatformSectionAr() {
  const [hovered, setHovered] = useState<number | null>(null);
  const GAP = 130;

  function tx(idx: number): number {
    if (hovered === null) return 0;
    const splitIndex = hovered === 3 ? 2 : hovered;
    const shift = idx > splitIndex ? GAP : 0;
    return shift - (GAP / 2);
  }

  const props = (idx: number) => ({
    tx: tx(idx),
    active: hovered === idx,
    onMouseEnter: () => setHovered(idx),
    onMouseLeave: () => setHovered(null),
  });

  const cards = [
    { inset: '35.1% 54.5% 16.56% 27.45%', label: 'الأتمتة', title: 'أتمتة العمليات الذكية', desc: 'تحويل العمليات التقليدية إلى سير عمل ذكية تعمل بشكل أسرع وأكثر كفاءة.', src: imgIntelligentProcessAutomation, iconSvg: <PlatformCardIcon1 /> },
    { inset: '35.1% 46.69% 16.56% 35.25%', label: 'البلوك تشين', title: 'بنية بلوك تشين المؤسسية', desc: 'تسجيل وتتبع الأصول والمعاملات في بيئة رقمية شفافة وآمنة.', src: imgEnterpriseBlockchainInfrastructure, iconSvg: <PlatformCardIcon2 /> },
    { inset: '35.1% 38.88% 16.56% 43.06%', label: 'الذكاء الاصطناعي', title: 'الذكاء الاصطناعي المتقدم', desc: 'نماذج ذكاء اصطناعي مخصصة لتحسين القرارات وتشغيل الأنظمة التنبؤية.', src: imgAdvancedArtificialIntelligence, iconSvg: <PlatformCardIcon3 /> },
    { inset: '35.1% 31.08% 16.56% 50.86%', label: 'الأمن الرقمي', title: 'الأمن الرقمي المتقدم', desc: 'حماية متعددة الطبقات للأصول الرقمية والبيانات الحساسة مع صفر ثقة.', src: imgAdvancedDigitalSecurity, iconSvg: <PlatformCardIcon4 /> },
  ];

  return (
    <div onMouseLeave={() => setHovered(null)} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <div style={{
        pointerEvents: 'auto',
    
      }}>
        
        {cards.map((card, i) => (
          <PlatformCardAr key={card.label} {...card} {...props(i)} />
        ))}
      </div>
    </div>
  );
}

function Section6Ar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.01, rootMargin: '0px 0px -80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute h-[889px] left-0 right-0 top-[1477px]" data-name="Section">
      <style>{`
        @keyframes platformWordUpAr {
          from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .platform-word-ar { opacity: 0; }
        .platform-word-ar.go { animation: platformWordUpAr 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
        .platform-card-ar {
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease;
          cursor: pointer;
        }
      `}</style>
      <img alt="" className="absolute inset-0 max-w-none object-contain opacity-15 pointer-events-none size-full" src={imgSection2} />
      <div className="absolute inset-[0_0_0.19px_0] opacity-40" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 888.81\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 53.329 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] opacity-50 left-[-99.8px] rounded-[9999px] size-[448.41px] top-[271.54px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 448.41 448.41\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(31.707 0 0 31.707 224.21 224.21)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />

      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[104px] tracking-[1.2px] uppercase w-[75.225px]">
        <p className={`leading-[16px] platform-word-ar${started ? ' go' : ''}`} style={{ animationDelay: '0ms' }}>المنصة</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+2.17px)] not-italic text-[#fafafa] text-[48px] text-center top-[176px] tracking-[-1.2px] w-[600px]">
        <p className="mb-0">
          <span className={`leading-[52px] platform-word-ar${started ? ' go' : ''}`} style={{ display: 'inline-block', animationDelay: '200ms' }}>منصة واحدة. </span>
          <span className={`bg-clip-text leading-[52px] text-[transparent] platform-word-ar${started ? ' go' : ''}`} style={{ display: 'inline-block', backgroundImage: "linear-gradient(142.581deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)", animationDelay: '400ms' }}>
            متكاملة
          </span>
        </p>
        <p className="leading-[52px]">
          <span className={`platform-word-ar${started ? ' go' : ''}`} style={{ display: 'inline-block', animationDelay: '600ms' }}>وقوية.</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.55px)] not-italic text-[#73798c] text-[18px] text-center top-[254px] w-[520px]">
        <p className={`leading-[28px] platform-word-ar${started ? ' go' : ''}`} style={{ animationDelay: '800ms' }}>أنظمة أذكى. حماية أقوى. عمليات أسرع.</p>
      </div>
      <PlatformSectionAr />
    </div>
  );
}

// ─── Contact CTA section (Section) — same as English ─────────────────────────

function ContactCTASectionAr() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute h-[500px] left-0 right-0 top-[5469px]" data-name="Section">
      <style>{`
        @keyframes ctaWordZoomAr {
          from { opacity: 0; transform: scale(0.7) translateY(16px); filter: blur(4px); }
          to   { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .cta-word-ar { opacity: 0; display: inline-block; }
        .cta-word-ar.go { animation: ctaWordZoomAr 0.6s cubic-bezier(0.34,1.4,0.64,1) forwards; }
      `}</style>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(53,98,233,0.12), transparent 70%)" }} />
      <div className="mx-auto max-w-[900px] text-center" style={{ position: 'relative', paddingTop: 100 }}>
        <p className="mb-4 text-center text-[12px] font-semibold uppercase tracking-[1.2px] text-[#3562e9] font-['Cairo',sans-serif]">التواصل</p>
        <h2 className="text-[48px] font-bold leading-[1.1] tracking-[-1.2px] text-[#fafafa] font-['Cairo',sans-serif]">
          <span className={`cta-word-ar${visible ? ' go' : ''}`} style={{ animationDelay: '80ms' }}>لنبتكر </span>
          <span className={`cta-word-ar${visible ? ' go' : ''} bg-clip-text text-transparent`} style={{ animationDelay: '180ms', backgroundImage: "linear-gradient(145deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)" }}>المستقبل</span>
          <br />
          <span className={`cta-word-ar${visible ? ' go' : ''} bg-clip-text text-transparent`} style={{ animationDelay: '280ms', backgroundImage: "linear-gradient(145deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)" }}>معًا</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[560px] text-[18px] leading-[28px] text-[#73798c] font-['Cairo',sans-serif]">
          تواصل مع فريق MTechnology لاكتشاف كيف يمكن لمنصتنا أن تساعد مؤسستك على الأتمتة والحماية والتوسع بثقة.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="relative overflow-hidden rounded-[12px] h-[46px] px-6 text-white cursor-pointer font-['Cairo',sans-serif]"
            style={{
              background: 'linear-gradient(-45deg, #3562e9, #6b8fff, #86a3f9, #3562e9)',
              backgroundSize: '300% 300%',
              animation: 'demoGradientAr 3s ease infinite',
              boxShadow: '0 0 18px 4px rgba(53,98,233,0.5)',
              transition: 'transform 0.2s ease',
            }}
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function HomeArabicRTL({ onRequestDemo, hideHeader }: HomeProps) {
  return (
 <div
  dir="rtl"
  className="relative w-full"
  style={{
    minHeight: '5974px',   // 👈 change here
    overflowX: 'hidden',
    backgroundColor: 'rgb(11, 11, 15)',
    fontFamily: "'Cairo', 'Inter', sans-serif"
  }}
>
      {/* Section order matches English exactly */}
      <ContactCTASectionAr />   {/* Section  — CTA (top-level "Section") */}
      <Section1Ar />             {/* Section1 — Vision */}
      <Section2Ar />             {/* Section2 — Partners */}
      <Section3Ar />             {/* Section3 — Industries */}
      <Section4Ar />             {/* Section4 — Why Us */}
      <Section5Ar />             {/* Section5 — Solutions */}
      <Section6Ar />             {/* Section6 — Platform */}
      <Section7Ar />             {/* Section7 — About */}
      <Section8Ar />             {/* Section8 — Hero */}
    </div>
  );
}
