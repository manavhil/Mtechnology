import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading && !fadeOut) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-[#0b0b0f] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo/Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3562e9] to-[#86a3f9] rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-[#3562e9] to-[#86a3f9] rounded-full p-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#fafafa] tracking-[-0.4px]">
            MTechnology
          </h2>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#3562e9] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#3562e9] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#3562e9] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
