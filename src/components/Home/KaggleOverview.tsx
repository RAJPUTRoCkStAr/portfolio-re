import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, FileCode, Database, Trophy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Sample data (replace with actual API in production)
const kaggleData = {
  competitions: 8,
  notebooks: 24,
  datasets: 5,
  achievements: [
    {
      title: 'Competition Bronze Medal',
      description: 'Secured a bronze medal in the House Prices prediction competition'
    },
    {
      title: 'Notebook Expert',
      description: 'Recognized for high-quality data analysis notebooks'
    }
  ]
};

const KaggleOverview = () => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Kaggle Activity"
          subtitle="Exploring data science through competitions, notebooks, and datasets"
        />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { delay: 0.1 } }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-700 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{kaggleData.competitions}</h3>
                  <p className="text-slate-600 dark:text-slate-300">Competitions</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { delay: 0.2 } }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 dark:bg-secondary-700 p-3 rounded-lg">
                  <FileCode className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{kaggleData.notebooks}</h3>
                  <p className="text-slate-600 dark:text-slate-300">Notebooks</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { delay: 0.3 } }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 dark:bg-accent-700 p-3 rounded-lg">
                  <Database className="w-6 h-6 text-accent-600 dark:text-accent-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{kaggleData.datasets}</h3>
                  <p className="text-slate-600 dark:text-slate-300">Datasets</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { delay: 0.4 } }
            }}
            className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg shadow-sm">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Achievements</h3>
            </div>
            
            <ul className="space-y-3 pl-14">
              {kaggleData.achievements.map((achievement, index) => (
                <li key={index} className="text-slate-700 dark:text-slate-300">
                  <h4 className="font-medium text-slate-800 dark:text-white">{achievement.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/kaggle">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 bg-secondary-50 dark:bg-slate-800 border border-secondary-200 dark:border-slate-600 rounded-md shadow-sm hover:shadow-md transition-all text-secondary-700 dark:text-slate-100 font-medium"
            >
              Explore Kaggle Work
              <ArrowRight className="ml-1 w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default KaggleOverview;
