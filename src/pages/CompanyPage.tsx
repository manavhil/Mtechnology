import { useState } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';
import Company from '../imports/Company';

export default function CompanyPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const handleRequestDemo = () => setIsDemoModalOpen(true);
  const handleCloseModal = () => setIsDemoModalOpen(false);

  return (
    <div>
      <style>{`[data-name="Header"] { display: none !important; }`}</style>
      <FunctionalHeader onRequestDemo={handleRequestDemo} />
      <Company onRequestDemo={handleRequestDemo} />
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseModal} />
      
    </div>
  );
}