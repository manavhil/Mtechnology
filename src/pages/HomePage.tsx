import { useState, useEffect, useRef } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { Footer } from '../components/shared/Footer';
import { DemoModal } from '../components/shared/DemoModal';
import { Toast } from '../components/shared/Toast';
import { useToast } from '../hooks/useToast';
import Home from '../imports/Home';
import HomeMobile from '../imports/HomeMobile';

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
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          animation: wa-pulse 2.5s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .wa-fab:hover { transform: scale(1.12); }
      `}</style>
      <a
        className="wa-fab"
        href="https://wa.me/18008324600"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  // true when viewport < 1024px → render mobile layout
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 1024
  );

  const handleRequestDemo = () => setIsDemoModalOpen(true);
  const handleCloseModal = () => setIsDemoModalOpen(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleFooterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const linkText = target.textContent?.trim();
      if (linkText && (linkText.includes('Privacy Policy') || linkText.includes('Terms of Service'))) {
        e.preventDefault();
        showToast(`${linkText} - Coming soon!`);
      }
    };
    document.addEventListener('click', handleFooterClick);
    return () => document.removeEventListener('click', handleFooterClick);
  }, [showToast]);

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
      <style>{`[data-name="Header"] { display: none !important; }`}</style>

      {/* WhatsApp FAB — fixed bottom-right, always visible */}
      <WhatsAppButton />

      <FunctionalHeader onRequestDemo={handleRequestDemo} />

      {isMobile ? (
        /* ── MOBILE (<1024px): purpose-built responsive layout ── */
        <>
          <HomeMobile onRequestDemo={handleRequestDemo} />
          <Footer />
        </>
      ) : (
        /* ── DESKTOP (≥1024px): original canvas + shared Footer below it ──
           The Home canvas has its own internal Footer at top:6100px inside
           a height:6000px container — it gets clipped. We hide it via CSS
           and render the shared Footer outside the canvas instead. */
        <>
          <style>{`[data-name="Footer"] { display: none !important; }`}</style>
          <Home onRequestDemo={handleRequestDemo} />
          <Footer />
        </>
      )}

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseModal} />
      <Toast message={toast.message} isVisible={toast.isVisible} onClose={hideToast} />
    </div>
  );
}