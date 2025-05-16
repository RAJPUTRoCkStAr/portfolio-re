import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className = '',
  id,
  fullHeight = false,
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${fullHeight ? 'min-h-screen flex flex-col justify-center' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <div className="mb-12 md:mb-16 text-center">
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;