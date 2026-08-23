export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'Full-Stack' | 'Next.js & TypeScript' | 'Machine Learning' | 'Web Apps';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string[];
  techStack: string[];
  stars?: number;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
  type: 'Education' | 'Experience' | 'Achievement' | 'Certification';
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  acceptanceRate?: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  recentCommitsCount: number;
  topLanguages: { name: string; percentage: number }[];
}

export interface WhatsAppInquiryPreset {
  id: string;
  label: string;
  icon: string;
  badge: string;
  defaultMessage: string;
}
