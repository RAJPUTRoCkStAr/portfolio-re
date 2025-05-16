import React, { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { Project } from '../types';
import { fetchGithubRepositories } from '../api/github';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchGithubRepositories();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <Section
      title="My Projects"
      subtitle="Explore my Python, Data Analysis, and AI projects"
      className="pt-32"
    >
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Try Again
          </button>
        </div>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </Section>
  );
};

export default ProjectsPage;