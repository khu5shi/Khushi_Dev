import { NextResponse } from 'next/server';
import { portfolioConfig } from '@/config/portfolio.config';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = portfolioConfig.socials.githubUsername;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { 'User-Agent': 'Khushi-Portfolio-App' },
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=20`, {
        headers: { 'User-Agent': 'Khushi-Portfolio-App' },
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub user fetch returned ${userRes.status}`);
    }

    const userData = await userRes.json();
    const reposData = reposRes.ok ? await reposRes.json() : [];

    // Calculate total stars & languages
    let totalStars = 0;
    const languagesMap: Record<string, number> = {};

    if (Array.isArray(reposData)) {
      reposData.forEach((repo: any) => {
        totalStars += repo.stargazers_count || 0;
        if (repo.language) {
          languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
        }
      });
    }

    const topLanguages = Object.entries(languagesMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return NextResponse.json({
      success: true,
      data: {
        username: userData.login,
        name: userData.name || portfolioConfig.personal.name,
        avatarUrl: userData.avatar_url,
        publicRepos: userData.public_repos || portfolioConfig.codingStatsFallback.github.publicRepos,
        followers: userData.followers || 0,
        following: userData.following || 0,
        totalStars: totalStars || 0,
        topLanguages,
        recentRepos: Array.isArray(reposData) ? reposData.slice(0, 6).map((r: any) => ({
          name: r.name,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          url: r.html_url,
          homepage: r.homepage,
          updatedAt: r.updated_at,
        })) : [],
      }
    });
  } catch (error) {
    console.warn('GitHub API fetch failed, serving fallback data:', error);
    return NextResponse.json({
      success: true,
      fallback: true,
      data: {
        username,
        name: portfolioConfig.personal.name,
        avatarUrl: `https://avatars.githubusercontent.com/u/132192823?v=4`,
        publicRepos: portfolioConfig.codingStatsFallback.github.publicRepos,
        followers: 0,
        following: 0,
        totalStars: 0,
        topLanguages: [
          { name: 'TypeScript', count: 6 },
          { name: 'JavaScript', count: 5 },
          { name: 'Python', count: 2 },
        ],
        recentRepos: [],
      }
    });
  }
}
