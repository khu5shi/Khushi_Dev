import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export default function Badge({
  children,
  variant = 'primary',
  className = '',
  size = 'sm',
}: BadgeProps) {
  const variantStyles = {
    primary: 'bg-light-surface dark:bg-dark-surface text-black dark:text-white border-light-border dark:border-dark-border',
    outline: 'bg-transparent text-light-muted dark:text-dark-muted border-light-border dark:border-dark-border',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-md border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
