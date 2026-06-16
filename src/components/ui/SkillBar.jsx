import React from 'react';
import { motion } from 'framer-motion';
import { iconMap } from '../../utils/iconMapping';

const SkillBar = ({ skill, delay = 0 }) => {
  return (
    <div className="mb-6 group/skill">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <span 
            className="text-2xl transition-colors duration-300 group-hover/skill:scale-110"
            style={{ color: iconMap[skill.icon]?.color || 'currentColor' }}
          >
            {iconMap[skill.icon] ? (
              React.createElement(iconMap[skill.icon].icon)
            ) : (
              skill.icon
            )}
          </span>
          <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover/skill:text-sky-500 dark:group-hover/skill:text-sky-400">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-sky-500 dark:text-sky-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-100 dark:bg-gray-800/80 rounded-full h-3 overflow-hidden shadow-inner relative border border-gray-200/10 dark:border-gray-700/25">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: "easeOut" 
          }}
        >
          {/* Glowing dot effect at the end of progress */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1),_0_0_12px_#38bdf8] mr-[1px]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;