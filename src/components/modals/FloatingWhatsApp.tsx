'use client';

import React, { useState, useEffect } from 'react';
import { FiMessageSquare } from 'react-icons/fi';

interface FloatingWhatsAppProps {
  onOpen: (presetId?: string) => void;
}

export default function FloatingWhatsApp({ onOpen }: FloatingWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={() => onOpen('hire')}
        className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Open WhatsApp Chat"
      >
        <FiMessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
