import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';

const Experience = () => {
  const { t } = useTranslation();
  const experience = t('experience', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('experience_section.title')} <span className="gradient-text">{t('experience_section.highlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('experience_section.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-0.5"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative mb-12 md:mb-16"
                variants={itemVariants}
              >
                <div className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card hover={true}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                          <Briefcase size={24} className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Award size={18} className="mr-2 text-accent-600 dark:text-accent-400" />
                          {t('experience_section.key_achievements')}
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achieveIndex) => (
                            <motion.li
                              key={achieveIndex}
                              className="flex items-start text-gray-700 dark:text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: achieveIndex * 0.1 }}
                            >
                              <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          {t('experience_section.technologies_used')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 -translate-y-2 md:translate-y-0 z-10">
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className={`hidden md:block w-5/12 ${
                    index % 2 === 0 ? 'pl-8' : 'pr-8'
                  }`}>
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="text-6xl font-bold text-primary-100 dark:text-primary-900 mb-2">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="w-16 h-0.5 bg-primary-500 mx-auto"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('experience_section.next_challenge_title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('experience_section.next_challenge_subtitle')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;