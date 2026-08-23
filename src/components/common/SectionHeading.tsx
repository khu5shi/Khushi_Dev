import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-light-muted dark:text-dark-muted font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
