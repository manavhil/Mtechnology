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

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <style>{`
        @keyframes demoGradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes demoShimmer {
          0%        { transform: translateX(-150%) skewX(-20deg); }
          25%, 100% { transform: translateX(250%) skewX(-20deg); }
        }
        .btn-req-demo {
          background: linear-gradient(-45deg, #3562e9, #6b8fff, #86a3f9, #3562e9);
          background-size: 300% 300%;
          animation: demoGradient 3s ease infinite;
          box-shadow: 0 0 18px 4px rgba(53,98,233,0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          overflow: hidden;
          position: relative;
        }
        .btn-req-demo:hover {
          box-shadow: 0 0 32px 10px rgba(134,163,249,0.6);
          transform: scale(1.04);
        }
        .btn-req-shimmer {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          animation: demoShimmer 3s ease infinite;
        }
      `}</style>
      <div onClick={onClick} className="btn-req-demo flex-[1_0_0] h-[40px] min-h-px min-w-px rounded-[10px] cursor-pointer" data-name="Button">
        <div className="btn-req-shimmer" />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[103.62px] not-italic text-[14px] text-center text-white top-[10px] tracking-[-0.1504px] whitespace-nowrap" style={{position:'relative',zIndex:1}}>Request a Demo</p>
      </div>
    </>
  );
}

function Container({ onRequestDemo }: { onRequestDemo?: () => void }) {
  return (
    <div className="absolute h-[40px] left-[910.88px] top-[17px] w-[208.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button onClick={onRequestDemo} />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.422px] cursor-pointer" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[28.5px] not-italic text-[#86a3f9] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[61.539px] cursor-pointer nav-glow-btn transition-all" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[31px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap nav-glow-text">Platform</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[61.539px] cursor-pointer nav-glow-btn transition-all" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[31px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap nav-glow-text">Solutions</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67px] cursor-pointer nav-glow-btn transition-all" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap nav-glow-text">About Us</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82px] cursor-pointer nav-glow-btn transition-all" style={{overflow:"visible"}} data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap nav-glow-text">Contact Us</p>
      </div>
    </div>
  );
}

function Button6() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" data-name="Button" />;
}

