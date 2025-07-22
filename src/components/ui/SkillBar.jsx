import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;