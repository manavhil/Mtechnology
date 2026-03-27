import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/logom.png';
import imgLogo from '../../assets/b2ba6458ff60bedd391a7bf3329dfeb4e82b421a.png';

/* ─── Translations Dictionary ─── */
const translations = {
  en: {
    tagline: "Building the infrastructure for modern digital enterprises.",
    country: "Saudi Arabia",
    cities: "Riyadh - Dammam",
    platform: "Platform",
    aiAutomation: "AI Automation",
    blockchain: "Blockchain",
    cybersecurity: "Cybersecurity",
    security: "Security",
    company: "Company",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    industries: "Industries",
    logistics: "Logistics & Supply Chain",
    gov: "Government Sector",
    finance: "Financial Services",
    health: "Healthcare",
    energy: "Energy & Utilities",
    enterprise: "Enterprise Corporations",
    rights: "© 2026 MTechnology. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  },
  ar: {
    tagline: "بناء البنية التحتية للمؤسسات الرقمية الحديثة.",
    country: "المملكة العربية السعودية",
    cities: "الرياض - الدمام",
    platform: "المنصة",
    aiAutomation: "أتمتة الذكاء الاصطناعي",
    blockchain: "البلوكتشين",
    cybersecurity: "الأمن السيبراني",
    security: "الأمان",
    company: "الشركة",
    about: "من نحن",
    blog: "المدونة",
    contact: "اتصل بنا",
    industries: "الصناعات",
    logistics: "اللوجستيات وسلاسل الإمداد",
    gov: "القطاع الحكومي",
    finance: "الخدمات المالية",
    health: "الرعاية الصحية",
    energy: "الطاقة والمرافق",
    enterprise: "الشركات الكبرى",
    rights: "© 2026 إم تيكنولوجي. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة"
  }
};

export function Footer() {
  // Sync language with global state
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });

  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang((localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
    };
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  },[]);

  const t = translations[lang];

  return (
    <footer 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      style={{
        backgroundColor: '#0b0b0f',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '48px',
        paddingBottom: '24px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* 🔥 BLUE SHIMMER LINE (BACK) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1152px',
        maxWidth: 'calc(100% - 32px)',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(53,98,233,0.5) 30%, rgba(134,163,249,0.8) 50%, rgba(53,98,233,0.5) 70%, transparent)',
      }} />

      {/* Glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          maxWidth: '100%',
          height: '300px',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(53,98,233,0.14) 0%, transparent 70%)',
        }} />
      </div>

      {/* ✅ MATCH HEADER WIDTH EXACTLY */}
      <div className="footer-container">

        {/* GRID */}
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-0">
              {/* COMPANY LOGO */}
              <img
                src={companyLogo}
                alt="Logo"
                style={{
                  width: '100px',
                  height: 'auto',
                  objectFit: 'contain',
                  marginTop: '-24px',
                  marginRight: lang === 'ar' ? '0' : '8px',
                  marginLeft: lang === 'ar' ? '8px' : '0',
                  marginBottom: '-8px'
                }}
              />
            </div>

            <p style={{
              color: '#73798c',
              fontSize: '14px',
              lineHeight: '22px'
            }}>
              {t.tagline}
            </p>

            {/* Added Location Between Tagline and Vision 2030 Logo */}
            <div style={{ marginTop: '20px', marginBottom: '8px' }}>
              <p style={{ color: '#fafafa', fontSize: '14px', fontWeight: 600, margin: 0, marginBottom: '2px' }}>
                {t.country}
              </p>
              <p style={{ color: '#73798c', fontSize: '14px', margin: 0 }}>
                {t.cities}
              </p>
            </div>

            <img src={imgLogo} alt="Vision 2030" style={{
              width: '100px',
              opacity: 0.85,
              marginTop: '12px'
            }} />
          </div>

          {/* Platform */}
          <div>
            <p className="f-heading">{t.platform}</p>
            <ul className="f-list">
              {[[t.aiAutomation, '/platform#automation'],[t.blockchain, '/platform#blockchain'],[t.cybersecurity, '/platform#intelligence'],[t.security, '/platform#security']
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="f-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="f-heading">{t.company}</p>
            <ul className="f-list">
              {[[t.about, '/company'],[t.blog, '/blog'],
                [t.contact, '/contact']
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="f-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="f-heading">{t.industries}</p>
            <ul className="f-list">
              {[
                t.logistics,
                t.gov,
                t.finance,
                t.health,
                t.energy,
                t.enterprise
              ].map(item => (
                <li key={item}>
                  <span className="f-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="f-copy">
            {t.rights}
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy-policy" className="f-link small">{t.privacy}</Link>
            <Link to="/terms-of-service" className="f-link small">{t.terms}</Link>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .footer-container {
          width: 1152px;
          max-width: calc(100vw - 32px);
          margin: 0 auto;
          padding: 0 25px;
          box-sizing: border-box;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.3fr;
          gap: 120px;
          margin-bottom: 40px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          row-gap: 16px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 0 16px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
          }
        }

        .f-heading {
          color: #3562e9;
          font-size: 11px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .f-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .f-link {
          color: #73798c;
          font-size: 14px;
          text-decoration: none;
          transition: 0.25s;
        }

        .f-link:hover {
          color: #86a3f9;
        }

        .f-text {
          color: #73798c;
          font-size: 14px;
        }

        .f-copy {
          color: #4a5068;
          font-size: 12px;
          margin: 0;
        }

        .small {
          font-size: 12px;
        }
      `}</style>
    </footer>
  );
}