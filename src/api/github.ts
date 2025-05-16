import axios from 'axios';
import { Project } from '../types';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'RAJPUTRoCkStAr';

/**
 * Fetches all repositories for a GitHub user
 */
export const fetchGithubRepositories = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
      },
    });

    // Filter projects to only include those related to Python, Data Analysis, or AI
    const relevantProjects = response.data.filter((repo: any) => {
      const isRelevant = 
        repo.language === 'Python' || 
        (repo.topics && repo.topics.some((topic: string) => 
          ['python', 'data-analysis', 'machine-learning', 'ai', 'deep-learning', 'data-science', 'analytics'].includes(topic.toLowerCase())
        )) ||
        (repo.description && 
          ['python', 'data', 'analysis', 'machine learning', 'ai', 'ml', 'analytics'].some(keyword => 
            repo.description.toLowerCase().includes(keyword)
          )
        );
      
      return isRelevant;
    });

    return relevantProjects.map((repo: any): Project => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      topics: repo.topics || [],
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

/**
 * Mock function to demonstrate how we would fetch a single repository
 */
export const fetchGithubRepository = async (repoName: string): Promise<Project | null> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`);
    
    return {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description,
      html_url: response.data.html_url,
      homepage: response.data.homepage,
      language: response.data.language,
      topics: response.data.topics || [],
      stargazers_count: response.data.stargazers_count,
      forks_count: response.data.forks_count,
      created_at: response.data.created_at,
      updated_at: response.data.updated_at,
    };
  } catch (error) {
    console.error(`Error fetching GitHub repository ${repoName}:`, error);
    return null;
  }
};