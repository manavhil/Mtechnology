import { useEffect } from 'react';
import Platform from '../../imports/Platform';

export function EnhancedPlatform() {
  useEffect(() => {
    // Add parallax effect to hero section
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroSection = document.querySelector('[data-name="Section"]') as HTMLElement;
      
      if (heroSection && scrolled < 644) {
        heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroSection.style.opacity = `${1 - scrolled / 644}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Platform />
      
      {/* Add subtle hover effects and interactivity via CSS */}
      <style>{`
        /* Feature card hover effects */
        [data-name*="Overlay+Border+OverlayBlur"]:has(p) {
          transition: all 0.3s ease;
        }
        
        [data-name*="Overlay+Border+OverlayBlur"]:has(p):hover {
          transform: translateY(-2px);
          border-color: rgba(53, 98, 233, 0.3) !important;
        }

        /* Image hover effects */
        [data-name="Advanced Digital Security"],
        [data-name="Advanced Artificial Intelligence"],
        [data-name="Enterprise Blockchain Infrastructure"],
        [data-name="Intelligent Process Automation"] {
          transition: transform 0.6s ease;
        }

        [data-name="Advanced Digital Security"]:hover,
        [data-name="Advanced Artificial Intelligence"]:hover,
        [data-name="Enterprise Blockchain Infrastructure"]:hover,
        [data-name="Intelligent Process Automation"]:hover {
          transform: scale(1.02);
        }

        /* Footer link hover effects */
        [data-name="Link"]:hover,
        [data-name="Container"]:has(p):hover {
          cursor: pointer;
        }

        [data-name="Link"] p:hover,
        [data-name="Container"] p:hover {
          color: #86a3f9 !important;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Add animation to particles */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        [data-name="Overlay"][style*="rounded-9999px"] {
          animation: float 6s ease-in-out infinite;
        }

        [data-name="Overlay"][style*="rounded-9999px"]:nth-of-type(2n) {
          animation-delay: -3s;
        }

        [data-name="Overlay"][style*="rounded-9999px"]:nth-of-type(3n) {
          animation-delay: -1.5s;
        }
      `}</style>
    </div>
  );
}