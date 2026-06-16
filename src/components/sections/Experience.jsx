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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-sky-400 via-blue-500 to-purple-600 transform md:-translate-x-0.5 opacity-80"></div>

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
                        <div className="p-3 bg-sky-100/60 dark:bg-sky-950/40 border border-sky-100/20 dark:border-sky-900/40 rounded-xl mr-4">
                          <Briefcase size={22} className="text-sky-500 dark:text-sky-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <p className="text-sky-500 dark:text-sky-400 font-bold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-gray-400" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-400" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-655 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center text-sm uppercase tracking-wider">
                          <Award size={18} className="mr-2 text-purple-500 dark:text-purple-400" />
                          {t('experience_section.key_achievements')}
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achieveIndex) => (
                            <motion.li
                              key={achieveIndex}
                              className="flex items-start text-gray-650 dark:text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: achieveIndex * 0.1 }}
                            >
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                          {t('experience_section.technologies_used')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-sky-50 dark:bg-sky-950/45 text-sky-600 dark:text-sky-400 font-bold border border-sky-100 dark:border-sky-900/40 px-3 py-1 rounded-full shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="absolute left-2 md:left-1/2 w-5 h-5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full border-[3px] border-white dark:border-gray-900 transform md:-translate-x-1/2 -translate-y-2 md:translate-y-0 z-10 shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                    <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-75"></div>
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
                      <div className="text-6xl font-extrabold text-gray-200/80 dark:text-gray-800/40 mb-2 tracking-tighter">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
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