function Navigation() {
  return (
    <div className="absolute h-[20px] left-[352.5px] top-[25px] w-[447px]" data-name="Navigation">
      <style>{`
        .nav-glow-btn { position: relative; }
        .nav-glow-text {
          transition: color 0.25s ease, text-shadow 0.25s ease;
          white-space: nowrap;
        }
        .nav-glow-btn:hover .nav-glow-text {
          color: #86a3f9 !important;
          text-shadow: 0 0 10px rgba(53,98,233,0.9), 0 0 20px rgba(134,163,249,0.5), 0 0 40px rgba(134,163,249,0.2);
        }
      `}</style>
      <style>{`
        .nav-glow-btn { position: relative; }
        .nav-glow-text { transition: color 0.25s ease, text-shadow 0.25s ease; }
        .nav-glow-btn:hover .nav-glow-text {
          color: #86a3f9 !important;
          text-shadow: 0 0 14px rgba(53,98,233,0.9), 0 0 28px rgba(134,163,249,0.5);
        }
      `}</style>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Header({ onRequestDemo }: { onRequestDemo?: () => void }) {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex h-[74px] items-center justify-between left-[168px] pl-[32.5px] pr-[32.508px] py-[0.5px] rounded-[16777200px] top-[16px] w-[1152px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="h-[69px] shrink-0 w-[61px]" data-name="image 7" />
      <Container onRequestDemo={onRequestDemo} />
      <Navigation />
    </div>
  );
}

function Overlay() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(53,98,233,0.2)] left-[80px] rounded-[12px] size-[28px] top-[calc(50%-113.5px)]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#3562e9] left-1/2 rounded-[8px] size-[10px] top-1/2" data-name="Background" />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[20px] left-[430px] right-[780px] top-[96px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[14px] top-[10px] w-[93.244px]">
        <p className="leading-[20px]">AI Automation</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[20px] left-[430px] right-[780px] top-[126px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[14px] top-[10px] w-[72.431px]">
        <p className="leading-[20px]">Blockchain</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[20px] left-[430px] right-[780px] top-[156px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[14px] top-[10px] w-[93.865px]">
        <p className="leading-[20px]">Cybersecurity</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[20px] left-[780px] right-[430px] top-[96px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[14px] top-[10px] w-[39.8px]">
        <p className="leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[20px] left-[780px] right-[430px] top-[126px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[14px] top-[10px] w-[29.908px]">
        <p className="leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[20px] left-[780px] right-[430px] top-[156px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[14px] top-[10px] w-[52.658px]">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-0 left-[1152.01px] top-[32px] w-[79.34px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[12px] top-[7.75px] w-[79.662px]">
        <p className="leading-[16px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 left-[1255.35px] top-[32px] w-[96.65px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[12px] top-[7.75px] w-[96.999px]">
        <p className="leading-[16px]">Terms of Service</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.06)] border-solid border-t h-[49px] left-[80px] right-[80px] top-[270px]" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] left-0 not-italic text-[#73798c] text-[12px] top-[39.75px] w-[237.785px]">
        <p className="leading-[16px]">© 2026 MTechnology. All rights reserved.</p>
      </div>
      <Container2 />
      <Container3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#0b0b0f] border-[rgba(255,255,255,0.06)] border-solid border-t h-[384px] left-[-3px] right-[3px] top-[6100px]" data-name="Footer">
      <div className="absolute inset-[-55px_0_55px_0]" data-name="Gradient">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1512 383">
          <path d="M0 0H1512V383H0V0Z" fill="url(#paint0_radial_1_551)" id="Gradient" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(756 438) scale(1209.6 191.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_551" r="1">
              <stop stopColor="#3562E9" stopOpacity="0.1" />
              <stop offset="0.7" stopColor="#3562E9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Overlay />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[118px] not-italic text-[#fafafa] text-[16px] top-[78px] tracking-[-0.4px] w-[101.496px]">
        <p className="leading-[24px]">MTechnology</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39.75px] justify-center leading-[22.75px] left-[80px] not-italic text-[#73798c] text-[14px] top-[130.38px] w-[292.93px]">
        <p className="mb-0">Building the infrastructure for modern digital</p>
        <p>enterprises.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[430px] not-italic text-[#3562e9] text-[12px] top-[72px] tracking-[1.2px] uppercase w-[75.225px]">
        <p className="leading-[16px]">Platform</p>
      </div>
      <Link />
      <Link1 />
      <Link2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[780px] not-italic text-[#3562e9] text-[12px] top-[72px] tracking-[1.2px] uppercase w-[71.029px]">
        <p className="leading-[16px]">Company</p>
      </div>
      <Link3 />
      <Link4 />
      <Link5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[1130px] not-italic text-[#3562e9] text-[12px] top-[72px] tracking-[1.2px] uppercase w-[84.129px]">
        <p className="leading-[16px]">Industries</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[1130px] not-italic text-[#73798c] text-[14px] top-[106px] w-[163.957px]">
        <p className="leading-[20px]">{`Logistics & Supply Chain`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[1130px] not-italic text-[#73798c] text-[14px] top-[136px] w-[128.949px]">
        <p className="leading-[20px]">Government Sector</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[1130px] not-italic text-[#73798c] text-[14px] top-[166px] w-[120.476px]">
        <p className="leading-[20px]">Financial Services</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[1130px] not-italic text-[#73798c] text-[14px] top-[196px] w-[72.531px]">
        <p className="leading-[20px]">Healthcare</p>
      </div>
      <HorizontalBorder />
      <div className="absolute h-[83px] left-[80px] top-[156px] w-[97px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.87%] left-0 max-w-none top-0 w-full" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <div className="absolute bg-[rgba(53,98,233,0.3)] h-[3.29px] left-[1048.93px] opacity-48 rounded-[9999px] top-[39.61px] w-[3.28px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[462.55px] opacity-27 rounded-[9999px] size-[1.68px] top-[557.11px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[267.21px] opacity-40 rounded-[9999px] size-[2.18px] top-[614.21px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1017.13px] opacity-57 rounded-[9999px] size-[3.87px] top-[485.07px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[15.39px] opacity-27 rounded-[9999px] size-[1.31px] top-[307.8px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[127.11px] opacity-42 rounded-[9999px] size-[3.99px] top-[413.31px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] h-[2.2px] left-[353.72px] opacity-49 rounded-[9999px] top-[240.96px] w-[2.19px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[960.32px] opacity-56 rounded-[9999px] size-[2.01px] top-[177.26px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] h-[1.96px] left-[637.88px] opacity-22 rounded-[9999px] top-[162.08px] w-[1.95px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[601.7px] opacity-33 rounded-[9999px] size-[1.55px] top-[387.99px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] h-[3.4px] left-[205.01px] opacity-40 rounded-[9999px] top-[419.95px] w-[3.41px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] h-[1.81px] left-[1335.89px] opacity-35 rounded-[9999px] top-[223.97px] w-[1.8px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[971.22px] opacity-33 rounded-[9999px] size-[3.17px] top-[214.27px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1225.18px] opacity-48 rounded-[9999px] size-[1.21px] top-[301.64px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] h-[3.43px] left-[1033.14px] opacity-39 rounded-[9999px] top-[381.97px] w-[3.44px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[521.12px] opacity-48 rounded-[9999px] size-[2.82px] top-[630.67px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1505.82px] opacity-56 rounded-[9999px] size-[2.9px] top-[404.64px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1094.72px] opacity-53 rounded-[9999px] size-[1.31px] top-[498.53px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[857.84px] opacity-58 rounded-[9999px] size-[3.22px] top-[248px]" data-name="Overlay" />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+46.95px)] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LinkButton() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @keyframes contactBtnGradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes contactBtnShimmer {
          0%        { transform: translateX(-150%) skewX(-20deg); }
          25%, 100% { transform: translateX(250%) skewX(-20deg); }
        }
        .btn-contact-us {
          background: linear-gradient(120deg, #3562e9, #6b8fff, #86a3f9, #3562e9);
          background-size: 300% 300%;
          animation: contactBtnGradient 2.8s ease infinite;
          box-shadow: 0 0 18px 4px rgba(53,98,233,0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          overflow: hidden;
          position: relative;
        }
        .btn-contact-us:hover {
          animation: contactBtnGradient 1.2s ease infinite;
          transform: scale(1.05);
          box-shadow: 0 0 32px 10px rgba(134,163,249,0.6);
        }
        .btn-contact-shimmer {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
          animation: contactBtnShimmer 3s ease infinite;
        }
      `}</style>
      <div
        onClick={() => navigate('/contact')}
        className="btn-contact-us -translate-x-1/2 absolute h-[40px] left-[calc(50%+1.48px)] rounded-[12px] top-[393px] w-[144px] cursor-pointer"
        data-name="Link → Button"
      >
        <div className="btn-contact-shimmer" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center gap-2 left-1/2 top-1/2 not-italic text-[14px] text-white tracking-[0.35px]" style={{ position: 'relative', zIndex: 1, whiteSpace: 'nowrap' }}>
          <span>Contact Us</span>
          <span>→</span>
        </div>
      </div>
    </>
  );
}

function Section() {
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

  // Split heading into individual words for staggered zoom-in
  const line1 = ["Let's", "Innovate", "the"];
  const line2 = ["Future"];
  const line3 = ["Together"];
  const allWords = [...line1, ...line2, ...line3];

  return (
    <div ref={ref} className="absolute h-[550px] left-[-12px] right-[12px] top-[5450px]" data-name="Section">
      <style>{`
        @keyframes wordZoomIn {
          from { opacity: 0; transform: scale(0.6) translateY(16px); filter: blur(4px); }
          to   { opacity: 1; transform: scale(1)   translateY(0px);  filter: blur(0); }
        }
        @keyframes contactLabelIn {
          from { opacity: 0; letter-spacing: 6px; }
          to   { opacity: 1; letter-spacing: 1.2px; }
        }
        @keyframes contactDescIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactBtnIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .contact-label { opacity: 0; }
        .contact-word  { opacity: 0; display: inline-block; }
        .contact-desc  { opacity: 0; }
        .contact-btn   { opacity: 0; }
        .contact-label.go { animation: contactLabelIn 0.7s ease forwards; }
        .contact-word.go  { animation: wordZoomIn 0.6s cubic-bezier(0.34,1.4,0.64,1) forwards; }
        .contact-desc.go  { animation: contactDescIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .contact-btn.go   { animation: contactBtnIn 0.7s cubic-bezier(0.34,1.4,0.64,1) forwards; }
      `}</style>
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 550\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 27.5 756 550)\\'><stop stop-color=\\'rgba(53,98,233,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <Container4 />
      {/* CONTACT label — letter-spacing collapses in */}
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] left-[calc(50%+1.63px)] not-italic text-[#3562e9] text-[12px] text-center top-[124.5px] tracking-[1.2px] uppercase w-[67.766px] contact-label${started ? ' go' : ''}`}
        style={{ animationDelay: '0ms' }}>
        <p className="leading-[16px]">Contact</p>
      </div>
      {/* Heading — each word zooms in staggered */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[114px] justify-center leading-[0] left-[calc(50%+1.58px)] not-italic text-[#fafafa] text-[48px] text-center top-[197px] tracking-[-1.2px] w-[551.16px]">
        <p className="mb-0" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {line1.map((w, i) => (
            <span key={w} className={`leading-[52px] contact-word${started ? ' go' : ''}`} style={{ animationDelay: `${80 + i * 100}ms` }}>{w}</span>
          ))}
          {line2.map((w, i) => (
            <span key={w} className={`bg-clip-text leading-[52px] text-[transparent] contact-word${started ? ' go' : ''}`}
              style={{ backgroundImage: "linear-gradient(145.636deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)", animationDelay: `${80 + (line1.length + i) * 100}ms` }}>{w}</span>
          ))}
        </p>
        <p style={{ display: 'flex', justifyContent: 'center' }}>
          {line3.map((w, i) => (
            <span key={w} className={`bg-clip-text leading-[56px] text-[transparent] contact-word${started ? ' go' : ''}`}
              style={{ backgroundImage: "linear-gradient(145.636deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)", animationDelay: `${80 + (line1.length + line2.length + i) * 100}ms` }}>{w}</span>
          ))}
        </p>
      </div>
      {/* Description fades up */}
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[28px] left-[calc(50%+1.58px)] not-italic text-[#73798c] text-[18px] text-center top-[311px] w-[496.52px] contact-desc${started ? ' go' : ''}`}
        style={{ animationDelay: `${80 + allWords.length * 100}ms` }}>
        <p className="mb-0">Contact the MTechnology team to discover how our</p>
        <p className="mb-0">platform can help your organization automate, secure, and</p>
        <p>scale with confidence.</p>
      </div>
      {/* Button pops in last */}
      <div className={`contact-btn${started ? ' go' : ''}`} style={{ animationDelay: `${80 + allWords.length * 100 + 200}ms` }}>
        <LinkButton />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState('');
  const fullText = 'We aim to build intelligent digital ecosystems that help organizations innovate, collaborate, and grow in a rapidly evolving digital world.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <div ref={ref} className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[370px] left-[308px] overflow-clip right-[308px] rounded-[24px] top-[115px]" data-name="Overlay+Border+OverlayBlur">
      <style>{`
        @keyframes visionFadeUp {
          from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .vision-label   { opacity: 0; }
        .vision-heading { opacity: 0; }
        .vision-label.go   { animation: visionFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0ms; }
        .vision-heading.go { animation: visionFadeUp 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 150ms; }
      `}</style>
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-1/2 rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(157.444deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#3562e9] text-[12px] text-center top-[88px] tracking-[1.2px] uppercase w-[49.059px] vision-label${started ? ' go' : ''}`}>
        <p className="leading-[16px]">Vision</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+2.28px)] not-italic text-[#fafafa] text-[48px] text-center top-[160px] tracking-[-1.2px] w-[727.159px] vision-heading${started ? ' go' : ''}`}>
        <p className="mb-0">
          <span className="leading-[52px]">{`Empowering the `}</span>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(140.408deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
            Next
          </span>
        </p>
        <p>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(140.408deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
            Generation
          </span>
          <span className="leading-[52px]">{` of Digital Enterprises`}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[28px] left-[calc(50%+0.94px)] not-italic text-[#73798c] text-[18px] text-center top-[260px] w-[664.981px]">
        <p style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{typed}<span style={{ opacity: typed.length < fullText.length ? 1 : 0, borderRight: '2px solid #86a3f9', marginLeft: '1px', animation: 'none' }}>​</span></p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[587px] left-[5px] right-[3px] top-[4882px]" data-name="Section">
      <style>{`
        @keyframes circularFloat {
          0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          25%  { transform: translate(18px, -22px) rotate(90deg) scale(1.04); }
          50%  { transform: translate(0px, -38px) rotate(180deg) scale(1.07); }
          75%  { transform: translate(-18px, -22px) rotate(270deg) scale(1.04); }
          100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
        }
        .section1-bg { animation: circularFloat 32s ease-in-out infinite; transform-origin: center center; }
      `}</style>
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full section1-bg" style={{ opacity: 0.25 }} src={imgSection} />
      <div className="absolute blur-[50px] inset-[5.62%_44.93%_13.15%_18%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 557.54 476.84\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.424 0 0 33.718 278.77 238.42)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] inset-[33.89%_8.8%_17.37%_68.96%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 334.53 286.11\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(23.655 0 0 20.231 167.27 143.05)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Group() {
  const logos = [imgImage2, imgImage71, imgImage3, imgImage4, imgImage2, imgImage71, imgImage3, imgImage4];
  return (
    <div className="absolute left-[244px] right-[244px] top-[280px]">
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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

function Section2() {
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
        @keyframes partnersUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .partners-label  { opacity: 0; }
        .partners-heading { opacity: 0; }
        .partners-marquee { opacity: 0; }
        .partners-label.go   { animation: partnersUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0ms; }
        .partners-heading.go { animation: partnersUp 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 150ms; }
        .partners-marquee.go { animation: partnersUp 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 300ms; }
      `}</style>
      <div className="absolute inset-0 opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 716\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 42.96 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%-20px)] not-italic text-[#3562e9] text-[12px] text-center top-[100px] tracking-[1.2px] uppercase w-[84.129px] partners-label${started ? ' go' : ''}`}>
        <p className="leading-[16px]">Partners</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%-20px)] not-italic text-[#fafafa] text-[48px] text-center top-[172px] tracking-[-1.2px] w-[628.81px] partners-heading${started ? ' go' : ''}`}>
        <p>
          <span className="leading-[52px]">{`Our `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3562e9] leading-[52px] text-[transparent] to-[#86a3f9]">Partners</span>
        </p>
      </div>
      <div className={`partners-marquee${started ? ' go' : ''}`}>
        <Group />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p9300c80} id="Vector" stroke="url(#paint0_linear_1_545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M14.1667 15H15" id="Vector_2" stroke="url(#paint1_linear_1_545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10 15H10.8333" id="Vector_3" stroke="url(#paint2_linear_1_545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5.83333 15H6.66667" id="Vector_4" stroke="url(#paint3_linear_1_545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_545" x1="10" x2="10" y1="1.66667" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_545" x1="14.5833" x2="14.5833" y1="15" y2="16">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_545" x1="10.4167" x2="10.4167" y1="15" y2="16">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_545" x1="6.25" x2="6.25" y1="15" y2="16">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[24.5px] rounded-[12px] size-[44px] top-1/2" data-name="Overlay+Border">
      <Svg1 />
    </div>
  );
}

function OverlayBorderOverlayBlur1({ indVisible = false, indDelay = 0 }: { indVisible?: boolean; indDelay?: number } = {}) {
  return (
    <div className={`absolute ind-fog${indVisible ? ' go' : ''} bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[352px_916px_270px_308px] overflow-clip rounded-[16px]`} style={{ animationDelay: `${indDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur2 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 right-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" data-name="Overlay+Blur" />
      <OverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] w-[167.51px]">
        <p className="leading-[20px]">{`Logistics & Supply Chain`}</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M2.5 18.3333H17.5" id="Vector" stroke="url(#paint0_linear_1_533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5 15V9.16667" id="Vector_2" stroke="url(#paint1_linear_1_533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.33333 15V9.16667" id="Vector_3" stroke="url(#paint2_linear_1_533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M11.6667 15V9.16667" id="Vector_4" stroke="url(#paint3_linear_1_533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M15 15V9.16667" id="Vector_5" stroke="url(#paint4_linear_1_533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2524ba40} id="Vector_6" stroke="url(#paint5_linear_1_533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_533" x1="10" x2="10" y1="18.3333" y2="19.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_533" x1="5.5" x2="5.5" y1="9.16667" y2="15">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_533" x1="8.83333" x2="8.83333" y1="9.16667" y2="15">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_533" x1="12.1667" x2="12.1667" y1="9.16667" y2="15">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_533" x1="15.5" x2="15.5" y1="9.16667" y2="15">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_533" x1="10" x2="10" y1="1.66667" y2="5.83333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[24.5px] rounded-[12px] size-[44px] top-1/2" data-name="Overlay+Border">
      <Svg2 />
    </div>
  );
}

function OverlayBorderOverlayBlur3({ indVisible = false, indDelay = 0 }: { indVisible?: boolean; indDelay?: number } = {}) {
  return (
    <div className={`absolute ind-fog${indVisible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[352px_612px_270px_612px] overflow-clip rounded-[16px]`} style={{ animationDelay: `${indDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur4 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 right-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" data-name="Overlay+Blur" />
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] w-[132.014px]">
        <p className="leading-[20px]">Government Sector</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur6() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p39783000} id="Vector" stroke="url(#paint0_linear_1_520)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p25499600} id="Vector_2" stroke="url(#paint1_linear_1_520)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5 10H5.00833M15 10H15.0083" id="Vector_3" stroke="url(#paint2_linear_1_520)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_520" x1="10" x2="10" y1="5" y2="15">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_520" x1="10" x2="10" y1="8.33333" y2="11.6667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_520" x1="10.0042" x2="10.0042" y1="10" y2="11">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[24.5px] rounded-[12px] size-[44px] top-1/2" data-name="Overlay+Border">
      <Svg3 />
    </div>
  );
}

function OverlayBorderOverlayBlur5({ indVisible = false, indDelay = 0 }: { indVisible?: boolean; indDelay?: number } = {}) {
  return (
    <div className={`absolute ind-fog${indVisible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[352px_308px_270px_916px] overflow-clip rounded-[16px]`} style={{ animationDelay: `${indDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur6 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 right-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" data-name="Overlay+Blur" />
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] w-[123.681px]">
        <p className="leading-[20px]">Financial Services</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur8() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2f84f400} id="Vector" stroke="url(#paint0_linear_1_516)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.paebea00} id="Vector_2" stroke="url(#paint1_linear_1_516)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_516" x1="10" x2="10" y1="2.5" y2="17.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_516" x1="9.99583" x2="9.99583" y1="7.08333" y2="12.9167">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[24.5px] rounded-[12px] size-[44px] top-1/2" data-name="Overlay+Border">
      <Svg4 />
    </div>
  );
}

function OverlayBorderOverlayBlur7({ indVisible = false, indDelay = 0 }: { indVisible?: boolean; indDelay?: number } = {}) {
  return (
    <div className={`absolute ind-fog${indVisible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[462px_916px_160px_308px] overflow-clip rounded-[16px]`} style={{ animationDelay: `${indDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur8 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 right-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" data-name="Overlay+Blur" />
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] w-[74.484px]">
        <p className="leading-[20px]">Healthcare</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur10() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p15015780} id="Vector" stroke="url(#paint0_linear_1_484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p20d10600} id="Vector_2" stroke="url(#paint1_linear_1_484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_484" x1="10" x2="10" y1="1.66838" y2="18.3316">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_484" x1="10" x2="10" y1="6.66667" y2="13.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[24.5px] rounded-[12px] size-[44px] top-1/2" data-name="Overlay+Border">
      <Svg5 />
    </div>
  );
}

function OverlayBorderOverlayBlur9({ indVisible = false, indDelay = 0 }: { indVisible?: boolean; indDelay?: number } = {}) {
  return (
    <div className={`absolute ind-fog${indVisible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[462px_612px_160px_612px] overflow-clip rounded-[16px]`} style={{ animationDelay: `${indDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur10 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 right-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" data-name="Overlay+Blur" />
      <OverlayBorder4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] w-[115.265px]">
        <p className="leading-[20px]">{`Energy & Utilities`}</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur12() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[-6.5px] overflow-clip right-[-5.5px] rounded-[24px] top-[-0.56px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(162.789deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p37143280} id="Vector" stroke="url(#paint0_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1d7f0000} id="Vector_2" stroke="url(#paint1_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="url(#paint2_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.33333 5H11.6667" id="Vector_4" stroke="url(#paint3_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.33333 8.33333H11.6667" id="Vector_5" stroke="url(#paint4_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.33333 11.6667H11.6667" id="Vector_6" stroke="url(#paint5_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.33333 15H11.6667" id="Vector_7" stroke="url(#paint6_linear_1_503)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_503" x1="10" x2="10" y1="1.66667" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_503" x1="3.33333" x2="3.33333" y1="10" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_503" x1="16.6667" x2="16.6667" y1="7.5" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_503" x1="10" x2="10" y1="5" y2="6">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_503" x1="10" x2="10" y1="8.33333" y2="9.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_503" x1="10" x2="10" y1="11.6667" y2="12.6667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_503" x1="10" x2="10" y1="15" y2="16">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[24.5px] rounded-[12px] size-[44px] top-1/2" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function OverlayBorderOverlayBlur11({ indVisible = false, indDelay = 0 }: { indVisible?: boolean; indDelay?: number } = {}) {
  return (
    <div className={`absolute ind-fog${indVisible ? ' go' : ''} backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border-[0.5px] border-[rgba(255,255,255,0.08)] border-solid inset-[462px_308px_160px_916px] overflow-clip rounded-[16px]`} style={{ animationDelay: `${indDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur12 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[20px] opacity-0 right-[-23.5px] rounded-[9999px] size-[96px] top-[-23.5px]" data-name="Overlay+Blur" />
      <OverlayBorder5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[84.5px] not-italic text-[#fafafa] text-[14px] top-[46.5px] w-[162.472px]">
        <p className="leading-[20px]">Enterprise Corporations</p>
      </div>
    </div>
  );
}

function IndustryCardHome({ label, SvgIcon, visible, delay }: { label: string; SvgIcon: React.ComponentType; visible: boolean; delay: number }) {
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
      <div className="relative bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid ml-[24px] rounded-[12px] size-[44px] flex items-center justify-center shrink-0">
        <div className="size-[20px] relative"><SvgIcon /></div>
      </div>
      <p className="relative font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fafafa] text-[14px] leading-[20px] ml-[16px] whitespace-nowrap">{label}</p>
    </div>
  );
}

function Section3() {
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

  const row1 = [
    { label: 'Logistics & Supply Chain', Icon: Svg1 },
    { label: 'Government Sector',        Icon: Svg2 },
    { label: 'Financial Services',       Icon: Svg3 },
  ];
  const row2 = [
    { label: 'Healthcare',               Icon: Svg4 },
    { label: 'Energy & Utilities',       Icon: Svg5 },
    { label: 'Enterprise Corporations',  Icon: Svg6 },
  ];

  return (
    <div ref={ref} className="absolute h-[716px] left-0 right-0 top-[3617px]" data-name="Section">
      <style>{`
        @keyframes indCardPop {
          from { opacity: 0; transform: translateY(28px) scale(0.94); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      `}</style>
      <div className="absolute inset-0 opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 716\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 42.96 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[168px] tracking-[1.2px] uppercase w-[84.129px]">
        <p className={`leading-[16px] sol-label${started ? ' go' : ''}`}>Industries</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+1.26px)] not-italic text-[#fafafa] text-[48px] text-center top-[240px] tracking-[-1.2px] w-[628.81px]">
        <p className={`mb-0 sol-heading${started ? ' go' : ''}`} style={{animationDelay:'120ms'}}>
          <span className="leading-[52px]">{`Digital Solutions for `}</span>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.93deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
            Multiple
          </span>
        </p>
        <p className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.93deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
          Industries
        </p>
      </div>

      {/* Row 1 */}
      <div className="absolute" style={{ top: 352, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, justifyContent: 'center', padding: '0 48px' }}>
          {row1.map(({ label, Icon }, i) => (
            <IndustryCardHome key={label} label={label} SvgIcon={Icon} visible={started} delay={400 + i * 130} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="absolute" style={{ top: 463, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, justifyContent: 'center', padding: '0 48px' }}>
          {row2.map(({ label, Icon }, i) => (
            <IndustryCardHome key={label} label={label} SvgIcon={Icon} visible={started} delay={530 + (2 - i) * 130} />
          ))}
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur14() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[115px] left-[-7px] overflow-clip right-[-12px] rounded-[24px] top-[-22.06px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(167.339deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_529)" id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="url(#paint0_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="url(#paint1_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_529" x1="8.00157" x2="8.00157" y1="1.33106" y2="14.6644">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_529" x1="10.3333" x2="10.3333" y1="2.66667" y2="9.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <clipPath id="clip0_1_529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[20px] rounded-[12px] size-[36px] top-1/2" data-name="Overlay+Border">
      <Svg7 />
    </div>
  );
}

function OverlayBorderOverlayBlur13() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[78px] left-[780px] overflow-clip right-[244px] rounded-[12px] top-[160px]" data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur14 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[15px] opacity-0 right-[-32px] rounded-[9999px] size-[80px] top-[-32px]" data-name="Overlay+Blur" />
      <OverlayBorder6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[72px] not-italic text-[#fafafa] text-[14px] top-[38px] w-[219.51px]">
        <p className="leading-[20px]">Accelerate digital transformation</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur16() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[115px] left-[-7px] overflow-clip right-[-12px] rounded-[24px] top-[-22.06px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(167.339deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_529)" id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="url(#paint0_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="url(#paint1_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_529" x1="8.00157" x2="8.00157" y1="1.33106" y2="14.6644">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_529" x1="10.3333" x2="10.3333" y1="2.66667" y2="9.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <clipPath id="clip0_1_529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[19px] rounded-[12px] size-[36px] top-[calc(50%-0.06px)]" data-name="Overlay+Border">
      <Svg8 />
    </div>
  );
}

function OverlayBorderOverlayBlur15() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[78px] left-[780px] overflow-clip right-[244px] rounded-[12px] top-[250px]" data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur16 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[15px] opacity-0 right-[-32px] rounded-[9999px] size-[80px] top-[-32px]" data-name="Overlay+Blur" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[72px] not-italic text-[#fafafa] text-[14px] top-[38px] w-[170.935px]">
        <p className="leading-[20px]">Strengthen cybersecurity</p>
      </div>
      <OverlayBorder7 />
    </div>
  );
}

function OverlayBorderOverlayBlur18() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[115px] left-[-7px] overflow-clip right-[-12px] rounded-[24px] top-[-22.06px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(167.339deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_529)" id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="url(#paint0_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="url(#paint1_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_529" x1="8.00157" x2="8.00157" y1="1.33106" y2="14.6644">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_529" x1="10.3333" x2="10.3333" y1="2.66667" y2="9.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <clipPath id="clip0_1_529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[20px] rounded-[12px] size-[36px] top-1/2" data-name="Overlay+Border">
      <Svg9 />
    </div>
  );
}

function OverlayBorderOverlayBlur17() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[78px] left-[780px] overflow-clip right-[244px] rounded-[12px] top-[340px]" data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur18 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[15px] opacity-0 right-[-32px] rounded-[9999px] size-[80px] top-[-32px]" data-name="Overlay+Blur" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[72px] not-italic text-[#fafafa] text-[14px] top-[38px] w-[203.308px]">
        <p className="leading-[20px]">Improve operational efficiency</p>
      </div>
      <OverlayBorder8 />
    </div>
  );
}

function OverlayBorderOverlayBlur20() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[115px] left-[-7px] overflow-clip right-[-12px] rounded-[24px] top-[-22.06px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(167.339deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_529)" id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="url(#paint0_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="url(#paint1_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_529" x1="8.00157" x2="8.00157" y1="1.33106" y2="14.6644">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_529" x1="10.3333" x2="10.3333" y1="2.66667" y2="9.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <clipPath id="clip0_1_529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[20px] rounded-[12px] size-[36px] top-1/2" data-name="Overlay+Border">
      <Svg10 />
    </div>
  );
}

function OverlayBorderOverlayBlur19() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[78px] left-[780px] overflow-clip right-[244px] rounded-[12px] top-[430px]" data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur20 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[15px] opacity-0 right-[-32px] rounded-[9999px] size-[80px] top-[-32px]" data-name="Overlay+Blur" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[72px] not-italic text-[#fafafa] text-[14px] top-[38px] w-[152.658px]">
        <p className="leading-[20px]">Build scalable systems</p>
      </div>
      <OverlayBorder9 />
    </div>
  );
}

function OverlayBorderOverlayBlur22() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[115px] left-[-7px] overflow-clip right-[-12px] rounded-[24px] top-[-22.06px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(167.339deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_529)" id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="url(#paint0_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="url(#paint1_linear_1_529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_529" x1="8.00157" x2="8.00157" y1="1.33106" y2="14.6644">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_529" x1="10.3333" x2="10.3333" y1="2.66667" y2="9.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <clipPath id="clip0_1_529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="-translate-y-1/2 absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[20px] rounded-[12px] size-[36px] top-1/2" data-name="Overlay+Border">
      <Svg11 />
    </div>
  );
}

function OverlayBorderOverlayBlur21() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[78px] left-[780px] overflow-clip right-[244px] rounded-[12px] top-[520px]" data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur22 />
      <div className="absolute bg-[rgba(53,98,233,0.05)] blur-[15px] opacity-0 right-[-32px] rounded-[9999px] size-[80px] top-[-32px]" data-name="Overlay+Blur" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[72px] not-italic text-[#fafafa] text-[14px] top-[38px] w-[281.733px]">
        <p className="leading-[20px]">Integrate easily with existing technologies</p>
      </div>
      <OverlayBorder10 />
    </div>
  );
}

function Section4() {
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
  return (
    <div ref={ref} className="absolute h-[632px] left-[-9px] right-[9px] top-[2985px]" data-name="Section">
      <style>{`
        @keyframes imgBreathe {
          0%   { opacity: 0.18; transform: scale(1) translateY(0px); }
          50%  { opacity: 0.35; transform: scale(1.07) translateY(-14px); }
          100% { opacity: 0.18; transform: scale(1) translateY(0px); }
        }
        .img-breathe { animation: imgBreathe 10s ease-in-out infinite; transform-origin: center center; }
      `}</style>
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full img-breathe" src={imgSection1} />
      <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 632\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 31.6 756 632)\\'><stop stop-color=\\'rgba(53,98,233,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] inset-[16.81%_8.4%_24.04%_61.94%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 448.41 373.87\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(31.707 0 0 26.437 224.21 186.94)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[244px] not-italic text-[#3562e9] text-[12px] top-[168px] tracking-[1.2px] uppercase w-[146.363px]">
        <p className={`leading-[16px] sol-label${started ? ' go' : ''}`}>Why MTechnology</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[154px] justify-center leading-[0] left-[244px] not-italic text-[#fafafa] text-[48px] top-[264px] tracking-[-1.2px] w-[320.536px]">
        <p className="mb-0">
          <span className="leading-[48px]">{`A `}</span>
          <span className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(124.846deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
            Competitive
          </span>
        </p>
        <p className="mb-0">
          <span className="bg-clip-text leading-[48px] text-[transparent]" style={{ backgroundImage: "linear-gradient(124.846deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
            Advantage
          </span>
          <span className="leading-[48px]">{` for`}</span>
        </p>
        <p className="leading-[48px]">Enterprises</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[244px] not-italic text-[#73798c] text-[18px] top-[374px] w-[325.197px]">
        <p className="leading-[28px]">With MTechnology, organizations can:</p>
      </div>
      <OverlayBorderOverlayBlur13 />
      <OverlayBorderOverlayBlur15 />
      <OverlayBorderOverlayBlur17 />
      <OverlayBorderOverlayBlur19 />
      <OverlayBorderOverlayBlur21 />
    </div>
  );
}

function OverlayBorderOverlayBlur24() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[239px] left-[-7px] overflow-clip right-[-172px] rounded-[24px] top-[-21.81px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(154.771deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3a2fa580} id="Vector" stroke="url(#paint0_linear_1_481)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_481" x1="10" x2="10" y1="1.6645" y2="18.3355">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur25() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[28px]" data-name="Overlay+Border+OverlayBlur">
      <Svg12 />
    </div>
  );
}

function OverlayBorderOverlayBlur23({ animDelay = 0, visible = false }: { animDelay?: number; visible?: boolean } = {}) {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[352px_940px_160px_244px] overflow-clip rounded-[16px] sol-card" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.97)', transition: `opacity 1s ease ${animDelay}ms, transform 1s cubic-bezier(0.34,1.4,0.64,1) ${animDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur24 />
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(146.36deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <OverlayBorderOverlayBlur25 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[28px] not-italic text-[#fafafa] text-[16px] top-[100px] tracking-[-0.4px] w-[163.33px]">
        <p className="leading-[24px]">Intelligent Automation</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[62.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[153.75px] w-[240.65px]">
        <p className="mb-0">Reduce manual work and accelerate</p>
        <p className="mb-0">operations using AI‑powered</p>
        <p>automation.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur27() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[244px] left-[-7px] overflow-clip right-[-172px] rounded-[24px] top-[-21.81px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(154.307deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p140c1100} id="Vector" stroke="url(#paint0_linear_1_475)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="url(#paint1_linear_1_475)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="url(#paint2_linear_1_475)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="url(#paint3_linear_1_475)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_475" x1="10" x2="10" y1="2.5" y2="17.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_475" x1="15.5" x2="15.5" y1="7.5" y2="14.1667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_475" x1="11.3333" x2="11.3333" y1="4.16667" y2="14.1667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_475" x1="7.16667" x2="7.16667" y1="11.6667" y2="14.1667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur28() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[28px]" data-name="Overlay+Border+OverlayBlur">
      <Svg13 />
    </div>
  );
}

function OverlayBorderOverlayBlur26({ animDelay = 150, visible = false }: { animDelay?: number; visible?: boolean } = {}) {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[352px_592px_160px_592px] overflow-clip rounded-[16px] sol-card" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.97)', transition: `opacity 1s ease ${animDelay}ms, transform 1s cubic-bezier(0.34,1.4,0.64,1) ${animDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur27 />
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(146.36deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <OverlayBorderOverlayBlur28 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[28px] not-italic text-[#fafafa] text-[16px] top-[100px] tracking-[-0.4px] w-[194.931px]">
        <p className="leading-[24px]">Blockchain Asset Tracking</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39.75px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[142.38px] w-[247.62px]">
        <p className="mb-0">Create trusted, tamper‑proof digital</p>
        <p>records for assets and supply chains.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur30() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[245px] left-[-7px] overflow-clip right-[-172px] rounded-[24px] top-[-21.81px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(154.215deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function Svg14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2566d000} id="Vector" stroke="url(#paint0_linear_1_512)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="url(#paint1_linear_1_512)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_512" x1="10" x2="10" y1="9.16667" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_512" x1="10" x2="10" y1="1.66667" y2="9.16667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur31() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[28px]" data-name="Overlay+Border+OverlayBlur">
      <Svg14 />
    </div>
  );
}

function OverlayBorderOverlayBlur29({ animDelay = 300, visible = false }: { animDelay?: number; visible?: boolean } = {}) {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[352px_244px_160px_940px] overflow-clip rounded-[16px] sol-card" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.97)', transition: `opacity 1s ease ${animDelay}ms, transform 1s cubic-bezier(0.34,1.4,0.64,1) ${animDelay}ms` }} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur30 />
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(146.36deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <OverlayBorderOverlayBlur31 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[28px] not-italic text-[#fafafa] text-[16px] top-[100px] tracking-[-0.4px] w-[207.443px]">
        <p className="leading-[24px]">Secure Digital Infrastructure</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39.75px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[142.38px] w-[265.129px]">
        <p className="mb-0">A platform designed to protect sensitive</p>
        <p>data and ensure business continuity.</p>
      </div>
    </div>
  );
}

function SolutionCard({ title, description, SvgIcon, visible, delay }: {
  title: string; description: string; SvgIcon: React.ComponentType;
  visible: boolean; delay: number;
}) {
  return (
    <div
      className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid overflow-clip rounded-[16px] sol-glass-card"
      style={{
        flex: 1, height: 218,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.97)',
        transition: `opacity 1s ease ${delay}ms, transform 1s cubic-bezier(0.34,1.4,0.64,1) ${delay}ms`,
      }}
    >
      <div className="sol-glass-glow" />
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[239px] left-[-7px] overflow-clip right-[-172px] rounded-[24px] top-[-21.81px]">
        <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" />
        <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" />
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(154.771deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }} />
      </div>
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" style={{ backgroundImage: "linear-gradient(146.36deg, rgba(53,98,233,0.2) 0%, rgba(53,98,233,0) 50%, rgba(53,98,233,0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" />
      <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[28px]">
        <SvgIcon />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fafafa] text-[16px] leading-[24px] left-[28px] right-[16px] top-[86px] tracking-[-0.4px]">{title}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal text-[#73798c] text-[14px] leading-[22.75px] left-[28px] right-[16px] top-[118px]">{description}</p>
    </div>
  );
}

function Section5() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.intersectionRatio >= 0.5) { setStarted(true); observer.disconnect(); } },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6] }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { title: 'Intelligent Automation',       desc: 'Reduce manual work and accelerate operations using AI‑powered automation.',       Icon: Svg12 },
    { title: 'Blockchain Asset Tracking',    desc: 'Create trusted, tamper‑proof digital records for assets and supply chains.',       Icon: Svg13 },
    { title: 'Secure Digital Infrastructure', desc: 'A platform designed to protect sensitive data and ensure business continuity.', Icon: Svg14 },
  ];

  return (
    <div ref={ref} className="absolute h-[730.25px] left-0 right-0 top-[2255px]" data-name="Section">
      <style>{`
        @keyframes solutionsSlideUp {
          from { opacity: 0; transform: translateY(40px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .sol-label  { opacity: 0; }
        .sol-heading { opacity: 0; }
        .sol-label.go  { animation: solutionsSlideUp 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0ms; }
        .sol-heading.go { animation: solutionsSlideUp 1.1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 200ms; }
        .sol-glass-card { cursor: pointer; }
        .sol-glass-glow {
          position: absolute; inset: 0; border-radius: 16px; pointer-events: none;
          background: radial-gradient(ellipse at 50% 0%, rgba(53,98,233,0.15) 0%, rgba(134,163,249,0.06) 50%, transparent 70%);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .sol-glass-card:hover .sol-glass-glow { opacity: 1; }
        .sol-glass-card:hover { border-color: rgba(134,163,249,0.4) !important; }
      `}</style>
      <div className="absolute blur-[50px] inset-[37.1%_80.45%_9.17%_-6.4%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 392.36 392.36\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.744 0 0 27.744 196.18 196.18)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#3562e9] text-[12px] text-center top-[168px] tracking-[1.2px] uppercase w-[81.155px] sol-label${started ? ' go' : ''}`}>
        <p className="leading-[16px]">Solutions</p>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+0.47px)] not-italic text-[#fafafa] text-[48px] text-center top-[240px] tracking-[-1.2px] w-[470.112px] sol-heading${started ? ' go' : ''}`}>
        <p className="mb-0">
          <span className="leading-[52px]">{`Solutions for `}</span>
          <span className="bg-clip-text leading-[52px] text-[transparent]" style={{ backgroundImage: "linear-gradient(145.682deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
            Modern
          </span>
        </p>
        <p className="leading-[52px]">Enterprises</p>
      </div>

      {/* Cards row — flex layout, no hardcoded inset */}
      <div className="absolute" style={{ top: 352, left: 0, right: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, padding: '0 48px' }}>
          {cards.map(({ title, desc, Icon }, i) => (
            <SolutionCard key={title} title={title} description={desc} SvgIcon={Icon} visible={started} delay={200 + i * 150} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return <div className="absolute h-[469.81px] left-0 top-0 w-[649px]" />;
}

function Frame3() {
  return (
    <div className="absolute h-[469.81px] left-0 top-0 w-[649px]">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[469.81px] left-0 top-0 w-[649px]">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[469.81px] left-[-20px] top-[-20px] w-[649px]">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[430px] left-[401px] top-[312px] w-[619px]">
      <Frame1 />
    </div>
  );
}

function OverlayBorderOverlayBlur33() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[451px] left-[-7px] overflow-clip right-[-227px] rounded-[24px] top-[-22px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(138.246deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function IntelligentProcessAutomation() {
  return (
    <div className="absolute aspect-[213/119.80999755859375] left-0 right-0 top-0" data-name="Intelligent Process Automation">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgIntelligentProcessAutomation} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[121.81px] left-[28px] overflow-clip right-[28px] rounded-[12px] top-[28px]" data-name="Border">
      <IntelligentProcessAutomation />
    </div>
  );
}

function Svg15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2c8a7980} id="Vector" stroke="url(#paint0_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2b2ce00} id="Vector_2" stroke="url(#paint1_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M12.5 1.66667V3.33333" id="Vector_3" stroke="url(#paint2_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M12.5 16.6667V18.3333" id="Vector_4" stroke="url(#paint3_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M1.66667 12.5H3.33333" id="Vector_5" stroke="url(#paint4_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M1.66667 7.5H3.33333" id="Vector_6" stroke="url(#paint5_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.6667 12.5H18.3333" id="Vector_7" stroke="url(#paint6_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.6667 7.5H18.3333" id="Vector_8" stroke="url(#paint7_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 1.66667V3.33333" id="Vector_9" stroke="url(#paint8_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 16.6667V18.3333" id="Vector_10" stroke="url(#paint9_linear_1_463)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_463" x1="10" x2="10" y1="3.33333" y2="16.6667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_463" x1="10" x2="10" y1="7.5" y2="12.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_463" x1="13" x2="13" y1="1.66667" y2="3.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_463" x1="13" x2="13" y1="16.6667" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_463" x1="2.5" x2="2.5" y1="12.5" y2="13.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_463" x1="2.5" x2="2.5" y1="7.5" y2="8.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_463" x1="17.5" x2="17.5" y1="12.5" y2="13.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_463" x1="17.5" x2="17.5" y1="7.5" y2="8.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_463" x1="8" x2="8" y1="1.66667" y2="3.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_463" x1="8" x2="8" y1="16.6667" y2="18.3333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur34() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[169.81px]" data-name="Overlay+Border+OverlayBlur">
      <Svg15 />
    </div>
  );
}

function OverlayBorderOverlayBlur32({ tx = 0, active = false, onMouseEnter, onMouseLeave }: { tx?: number; active?: boolean; onMouseEnter?: () => void; onMouseLeave?: () => void } = {}) {
  return (
    <div className="absolute platform-card backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[35.1%_54.5%_16.56%_27.45%] overflow-clip rounded-[16px]" style={{ transform: `translateX(${tx}px)`, transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease', zIndex: active ? 10 : 1, borderColor: active ? 'rgba(53,98,233,0.4)' : undefined, boxShadow: active ? '0 0 40px -10px rgba(53,98,233,0.35)' : undefined }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur33 />
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(122.422deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <Border />
      <OverlayBorderOverlayBlur34 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] left-[28px] not-italic text-[#3562e9] text-[10px] top-[237.31px] tracking-[1px] uppercase w-[79.021px]">
        <p className="leading-[15px]">Automation</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[43px] justify-center leading-[0] left-[28px] not-italic text-[#fafafa] text-[16px] top-[276.5px] tracking-[-0.4px] w-[210px]">
        <p className="leading-[24px]">Intelligent Process Automation</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[85.25px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[353.93px] w-[210.09px]">
        <p className="mb-0">Transform traditional processes</p>
        <p className="mb-0">into intelligent workflows that</p>
        <p className="mb-0">operate faster and more</p>
        <p>efficiently.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur36() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[451px] left-[-7px] overflow-clip right-[-227px] rounded-[24px] top-[-22px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(138.246deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function EnterpriseBlockchainInfrastructure() {
  return (
    <div className="absolute aspect-[213/119.80999755859375] left-0 right-0 top-0" data-name="Enterprise Blockchain Infrastructure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgEnterpriseBlockchainInfrastructure} />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[121.81px] left-[28px] overflow-clip right-[28px] rounded-[12px] top-[28px]" data-name="Border">
      <EnterpriseBlockchainInfrastructure />
    </div>
  );
}

function Svg16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1aa35900} id="Vector" stroke="url(#paint0_linear_1_541)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p35582b00} id="Vector_2" stroke="url(#paint1_linear_1_541)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_541" x1="14.5833" x2="14.5833" y1="2.5" y2="8.33333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_541" x1="8.33333" x2="8.33333" y1="5.83333" y2="17.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur37() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[169.81px]" data-name="Overlay+Border+OverlayBlur">
      <Svg16 />
    </div>
  );
}

function OverlayBorderOverlayBlur35({ tx = 0, active = false, onMouseEnter, onMouseLeave }: { tx?: number; active?: boolean; onMouseEnter?: () => void; onMouseLeave?: () => void } = {}) {
  return (
    <div className="absolute platform-card backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[35.1%_46.69%_16.56%_35.25%] overflow-clip rounded-[16px]" style={{ transform: `translateX(${tx}px)`, transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease', zIndex: active ? 10 : 1, borderColor: active ? 'rgba(53,98,233,0.4)' : undefined, boxShadow: active ? '0 0 40px -10px rgba(53,98,233,0.35)' : undefined }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-name="Overlay+Border+OverlayBlur">
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(122.422deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <OverlayBorderOverlayBlur36 />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <Border1 />
      <OverlayBorderOverlayBlur37 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] left-[28px] not-italic text-[#3562e9] text-[10px] top-[237.31px] tracking-[1px] uppercase w-[76.447px]">
        <p className="leading-[15px]">Blockchain</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[43.5px] justify-center leading-[24px] left-[28px] not-italic text-[#fafafa] text-[16px] top-[276.56px] tracking-[-0.4px] w-[160.614px]">
        <p className="mb-0">Enterprise Blockchain</p>
        <p>Infrastructure</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[62.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[342.56px] w-[210.747px]">
        <p className="mb-0">Securely record and track</p>
        <p className="mb-0">assets and transactions in a</p>
        <p>transparent digital environment.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur39() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[451px] left-[-7px] overflow-clip right-[-227px] rounded-[24px] top-[-22px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(138.246deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function AdvancedArtificialIntelligence() {
  return (
    <div className="absolute aspect-[213/119.80999755859375] left-0 right-0 top-0" data-name="Advanced Artificial Intelligence">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgAdvancedArtificialIntelligence} />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[121.81px] left-[28px] overflow-clip right-[28px] rounded-[12px] top-[28px]" data-name="Border">
      <AdvancedArtificialIntelligence />
    </div>
  );
}

function Svg17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p17e613c0} id="Vector" stroke="url(#paint0_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3f362a80} id="Vector_2" stroke="url(#paint1_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3fbca400} id="Vector_3" stroke="url(#paint2_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1c1c7100} id="Vector_4" stroke="url(#paint3_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p162c4500} id="Vector_5" stroke="url(#paint4_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10 10.8333H13.3333" id="Vector_6" stroke="url(#paint5_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3936ae00} id="Vector_7" stroke="url(#paint6_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10 6.66667H16.6667" id="Vector_8" stroke="url(#paint7_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p868f800} id="Vector_9" stroke="url(#paint8_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p23096600} id="Vector_10" stroke="url(#paint9_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p217ce480} id="Vector_11" stroke="url(#paint10_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p66d6d00} id="Vector_12" stroke="url(#paint11_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2a516600} id="Vector_13" stroke="url(#paint12_linear_1_488)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_488" x1="5.833" x2="5.833" y1="1.6593" y2="18.3298">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_488" x1="8.75" x2="8.75" y1="7.5" y2="10.8333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_488" x1="5.16833" x2="5.16833" y1="4.27083" y2="5.41667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_488" x1="3.14125" x2="3.14125" y1="8.75" y2="9.08">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_488" x1="4.18042" x2="4.18042" y1="14.57" y2="15">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_488" x1="11.6667" x2="11.6667" y1="10.8333" y2="11.8333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_488" x1="13.3333" x2="13.3333" y1="15" y2="17.5">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_488" x1="13.3333" x2="13.3333" y1="6.66667" y2="7.66667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_488" x1="14.1667" x2="14.1667" y1="2.5" y2="6.66667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_488" x1="13.3333" x2="13.3333" y1="10.4167" y2="11.25">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_488" x1="15" x2="15" y1="2.08333" y2="2.91667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_488" x1="16.6667" x2="16.6667" y1="17.0833" y2="17.9167">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_488" x1="16.6667" x2="16.6667" y1="6.25" y2="7.08333">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur40() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[169.81px]" data-name="Overlay+Border+OverlayBlur">
      <Svg17 />
    </div>
  );
}

function OverlayBorderOverlayBlur38({ tx = 0, active = false, onMouseEnter, onMouseLeave }: { tx?: number; active?: boolean; onMouseEnter?: () => void; onMouseLeave?: () => void } = {}) {
  return (
    <div className="absolute platform-card backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[35.1%_37.7%_16.56%_44.25%] overflow-clip rounded-[16px]" style={{ transform: `translateX(${tx}px)`, transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease', zIndex: active ? 10 : 1, borderColor: active ? 'rgba(53,98,233,0.4)' : undefined, boxShadow: active ? '0 0 40px -10px rgba(53,98,233,0.35)' : undefined }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur39 />
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(122.422deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <Border2 />
      <OverlayBorderOverlayBlur40 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] left-[28px] not-italic text-[#3562e9] text-[10px] top-[237.31px] tracking-[1px] uppercase w-[83.979px]">
        <p className="leading-[15px]">Intelligence</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[43.5px] justify-center leading-[24px] left-[28px] not-italic text-[#fafafa] text-[16px] top-[276.56px] tracking-[-0.4px] w-[140.66px]">
        <p className="mb-0">Advanced Artificial</p>
        <p>Intelligence</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[62.5px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[342.56px] w-[213.91px]">
        <p className="mb-0">Analyze data and generate</p>
        <p className="mb-0">insights that support faster and</p>
        <p>more accurate decision‑making.</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur42() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[451px] left-[-7px] overflow-clip right-[-227px] rounded-[24px] top-[-22px]" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[60px] left-[calc(50%+0.5px)] rounded-[9999px] size-[320px] top-[-160px]" data-name="Overlay+Blur" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.05)] inset-0 to-[rgba(53,98,233,0.02)] via-1/2 via-[rgba(53,98,233,0)]" data-name="Gradient" />
      <div className="absolute inset-0 rounded-[24px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(138.246deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />
    </div>
  );
}

function AdvancedDigitalSecurity() {
  return (
    <div className="absolute aspect-[213/119.80999755859375] left-0 right-0 top-0" data-name="Advanced Digital Security">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgAdvancedDigitalSecurity} />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[121.81px] left-[28px] overflow-clip right-[28px] rounded-[12px] top-[28px]" data-name="Border">
      <AdvancedDigitalSecurity />
    </div>
  );
}

function Svg18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p25fc4100} id="Vector" stroke="url(#paint0_linear_1_553)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="url(#paint1_linear_1_553)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_553" x1="10" x2="10" y1="1.66629" y2="18.3358">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_553" x1="10" x2="10" y1="8.33333" y2="11.6667">
            <stop stopColor="#3562E9" />
            <stop offset="1" stopColor="#86A3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur43() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid left-[28px] rounded-[12px] size-[44px] top-[169.81px]" data-name="Overlay+Border+OverlayBlur">
      <Svg18 />
    </div>
  );
}

function OverlayBorderOverlayBlur41({ tx = 0, active = false, onMouseEnter, onMouseLeave }: { tx?: number; active?: boolean; onMouseEnter?: () => void; onMouseLeave?: () => void } = {}) {
  return (
    <div className="absolute platform-card backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid inset-[35.1%_28.64%_16.56%_53.31%] overflow-clip rounded-[16px]" style={{ transform: `translateX(${tx}px)`, transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease', zIndex: active ? 10 : 1, borderColor: active ? 'rgba(53,98,233,0.4)' : undefined, boxShadow: active ? '0 0 40px -10px rgba(53,98,233,0.35)' : undefined }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-name="Overlay+Border+OverlayBlur">
      <OverlayBorderOverlayBlur42 />
      <div className="absolute inset-[-1px] opacity-0 rounded-[16px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(122.422deg, rgba(53, 98, 233, 0.2) 0%, rgba(53, 98, 233, 0) 50%, rgba(53, 98, 233, 0.05) 100%)" }} />
      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[35px] left-1/2 opacity-0 rounded-[9999px] size-[160px] top-[-80px]" data-name="Overlay+Blur" />
      <Border3 />
      <OverlayBorderOverlayBlur43 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] left-[28px] not-italic text-[#3562e9] text-[10px] top-[237.31px] tracking-[1px] uppercase w-[58.819px]">
        <p className="leading-[15px]">Security</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[28px] not-italic text-[#fafafa] text-[16px] top-[264.81px] tracking-[-0.4px] w-[191.008px]">
        <p className="leading-[24px]">Advanced Digital Security</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[85.25px] justify-center leading-[22.75px] left-[28px] not-italic text-[#73798c] text-[14px] top-[329.93px] w-[209.489px]">
        <p className="mb-0">A protection architecture based</p>
        <p className="mb-0">on Zero‑Trust principles</p>
        <p className="mb-0">ensuring every user and</p>
        <p>interaction is verified.</p>
      </div>
    </div>
  );
}

function AccordionCards() {
  const [active, setActive] = useState(0);

  const cards = [
    {
      label: 'AUTOMATION',
      title: 'Intelligent Process Automation',
      desc: 'Transform traditional processes into intelligent workflows that operate faster and more efficiently.',
      img: imgIntelligentProcessAutomation,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2.5A7.5 7.5 0 1 0 17.5 10" stroke="url(#a1)" strokeWidth="1.25" strokeLinecap="round"/>
          <path d="M10 6v4l2.5 2.5" stroke="url(#a2)" strokeWidth="1.25" strokeLinecap="round"/>
          <defs>
            <linearGradient id="a1" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
            <linearGradient id="a2" x1="10" y1="6" x2="10" y2="12.5" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      label: 'BLOCKCHAIN',
      title: 'Enterprise Blockchain Infrastructure',
      desc: 'Securely record assets and transactions in a transparent, tamper-proof digital environment.',
      img: imgEnterpriseBlockchainInfrastructure,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="7" y="2" width="6" height="5" rx="1" stroke="url(#b1)" strokeWidth="1.25"/>
          <rect x="2" y="13" width="5" height="5" rx="1" stroke="url(#b2)" strokeWidth="1.25"/>
          <rect x="13" y="13" width="5" height="5" rx="1" stroke="url(#b3)" strokeWidth="1.25"/>
          <path d="M10 7v3M5 13v-3h10v3" stroke="url(#b4)" strokeWidth="1.25" strokeLinecap="round"/>
          <defs>
            <linearGradient id="b1" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
            <linearGradient id="b2" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
            <linearGradient id="b3" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
            <linearGradient id="b4" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      label: 'INTELLIGENCE',
      title: 'Advanced Artificial Intelligence',
      desc: 'Analyze data and generate insights that support more accurate decision-making across your enterprise.',
      img: imgAdvancedArtificialIntelligence,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" stroke="url(#c1)" strokeWidth="1.25"/>
          <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="url(#c2)" strokeWidth="1.25" strokeLinecap="round"/>
          <defs>
            <linearGradient id="c1" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
            <linearGradient id="c2" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      label: 'SECURITY',
      title: 'Advanced Digital Security',
      desc: 'A protection architecture based on Zero-Trust principles ensuring every user and interaction is verified.',
      img: imgAdvancedDigitalSecurity,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L3 5v5c0 4.18 3.04 7.62 7 8 3.96-.38 7-3.82 7-8V5l-7-3z" stroke="url(#d1)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10l2 2 4-4" stroke="url(#d2)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="d1" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
            <linearGradient id="d2" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute" style={{ top: '340px', height: '200px', left: '518px', right: '518px' }}>
      <style>{`
        .acc-card {
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: flex 0.5s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
          flex-shrink: 0;
        }
        .acc-card.is-active {
          border-color: rgba(53,98,233,0.35);
          box-shadow: 0 16px 40px -10px rgba(53,98,233,0.3);
        }
        .acc-card img { transition: transform 0.5s ease; }
        .acc-card.is-active img { transform: scale(1.04); }
      `}</style>
      <div style={{ display: 'flex', gap: '8px', height: '100%' }}>
        {cards.map((card, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              className={`acc-card${isActive ? ' is-active' : ''}`}
              style={{ flex: isActive ? 5 : 1 }}
              onMouseEnter={() => setActive(i)}
            >
              {/* Full-cover background image */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <img src={card.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: isActive
                    ? 'linear-gradient(to top, rgba(11,11,15,0.92) 40%, rgba(11,11,15,0.3) 100%)'
                    : 'rgba(11,11,15,0.72)',
                  transition: 'background 0.5s ease'
                }} />
              </div>

              {/* Content pinned to bottom */}
              <div style={{ position: 'relative', zIndex: 1, padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minWidth: 0 }}>
                {/* Icon */}
                <div style={{ background: 'rgba(0,0,0,0.7)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: '10px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', flexShrink: 0 }}>
                  {card.icon}
                </div>
                {/* Label */}
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#3562e9', textTransform: 'uppercase' as const, marginBottom: '6px', whiteSpace: 'nowrap' as const }}>
                  {card.label}
                </p>
                {/* Title */}
                <p style={{
                  fontSize: '14px', fontWeight: 600, color: '#fafafa', lineHeight: 1.4,
                  letterSpacing: '-0.2px', marginBottom: isActive ? '10px' : 0,
                  whiteSpace: isActive ? 'normal' as const : 'nowrap' as const,
                  overflow: 'hidden', textOverflow: 'ellipsis'
                }}>
                  {card.title}
                </p>
                {/* Description — slides in when active */}
                <div style={{ overflow: 'hidden', maxHeight: isActive ? '100px' : '0', opacity: isActive ? 1 : 0, transition: 'max-height 0.45s ease, opacity 0.35s ease' }}>
                  <p style={{ fontSize: '12px', color: '#73798c', lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


function PlatformSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  // GAP is the amount of extra space pushed out to reveal the hovered card's content.
  // 130px fully reveals the text while keeping a nice overlap so cards stay stacked.
  const GAP = 130;

  function tx(idx: number): number {
    if (hovered === null) return 0;

    // Split the deck just before the hovered card (last card splits before it too)
    const splitIndex = hovered === 3 ? 2 : hovered;

    // Cards after split shift right, cards at/before split shift left
    const shift = idx > splitIndex ? GAP : 0;

    // Subtract GAP/2 to keep the group centred on screen
    return shift - (GAP / 2);
  }

  const props = (idx: number) => ({
    tx: tx(idx),
    active: hovered === idx,
    onMouseEnter: () => setHovered(idx),
    onMouseLeave: () => setHovered(null),
  });

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        <OverlayBorderOverlayBlur32 {...props(0)} />
        <OverlayBorderOverlayBlur35 {...props(1)} />
        <OverlayBorderOverlayBlur38 {...props(2)} />
        <OverlayBorderOverlayBlur41 {...props(3)} />
      </div>
    </div>
  );
}

function Section6() {
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
        @keyframes platformWordUp {
          from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .platform-word { opacity: 0; }
        .platform-word.go { animation: platformWordUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }

        .platform-card {
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.45s ease,
                      border-color 0.45s ease;
          cursor: pointer;
        }
      `}</style>
      <img alt="" className="absolute inset-0 max-w-none object-contain opacity-15 pointer-events-none size-full" src={imgSection2} />
      <div className="absolute inset-[0_0_0.19px_0] opacity-40" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 888.81\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 53.329 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] opacity-50 right-[-99.8px] rounded-[9999px] size-[448.41px] top-[271.54px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 448.41 448.41\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(31.707 0 0 31.707 224.21 224.21)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[104px] tracking-[1.2px] uppercase w-[75.225px]">
        <p className={`leading-[16px] platform-word${started ? ' go' : ''}`} style={{ animationDelay: '0ms' }}>Platform</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+2.17px)] not-italic text-[#fafafa] text-[48px] text-center top-[176px] tracking-[-1.2px] w-[549.626px]">
        <p className="mb-0">
          <span className={`leading-[52px] platform-word${started ? ' go' : ''}`} style={{ display: 'inline-block', animationDelay: '200ms' }}>{`One Platform. `}</span>
          <span className={`bg-clip-text leading-[52px] text-[transparent] platform-word${started ? ' go' : ''}`} style={{ display: 'inline-block', backgroundImage: "linear-gradient(142.581deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)", animationDelay: '400ms' }}>
            Integrated
          </span>
        </p>
        <p className="leading-[52px]">
          <span className={`platform-word${started ? ' go' : ''}`} style={{ display: 'inline-block', animationDelay: '600ms' }}>Power.</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.55px)] not-italic text-[#73798c] text-[18px] text-center top-[254px] w-[471.707px]">
        <p className={`leading-[28px] platform-word${started ? ' go' : ''}`} style={{ animationDelay: '800ms' }}>Smarter Systems. Stronger Security. Faster Operations.</p>
      </div>
      <PlatformSection />
    </div>
  );
}

function OverlayBorderOverlayBlur44() {
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

  const words1 = ['Technology', 'That'];
  const words2 = ['Redefines'];
  const words3 = ['Business'];

  const allWords = [...words1, ...words2, ...words3];

  return (
    <div
      ref={ref}
      className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[366px] left-[308px] overflow-clip right-[308px] rounded-[24px] top-[193px]"
      data-name="Overlay+Border+OverlayBlur"
    >
      <style>{`
        @keyframes wordUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
        .word-reveal { opacity: 0; }
        .word-reveal.go { animation: wordUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>

      <div className="-translate-x-1/2 absolute bg-[rgba(53,98,233,0.1)] blur-[50px] left-1/2 rounded-[9999px] size-[256px] top-[-128px]" />
      <div className="absolute bg-gradient-to-b from-[rgba(53,98,233,0.03)] inset-0 to-[rgba(53,98,233,0)]" />
      <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(157.846deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)" }} />

      {/* Label */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#3562e9] text-[12px] text-center top-[72px] tracking-[1.2px] uppercase w-[161.645px]">
        <p
          className={`leading-[16px] word-reveal${started ? ' go' : ''}`}
          style={{ animationDelay: '0ms' }}
        >
          About MTechnology
        </p>
      </div>

      {/* Headline */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[106px] justify-center leading-[0] left-[calc(50%+0.51px)] not-italic text-[#fafafa] text-[48px] text-center top-[144px] tracking-[-1.2px] w-[613.446px]">
        <p className="mb-0">
          {words1.map((w, i) => (
            <span key={i}>
              <span
                className={`leading-[52px] word-reveal${started ? ' go' : ''}`}
                style={{ display: 'inline-block', animationDelay: `${300 + i * 150}ms` }}
              >
                {w}
              </span>
              {' '}
            </span>
          ))}
          <span
            className={`bg-clip-text leading-[52px] text-[transparent] word-reveal${started ? ' go' : ''}`}
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
            className={`word-reveal${started ? ' go' : ''}`}
            style={{ display: 'inline-block', animationDelay: `${300 + (words1.length + words2.length) * 150}ms` }}
          >
            {words3[0]}
          </span>
        </p>
      </div>

      {/* Body text — fades in as one block after headline */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[28px] left-[calc(50%+0.1px)] not-italic text-[#73798c] text-[18px] text-center top-[258px] w-[666.1px] word-reveal${started ? ' go' : ''}`}
        style={{ animationDelay: `${300 + allWords.length * 150}ms` }}
      >
        <p className="mb-0">MTechnology builds advanced digital infrastructure that enables organizations</p>
        <p className="mb-0">{`to operate with greater intelligence and efficiency. We don't just build`}</p>
        <p>technology tools — we build the infrastructure for modern digital enterprises.</p>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute h-[752px] left-0 right-0 top-[725px]" data-name="Section">
      <div className="absolute blur-[50px] inset-[16.51%_51.96%_18.2%_18.42%] opacity-50 rounded-[9999px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 447.89 447.89\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(31.671 0 0 31.671 223.95 223.95)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <OverlayBorderOverlayBlur44 />
    </div>
  );
}

function Button7() {
  return <div className="absolute h-[20px] left-[344px] top-[162px] w-[56.422px]" data-name="Button" />;
}

function Container5() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1132.11px] opacity-29 rounded-[9999px] size-[1.33px] top-[41.61px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[38.25px] opacity-36 rounded-[9999px] size-[1.58px] top-[520.45px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[400.21px] opacity-28 rounded-[9999px] size-[2.57px] top-[477.05px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1261.19px] opacity-59 rounded-[9999px] size-[1.84px] top-[710.45px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1490.64px] opacity-58 rounded-[9999px] size-[1.84px] top-[181.99px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[64.94px] opacity-20 rounded-[9999px] size-[3.81px] top-[603.5px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1193.92px] opacity-43 rounded-[9999px] size-[1.31px] top-[51.5px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[695.22px] opacity-48 rounded-[9999px] size-[3.3px] top-[66.18px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1257.6px] opacity-21 rounded-[9999px] size-[3.8px] top-[488.72px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1256.94px] opacity-26 rounded-[9999px] size-[3.33px] top-[541.59px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[880.27px] opacity-54 rounded-[9999px] size-[3.13px] top-[513.19px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[476.84px] opacity-20 rounded-[9999px] size-[2.31px] top-[166.58px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1087.73px] opacity-31 rounded-[9999px] size-[2.16px] top-[831.97px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[676.87px] opacity-44 rounded-[9999px] size-[1.04px] top-[686.62px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1294.32px] opacity-51 rounded-[9999px] size-[2.13px] top-[254.95px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[852.43px] opacity-21 rounded-[9999px] size-[3.41px] top-[248.12px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1137.81px] opacity-30 rounded-[9999px] size-[2.38px] top-[110.75px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1506.31px] opacity-31 rounded-[9999px] size-[2.51px] top-[75.3px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[743.74px] opacity-20 rounded-[9999px] size-[2.46px] top-[116.63px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(53,98,233,0.3)] left-[1186.01px] opacity-59 rounded-[9999px] size-[2.06px] top-[167.92px]" data-name="Overlay" />
      <Button7 />
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-y-1/2 absolute bg-gradient-to-b from-[#3562e9] left-[16.5px] rounded-[9999px] size-[6px] to-[#86a3f9] top-1/2" data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_8px_3px_rgba(53,98,233,0.6)] size-[6px] top-1/2" data-name="Overlay+Shadow" />
    </div>
  );
}

function OverlayBorderOverlayBlur45() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid h-[30px] left-[244px] rounded-[9999px] top-[172px] w-[219.88px]" data-name="Overlay+Border+OverlayBlur">
      <Background />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[30.5px] not-italic text-[#73798c] text-[12px] top-[14.5px] w-[172.214px]">
        <p className="leading-[16px]">Infrastructure Platform — Live</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+48.01px)] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LinkButton1() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @keyframes colorBreathe {
          0%   { background-position: 0% 50%; box-shadow: 0 0 14px 2px rgba(53,98,233,0.4); }
          50%  { background-position: 100% 50%; box-shadow: 0 0 30px 8px rgba(134,163,249,0.55); }
          100% { background-position: 0% 50%; box-shadow: 0 0 14px 2px rgba(53,98,233,0.4); }
        }
        .btn-get-started {
          background: linear-gradient(120deg, #3562e9, #6b8fff, #86a3f9, #3562e9);
          background-size: 300% 300%;
          animation: colorBreathe 2.8s ease infinite;
          box-shadow: 0 0 18px 4px rgba(53,98,233,0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .btn-get-started:hover {
          animation: colorBreathe 1.2s ease infinite;
          transform: scale(1.05);
          box-shadow: 0 0 32px 10px rgba(134,163,249,0.6);
        }
        .btn-platform {
          transition: box-shadow 0.3s ease, transform 0.2s ease, border-color 0.3s ease;
        }
        .btn-platform:hover {
          box-shadow: 0 0 22px 6px rgba(53,98,233,0.55), 0 0 40px 12px rgba(134,163,249,0.25);
          border-color: rgba(134,163,249,0.7) !important;
          transform: scale(1.04);
        }
      `}</style>
      <div
        onClick={() => navigate('/contact')}
        className="btn-get-started absolute h-[40px] left-[119px] rounded-[10px] top-[495px] w-[144.01px] cursor-pointer"
        data-name="Link → Button"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[calc(50%-15.34px)] not-italic text-[14px] text-center text-white top-1/2 tracking-[0.35px] w-[81.321px]">
          <p className="leading-[20px]">Get Started</p>
        </div>
        <Svg19 />
      </div>
    </>
  );
}

function LinkButton2() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/platform')}
      className="btn-platform absolute backdrop-blur-[2px] bg-black border-[0.5px] border-[rgba(255,255,255,0.15)] border-solid h-[40px] left-[275.01px] rounded-[10px] top-[495px] w-[149.86px] cursor-pointer"
      data-name="Link → Button"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Medium',sans-serif] font-medium from-[#3562e9] h-[17px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[transparent] text-center to-[#86a3f9] top-1/2 tracking-[0.35px] w-[116.239px]">
        <p className="leading-[20px]">Explore Platform</p>
      </div>
    </div>
  );
}

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatCard({ inset, gradient, label, display }: {
  inset: string;
  gradient: string;
  label: string;
  display: (started: boolean) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ inset }} data-name="Paragraph+Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.17px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: gradient }}>
        <p className="leading-[32px] whitespace-nowrap">{display(started)}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.17px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">{label}</p>
      </div>
    </div>
  );
}

function UptimeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const whole = useCountUp(99, 1400, started);
  const [dec, setDec] = useState(0);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setDec(99), 1600);
    return () => clearTimeout(t);
  }, [started]);
  return (
    <div ref={ref} className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ flex: 1, height: 80, position: 'relative' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.17px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(124.037deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">{whole}.{dec}%</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.17px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">Uptime</p>
      </div>
    </div>
  );
}

function LatencyCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUp(10, 1200, started);
  return (
    <div ref={ref} className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] border-solid leading-[0] not-italic rounded-[12px] text-center" style={{ flex: 1, height: 80, position: 'relative' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.15px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(120.782deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">&lt;{count}ms</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.18px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">Latency</p>
      </div>
    </div>
  );
}

function ZeroTrustCard() {
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.15px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(133.636deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">{displayed || '\u00A0'}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.16px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">Architecture</p>
      </div>
    </div>
  );
}

function MonitoringCard() {
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center left-[calc(50%+0.19px)] text-[24px] text-[transparent] top-[36px]" style={{ backgroundImage: "linear-gradient(112.17deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" }}>
        <p className="leading-[32px] whitespace-nowrap">{displayed || '\u00A0'}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center left-[calc(50%+0.16px)] text-[#73798c] text-[10px] top-[65.5px] tracking-[1px] uppercase">
        <p className="leading-[15px]">Monitoring</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorderOverlayBlur() { return <UptimeCard />; }
function ParagraphOverlayBorderOverlayBlur1() { return <LatencyCard />; }
function ParagraphOverlayBorderOverlayBlur2() { return <ZeroTrustCard />; }
function ParagraphOverlayBorderOverlayBlur3() { return <MonitoringCard />; }

function HeroHeadline() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const gradientStyle = { backgroundImage: "linear-gradient(131.672deg, rgb(53, 98, 233) 0%, rgb(134, 163, 249) 100%)" };

  return (
    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[232px] justify-center leading-[0] left-[119px] not-italic text-[#fafafa] text-[72px] top-[305px] tracking-[-1.8px] w-[1412px]">
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-32px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        .hero-line-1 { animation: slideDown 0.9s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.2s; }
        .hero-line-2 { animation: slideDown 0.9s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.45s; }
      `}</style>
      <p className={`mb-0 hero-line-1`} style={{ opacity: 0 }}>
        <span className="leading-[72px]">Powering the </span>
        <span className="bg-clip-text leading-[72px] text-[transparent]" style={gradientStyle}>
          Next Generation
        </span>
      </p>
      <p className="hero-line-2 leading-[72px]" style={{ opacity: 0 }}>of Digital Operations</p>
    </div>
  );
}

function Section8() {
  return (
    <div className="absolute h-[725px] left-px right-[-1px] top-0" data-name="Section">
      <video autoPlay muted className="absolute max-w-none object-cover opacity-15 size-full" controlsList="nodownload" loop playsInline>
        <source src={heroBgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 858\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.96 0 0 51.48 756 0)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute inset-0 opacity-20" data-name="Gradient" style={{ backgroundImage: "linear-gradient(rgba(33, 35, 44, 0.5) 1.6667%, rgba(33, 35, 44, 0) 1.6667%), linear-gradient(90deg, rgba(33, 35, 44, 0.5) 1.6667%, rgba(33, 35, 44, 0) 1.6667%)" }} />
      <Container5 />
      <div className="absolute blur-[50px] opacity-49 right-[-180.55px] rounded-[9999px] size-[558.71px] top-[56.14px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 558.71 558.71\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.507 0 0 39.507 279.36 279.36)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[50px] bottom-[64.95px] left-[-96.14px] opacity-49 rounded-[9999px] size-[391.1px]" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 391.1 391.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.655 0 0 27.655 195.55 195.55)\\'><stop stop-color=\\'rgba(53,98,233,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,98,233,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <OverlayBorderOverlayBlur45 />
      <HeroHeadline />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[0] left-[119px] not-italic text-[#73798c] text-[18px] top-[419px] w-[844px]">
        <p className="leading-[28px]">Turn ideas into action with technology that accelerates efficiency, agility, and growth.</p>
      </div>
      <LinkButton1 />
      <LinkButton2 />
      <div className="absolute blur-[30px] inset-[40px_92px_151px_756px] rounded-[24px]" data-name="Blur" />
      <div style={{ position: 'absolute', top: 575, left: 372, right: 372, display: 'flex', gap: 16 }}>
        <ParagraphOverlayBorderOverlayBlur />
        <ParagraphOverlayBorderOverlayBlur1 />
        <ParagraphOverlayBorderOverlayBlur2 />
        <ParagraphOverlayBorderOverlayBlur3 />
      </div>
      <div className="absolute h-[106px] left-[122px] top-[119px] w-[117px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.38%] left-0 max-w-none top-0 w-full" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

interface HomeProps {
  onRequestDemo?: () => void;
  hideHeader?: boolean;
}

export default function HomeEnglish({ onRequestDemo, hideHeader }: HomeProps) {
  return (
    <div
      className="relative w-full"
      data-name="home"
      style={{ height: "6000px", overflowX: "hidden", backgroundColor: "rgb(11, 11, 15)" }}
    >
      {!hideHeader && <Header onRequestDemo={onRequestDemo} />}

      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}