import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Award, Download } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import Card from "../ui/Card";
import SkillBar from "../ui/SkillBar";
import Button from "../ui/Button";

const About = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const { personal, skills, education, certifications } = portfolioData;

    const tabs = [
        { id: "frontend", label: "Frontend", icon: "⚛️" },
        { id: "backend", label: "Backend", icon: "⚙️" },
        { id: "tools", label: "Tools", icon: "🛠️" },
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
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Passionate about creating exceptional digital
                            experiences with cutting-edge technologies
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
                                        Who I Am
                                    </h3>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    {personal.bio}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            Location
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {personal.location}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            Experience
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            2+ Years
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
                                    Download Resume
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
                                        Education & Certifications
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            className="border-l-4 border-primary-500 pl-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <h4 className="font-bold text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-primary-600 dark:text-primary-400 font-semibold">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {edu.duration} • GPA: {edu.gpa}
                                            </p>
                                        </motion.div>
                                    ))}

                                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                                            Certifications
                                        </h4>
                                        <div className="space-y-2">
                                            {certifications.map(
                                                (cert, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
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
                                                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                                                {cert.name}
                                                            </p>
                                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                                {cert.issuer}
                                                            </p>
                                                        </div>
                                                        <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">
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
                                    Technical{" "}
                                    <span className="gradient-text">
                                        Skills
                                    </span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Technologies and tools I work with
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                                            activeTab === tab.id
                                                ? "bg-primary-600 text-white shadow-lg transform scale-105"
                                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        <span className="text-xl">
                                            {tab.icon}
                                        </span>
                                        <span>{tab.label}</span>
                                    </button>
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
