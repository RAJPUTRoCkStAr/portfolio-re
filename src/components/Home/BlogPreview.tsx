import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import BlogCard from '../ui/BlogCard';
import { BlogPost } from '../../types';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { staggerContainer } from '../../utils/transitions';

// Sample data (replace with actual API in production)
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Resilient ML Systems: A Practical Guide',
    snippet:
      'Learn how to create machine learning systems that can withstand real-world challenges and continue to perform effectively over time.',
    date: 'April 15, 2023',
    url: 'https://medium.com/@sumitsingh9441',
    platform: 'Medium',
    imageUrl:
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: '10 Cybersecurity Best Practices Every Developer Should Know',
    snippet:
      'Discover the essential security practices that can help protect your applications from common vulnerabilities and threats.',
    date: 'March 22, 2023',
    url: 'https://dev.to/dashboard',
    platform: 'DEV.to',
    imageUrl:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Creating Interactive Dashboards with MERN Stack',
    snippet:
      'A step-by-step guide to building responsive and data-rich dashboards using MongoDB, Express, React, and Node.js.',
    date: 'February 8, 2023',
    url: 'https://medium.com/@sumitsingh9441',
    platform: 'Medium',
    imageUrl:
      'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const BlogPreview = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 text-slate-900 dark:text-white">
        <SectionTitle
          title="Latest Articles"
          subtitle="Insights and tutorials I've published on Medium and DEV.to"
          // You can optionally add text color variants here if SectionTitle supports it
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {samplePosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              // Pass props or classNames to BlogCard for dark mode border on profile image,
              // badges, tags, prose content styling if BlogCard supports customization.
              // For example:
              // profileBorderClass="border-white dark:border-slate-700"
              // badgeBgClass="bg-white dark:bg-slate-800"
              // badgeTextClass="text-primary-600 dark:text-primary-400"
              // tagBgClass="bg-slate-100 dark:bg-slate-700"
              // tagTextClass="text-slate-800 dark:text-slate-200"
              // proseClass="prose dark:prose-invert"
            />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 bg-white border border-slate-300 rounded-md shadow-sm hover:shadow-md transition-all text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 font-medium"
            >
              Read All Articles
              <ArrowRight className="ml-1 w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
