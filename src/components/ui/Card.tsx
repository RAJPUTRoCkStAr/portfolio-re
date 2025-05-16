import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
  delay = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.02,
              transition: { duration: 0.2, ease: 'easeOut' },
            }
          : undefined
      }
      onClick={onClick}
      className={`
        rounded-xl overflow-hidden transition-all duration-300 
        border border-gray-200 dark:border-dark-600 
        bg-white dark:bg-dark-800 
        text-gray-900 dark:text-gray-100
        prose prose-sm prose-headings:text-gray-900 dark:prose-headings:text-gray-100
        ${hover ? 'hover:shadow-xl' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
