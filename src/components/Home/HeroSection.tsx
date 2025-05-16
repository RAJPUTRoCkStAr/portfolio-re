import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const roles = [
    'Full Stack Developer',
    'Python Developer',
    'Cybersecurity Analyst',
    'Software Developer',
    'Automation Engineer',
    'Data Analyst',
    'Data Scientist',
    'AI/ML Specialist',
    'Network Engineer',
    'MERN Stack Developer'
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-8 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-60 left-1/3 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Sumit Singh</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 font-medium mb-8 h-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                ...roles.flatMap(role => [role, 2000])
              ]}
              speed={50}
              repeat={Infinity}
              className="text-secondary-600 dark:text-secondary-400"
            />
          </motion.div>

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            A passionate and versatile developer specializing in a wide range of technologies with 500+ certifications and a love for solving complex problems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all flex items-center"
              >
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/certificates">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-md shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                See Certificates
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Decorative blocks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-accent-500 rounded-xl -z-10 opacity-80"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-500 rounded-full -z-10 opacity-80"
            />

            {/* Profile image box */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative w-72 h-72 md:w-80 md:h-80">
              <motion.img
                initial={{ filter: 'blur(10px)' }}
                animate={{ filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.5 }}
                src="https://raw.githubusercontent.com/RAJPUTRoCkStAr/portfolio-re/blob/main/home.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sumit Singh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
