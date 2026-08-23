'use client';

import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { portfolioConfig } from '@/config/portfolio.config';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
        />

        <div className="space-y-8">
          {portfolioConfig.experiences.map((item) => (
            <div key={item.id} className="border-b border-light-border/50 dark:border-dark-border/50 pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {item.organization}
                  </h3>
                  <p className="text-base text-light-muted dark:text-dark-muted mt-2">
                    {item.role}
                  </p>
                  <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                    {item.description[0]}
                  </p>
                </div>
                
                <div className="text-sm text-light-muted dark:text-dark-muted whitespace-nowrap mt-2 md:mt-0">
                  {item.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
