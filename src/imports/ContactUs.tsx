import { useState, useEffect } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';
import svgPaths from '../imports/svg-f8utp0ibvw';

export default function ContactPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

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
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full min-h-screen" style={{ backgroundColor: 'rgb(11,11,15)' }}>
      <style>{`
        [data-name="Header"] { display: none !important; }

        @keyframes contactLabelIn { from { opacity:0; letter-spacing:6px; } to { opacity:1; letter-spacing:1.2px; } }
        @keyframes contactFadeUp  { from { opacity:0; transform:translateY(32px); filter:blur(6px); } to { opacity:1; transform:translateY(0); filter:blur(0); } }
        @keyframes contactCardIn  { from { opacity:0; transform:translateX(-28px); filter:blur(4px); } to { opacity:1; transform:translateX(0); filter:blur(0); } }
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
        .info-card:hover { border-color:rgba(53,98,233,0.35)!important; box-shadow:0 0 30px -8px rgba(53,98,233,0.3); transform:translateX(4px); }

        @keyframes btnGradient { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes btnShimmer  { 0%{transform:translateX(-150%) skewX(-20deg);} 25%,100%{transform:translateX(250%) skewX(-20deg);} }
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

        /* ── Responsive grid ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .contact-wrap { padding: 160px 48px 60px; }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 36px; }
          .contact-wrap { padding: 100px 32px 48px; }
          .c-h1 { font-size: 36px !important; }
        }
        @media (max-width: 600px) {
          .contact-wrap { padding: 90px 16px 40px; }
          .c-h1 { font-size: 28px !important; }
          .c-desc { font-size: 14px !important; }
        }
      `}</style>

      <FunctionalHeader onRequestDemo={handleRequestDemo} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[[12.8,960.72,1.34,28],[1133.3,295.57,1.69,20],[174.09,716.45,2.91,21],[360.33,318.06,2.32,20],[802,832.08,2.03,29],[845.75,824.24,3.55,21],[865.23,792.64,3.58,31],[662.21,234.11,3.97,20],[637.83,433.53,1.02,21],[41.23,576.3,1.14,40],[155.95,652.42,1.11,26],[744.67,685.46,2.16,41]].map(([left,top,size,opacity],i) => (
          <div key={i} className="absolute bg-[rgba(53,98,233,0.3)] rounded-full" style={{left:`${left}px`,top:`${top}px`,width:`${size}px`,height:`${size}px`,opacity:opacity/100}} />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-[700px] opacity-40 pointer-events-none"
        style={{background:'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(53,98,233,0.15), transparent)'}} />

      <div className="contact-wrap relative" style={{maxWidth:'1100px', margin:'0 auto'}}>
        <div className="contact-grid">

          {/* Left */}
          <div>
            <p className={`c-label${started ? ' go' : ''} font-semibold text-[#3562e9] text-[16px] tracking-[1.2px] uppercase mb-3`}>Contact</p>
            <h1 className={`c-h1${started ? ' go' : ''} font-bold leading-[1.1] tracking-[-1.5px] text-[#fafafa] mb-4`} style={{fontSize:'44px'}}>
              {"Let's Innovate the "}
              <span className="contact-shimmer bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(121.362deg, rgb(53,98,233) 0%, rgb(134,163,249) 100%)'}}>
                Future Together
              </span>
            </h1>
            <p className={`c-desc${started ? ' go' : ''} text-[#73798c] leading-[26px] mb-6`} style={{fontSize:'15px'}}>
              Contact the mTech team to discover how our platform can help your organization automate, secure, and scale with confidence.
            </p>

            <div className="flex flex-col gap-2">
              {[
                { label:'Email', value:'info@mtechnology.sa', cls:'c-card-0', icon:(
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p17070980} stroke="url(#ei1)" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d={svgPaths.p120c8200} stroke="url(#ei2)" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="ei1" x1="8" y1="2.667" x2="8" y2="13.333" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                      <linearGradient id="ei2" x1="8" y1="4.667" x2="8" y2="8.664" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                    </defs>
                  </svg>
                )},
                { label:'Location', value:'Global Operations', cls:'c-card-1', icon:(
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p14548f00} stroke="url(#li1)" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d={svgPaths.p17781bc0} stroke="url(#li2)" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="li1" x1="8" y1="1.333" x2="8" y2="14.667" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                      <linearGradient id="li2" x1="8" y1="4.667" x2="8" y2="8.667" gradientUnits="userSpaceOnUse"><stop stopColor="#3562E9"/><stop offset="1" stopColor="#86A3F9"/></linearGradient>
                    </defs>
                  </svg>
                )},
                { label:'Phone', value:'+9655777378', cls:'c-card-2', icon:(
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
                  className={`${cls}${started ? ' go' : ''} info-card backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] h-[64px] flex items-center px-5 gap-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 rounded-[12px] pointer-events-none"
                    style={{backgroundImage:'linear-gradient(170.687deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)'}} />
                  <div className="bg-black border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[12px] size-[40px] flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div className="relative">
                    <p className="font-semibold text-[#73798c] text-[10px] tracking-[1px] uppercase mb-1">{label}</p>
                    <p className="font-medium text-[#fafafa] text-[14px]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div id="contact-form" className={`c-form${started ? ' go' : ''}`}>
            <div className="relative backdrop-blur-[12px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-6 overflow-hidden">
              <div className="absolute -translate-x-1/2 bg-[rgba(53,98,233,0.1)] blur-[60px] left-1/2 rounded-full pointer-events-none" style={{width:'320px',height:'320px',top:'-160px'}} />
              <div className="absolute inset-0 rounded-[16px] pointer-events-none" style={{backgroundImage:'linear-gradient(131.923deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 50%)'}} />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 relative">
                  <div className="bg-gradient-to-r from-[#3562e9] to-[#86a3f9] rounded-full size-14 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-semibold text-[#fafafa] text-[18px] tracking-[-0.45px]">Message Sent!</h3>
                  <p className="text-[#73798c] text-[14px] text-center">We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="relative">
                  <h2 className="font-semibold text-[#fafafa] text-[18px] tracking-[-0.45px] text-center mb-5">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {[
                      { name:'name', label:'Name', type:'text', placeholder:'Your name', required:true },
                      { name:'email', label:'Email', type:'email', placeholder:'your@email.com', required:true },
                      { name:'organization', label:'Organization', type:'text', placeholder:'Your company', required:false },
                    ].map(({ name, label, type, placeholder, required }) => (
                      <div key={name}>
                        <label className="block font-semibold text-[#73798c] text-[12px] tracking-[1.2px] uppercase mb-2">{label}</label>
                        <div className="c-input-wrap backdrop-blur-[2px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[12px] h-[40px] overflow-hidden relative">
                          <input type={type} name={name} value={(formData as any)[name]} onChange={handleChange}
                            required={required} placeholder={placeholder}
                            className="w-full h-full bg-transparent border-none outline-none px-4 text-[#fafafa] text-[14px] relative z-10" />
                        </div>
                      </div>
                    ))}
                    <div>
                      <label className="block font-semibold text-[#73798c] text-[12px] tracking-[1.2px] uppercase mb-2">Message</label>
                      <div className="c-input-wrap backdrop-blur-[2px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[12px] overflow-hidden relative">
                        <textarea name="message" value={formData.message} onChange={handleChange}
                          required rows={3} placeholder="Your message..."
                          className="w-full bg-transparent border-none outline-none px-4 py-3 text-[#fafafa] text-[14px] resize-none relative z-10" />
                      </div>
                    </div>
                    <button type="submit" disabled={loading}
                      className="btn-send h-[40px] w-full rounded-[12px] cursor-pointer flex items-center justify-center gap-2 mt-1">
                      <div className="btn-send-shimmer" />
                      <span className="font-medium text-[14px] text-white tracking-[0.35px] relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
                      {!loading && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10">
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

      <div className="mt-12"><Footer /></div>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}