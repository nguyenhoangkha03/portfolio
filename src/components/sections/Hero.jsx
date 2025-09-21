import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import PixelTransition from "../ui/PixelTransition";
import LightRays from "../ui/LightRays";
import avatar from "../../assets/avatar.jpg";
import background from "../../assets/background-2.jpg";

const Hero = () => {
    const { t } = useTranslation();
    const personal = t("personal", { returnObjects: true });
    const social = t("social", { returnObjects: true });

    const scrollToNext = () => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const floatVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            {/* Background image layer */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${background})` }}
            ></div>

            {/* Light rays overlay layer */}
            <div className="absolute inset-0 w-full h-full opacity-70">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#60a5fa"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={2.2}
                    followMouse={true}
                    mouseInfluence={0.08}
                    noiseAmount={0.03}
                    distortion={0.03}
                    fadeDistance={0.9}
                    saturation={1.2}
                />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="mb-8" variants={itemVariants}>
                        <motion.div
                            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
                            variants={floatVariants}
                            animate="animate"
                        >
                            <PixelTransition
                                firstContent={
                                    <img
                                        src={avatar}
                                        alt={personal.name}
                                        className="w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
                                    />
                                }
                                secondContent={
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-4 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                👋
                                            </div>
                                            <div className="text-xs md:text-sm font-semibold text-white/90">
                                                {t("hero.hello")}
                                            </div>
                                        </div>
                                    </div>
                                }
                                gridSize={10}
                                pixelColor="#3b82f6"
                                animationStepDuration={0.4}
                                className="w-full h-full rounded-full"
                                aspectRatio="100%"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="text-gray-900 dark:text-white">
                                {t("hero.hi_im")}{" "}
                            </span>
                            <span className="gradient-text">
                                {personal.name}
                            </span>
                        </motion.h1>
                    </motion.div>

                    {/* <motion.div variants={itemVariants}>
                        <motion.h2
                            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            {t("hero.subtitle")}
                        </motion.h2>
                    </motion.div> */}

                    <motion.div variants={itemVariants}>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            {t("hero.subtitle")}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        variants={itemVariants}
                    >
                        <Button
                            variant="gradient"
                            size="lg"
                            onClick={() =>
                                document
                                    .querySelector("#projects")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                            className="group"
                        >
                            {t("hero.view_my_work")}
                            <ExternalLink
                                size={20}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() =>
                                document
                                    .querySelector("#contact")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            {t("hero.get_in_touch")}
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center space-x-6 mb-12"
                        variants={itemVariants}
                    >
                        <motion.a
                            href={social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-target"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={24} />
                        </motion.a>

                        <motion.a
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-target"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>

                        <motion.a
                            href={`mailto:${personal.email}`}
                            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-target"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="animate-bounce cursor-pointer"
                        onClick={scrollToNext}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                    >
                        <ArrowDown
                            size={32}
                            className="mx-auto text-primary-600 dark:text-primary-400"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
