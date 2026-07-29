import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";
import Card from "../ui/Card";
import Button from "../ui/Button";
import useTilt from "../../hooks/useTilt";

const ProjectCard = ({ project, t, itemVariants }) => {
    const cardRef = useTilt({
        max: 8,
        speed: 400,
        scale: 1.015,
        perspective: 1000,
        reset: true,
        transition: true
    });

    return (
        <motion.div
            variants={itemVariants}
            layout
            className="h-full"
        >
            <div ref={cardRef} className="h-full">
                <Card
                    hover={true}
                    padding="none"
                    className="h-full overflow-hidden border border-gray-200/50 dark:border-gray-800/40 shadow-md hover:shadow-2xl transition-all duration-300"
                >
                    <div className="relative group overflow-hidden">
                        <img
                            src={project.image}
                            alt={`Screenshot of ${project.title} project`}
                            loading="lazy"
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-[2px]">
                            {project.links.live && project.links.live !== "#" && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    href={project.links.live}
                                    target="_blank"
                                    className="bg-white text-gray-900 hover:bg-gray-100 p-2.5 rounded-full"
                                >
                                    <ExternalLink size={16} />
                                </Button>
                            )}
                            {project.links.github && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    href={project.links.github}
                                    target="_blank"
                                    className="bg-white text-gray-900 hover:bg-gray-100 p-2.5 rounded-full"
                                >
                                    <Github size={16} />
                                </Button>
                            )}
                        </div>

                        {project.featured && (
                            <div className="absolute top-4 left-4">
                                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-[0_2px_10px_rgba(217,70,239,0.3)]">
                                    {t('projects_section.featured')}
                                </span>
                            </div>
                        )}

                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/60 text-gray-800 dark:text-gray-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-sky-400">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed h-[60px] line-clamp-3">
                            {project.description}
                        </p>

                        <div className="mb-5">
                            <h4 className="text-xs font-bold text-gray-900 dark:text-gray-300 uppercase tracking-wider mb-2.5">
                                {t('projects_section.key_features')}
                            </h4>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
                                {project.highlights
                                    .slice(0, 2)
                                    .map(
                                        (
                                            highlight,
                                            index
                                        ) => (
                                            <li
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <span className="w-1.5 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mt-1.5 mr-2.5 flex-shrink-0"></span>
                                                <span className="line-clamp-2">{highlight}</span>
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies
                                .slice(0, 4)
                                .map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-[10px] bg-sky-50 dark:bg-sky-950/45 text-sky-600 dark:text-sky-400 font-bold border border-sky-100 dark:border-sky-900/40 px-2.5 py-1 rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            {project.technologies.length > 4 && (
                                <span className="text-xs text-gray-500 dark:text-gray-400 self-center font-medium pl-1">
                                    +{project.technologies.length - 4} {t('projects_section.more')}
                                </span>
                            )}
                        </div>

                        <div className="flex space-x-3">
                            {project.links.live && project.links.live !== "#" && (
                                <Button
                                    variant="primary"
                                    size="sm"
                                    href={project.links.live}
                                    target="_blank"
                                    className="flex-1"
                                >
                                    <ExternalLink
                                        size={14}
                                        className="mr-1.5"
                                    />
                                    {t('projects_section.live_demo')}
                                </Button>
                            )}
                            {project.links.github && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    href={project.links.github}
                                    target="_blank"
                                    className="flex-1"
                                >
                                    <Github
                                        size={14}
                                        className="mr-1.5"
                                    />
                                    {t('projects_section.code')}
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState("All");
    const projects = t('projects', { returnObjects: true });
    const social = t('social', { returnObjects: true });

    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
                            {t('projects_section.title')} <span className="gradient-text">{t('projects_section.highlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('projects_section.subtitle')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center items-center gap-4 mb-12"
                        variants={itemVariants}
                    >
                        <div className="flex items-center space-x-2">
                            <Filter
                                size={18}
                                className="text-gray-500 dark:text-gray-400"
                            />
                            <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm uppercase tracking-wider">
                                {t('projects_section.filter_by')}
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-4 py-2 text-sm rounded-full font-bold transition-all duration-300 cursor-target border ${
                                        activeFilter === category
                                            ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md shadow-blue-500/20 border-transparent transform scale-102"
                                            : "bg-gray-50/50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200/50 dark:border-gray-800/40 hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    t={t}
                                    itemVariants={itemVariants}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            className="text-center py-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                {t('projects_section.no_projects')}
                            </p>
                        </motion.div>
                    )}

                    <motion.div
                        className="text-center mt-16"
                        variants={itemVariants}
                    >
                        <Button
                            variant="glass-reflective"
                            size="lg"
                            href={social.github}
                            target="_blank"
                        >
                            <Github size={20} className="mr-2" />
                            {t('projects_section.view_all_on_github')}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
