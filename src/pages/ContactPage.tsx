import { useState, useEffect } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';
import svgPaths from '../imports/svg-f8utp0ibvw';
import "../styles/fonts.css";
/* ─── Translations Dictionary ─── */
const translations = {
  en: {
    contact: "Contact",
    h1Part1: "Let's Innovate the ",
    h1Part2: "Future Together",
    desc: "Contact the mTech team to discover how our platform can help your organization automate, secure, and scale with confidence.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Saudi Arabia",
    phoneLabel: "Phone",
    formTitle: "Send us a message",
    nameLabel: "Name",
    namePh: "Your name",
    emailPh: "your@email.com",
    orgLabel: "Organization",
    orgPh: "Your company",
    msgLabel: "Message",
    msgPh: "Your message...",
    sendBtn: "Send Message",
    sendingBtn: "Sending...",
    successTitle: "Message Sent!",
    successDesc: "We'll get back to you soon."
  },
  ar: {
    contact: "اتصل بنا",
    h1Part1: "دعونا نبتكر ",
    h1Part2: "المستقبل معاً",
    desc: "تواصل مع فريق إم تيك لاكتشاف كيف يمكن لمنصتنا مساعدة مؤسستك على الأتمتة، التأمين، والتوسع بثقة.",
    emailLabel: "البريد الإلكتروني",
    locationLabel: "الموقع",
    locationValue: "المملكة العربية السعودية",
    phoneLabel: "الهاتف",
    formTitle: "أرسل لنا رسالة",
    nameLabel: "الاسم",
    namePh: "اسمك",
    emailPh: "بريدك@email.com",
    orgLabel: "المؤسسة",
    orgPh: "شركتك",
    msgLabel: "الرسالة",
    msgPh: "اكتب رسالتك هنا...",
    sendBtn: "إرسال الرسالة",
    sendingBtn: "جاري الإرسال...",
    successTitle: "تم إرسال الرسالة!",
    successDesc: "سنرد عليك قريباً."
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
          [dir="rtl"] .wa-fab {
            right: auto;
            left: 24px;
          }
        }
      `}</style>
      <a className="wa-fab" href="https://wa.me/96557773787" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

export default function ContactPage() {
  const[lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });
  const t = translations[lang];

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const[submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const[started, setStarted] = useState(false);

  // Sync language with global state so it responds to Footer or Header clicks instantly
  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang((localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
    };
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  },[]);
  
  // ✅ ADD THIS: Apply Arabic font when lang changes
useEffect(() => {
  if (lang === 'ar') {
    document.body.style.fontFamily = "'Cairo', sans-serif";
    document.body.dir = 'rtl';
  } else {
    document.body.style.fontFamily = ''; // keep your existing English font
    document.body.dir = 'ltr';
  }
}, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(timer);
  },[]);

  const handleRequestDemo = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    else setIsDemoModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6a7a539a-cc83-433c-82f7-4131ee5c7aee',
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', organization: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (err) {
      console.error('Form error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden" 
      style={{ backgroundColor: 'rgb(11,11,15)' }}
      dir={lang === 'ar' ? 'rtl' : 'ltr'} /* Automatically switches text direction */
    >
      <style>{`[data-name="Header"] { display: none !important; }

        @keyframes contactLabelIn { from { opacity:0; letter-spacing:6px; } to { opacity:1; letter-spacing:1.2px; } }
        @keyframes contactFadeUp  { from { opacity:0; transform:translateY(32px); filter:blur(6px); } to { opacity:1; transform:translateY(0); filter:blur(0); } }
        @keyframes contactCardIn  { from { opacity:0; transform:translateX(${lang === 'ar' ? '28px' : '-28px'}); filter:blur(4px); } to { opacity:1; transform:translateX(0); filter:blur(0); } }
        @keyframes contactFormIn  { from { opacity:0; transform:translateY(40px) scale(0.97); filter:blur(6px); } to { opacity:1; transform:translateY(0) scale(1); filter:blur(0); } }
        @keyframes contactShimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .contact-shimmer {
          background-size: 200% auto !important;
          animation: contactShimmer 3s linear 1.2s infinite !important;
        }

        .c-label{opacity:0;} .c-h1{opacity:0;} .c-desc{opacity:0;} .c-form{opacity:0;}
        .c-label.go  { animation: contactLabelIn 0.7s ease forwards; }
        .c-h1.go     { animation: contactFadeUp  1s   cubic-bezier(0.22,1,0.36,1) forwards; animation-delay:100ms; }
        .c-desc.go   { animation: contactFadeUp  0.9s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay:220ms; }
        .c-card-0.go { animation: contactCardIn  0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay:320ms; }
        .c-card-1.go { animation: contactCardIn  0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay:430ms; }
        .c-card-2.go { animation: contactCardIn  0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay:540ms; }
        .c-form.go   { animation: contactFormIn  1s   cubic-bezier(0.22,1,0.36,1) forwards; animation-delay:180ms; }

        .info-card { transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; }
        .info-card:hover { border-color:rgba(53,98,233,0.35)!important; box-shadow:0 0 30px -8px rgba(53,98,233,0.3); transform:translateX(${lang === 'ar' ? '-4px' : '4px'}); }

        @keyframes btnGradient { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes btnShimmer  { 0%{transform:translateX(${lang === 'ar' ? '150%' : '-150%'}) skewX(-20deg);} 25%,100%{transform:translateX(${lang === 'ar' ? '-250%' : '250%'}) skewX(-20deg);} }
        .btn-send {
          background: linear-gradient(-45deg, #3562e9, #6b8fff, #86a3f9, #3562e9);
          background-size: 300% 300%;
          animation: btnGradient 3s ease infinite;
          box-shadow: 0 0 18px 4px rgba(53,98,233,0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          overflow: hidden; position: relative;
        }
        .btn-send:hover { box-shadow:0 0 32px 10px rgba(134,163,249,0.6); transform:scale(1.02); }
        .btn-send-shimmer { position:absolute; inset:0; pointer-events:none; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent); animation:btnShimmer 3s ease infinite; }
        .c-input-wrap { transition: border-color 0.2s ease; }
        .c-input-wrap:focus-within { border-color: rgba(53,98,233,0.5) !important; }
        ::placeholder { color: #3d4155; }
      `}</style>

      <WhatsAppButton />
      <FunctionalHeader onRequestDemo={handleRequestDemo} />

      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[[12.8,960.72,1.34,28],[1133.3,295.57,1.69,20],[174.09,716.45,2.91,21],[360.33,318.06,2.32,20],[802,832.08,2.03,29],[845.75,824.24,3.55,21],[865.23,792.64,3.58,31],[662.21,234.11,3.97,20],[637.83,433.53,1.02,21],[41.23,576.3,1.14,40],[155.95,652.42,1.11,26],[744.67,685.46,2.16,41]].map(([left,top,size,opacity],i) => (
          <div key={i} className="absolute bg-[rgba(53,98,233,0.3)] rounded-full" style={{left:`${left}px`,top:`${top}px`,width:`${size}px`,height:`${size}px`,opacity:opacity/100}} />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-[700px] opacity-40 pointer-events-none z-0"
        style={{background:'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(53,98,233,0.15), transparent)'}} />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-8 lg:px-12 pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 lg:pb-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Side: Information */}
          <div>
            <p className={`c-label${started ? ' go' : ''} font-semibold text-[#3562e9] text-[14px] md:text-[16px] tracking-[1.2px] uppercase mb-3`}>
              {t.contact}
            </p>
            <h1 className={`c-h1${started ? ' go' : ''} font-bold leading-[1.15] md:leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] text-[#fafafa] mb-4 text-[32px] md:text-[40px] lg:text-[44px]`}>
              {t.h1Part1}
              <span className="contact-shimmer bg-clip-text text-transparent block md:inline" style={{backgroundImage:'linear-gradient(121.362deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)'}}>
                {t.h1Part2}
              </span>
            </h1>
            <p className={`c-desc${started ? ' go' : ''} text-[#73798c] leading-[24px] md:leading-[26px] mb-8 text-[14px] md:text-[15px]`}>
              {t.desc}
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: t.emailLabel, value:'info@mtechnology.sa', cls:'c-card-0', icon:(
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p17070980} stroke="url(#ei1)" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d={svgPaths.p120c8200} stroke="url(#ei2)" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="ei1" x1="8" y1="2.667" x2="8" y2="13.333" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                      <linearGradient id="ei2" x1="8" y1="4.667" x2="8" y2="8.664" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                    </defs>
                  </svg>
                )},
                { label: t.locationLabel, value: t.locationValue, cls:'c-card-1', icon:(
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p14548f00} stroke="url(#li1)" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d={svgPaths.p17781bc0} stroke="url(#li2)" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="li1" x1="8" y1="1.333" x2="8" y2="14.667" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                      <linearGradient id="li2" x1="8" y1="4.667" x2="8" y2="8.667" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                    </defs>
                  </svg>
                )},
                
                { label: t.phoneLabel, value:'096557773787', cls:'c-card-2', icon:(
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <clipPath id="cp1"><rect fill="white" height="16" width="16"/></clipPath>
                    <g clipPath="url(#cp1)"><path d={svgPaths.p2a44c680} stroke="url(#ph1)" strokeLinecap="round" strokeLinejoin="round"/></g>
                    <defs>
                      <linearGradient id="ph1" x1="8.038" y1="1.333" x2="8.038" y2="14.619" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                    </defs>
                  </svg>
                )},
              ].map(({ label, value, cls, icon }) => (
                <div key={label}
                  className={`${cls}${started ? ' go' : ''} info-card backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] h-[64px] flex items-center px-4 md:px-5 gap-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 rounded-[12px] pointer-events-none"
                    style={{backgroundImage: `linear-gradient(${lang === 'ar' ? '-170.687deg' : '170.687deg'}, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)`}} />
                  <div className="bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[12px] w-[40px] h-[40px] flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div className="relative">
                    <p className="font-semibold text-[#73798c] text-[10px] tracking-[1px] uppercase mb-0.5">{label}</p>
                    <p className="font-medium text-[#fafafa] text-[13px] md:text-[14px]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div id="contact-form" className={`c-form${started ? ' go' : ''}`}>
            <div className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 md:p-6 lg:p-8 overflow-hidden">
              <div className="absolute -translate-x-1/2 bg-[rgba(53,98,233,0.1)] blur-[60px] left-1/2 rounded-full pointer-events-none" style={{width:'320px',height:'320px',top:'-160px'}} />
              <div className="absolute inset-0 rounded-[16px] pointer-events-none" style={{backgroundImage: `linear-gradient(${lang === 'ar' ? '-131.923deg' : '131.923deg'}, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 50%)`}} />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 md:py-16 gap-4 relative">
                  <div className="bg-gradient-to-r from-[#3562e9] to-[#86a3f9] rounded-full w-14 h-14 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-semibold text-[#fafafa] text-[18px] tracking-[-0.45px]">{t.successTitle}</h3>
                  <p className="text-[#73798c] text-[14px] text-center">{t.successDesc}</p>
                </div>
              ) : (
                <div className="relative">
                  <h2 className="font-semibold text-[#fafafa] text-[18px] md:text-[20px] tracking-[-0.45px] text-center mb-6">{t.formTitle}</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                      { name:'name', label: t.nameLabel, type:'text', placeholder: t.namePh, required:true },
                      { name:'email', label: t.emailLabel, type:'email', placeholder: t.emailPh, required:true },
                      { name:'organization', label: t.orgLabel, type:'text', placeholder: t.orgPh, required:false },
                    ].map(({ name, label, type, placeholder, required }) => (
                      <div key={name}>
                        <label className="block font-semibold text-[#73798c] text-[11px] md:text-[12px] tracking-[1.2px] uppercase mb-2">{label}</label>
                        <div className="c-input-wrap backdrop-blur-[2px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[12px] h-[44px] md:h-[48px] overflow-hidden relative">
                          <input type={type} name={name} value={(formData as any)[name]} onChange={handleChange}
                            required={required} placeholder={placeholder}
                            className={`w-full h-full bg-transparent border-none outline-none px-4 text-[#fafafa] text-[14px] md:text-[15px] relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`} />
                        </div>
                      </div>
                    ))}
                    <div>
                      <label className="block font-semibold text-[#73798c] text-[11px] md:text-[12px] tracking-[1.2px] uppercase mb-2">{t.msgLabel}</label>
                      <div className="c-input-wrap backdrop-blur-[2px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[12px] overflow-hidden relative">
                        <textarea name="message" value={formData.message} onChange={handleChange}
                          required rows={4} placeholder={t.msgPh}
                          className={`w-full bg-transparent border-none outline-none px-4 py-3 text-[#fafafa] text-[14px] md:text-[15px] resize-none relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`} />
                      </div>
                    </div>
                    <button type="submit" disabled={loading}
                      className="btn-send h-[44px] md:h-[48px] w-full rounded-[12px] cursor-pointer flex items-center justify-center gap-2 mt-2">
                      <div className="btn-send-shimmer" />
                      <span className="font-medium text-[14px] md:text-[15px] text-white tracking-[0.35px] relative z-10">{loading ? t.sendingBtn : t.sendBtn}</span>
                      {!loading && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`relative z-10 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`}>
                          <path d="M3.33333 8H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                          <path d={svgPaths.p1d405500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                        </svg>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="mt-8 md:mt-12"><Footer /></div>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}