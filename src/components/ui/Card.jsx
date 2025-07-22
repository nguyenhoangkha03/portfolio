import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = false,
  padding = 'lg',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const baseClasses = `
    bg-white dark:bg-gray-900 
    border border-gray-200 dark:border-gray-800 
    rounded-xl 
    shadow-lg 
    ${paddingClasses[padding]}
  `;
  
  const glassClasses = glass ? 'glass backdrop-blur-md bg-white/10 dark:bg-black/10' : '';
  const hoverClasses = hover ? 'card-hover' : '';
  
  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} group cursor-target ${className}`.trim();
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;