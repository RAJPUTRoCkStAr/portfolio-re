import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import CertificateCard from '../ui/CertificateCard';
import { Certificate } from '../../types';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { staggerContainer } from '../../utils/transitions';

// Sample data (replace with actual API in production)
const sampleCertificates: Certificate[] = [
  {
    id: '1',
    title: 'Microsoft Azure Fundamentals',
    provider: 'Microsoft',
    date: 'April 2023',
    url: 'https://learn.microsoft.com/en-gb/users/sumitsingh-4227/achievements',
    category: 'Cloud',
  },
  {
    id: '2',
    title: 'IBM Data Science Professional',
    provider: 'IBM',
    date: 'January 2023',
    url: 'https://skills.yourlearning.ibm.com/learning/completed',
    category: 'Data Science',
  },
  {
    id: '3',
    title: 'Cybersecurity Analyst',
    provider: 'Udemy',
    date: 'March 2023',
    url: 'https://www.udemy.com/home/my-courses/learning/?progress_filter=completed',
    category: 'Security',
  },
];

const CertificationsPreview = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 text-slate-900 dark:text-white">
        <SectionTitle
          title="Certifications"
          subtitle="A selection from my 500+ professional certifications across various technologies"
        
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {sampleCertificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/certificates">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 rounded-md shadow-sm hover:shadow-md transition-all text-primary-700 dark:text-primary-300 font-medium"
            >
              See All Certificates
              <ArrowRight className="ml-1 w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsPreview;
