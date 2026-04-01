import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Get the base language (e.g., "en" from "en-US") or default to "en"
    const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

    return (
        <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-full">
            <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    currentLang === "en"
                        ? "bg-primary-600 text-white"
                        : "text-gray-700 dark:text-gray-300"
                }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage("vi")}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    currentLang === "vi"
                        ? "bg-primary-600 text-white"
                        : "text-gray-700 dark:text-gray-300"
                }`}
            >
                VI
            </button>
        </div>
    );
};

const Navigation = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t('nav.home'), href: "#home" },
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.projects'), href: "#projects" },
        { name: t('nav.experience'), href: "#experience" },
        { name: t('nav.contact'), href: "#contact" },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled ? "navbar-blur py-2" : "bg-transparent py-4"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="section-container">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="text-2xl font-bold gradient-text cursor-pointer cursor-target"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => scrollToSection("#home")}
                    >
                        Akaisui
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group cursor-target"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">{item.name}</span>
                            </motion.button>
                        ))}

                        <div className="flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleTheme}
                                className="p-2"
                            >
                                {theme === "dark" ? (
                                    <Sun size={20} />
                                ) : (
                                    <Moon size={20} />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <LanguageSwitcher />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="p-2"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            )}
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden mt-4 pb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium py-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navigation;
