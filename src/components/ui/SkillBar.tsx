import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const { ref, controls } = useScrollAnimation(0.1);

  // Define colors based on skill category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-blue-500 to-indigo-600';
      case 'backend':
        return 'from-green-500 to-emerald-600';
      case 'data':
        return 'from-yellow-500 to-amber-600';
      case 'devops':
        return 'from-orange-500 to-red-600';
      case 'security':
        return 'from-purple-500 to-violet-600';
      default:
        return 'from-slate-500 to-gray-600';
    }
  };

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)}`}
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            show: {
              width: `${skill.level}%`,
              transition: { duration: 1, ease: "easeInOut" }
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;