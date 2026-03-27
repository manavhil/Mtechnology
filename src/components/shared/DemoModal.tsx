import { useState, useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
        onClose();
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-[90%] max-w-[600px] bg-[#0b0b0f] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-8 shadow-[0px_20px_60px_-10px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-[#73798c] hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] text-[#fafafa] mb-2 tracking-[-0.75px]">
              Request a Demo
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#73798c] mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fafafa] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[8px] px-4 py-3 text-[#fafafa] font-['Inter:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#3562e9] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fafafa] mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[8px] px-4 py-3 text-[#fafafa] font-['Inter:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#3562e9] transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fafafa] mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[8px] px-4 py-3 text-[#fafafa] font-['Inter:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#3562e9] transition-colors"
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fafafa] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[8px] px-4 py-3 text-[#fafafa] font-['Inter:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#3562e9] transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3562e9] to-[#86a3f9] h-[48px] rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[16px] text-white cursor-pointer hover:shadow-[0px_0px_30px_-6px_rgba(53,98,233,0.8)] transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="mb-6 flex justify-center">
              <div className="bg-gradient-to-r from-[#3562e9] to-[#86a3f9] rounded-full p-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] text-[#fafafa] mb-3 tracking-[-0.75px]">
              Thank You!
            </h3>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#73798c]">
              Your demo request has been received. Our team will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}