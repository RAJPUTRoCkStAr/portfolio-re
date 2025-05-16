import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left' 
}) => {
  const { ref, controls } = useScrollAnimation();

  // Determine the text alignment class
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      className={`mb-12 max-w-2xl ${alignmentClasses[align]}`}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-slate-600 text-lg"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { delay: 0.2 } }
          }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-20 bg-accent-500 mt-4 rounded ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
        variants={{
          hidden: { width: 0 },
          show: { width: 80, transition: { delay: 0.3 } }
        }}
      />
    </motion.div>
  );
};

export default SectionTitle;