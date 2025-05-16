import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { GithubRepo } from '../../types';

interface ProjectCardProps {
  project: GithubRepo;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Get color based on language
  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-400',
      Python: 'bg-green-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      Java: 'bg-red-500',
      'C#': 'bg-green-600',
      PHP: 'bg-indigo-400',
      Ruby: 'bg-red-600',
      Go: 'bg-blue-300',
      Rust: 'bg-orange-600',
      Swift: 'bg-orange-500',
      Kotlin: 'bg-purple-400',
    };
    
    return language && colors[language] ? colors[language] : 'bg-slate-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-slate-200"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-slate-800 line-clamp-1">{project.name}</h3>
          <div className="flex space-x-2">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-primary-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4 line-clamp-2 min-h-[48px]">
          {project.description || 'No description available'}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics && project.topics.slice(0, 3).map((topic, i) => (
            <span key={i} className="text-xs font-medium bg-primary-100 text-primary-800 px-2.5 py-0.5 rounded-full">
              {topic}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          {project.language ? (
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${getLanguageColor(project.language)}`}></span>
              <span className="text-sm text-slate-600">{project.language}</span>
            </div>
          ) : (
            <span className="text-sm text-slate-500">No language detected</span>
          )}
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-slate-600">
              <svg
                className="w-4 h-4 mr-1 text-slate-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
              </svg>
              {project.stargazers_count}
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <svg
                className="w-4 h-4 mr-1 text-slate-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
              </svg>
              {project.forks_count}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;