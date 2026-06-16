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
        <div className="flex items-center space-x-1 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 p-1 rounded-full backdrop-blur-md">
            <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 cursor-target ${
                    currentLang === "en"
                        ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md shadow-blue-500/25"
                        : "text-gray-650 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage("vi")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 cursor-target ${
                    currentLang === "vi"
                        ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md shadow-blue-500/25"
                        : "text-gray-650 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
    const [activeSection, setActiveSection] = useState("#home");
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: t('nav.home'), href: "#home" },
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.projects'), href: "#projects" },
        { name: t('nav.experience'), href: "#experience" },
        { name: t('nav.contact'), href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll spy logic
            const scrollPosition = window.scrollY + 200;
            const sections = navItems.map(item => document.querySelector(item.href));

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].href);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <header>
        <motion.nav
            aria-label="Main navigation"
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? "backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/40 dark:border-gray-800/40 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
                    : "bg-transparent py-5"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="section-container">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="text-2xl font-bold gradient-text cursor-pointer cursor-target tracking-tight"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => scrollToSection("#home")}
                    >
                        Akaisui
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.href;
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 cursor-target ${
                                        isActive 
                                            ? "text-blue-600 dark:text-sky-400 font-bold" 
                                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400"
                                    }`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 to-purple-500 rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.a>
                            );
                        })}

                        <div className="flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleTheme}
                                className="p-2.5 rounded-full bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {theme === "dark" ? (
                                    <Sun size={18} className="text-amber-400" />
                                ) : (
                                    <Moon size={18} className="text-gray-700" />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center space-x-3">
                        <LanguageSwitcher />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {theme === "dark" ? (
                                <Sun size={18} className="text-amber-400" />
                            ) : (
                                <Moon size={18} className="text-gray-750" />
                            )}
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-full bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200/60 dark:border-gray-800/60">
                                {navItems.map((item, index) => {
                                    const isActive = activeSection === item.href;
                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.href);
                                            }}
                                            className={`text-left transition-colors duration-200 font-semibold py-2 px-3 rounded-lg ${
                                                isActive
                                                    ? "bg-blue-50 dark:bg-sky-950/30 text-blue-600 dark:text-sky-400"
                                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-55/30 dark:hover:bg-gray-800/30"
                                            }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.05,
                                            }}
                                        >
                                            {item.name}
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
        </header>
    );
};

export default Navigation;
