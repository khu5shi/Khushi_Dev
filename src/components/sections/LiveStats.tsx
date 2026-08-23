'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { FiGithub, FiActivity, FiTrendingUp, FiCode } from 'react-icons/fi';
import { SiGeeksforgeeks } from 'react-icons/si';
import { portfolioConfig } from '@/config/portfolio.config';

interface GithubStats {
  publicRepos: number;
  followers: number;
}

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

export default function LiveStats() {
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [ghRes, lcRes] = await Promise.all([
          fetch(`/api/github?username=${portfolioConfig.socials.github.split('/').pop()}`),
          fetch(`/api/leetcode?username=${portfolioConfig.socials.leetcode.split('/u/')[1]?.replace('/', '') || 'khus5hi'}`)
        ]);

        if (ghRes.ok) {
          const ghData = await ghRes.json();
          setGithubStats(ghData.data);
        }
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          setLeetcodeStats(lcData.data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'GitHub Repositories',
      value: githubStats ? githubStats.publicRepos : '-',
      icon: FiGithub,
    },
    {
      title: 'GFG Solved',
      value: portfolioConfig.codingStatsFallback.gfg.problemsSolved,
      icon: SiGeeksforgeeks,
    },
    {
      title: 'LeetCode Solved',
      value: leetcodeStats ? leetcodeStats.totalSolved : '-',
      icon: FiCode,
    },
    {
      title: 'GFG Coding Score',
      value: portfolioConfig.codingStatsFallback.gfg.score,
      icon: FiTrendingUp,
    }
  ];

  return (
    <section id="stats" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Live Metrics" subtitle="Real-time data fetched from my profiles." />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((stat, idx) => (
            <div key={idx} className="bento-card p-6 flex flex-col justify-between h-32">
              <div className="flex justify-between items-start">
                <span className="text-xs text-light-muted dark:text-dark-muted font-medium uppercase tracking-wider">
                  {stat.title}
                </span>
                <stat.icon className="w-4 h-4 text-light-muted dark:text-dark-muted" />
              </div>
              <div className="text-3xl font-medium text-black dark:text-white">
                {loading ? <span className="animate-pulse">...</span> : stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
