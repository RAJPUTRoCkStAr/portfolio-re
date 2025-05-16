import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import SkillBar from '../components/ui/SkillBar';
import { Skill } from '../types';
import { pageVariants, pageTransition, staggerContainer, fadeInUp } from '../utils/transitions';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Sample skills data (would be fetched from an API or CMS in production)
const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'backend' },
  { name: 'Django', level: 90, category: 'backend' },
  { name: 'JavaScript', level: 92, category: 'frontend' },
  { name: 'React', level: 88, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Flask', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 82, category: 'backend' },
  { name: 'MySQL', level: 87, category: 'backend' },
  { name: 'Machine Learning', level: 80, category: 'data' },
  { name: 'Data Analysis', level: 88, category: 'data' },
  { name: 'Cybersecurity', level: 85, category: 'security' },
  { name: 'Networking', level: 83, category: 'security' },
  { name: 'AWS', level: 78, category: 'devops' },
  { name: 'Docker', level: 75, category: 'devops' },
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
];

const About = () => {
  const { ref: bioRef, controls: bioControls } = useScrollAnimation();
  const { ref: skillsRef, controls: skillsControls } = useScrollAnimation(0.1);

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
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me and my professional background"
          align="center"
          className="dark:text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 relative aspect-square">
              <img
                src="https://raw.githubusercontent.com/RAJPUTRoCkStAr/portfolio-re/main/about.png"
                alt="Sumit Singh"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Certifications</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio section */}
          <motion.div
            ref={bioRef}
            variants={staggerContainer}
            initial="hidden"
            animate={bioControls}
            className="md:col-span-2"
          >
            <motion.h3
              className="text-2xl font-bold text-slate-900 dark:text-white mb-4"
              variants={fadeInUp}
            >
              I'm Sumit Singh
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="prose prose-slate max-w-none dark:prose-invert"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                I'm a passionate and versatile software developer and full stack engineer specializing in Python, AI/ML, Data Science, Cybersecurity, Automation, and Web Development. With over 500 certifications across diverse technologies like Django, React, Flask, MERN, PHP, .NET, and cloud security, I am committed to continuous learning and real-world problem solving.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                My projects and open-source contributions, available on GitHub, reflect my dedication to clean, efficient, and innovative code. I actively share knowledge through blog posts on Medium and DEV.to, and I engage with the data science community on Kaggle.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I thrive on challenges and believe in the power of technology to transform lives and industries.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">My Professional Toolbelt</h3>

              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'Django', 'React', 'Node.js', 'MongoDB', 'SQL',
                  'AWS', 'AI/ML', 'Cybersecurity', 'Full Stack', 'Data Science', 'Automation'
                ].map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          ref={skillsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={skillsControls}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Key Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
