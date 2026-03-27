import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/logom.png';

interface FunctionalHeaderProps {
  onRequestDemo: () => void;
}

/* ─── Translations Dictionary ─── */
const translations = {
  en: {
    home: 'Home',
    platform: 'Platform',
    solutions: 'Solutions',
    about: 'About Us',
    contact: 'Contact Us',
    requestDemo: 'Request a Demo'
  },
  ar: {
    home: 'الرئيسية',
    platform: 'المنصة',
    solutions: 'الحلول',
    about: 'من نحن',
    contact: 'اتصل بنا',
    requestDemo: 'اطلب عرضاً'
  }
};

export function FunctionalHeader({ onRequestDemo }: FunctionalHeaderProps) {
  const[isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Language state (Persisted in localStorage)
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });

  const t = translations[lang];

  // Apply RTL/LTR globally and dispatch event when language changes
  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    window.dispatchEvent(new Event('languageChange'));
  }, [lang]);

  // Handle external language changes (e.g., from Footer)
  useEffect(() => {
    const handleGlobalLangChange = () => {
      const storedLang = (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
      if (storedLang !== lang) setLang(storedLang);
    };
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  },[menuOpen]);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[]);

  const changeLanguage = (newLang: 'en' | 'ar') => {
    setLang(newLang);
    setLangDropdownOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `nav-glow-link font-['Inter:Medium',sans-serif] font-medium text-[14px] whitespace-nowrap tracking-[-0.1504px] transition-all ${
      isActive(path) ? 'text-[#86a3f9] active-glow' : 'text-[#fafafa]'
    }`;

  const mobileNavLinks =[
    { to: '/', label: t.home },
    { to: '/platform', label: t.platform },
    { to: '/solutions', label: t.solutions },
    { to: '/company', label: t.about },
    { to: '/contact', label: t.contact },
  ];

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
          box-shadow: 0 0 18px 4px rgba(53,98,233,0.45);
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
          animation: demoShimmer 3s ease infinite;
        }
        .nav-glow-link {
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }
        .nav-glow-link:hover {
          color: #86a3f9 !important;
          text-shadow: 0 0 10px rgba(53,98,233,0.9), 0 0 20px rgba(134,163,249,0.5), 0 0 40px rgba(134,163,249,0.2);
        }
        .active-glow {
          text-shadow: 0 0 8px rgba(134,163,249,0.5);
        }

        /* Hamburger lines */
        .ham-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fafafa;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease, width 0.3s ease;
          transform-origin: center;
        }
        .ham-open .ham-line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .ham-open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* Full-screen overlay */
        @keyframes overlayIn {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes overlayOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-16px); }
        }
        @keyframes mobileNavItemIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          background: rgba(8, 8, 12, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
        }
        .mobile-overlay.entering {
          animation: overlayIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .mobile-overlay.leaving {
          animation: overlayOut 0.28s ease forwards;
        }

        .mobile-nav-item {
          opacity: 0;
          animation: mobileNavItemIn 0.4s cubic-bezier(0.22,1,0.36,1) forwards;
          width: 100%;
          text-align: center;
        }
        .mobile-nav-item:nth-child(1) { animation-delay: 0.08s; }
        .mobile-nav-item:nth-child(2) { animation-delay: 0.14s; }
        .mobile-nav-item:nth-child(3) { animation-delay: 0.20s; }
        .mobile-nav-item:nth-child(4) { animation-delay: 0.26s; }
        .mobile-nav-item:nth-child(5) { animation-delay: 0.32s; }
        .mobile-nav-item:nth-child(6) { animation-delay: 0.40s; }
        .mobile-nav-item:nth-child(7) { animation-delay: 0.48s; }

        .mobile-nav-link {
          display: block;
          padding: 18px 32px;
          font-size: 26px;
          font-weight: 600;
          letter-spacing: -0.5px;
          color: #c8cfe0;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #86a3f9;
        }
        .mobile-nav-link.active::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #3562e9;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-demo-btn { display: none !important; }
          .desktop-lang-toggle { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .mobile-overlay { display: none !important; }
        }
      `}</style>

      {/* ── Desktop + Mobile Header bar ── */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.5)]' : ''
        }`}
        style={{ width: '1152px', maxWidth: 'calc(100vw - 32px)', transform: 'translateZ(0)', isolation: 'isolate' }}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div
          className="bg-[rgba(0,0,0,0.4)] backdrop-blur-md flex h-[74px] items-center justify-between px-8 rounded-[9999px]"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' as const }}
        >
          <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.08)] inset-0 pointer-events-none rounded-[9999px]" />

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 relative z-10">
            <img src={logo} alt="Company Logo" className="h-26 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation — centered */}
          <nav className="desktop-nav absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>{t.home}</Link>
            <Link to="/platform" className={navLinkClass('/platform')}>{t.platform}</Link>
            <Link to="/solutions" className={navLinkClass('/solutions')}>{t.solutions}</Link>
            <Link to="/company" className={navLinkClass('/company')}>{t.about}</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>{t.contact}</Link>
          </nav>

          {/* Right Action Container (Language Dropdown + Demo Button) */}
          <div className="flex items-center gap-4 shrink-0 relative z-10">
            
            {/* Desktop Language Dropdown */}
            <div className="desktop-lang-toggle relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-[10px] hover:bg-[rgba(255,255,255,0.06)] transition-colors text-[#c8cfe0] hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span className="text-[13px] font-semibold mt-[1px]">{lang === 'en' ? 'EN' : 'AR'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {langDropdownOpen && (
                <div className={`absolute top-full mt-2 w-32 bg-[rgba(11,11,15,0.95)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl py-1 z-50 ${lang === 'ar' ? 'left-0' : 'right-0'}`}>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-start px-4 py-2.5 text-[13px] font-medium transition-colors ${lang === 'en' ? 'text-[#86a3f9] bg-[rgba(53,98,233,0.1)]' : 'text-[#c8cfe0] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`w-full text-start px-4 py-2.5 text-[13px] font-medium transition-colors ${lang === 'ar' ? 'text-[#86a3f9] bg-[rgba(53,98,233,0.1)]' : 'text-[#c8cfe0] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'}`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Request Demo Button */}
            <Link
              to="/contact"
              className="desktop-demo-btn btn-req-demo shrink-0 h-[40px] px-6 rounded-[10px] cursor-pointer flex items-center"
            >
              <div className="btn-req-shimmer" />
              <p className="relative z-10 font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white whitespace-nowrap tracking-[-0.1504px]">
                {t.requestDemo}
              </p>
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              className={`hamburger-btn flex flex-col gap-[6px] items-center justify-center w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] cursor-pointer transition-colors hover:bg-[rgba(53,98,233,0.12)] ${menuOpen ? 'ham-open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      {menuOpen && (
        <div className="mobile-overlay entering" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div
            className="absolute pointer-events-none"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(53,98,233,0.12) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -60%)',
            }}
          />

          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {mobileNavLinks.map(({ to, label }) => (
              <div key={to} className="mobile-nav-item">
                <Link
                  to={to}
                  className={`mobile-nav-link${isActive(to) ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </div>
            ))}

            {/* Mobile Language Toggle */}
            <div className="mobile-nav-item mt-4">
              <div className="inline-flex bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full p-1 backdrop-blur-md">
                <button
                  onClick={() => setLang('ar')}
                  className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all ${
                    lang === 'ar' ? 'bg-[#3562e9] text-white' : 'text-[#73798c] hover:text-white'
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all ${
                    lang === 'en' ? 'bg-[#3562e9] text-white' : 'text-[#73798c] hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Mobile CTA button */}
            <div className="mobile-nav-item" style={{ marginTop: '24px', padding: '0 32px', width: '100%', maxWidth: '320px' }}>
              <Link
                to="/contact"
                className="btn-req-demo flex items-center justify-center h-[52px] w-full rounded-[14px] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <div className="btn-req-shimmer" />
                <span className="relative z-10 font-medium text-[16px] text-white tracking-[-0.15px]">
                  {t.requestDemo}
                </span>
              </Link>
            </div>
          </nav>

          <p
            style={{
              position: 'absolute',
              bottom: '32px',
              fontSize: '12px',
              color: '#3d4155',
              letterSpacing: '0.5px',
              fontWeight: 500,
            }}
          >
            © 2026 MTechnology
          </p>
        </div>
      )}
    </>
  );
}