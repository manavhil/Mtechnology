import { useState } from 'react';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';
import Blogs from '../imports/Blogs';

export default function BlogPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const handleRequestDemo = () => setIsDemoModalOpen(true);
  const handleCloseModal = () => setIsDemoModalOpen(false);

  return (
    <div style={{ overflow: 'hidden', backgroundColor: 'rgb(11,11,15)' }}>
      <style>{`[data-name="Header"] { display: none !important; }`}</style>
      <FunctionalHeader onRequestDemo={handleRequestDemo} />
      <Blogs onRequestDemo={handleRequestDemo} />
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseModal} />
    </div>
  );
}