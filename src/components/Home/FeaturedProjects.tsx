import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { GithubRepo } from '../../types';
import { staggerContainer } from '../../utils/transitions';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Sample data (replace with actual API calls in production)
// const sampleProjects: GithubRepo[] = [ ... ];

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { ref, controls } = useScrollAnimation();
  
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/RAJPUTRoCkStAr/repos?sort=updated&per_page=3');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Projects"
          subtitle="Explore some of my latest work and open-source contributions"
          className="text-slate-900 dark:text-white"
        />
        
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl p-6 h-64 animate-pulse bg-white dark:bg-slate-800"
              >
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-6"></div>
                <div className="flex gap-2 mb-6">
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/6"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-3 text-center p-8 bg-red-50 dark:bg-red-900 rounded-xl">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          ) : (
            projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          )}
        </motion.div>
        
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm hover:shadow-md transition-all text-slate-800 dark:text-slate-300 font-medium"
            >
              View All Projects
              <ArrowRight className="ml-1 w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
