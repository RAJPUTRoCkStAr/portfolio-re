// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search, Github, ExternalLink } from 'lucide-react';
// import Card from '../ui/Card';
// import { Project } from '../../types';

// interface ProjectsGridProps {
//   projects: Project[];
// }

// const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');

//   const categories = ['all', ...new Set(projects.flatMap(p => p.topics || []))];

//   const filteredProjects = projects.filter(project => {
//     const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()));
//     const matchesCategory = selectedCategory === 'all' ||
//                             (project.topics && project.topics.includes(selectedCategory));
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div>
//       <div className="mb-8">
//         <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
//           <div className="relative flex-grow">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search size={18} className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white"
//             />
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {categories.slice(0, 6).map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-3 py-1 text-sm rounded-full transition-colors ${
//                   selectedCategory === category
//                     ? 'bg-primary-500 text-white dark:bg-primary-600'
//                     : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-dark-700 dark:text-primary-300 dark:hover:bg-dark-600'
//                 }`}
//               >
//                 {category === 'all' ? 'All' : category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {filteredProjects.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-gray-600 dark:text-gray-400 mb-4">No projects found matching your criteria.</p>
//           <button
//             onClick={() => {
//               setSearchTerm('');
//               setSelectedCategory('all');
//             }}
//             className="text-primary-600 dark:text-primary-400 hover:underline"
//           >
//             Clear filters
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 dark:bg-dark-900 p-4 rounded-xl">
//           {filteredProjects.map((project, index) => (
//             <Card key={project.id} delay={index % 9} className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 shadow-md">
//               <div className="p-6 flex flex-col h-full">
//                 <div className="mb-4 flex-grow">
//                   <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
//                     {project.name}
//                   </h3>
//                   <p className="text-gray-700 dark:text-primary-300 mb-4">
//                     {project.description || 'No description available'}
//                   </p>

//                   {project.topics && project.topics.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.topics.slice(0, 3).map((topic) => (
//                         <span
//                           key={topic}
//                           className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-primary-100 rounded-full"
//                         >
//                           {topic}
//                         </span>
//                       ))}
//                       {project.topics.length > 3 && (
//                         <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 dark:bg-dark-600 dark:text-primary-300 rounded-full">
//                           +{project.topics.length - 3} more
//                         </span>
//                       )}
//                     </div>
//                   )}

//                   <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
//                     <div className="flex items-center">
//                       <span className={`w-3 h-3 rounded-full mr-2 border border-white shadow-sm ${getLanguageColor(project.language)}`}></span>
//                       {project.language || 'Unknown'}
//                     </div>
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                         </svg>
//                         {project.stargazers_count}
//                       </div>
//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                         </svg>
//                         {project.forks_count}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-xs text-gray-600 dark:text-gray-400">
//                     Updated: {new Date(project.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
//                   </span>

//                   <div className="flex space-x-2">
//                     <a
//                       href={project.html_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label="View on GitHub"
//                       className="p-2 text-gray-700 hover:text-black dark:text-primary-300 dark:hover:text-white transition-colors"
//                     >
//                       <Github size={18} />
//                     </a>
//                     {project.homepage && (
//                       <a
//                         href={project.homepage}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="View live demo"
//                         className="p-2 text-gray-700 hover:text-black dark:text-primary-300 dark:hover:text-white transition-colors"
//                       >
//                         <ExternalLink size={18} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Helper function to get color based on language
// const getLanguageColor = (language: string | null): string => {
//   const colors: Record<string, string> = {
//     Python: 'bg-blue-500',
//     JavaScript: 'bg-yellow-500',
//     TypeScript: 'bg-blue-600',
//     HTML: 'bg-orange-500',
//     CSS: 'bg-pink-500',
//     Java: 'bg-red-500',
//     'C#': 'bg-green-600',
//     R: 'bg-blue-300',
//     Jupyter: 'bg-orange-400',
//     Notebook: 'bg-orange-400',
//   };
//   return language && colors[language] ? colors[language] : 'bg-gray-500';
// };

// export default ProjectsGrid;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Github, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import { Project } from '../../types';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(projects.flatMap(p => p.topics || []))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === 'all' || (project.topics && project.topics.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-primary dark:bg-primary-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No projects found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 dark:bg-dark-900 p-4 rounded-xl">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              delay={index % 9}
              className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 shadow-md"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex-grow">
                  <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-primary-300 mb-4">
                    {project.description || 'No description available'}
                  </p>

                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-primary-100 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.topics.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 dark:bg-dark-600 dark:text-primary-300 rounded-full">
                          +{project.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <span
                        className={`w-3 h-3 rounded-full mr-2 border border-white shadow-sm ${getLanguageColor(
                          project.language
                        )}`}
                      ></span>
                      {project.language || 'Unknown'}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        {project.stargazers_count}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        {project.forks_count}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Updated:{' '}
                    {new Date(project.updated_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>

                  <div className="flex space-x-2">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      className="p-2 text-gray-700 hover:text-black dark:text-primary-300 dark:hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                        className="p-2 text-gray-700 hover:text-black dark:text-primary-300 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper function to get color based on language
const getLanguageColor = (language: string | null): string => {
  const colors: Record<string, string> = {
    Python: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-600',
    HTML: 'bg-orange-500',
    CSS: 'bg-pink-500',
    Java: 'bg-red-500',
    'C#': 'bg-green-600',
    R: 'bg-blue-300',
    Jupyter: 'bg-orange-400',
    Notebook: 'bg-orange-400',
  };
  return language && colors[language] ? colors[language] : 'bg-gray-500';
};

export default ProjectsGrid;
