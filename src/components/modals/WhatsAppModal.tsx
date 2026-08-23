'use client';

import React, { useState, useEffect } from 'react';
import { FiX, FiSend, FiBriefcase, FiCode, FiHelpCircle, FiCoffee, FiMessageSquare, FiCheck, FiCopy, FiExternalLink } from 'react-icons/fi';
import { portfolioConfig } from '@/config/portfolio.config';
import { generateWhatsAppUrl, formatWhatsAppMessage } from '@/utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPresetId?: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  initialPresetId = 'hire',
}: WhatsAppModalProps) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(initialPresetId);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const preset = portfolioConfig.inquiryPresets.find(p => p.id === initialPresetId) || portfolioConfig.inquiryPresets[0];
      setSelectedPresetId(preset.id);
      setCustomMessage(preset.defaultMessage);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialPresetId]);

  if (!isOpen) return null;

  const selectedPreset = portfolioConfig.inquiryPresets.find(p => p.id === selectedPresetId) || portfolioConfig.inquiryPresets[0];

  const handlePresetSelect = (preset: typeof portfolioConfig.inquiryPresets[0]) => {
    setSelectedPresetId(preset.id);
    setCustomMessage(preset.defaultMessage);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <FiBriefcase className="w-4 h-4" />;
      case 'Code2': return <FiCode className="w-4 h-4" />;
      case 'HelpCircle': return <FiHelpCircle className="w-4 h-4" />;
      case 'Coffee': return <FiCoffee className="w-4 h-4" />;
      default: return <FiMessageSquare className="w-4 h-4" />;
    }
  };

  const fullMessage = formatWhatsAppMessage({
    senderName,
    senderEmail,
    inquiryType: selectedPreset.label,
    customMessage: customMessage || selectedPreset.defaultMessage,
  });

  const handleLaunchWhatsApp = () => {
    const url = generateWhatsAppUrl(portfolioConfig.personal.whatsappNumber, fullMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(fullMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        <div className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
          <h3 className="text-lg font-medium text-black dark:text-white">Direct Connect</h3>
          <button onClick={onClose} className="p-2 text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-3">Topic</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioConfig.inquiryPresets.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePresetSelect(preset)}
                    className={`flex items-center gap-3 p-3 rounded border text-sm text-left transition-colors ${
                      isSelected
                        ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                        : 'border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-muted dark:text-dark-muted hover:border-light-muted dark:hover:border-dark-muted'
                    }`}
                  >
                    {getIcon(preset.icon)}
                    <span className="truncate font-medium">{preset.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-1.5">Name <span className="text-light-muted dark:text-dark-muted text-xs font-normal">(Optional)</span></label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-1.5">Organization <span className="text-light-muted dark:text-dark-muted text-xs font-normal">(Optional)</span></label>
              <input
                type="text"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-1.5">Message</label>
            <textarea
              rows={4}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white resize-none"
            />
          </div>

          <div className="p-4 rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">Preview</span>
              <button onClick={handleCopyMessage} className="text-xs flex items-center gap-1 text-black dark:text-white">
                {copied ? <FiCheck className="w-3 h-3" /> : <FiCopy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-xs text-black dark:text-white opacity-80">
              {fullMessage}
            </pre>
          </div>
        </div>

        <div className="p-6 border-t border-light-border dark:border-dark-border flex justify-end gap-3 bg-light-surface dark:bg-dark-surface">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-black dark:text-white hover:opacity-70 transition-opacity">
            Cancel
          </button>
          <button onClick={handleLaunchWhatsApp} className="px-4 py-2 text-sm font-medium rounded bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 hover:opacity-90 transition-opacity">
            <FiSend className="w-4 h-4" />
            <span>Open WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
