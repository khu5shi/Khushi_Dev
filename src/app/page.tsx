'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import LiveStats from '@/components/sections/LiveStats';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import ContactWhatsApp from '@/components/sections/ContactWhatsApp';
import Footer from '@/components/layout/Footer';
import WhatsAppModal from '@/components/modals/WhatsAppModal';
import ResumeModal from '@/components/modals/ResumeModal';
import FloatingWhatsApp from '@/components/modals/FloatingWhatsApp';

export default function Home() {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppPresetId, setWhatsAppPresetId] = useState<string>('hire');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenWhatsApp = (presetId: string = 'hire') => {
    setWhatsAppPresetId(presetId);
    setWhatsAppModalOpen(true);
  };

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  return (
    <main className="relative min-h-screen">
      
      {/* Fixed Sticky Header */}
      <Navbar 
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenResume={handleOpenResume}
      />

      {/* Main Sections */}
      <div className="flex flex-col">
        <Hero 
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenResume={handleOpenResume}
        />
        
        <LiveStats />
        
        <Projects />
        
        <Skills />
        
        <Experience />
        
        <ContactWhatsApp 
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenResume={handleOpenResume}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Trigger */}
      <FloatingWhatsApp 
        onOpen={handleOpenWhatsApp}
      />

      {/* Interactive Modals */}
      <WhatsAppModal 
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        initialPresetId={whatsAppPresetId}
      />

      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </main>
  );
}
