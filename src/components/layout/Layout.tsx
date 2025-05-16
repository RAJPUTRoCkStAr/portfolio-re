import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {!isMobile && <Cursor />}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 z-50 origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="pt-20 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;