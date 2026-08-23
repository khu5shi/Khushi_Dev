'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio.config';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of recent projects I've built." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className="bento-card group overflow-hidden flex flex-col h-full animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-medium text-black dark:text-white group-hover:text-light-muted dark:group-hover:text-dark-muted transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Live Project"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
