import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import CertificationsPreview from '../components/Home/CertificationsPreview';
import BlogPreview from '../components/Home/BlogPreview';
import KaggleOverview from '../components/Home/KaggleOverview';
import CTASection from '../components/Home/CTASection';
import { pageVariants, pageTransition } from '../utils/transitions';

const Home = () => {
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
    >
      <HeroSection />
      <FeaturedProjects />
      <CertificationsPreview />
      <BlogPreview />
      <KaggleOverview />
      <CTASection />
    </motion.div>
  );
};

export default Home;