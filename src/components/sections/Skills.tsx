import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { portfolioConfig } from '@/config/portfolio.config';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Tech Stack"
        />

        <div className="space-y-6 md:space-y-8">
          {portfolioConfig.skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start border-b border-light-border/50 dark:border-dark-border/50 pb-6 md:pb-8 last:border-0"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-sm font-medium text-light-muted dark:text-dark-muted">
                  {category.title}
                </h3>
              </div>

              <div className="md:w-3/4 flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md bg-light-surface dark:bg-dark-surface border border-light-border/30 dark:border-dark-border/30 text-black dark:text-white transition-opacity hover:opacity-80"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
