'use client';

import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('khushi-portfolio-theme') as 'dark' | 'light' | null;
    if (stored) {
      setTheme(stored);
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('khushi-portfolio-theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md bg-light-surface dark:bg-dark-surface animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle visual theme"
      className="flex items-center justify-center w-9 h-9 rounded-md bg-transparent hover:bg-light-surface dark:hover:bg-dark-surface text-black dark:text-white transition-colors border border-transparent hover:border-light-border dark:hover:border-dark-border"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="w-[18px] h-[18px]" />
      ) : (
        <FiMoon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}
