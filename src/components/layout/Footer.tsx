import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, BookText, Award, Database } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/RAJPUTRoCkStAr' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/sumit-singh-773921262/' },
    { name: 'DEV.to', icon: <BookText size={18} />, url: 'https://dev.to/dashboard' },
    { name: 'Medium', icon: <BookText size={18} />, url: 'https://medium.com/@sumitsingh9441' },
    { name: 'Kaggle', icon: <Database size={18} />, url: 'https://www.kaggle.com/work' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Sumit Singh</h2>
            <p className="text-slate-300 mb-4 max-w-md">
              Full-stack developer specializing in Python, AI/ML, Cybersecurity, and Web Development with 500+ certifications across diverse technologies.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/certificates" className="text-slate-300 hover:text-white transition-colors">Certificates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/kaggle" className="text-slate-300 hover:text-white transition-colors">Kaggle</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Sumit Singh. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Built with React, TailwindCSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;