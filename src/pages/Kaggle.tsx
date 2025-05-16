// export default Kaggle;
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileCode, Database, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { pageVariants, pageTransition } from '../utils/transitions';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Sample data (replace with real API data if needed)
const kaggleData = {
  competitions: 8,
  notebooks: 24,
  dataset: 5,
  achievements: [
    {
      title: 'Competition Bronze Medal',
      description: 'Secured a bronze medal in the House Prices prediction competition',
    },
    {
      title: 'Notebook Expert',
      description: 'Recognized for high-quality data analysis notebooks',
    },
  ],
  recentCompetitions: [
    {
      name: 'House Prices Prediction',
      date: 'March 2023',
      rank: '3/1453',
      medal: 'Bronze',
    },
    {
      name: 'Titanic Survival',
      date: 'January 2023',
      rank: '567/10283',
      medal: null,
    },
    {
      name: 'Store Sales Forecasting',
      date: 'November 2022',
      rank: '231/2541',
      medal: null,
    },
  ],
  topNotebooks: [
    {
      title: 'Comprehensive EDA for Housing Data',
      views: 15420,
      votes: 342,
      language: 'Python',
    },
    {
      title: 'Deep Learning for Image Classification',
      views: 8932,
      votes: 187,
      language: 'Python',
    },
    {
      title: 'Time Series Analysis Techniques',
      views: 10256,
      votes: 276,
      language: 'Python',
    },
    {
      title: 'Natural Language Processing with BERT',
      views: 7654,
      votes: 165,
      language: 'Python',
    },
  ],
  datasets: [
    {
      title: 'Cleaned Movie Reviews Dataset',
      downloads: 1243,
      size: '2.4GB',
      lastUpdated: 'February 2023',
    },
    {
      title: 'COVID-19 Vaccination Progress',
      downloads: 3421,
      size: '546MB',
      lastUpdated: 'December 2022',
    },
    {
      title: 'Global Weather Patterns',
      downloads: 987,
      size: '1.2GB',
      lastUpdated: 'October 2022',
    },
  ],
};

const Kaggle = () => {
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();
  const { ref: competitionsRef, controls: competitionsControls } = useScrollAnimation();
  const { ref: notebooksRef, controls: notebooksControls } = useScrollAnimation();

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
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Kaggle Profile"
          subtitle="My journey in data science competitions, notebooks, and datasets"
          align="center"
        />

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          animate={statsControls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16"
        >
          {[
            {
              icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
              label: 'Competitions',
              value: kaggleData.competitions,
              bg: 'bg-primary-100',
            },
            {
              icon: <FileCode className="w-6 h-6 text-secondary-600" />,
              label: 'Notebooks',
              value: kaggleData.notebooks,
              bg: 'bg-secondary-100',
            },
            {
              icon: <Database className="w-6 h-6 text-accent-600" />,
              label: 'Datasets',
              value: kaggleData.dataset,
              bg: 'bg-accent-100',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center space-x-4">
                <div className={`${item.bg} p-3 rounded-lg`}>{item.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {item.value}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Competitions */}
        <motion.section
          ref={competitionsRef}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          initial="hidden"
          animate={competitionsControls}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Recent Competitions
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-600">
                <thead className="bg-slate-50 dark:bg-slate-700">
                  <tr>
                    {['Competition', 'Date', 'Ranking', 'Medal'].map((col) => (
                      <th
                        key={col}
                        className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-600">
                  {kaggleData.recentCompetitions.map((comp, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                        {comp.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                        {comp.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                        {comp.rank}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {comp.medal ? (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              comp.medal === 'Gold'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                                : comp.medal === 'Silver'
                                ? 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100'
                            }`}
                          >
                            {comp.medal}
                          </span>
                        ) : (
                          <span className="text-slate-500 dark:text-slate-300">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Top Notebooks */}
        <motion.section
          ref={notebooksRef}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          initial="hidden"
          animate={notebooksControls}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Top Notebooks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kaggleData.topNotebooks.map((notebook, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                }}
                className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {notebook.title}
                </h3>
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-300 mt-4">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      👁️ {notebook.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">👍 {notebook.votes}</div>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-800 text-xs font-medium text-blue-800 dark:text-blue-100">
                    {notebook.language}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Datasets */}
        <motion.section
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Public Datasets
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-600">
                <thead className="bg-slate-50 dark:bg-slate-700">
                  <tr>
                    {['Dataset', 'Downloads', 'Size', 'Last Updated'].map((col) => (
                      <th
                        key={col}
                        className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-600">
                  {kaggleData.datasets.map((dataset, index) => (
                    <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                        {dataset.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                        {dataset.downloads.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                        {dataset.size}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                        {dataset.lastUpdated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Kaggle Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 text-center"
        >
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
            Visit My Kaggle Profile
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Explore more of my data science work, including additional notebooks, datasets, and competition results.
          </p>
          <motion.a
            href="https://www.kaggle.com/work"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-5 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-sm hover:bg-primary-700 transition-colors"
          >
            Kaggle Profile <ExternalLink className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Kaggle;
