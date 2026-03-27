import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed bottom-24 right-8 z-[60] transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-[#0b0b0f] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-6 py-4 shadow-[0px_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-[#3562e9] to-[#86a3f9] rounded-full p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fafafa]">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}