import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Certificate } from '../../types';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-slate-200"
    >
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-accent-500" />
            <h3 className="text-lg font-medium text-slate-800 line-clamp-2">{certificate.title}</h3>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="text-sm font-medium bg-primary-100 text-primary-800 px-2.5 py-0.5 rounded">
            {certificate.provider}
          </span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center">
          <div className="text-sm text-slate-600">
            {certificate.date}
          </div>
          
          {certificate.url && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 flex items-center text-sm font-medium"
              aria-label={`View certificate for ${certificate.title}`}
            >
              View <ExternalLink className="ml-1 w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;