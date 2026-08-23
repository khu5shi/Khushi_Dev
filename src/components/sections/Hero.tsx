'use client';

import React from 'react';
import { FiArrowDownRight, FiMessageSquare, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { portfolioConfig } from '@/config/portfolio.config';

interface HeroProps {
  onOpenWhatsApp: (presetId?: string) => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenWhatsApp, onOpenResume }: HeroProps) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black dark:text-white leading-[1.1]">
          {portfolioConfig.personal.name}
          <span className="block text-light-muted dark:text-dark-muted mt-2">
            Software Engineer.
          </span>
        </h1>
        
        <p className="mt-8 text-base md:text-lg text-light-muted dark:text-dark-muted leading-relaxed max-w-2xl font-light">
          {portfolioConfig.personal.tagline}
        </p>

        {portfolioConfig.personal.availability?.status && (
          <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-black dark:text-white">
              {portfolioConfig.personal.availability.status}
            </span>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onOpenWhatsApp('hire')}
            className="px-6 py-3 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span>Let's talk</span>
            <FiMessageSquare className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-md bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-black dark:text-white font-medium text-sm flex items-center gap-2 hover:bg-light-border dark:hover:bg-dark-border transition-colors"
          >
            <span>Resume</span>
            <FiArrowDownRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <a href={portfolioConfig.socials.github} target="_blank" rel="noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href={portfolioConfig.socials.leetcode} target="_blank" rel="noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
            <SiLeetcode className="w-5 h-5" />
          </a>
          <a href={portfolioConfig.socials.gfg} target="_blank" rel="noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
            <SiGeeksforgeeks className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioConfig.personal.email}`} className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
            <FiMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
