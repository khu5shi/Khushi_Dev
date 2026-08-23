'use client';

import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { 
  FiMessageSquare, 
  FiMail, 
  FiCopy, 
  FiCheck, 
  FiDownload, 
  FiBriefcase, 
  FiCode, 
  FiHelpCircle, 
  FiCoffee,
  FiArrowRight,
  FiExternalLink,
  FiShield
} from 'react-icons/fi';
import { portfolioConfig } from '@/config/portfolio.config';

interface ContactWhatsAppProps {
  onOpenWhatsApp: (presetId?: string) => void;
  onOpenResume: () => void;
}

export default function ContactWhatsApp({ onOpenWhatsApp, onOpenResume }: ContactWhatsAppProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getPresetIcon = (icon: string) => {
    switch (icon) {
      case 'Briefcase': return <FiBriefcase className="w-5 h-5" />;
      case 'Code2': return <FiCode className="w-5 h-5" />;
      case 'HelpCircle': return <FiHelpCircle className="w-5 h-5" />;
      default: return <FiCoffee className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Direct Connect"
          subtitle="Get in touch directly via WhatsApp or Email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-base font-medium text-black dark:text-white mb-4">
              Select an inquiry type
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioConfig.inquiryPresets.map((preset) => (
                <div
                  key={preset.id}
                  onClick={() => onOpenWhatsApp(preset.id)}
                  className="bento-card p-6 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-black dark:text-white">
                      {getPresetIcon(preset.icon)}
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted">
                      {preset.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-medium text-black dark:text-white mb-2">
                    {preset.label}
                  </h4>

                  <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2">
                    {preset.defaultMessage}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-xs font-medium text-black dark:text-white">
                    <span className="flex items-center gap-1.5">
                      <FiMessageSquare className="w-3.5 h-3.5" />
                      Chat
                    </span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 mt-6 text-sm text-light-muted dark:text-dark-muted">
              <FiShield className="w-4 h-4 shrink-0 mt-0.5" />
              <p>Direct WhatsApp integration. No intermediate database stores your information.</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            
            <div className="bento-card p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <FiMessageSquare className="w-5 h-5 text-black dark:text-white" />
                <h4 className="text-base font-medium text-black dark:text-white">Quick Actions</h4>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => onOpenWhatsApp('hire')}
                  className="w-full py-3 px-4 rounded bg-black dark:bg-white text-white dark:text-black font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <FiMessageSquare className="w-4 h-4" />
                  <span>Start Chat</span>
                  <FiExternalLink className="w-3 h-3 opacity-70" />
                </button>

                <div className="pt-4 border-t border-light-border dark:border-dark-border">
                  <div className="text-xs text-light-muted dark:text-dark-muted mb-2 font-medium">
                    Email
                  </div>
                  <div className="flex items-center justify-between p-3 rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <div className="flex items-center gap-2 truncate">
                      <FiMail className="w-4 h-4 text-black dark:text-white shrink-0" />
                      <span className="text-sm truncate text-black dark:text-white">
                        {portfolioConfig.personal.email}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="text-black dark:text-white hover:text-light-muted dark:hover:text-dark-muted p-1"
                    >
                      {copiedEmail ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-light-border dark:border-dark-border mt-auto">
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="w-full py-3 px-4 rounded border border-light-border dark:border-dark-border text-black dark:text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
