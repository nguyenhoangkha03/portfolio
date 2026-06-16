import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Award, Download, Code2, Layout, Server, Smartphone, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import Card from "../ui/Card";
import SkillBar from "../ui/SkillBar";
import Button from "../ui/Button";

const About = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("languages");

  const personal = t('personal', { returnObjects: true });
  const skills = t('skills', { returnObjects: true });
  const education = t('education', { returnObjects: true });
  const certifications = t('certifications', { returnObjects: true });

  const tabs = [
    { id: "languages", label: t('about.skills_languages'), icon: <Code2 size={22} />, color: "text-blue-500", bg: "bg-blue-500/10", glow: "shadow-blue-500/20" },
    { id: "frontend", label: t('about.skills_frontend'), icon: <Layout size={22} />, color: "text-cyan-500", bg: "bg-cyan-500/10", glow: "shadow-cyan-500/20" },
    { id: "backend", label: t('about.skills_backend'), icon: <Server size={22} />, color: "text-amber-500", bg: "bg-amber-500/10", glow: "shadow-amber-500/20" },
    { id: "mobile", label: t('about.skills_mobile'), icon: <Smartphone size={22} />, color: "text-emerald-500", bg: "bg-emerald-500/10", glow: "shadow-emerald-500/20" },
    { id: "tools", label: t('about.skills_tools'), icon: <Wrench size={22} />, color: "text-purple-500", bg: "bg-purple-500/10", glow: "shadow-purple-500/20" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('about.title')} <span className="gradient-text">{t('about.me')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <Card>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                    <User
                      size={24}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('about.who_i_am')}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {personal.bio}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('about.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {personal.location}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('about.experience')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('about.experience_years')}
                    </p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  href={personal.resume}
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Download size={20} className="mr-2" />
                  {t('about.download_resume')}
                </Button>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900 rounded-full mr-4">
                    <Award
                      size={24}
                      className="text-accent-600 dark:text-accent-400"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('about.education_and_certifications')}
                  </h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="border-l-[3px] border-sky-400 dark:border-sky-500 pl-5 py-1 relative hover:translate-x-1 transition-all duration-300 group/timeline"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="absolute -left-[8px] top-2.5 w-[13px] h-[13px] rounded-full bg-sky-400 dark:bg-sky-500 border-[3px] border-white dark:border-gray-800 shadow-[0_0_8px_rgba(56,189,248,0.5)] group-hover/timeline:scale-125 transition-transform duration-300"></div>
                      <h4 className="font-bold text-gray-900 dark:text-white group-hover/timeline:text-sky-500 dark:group-hover/timeline:text-sky-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-650 dark:text-sky-400 font-semibold">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-550 dark:text-gray-400 font-medium">
                        {edu.duration} • GPA: {edu.gpa}
                      </p>
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      {t('about.certifications')}
                    </h4>
                    <div className="space-y-3">
                      {certifications.map(
                        (cert, index) => (
                          <motion.div
                            key={index}
                            className="flex justify-between items-center p-3.5 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/50 dark:border-gray-800/40 rounded-xl hover:shadow-md hover:border-sky-400/50 dark:hover:border-sky-500/40 transition-all duration-300 group/cert"
                            initial={{
                              opacity: 0,
                              scale: 0.95,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: index * 0.1,
                            }}
                          >
                            <div>
                              <p className="font-bold text-gray-900 dark:text-white text-sm group-hover/cert:text-sky-500 dark:group-hover/cert:text-sky-400 transition-colors">
                                {cert.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                {cert.issuer}
                              </p>
                            </div>
                            <span className="text-xs bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/40 text-sky-600 dark:text-sky-400 px-2.5 py-1 rounded-lg font-bold">
                              {cert.date}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Card>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('about.technical_skills_title')}{" "}
                  <span className="gradient-text">
                    {t('about.technical_skills_highlight')}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('about.technical_skills_subtitle')}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex items-center space-x-3 py-3 px-6 rounded-2xl transition-all duration-500 border cursor-target ${activeTab === tab.id
                        ? `bg-white dark:bg-gray-800 text-gray-950 dark:text-white shadow-lg ${tab.glow} border-gray-200 dark:border-gray-700`
                        : "bg-gray-50/50 dark:bg-gray-900/30 text-gray-500 dark:text-gray-400 border-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                      }`}
                  >
                    <div className={`p-2 rounded-xl transition-colors duration-500 ${activeTab === tab.id ? tab.bg + " " + tab.color : "bg-gray-200/50 dark:bg-gray-800/50"
                      }`}>
                      {tab.icon}
                    </div>
                    <span className="font-bold text-sm tracking-wide uppercase">{tab.label}</span>

                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full ${tab.color.replace('text-', 'bg-')}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {skills[activeTab]?.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
