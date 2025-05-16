import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import CertificateCard from '../components/ui/CertificateCard';
import { Certificate } from '../types';
import { pageVariants, pageTransition, staggerContainer } from '../utils/transitions';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Sample data for certificates (in production, you'd fetch from APIs)
const allCertificates: Certificate[] = Array.from({ length: 24 }, (_, i) => {
  const providers = ['Microsoft', 'IBM', 'Udemy', 'Coursera', 'Credly'];
  const categories = ['Python', 'Web Development', 'Cloud', 'AI/ML', 'Cybersecurity', 'Data Science', 'DevOps'];
  const titles = [
    'Azure Fundamentals',
    'Python for Data Science',
    'Advanced React Development',
    'Cybersecurity Analyst',
    'Full Stack Web Development',
    'Machine Learning with TensorFlow',
    'AWS Cloud Practitioner',
    'Ethical Hacking',
    'MongoDB Database Administrator',
    'Data Analysis with Python',
    'DevOps CI/CD Pipelines',
    'Network Security Fundamentals'
  ];
  
  const randomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  };
  
  const randomProvider = providers[Math.floor(Math.random() * providers.length)];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  
  return {
    id: `cert-${i + 1}`,
    title: `${randomTitle} ${i + 1}`,
    provider: randomProvider,
    date: randomDate(),
    url: randomProvider === 'Microsoft' 
      ? 'https://learn.microsoft.com/en-gb/users/sumitsingh-4227/achievements'
      : randomProvider === 'IBM'
      ? 'https://skills.yourlearning.ibm.com/learning/completed'
      : 'https://www.credly.com/users/sumit-kumar-singh.45efa06d',
    category: randomCategory,
  };
});

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>(allCertificates);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const { ref, controls } = useScrollAnimation();
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(allCertificates.map(cert => cert.category)))];
  
  useEffect(() => {
    if (searchTerm.trim() === '' && filter === 'all') {
      setCertificates(allCertificates);
      return;
    }
    
    let filtered = allCertificates;
    
    // Apply search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(cert => 
        cert.title.toLowerCase().includes(term) || 
        cert.provider.toLowerCase().includes(term)
      );
    }
    
    // Apply category filter
    if (filter !== 'all') {
      filtered = filtered.filter(cert => cert.category === filter);
    }
    
    setCertificates(filtered);
    setCurrentPage(1);
  }, [searchTerm, filter]);
  
  // Get current items
  const getCurrentCertificates = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return certificates.slice(indexOfFirstItem, indexOfLastItem);
  };
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
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
          title="My Certifications"
          subtitle="Browse through my 500+ professional certifications"
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mb-8 mt-12"
        >
          {/* Search bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filter dropdown */}
          <div className="w-full md:w-48 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-slate-400" />
            </div>
            <select
              className="block w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {isLoading ? (
            Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 h-48 animate-pulse">
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-6"></div>
                <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6 mb-6"></div>
                <div className="h-4 bg-slate-200 rounded w-2/6"></div>
              </div>
            ))
          ) : getCurrentCertificates().length === 0 ? (
            <div className="col-span-3 text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-lg font-medium text-slate-700">No certificates found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            getCurrentCertificates().map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))
          )}
        </motion.div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === i + 1
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          </div>
        )}
        
        {/* Certification Sources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 bg-slate-50 rounded-xl border border-slate-200"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Certification Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a 
              href="https://learn.microsoft.com/en-gb/users/sumitsingh-4227/achievements"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span className="font-medium text-slate-800">Microsoft Learn</span>
            </a>
            <a 
              href="https://skills.yourlearning.ibm.com/learning/completed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span className="font-medium text-slate-800">IBM SkillBuild</span>
            </a>
            <a 
              href="https://www.credly.com/users/sumit-kumar-singh.45efa06d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span className="font-medium text-slate-800">Credly</span>
            </a>
            <a 
              href="https://www.udemy.com/home/my-courses/learning/?progress_filter=completed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span className="font-medium text-slate-800">Udemy</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certificates;