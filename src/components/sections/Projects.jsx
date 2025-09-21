import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";
import Card from "../ui/Card";
import Button from "../ui/Button";

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
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        variants={itemVariants}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <Filter
                                size={20}
                                className="text-gray-600 dark:text-gray-400"
                            />
                            <span className="text-gray-600 dark:text-gray-400 font-medium">
                                {t('projects_section.filter_by')}
                            </span>
                        </div>

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-target ${
                                    activeFilter === category
                                        ? "bg-primary-600 text-white shadow-lg transform scale-105"
                                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
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
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    layout
                                    whileHover={{ y: -5 }}
                                >
                                    <Card
                                        hover={true}
                                        padding="none"
                                        className="h-full overflow-hidden"
                                    >
                                        <div className="relative group">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    href={project.links.live}
                                                    target="_blank"
                                                    className="bg-white text-gray-900 hover:bg-gray-100"
                                                >
                                                    <ExternalLink size={16} />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    href={project.links.github}
                                                    target="_blank"
                                                    className="bg-white text-gray-900 hover:bg-gray-100"
                                                >
                                                    <Github size={16} />
                                                </Button>
                                            </div>

                                            {project.featured && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                        {t('projects_section.featured')}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute top-4 right-4">
                                                <span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    {t('projects_section.key_features')}
                                                </h4>
                                                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
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
                                                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                    {highlight}
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies
                                                    .slice(0, 4)
                                                    .map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                {project.technologies.length >
                                                    4 && (
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        +
                                                        {project.technologies
                                                            .length - 4}{" "}
                                                        {t('projects_section.more')}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex space-x-3">
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    href={project.links.live}
                                                    target="_blank"
                                                    className="flex-1"
                                                >
                                                    <ExternalLink
                                                        size={14}
                                                        className="mr-1"
                                                    />
                                                    {t('projects_section.live_demo')}
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    href={project.links.github}
                                                    target="_blank"
                                                    className="flex-1"
                                                >
                                                    <Github
                                                        size={14}
                                                        className="mr-1"
                                                    />
                                                    {t('projects_section.code')}
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
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
                        className="text-center mt-12"
                        variants={itemVariants}
                    >
                        <Button
                            variant="outline"
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
