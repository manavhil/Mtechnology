import { useState, useEffect } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { EnhancedPlatform } from '../components/shared/EnhancedPlatform';
import { DemoModal } from '../components/shared/DemoModal';
import { Toast } from '../components/shared/Toast';
import { Footer } from '../components/shared/Footer'; // ✅ ADD THIS
import { useToast } from '../hooks/useToast';

export default function PlatformPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleRequestDemo = () => setIsDemoModalOpen(true);
  const handleCloseModal = () => setIsDemoModalOpen(false);

  useEffect(() => {
    const handleFooterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const linkText = target.textContent?.trim();

      if (
        linkText &&
        (linkText.includes('Privacy Policy') ||
         linkText.includes('Terms of Service'))
      ) {
        e.preventDefault();
        showToast(`${linkText} - Coming soon!`);
      }
    };

    document.addEventListener('click', handleFooterClick);
    return () => document.removeEventListener('click', handleFooterClick);
  }, [showToast]);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <style>{`[data-name="Header"] { display: none !important; }`}</style>

      <FunctionalHeader onRequestDemo={handleRequestDemo} />
      <EnhancedPlatform />

      {/* ✅ ADD FOOTER HERE */}
      <Footer />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseModal} />
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}