import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-slate-200 flex flex-col h-full"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
            post.platform === 'Medium' 
              ? 'bg-slate-900 text-white' 
              : 'bg-indigo-100 text-indigo-800'
          }`}>
            {post.platform}
          </span>
          <span className="text-sm text-slate-500">{post.date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-slate-600 line-clamp-3 mb-4">
          {post.snippet}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-primary-600 font-medium">
          Read article
          <motion.span 
            className="ml-1 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};

export default BlogCard;