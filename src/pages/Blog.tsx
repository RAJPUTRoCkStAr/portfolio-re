import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';
import { BlogPost } from '../types';
import { pageVariants, pageTransition, staggerContainer } from '../utils/transitions';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Sample data for blog posts (in a real scenario, this would come from the Medium and DEV.to APIs)
const allPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Resilient ML Systems: A Practical Guide',
    snippet: 'Learn how to create machine learning systems that can withstand real-world challenges and continue to perform effectively over time.',
    date: 'April 15, 2023',
    url: 'https://medium.com/@sumitsingh9441',
    platform: 'Medium',
  },
  {
    id: '2',
    title: '10 Cybersecurity Best Practices Every Developer Should Know',
    snippet: 'Discover the essential security practices that can help protect your applications from common vulnerabilities and threats.',
    date: 'March 22, 2023',
    url: 'https://dev.to/dashboard',
    platform: 'DEV.to',
  },
  {
    id: '3',
    title: 'Creating Interactive Dashboards with MERN Stack',
    snippet: 'A step-by-step guide to building responsive and data-rich dashboards using MongoDB, Express, React, and Node.js.',
    date: 'February 8, 2023',
    url: 'https://medium.com/@sumitsingh9441',
    platform: 'Medium',
  },
  {
    id: '4',
    title: 'Python for Data Analysis: Essential Libraries and Techniques',
    snippet: 'Explore the key Python libraries and techniques that every data analyst should know to extract insights efficiently.',
    date: 'January 12, 2023',
    url: 'https://medium.com/@sumitsingh9441',
    platform: 'Medium',
  },
  {
    id: '5',
    title: 'Setting Up a Secure Cloud Infrastructure on AWS',
    snippet: 'Learn how to configure a secure and scalable infrastructure on AWS following industry best practices for security and performance.',
    date: 'December 5, 2022',
    url: 'https://dev.to/dashboard',
    platform: 'DEV.to',
  },
  {
    id: '6',
    title: 'Django vs Flask: Choosing the Right Python Framework',
    snippet: 'A comprehensive comparison of Django and Flask to help you decide which Python web framework is best suited for your next project.',
    date: 'November 18, 2022',
    url: 'https://medium.com/@sumitsingh9441',
    platform: 'Medium',
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(allPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const { ref, controls } = useScrollAnimation();

  useEffect(() => {
    if (searchTerm.trim() === '' && platformFilter === 'all') {
      setPosts(allPosts);
      return;
    }

    let filtered = allPosts;

    // Apply search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.snippet.toLowerCase().includes(term)
      );
    }

    // Apply platform filter
    if (platformFilter !== 'all') {
      filtered = filtered.filter(post => post.platform === platformFilter);
    }

    setPosts(filtered);
  }, [searchTerm, platformFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 py-16 text-slate-900 dark:text-white">
        <SectionTitle 
          title="My Blog"
          subtitle="Technical articles and insights I've shared on Medium and DEV.to"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mb-8 mt-12"
        >
          {/* Search bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 dark:text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter dropdown */}
          <div className="w-full md:w-48">
            <select
              className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 focus:ring-primary-500 focus:border-primary-500"
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
            >
              <option value="all" className="text-slate-900 dark:text-slate-300">All Platforms</option>
              <option value="Medium" className="text-slate-900 dark:text-slate-300">Medium</option>
              <option value="DEV.to" className="text-slate-900 dark:text-slate-300">DEV.to</option>
            </select>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 h-64 animate-pulse"
              >
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-6"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/6"></div>
              </div>
            ))
          ) : posts.length === 0 ? (
            <div className="col-span-3 text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-medium text-slate-700 dark:text-gray-200">No articles found</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))
          )}
        </motion.div>

        {/* Platform links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Follow my writing on:</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://medium.com/@sumitsingh9441"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-slate-800 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all"
            >
              Medium
            </motion.a>
            <motion.a
              href="https://dev.to/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all"
            >
              DEV.to
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
