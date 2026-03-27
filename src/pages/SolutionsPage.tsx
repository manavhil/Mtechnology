import { useState } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import Solutions from '../imports/Solutions';

export default function SolutionsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const handleRequestDemo = () => setIsDemoModalOpen(true);
  const handleCloseModal = () => setIsDemoModalOpen(false);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <style>{`[data-name="Header"] { display: none !important; }`}</style>
      <FunctionalHeader onRequestDemo={handleRequestDemo} />
      <Solutions onRequestDemo={handleRequestDemo} />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseModal} />
  
    </div>
  );
}