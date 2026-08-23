'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiCode, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import ThemeToggle from '../common/ThemeToggle';
import { portfolioConfig } from '@/config/portfolio.config';

interface NavbarProps {
  onOpenWhatsApp: (presetId?: string) => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenWhatsApp, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'py-4 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <Link
          href="#"
          className="text-black dark:text-white font-medium tracking-tight flex items-center gap-2"
        >
          <FiCode className="w-5 h-5" />
          <span>{portfolioConfig.personal.firstName}.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => onOpenWhatsApp('hire')}
            className="text-sm font-medium text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black dark:text-white p-1"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-black dark:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-light-border dark:border-dark-border flex flex-col gap-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="text-left text-base font-medium text-black dark:text-white"
            >
              Resume
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWhatsApp('hire'); }}
              className="text-left text-base font-medium text-black dark:text-white"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
