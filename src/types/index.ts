export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export interface Certificate {
  id: string;
  title: string;
  provider: string;
  date: string;
  imageUrl?: string;
  url?: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  date: string;
  url: string;
  platform: string;
  imageUrl?: string;
}

export interface KaggleInfo {
  competitions: number;
  notebooks: number;
  datasets: number;
  achievements: Array<{
    title: string;
    description: string;
  }>;
}

export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'data' | 'devops' | 'security' | 'other';
};