import { NextResponse } from 'next/server';
import { portfolioConfig } from '@/config/portfolio.config';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = portfolioConfig.socials.leetcodeUsername;
  const fallback = portfolioConfig.codingStatsFallback.leetcode;

  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, {
      headers: { 'User-Agent': 'Khushi-Portfolio-App' },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`LeetCode API returned ${res.status}`);
    }

    const data = await res.json();

    return NextResponse.json({
      success: true,
      data: {
        totalSolved: data.totalSolved ?? fallback.totalSolved,
        easySolved: data.easySolved ?? fallback.easySolved,
        totalEasy: data.totalEasy ?? fallback.totalEasy,
        mediumSolved: data.mediumSolved ?? fallback.mediumSolved,
        totalMedium: data.totalMedium ?? fallback.totalMedium,
        hardSolved: data.hardSolved ?? fallback.hardSolved,
        totalHard: data.totalHard ?? fallback.totalHard,
        ranking: data.ranking ?? fallback.ranking,
        contributionPoint: data.contributionPoint ?? 443,
        acceptanceRate: fallback.acceptanceRate,
      }
    });
  } catch (error) {
    console.warn('LeetCode API fetch error, serving fallback stats:', error);
    return NextResponse.json({
      success: true,
      fallback: true,
      data: fallback,
    });
  }
}
