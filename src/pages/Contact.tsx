import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, FileText } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { pageVariants, pageTransition } from '../utils/transitions';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: formRef, controls: formControls } = useScrollAnimation();
  const { ref: infoRef, controls: infoControls } = useScrollAnimation();

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
          title="Get In Touch"
          subtitle="Have a question or want to work together? Contact me anytime."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={formControls}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            variants={{
              hidden: { opacity: 0, x: 30 },
              show: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={infoControls}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-md p-6 md:p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-300">Email</h4>
                  <a
                    href="mailto:contact@sumitsingh.dev"
                    className="text-white hover:text-primary-300 transition-colors"
                  >
                    contact@sumitsingh.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-300">Location</h4>
                  <p className="text-white">India</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-700">
                <h4 className="font-medium text-slate-300 mb-3">Connect with me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: 'GitHub',
                      icon: <Github className="w-5 h-5 mr-2" />,
                      url: 'https://github.com/RAJPUTRoCkStAr',
                    },
                    {
                      name: 'LinkedIn',
                      icon: <Linkedin className="w-5 h-5 mr-2" />,
                      url: 'https://www.linkedin.com/in/sumit-singh-773921262/',
                    },
                    {
                      name: 'Medium',
                      icon: <FileText className="w-5 h-5 mr-2" />,
                      url: 'https://medium.com/@sumitsingh9441',
                    },
                    {
                      name: 'Kaggle',
                      icon: (
                        <img
                          src="https://www.kaggle.com/static/images/site-logo.png"
                          alt="Kaggle"
                          className="w-5 h-5 mr-2"
                        />
                      ),
                      url: 'https://www.kaggle.com/sumitsingh9441',
                    },
                  ].map((platform, idx) => (
                    <motion.a
                      key={idx}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className="flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all text-sm"
                    >
                      {platform.icon}
                      <span>{platform.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-white mb-4">
                What I Can Help With
              </h4>
              <ul className="space-y-2 text-slate-300">
                {[
                  'Full Stack Web Development Projects',
                  'Python Automation Solutions',
                  'Data Science & ML Consulting',
                  'Cybersecurity Assessments',
                  'Technical Mentoring',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
