import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Code, BookOpen, Database, MessageSquare } from 'lucide-react';

interface CTAButtonProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  color: string;
  darkColor: string; // added for dark mode background
  delay: number;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, icon, text, color, darkColor, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Link to={to}>
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ y: 0 }}
          className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md ${color} dark:${darkColor} text-white hover:shadow-lg transition-all cursor-pointer`}
        >
          <div className="text-3xl mb-2">{icon}</div>
          <span className="font-medium">{text}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const CTASection = () => {
  const ctaButtons = [
    {
      to: '/projects',
      icon: <Code />,
      text: 'View Projects',
      color: 'bg-primary-600',
      darkColor: 'bg-primary-500',
      delay: 0.1,
    },
    {
      to: '/certificates',
      icon: <GraduationCap />,
      text: 'See Certificates',
      color: 'bg-secondary-600',
      darkColor: 'bg-secondary-500',
      delay: 0.2,
    },
    {
      to: '/blog',
      icon: <BookOpen />,
      text: 'Read Blog',
      color: 'bg-accent-600',
      darkColor: 'bg-accent-500',
      delay: 0.3,
    },
    {
      to: '/kaggle',
      icon: <Database />,
      text: 'Explore Kaggle',
      color: 'bg-slate-700',
      darkColor: 'bg-slate-600',
      delay: 0.4,
    },
    {
      to: '/contact',
      icon: <MessageSquare />,
      text: 'Contact Me',
      color: 'bg-primary-700',
      darkColor: 'bg-primary-600',
      delay: 0.5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Explore More?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Check out my projects, certifications, articles, and more to see what I've been working on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ctaButtons.map(({ to, icon, text, color, darkColor, delay }) => (
            <CTAButton
              key={to}
              to={to}
              icon={icon}
              text={text}
              color={color}
              darkColor={darkColor}
              delay={delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
