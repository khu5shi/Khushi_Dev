'use client';

import React, { useState, useEffect } from 'react';
import { FiX, FiDownload, FiExternalLink, FiEye } from 'react-icons/fi';
import { portfolioConfig } from '@/config/portfolio.config';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [hasPdfError, setHasPdfError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setHasPdfError(false);
      setIframeLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const pdfUrl = portfolioConfig.resume.viewUrl;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${portfolioConfig.personal.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl shadow-2xl overflow-hidden z-10 h-[90vh] flex flex-col">
        
        <div className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
              <FiEye className="w-4 h-4" />
              Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded bg-black dark:bg-white text-white dark:text-black font-medium text-xs flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded border border-light-border dark:border-dark-border text-black dark:text-white font-medium text-xs flex items-center gap-1.5 hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 ml-2 text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-light-surface dark:bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
          {!iframeLoaded && !hasPdfError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-light-muted dark:text-dark-muted">
              <div className="w-6 h-6 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin mb-4" />
              <span className="text-xs font-medium">Loading document...</span>
            </div>
          )}

          {hasPdfError ? (
            <div className="text-center p-6">
              <p className="text-sm text-black dark:text-white mb-4">
                Unable to load preview automatically.
              </p>
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded bg-black dark:bg-white text-white dark:text-black font-medium text-sm inline-flex items-center gap-2"
              >
                <FiDownload className="w-4 h-4" />
                Download Directly
              </button>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className={`w-full h-full border-none transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIframeLoaded(true)}
              onError={() => setHasPdfError(true)}
              title="Resume Preview"
            />
          )}
        </div>
      </div>
    </div>
  );
}
