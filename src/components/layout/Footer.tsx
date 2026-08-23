import React from 'react';
import { portfolioConfig } from '@/config/portfolio.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-light-border dark:border-dark-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-black dark:text-white font-medium mb-1">
            {portfolioConfig.personal.name}
          </p>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
