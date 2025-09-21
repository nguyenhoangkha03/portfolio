import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Github,
    Linkedin,
    X,
    Facebook,
    Instagram,
    ArrowUp,
    Flashlight,
    Handshake,
    Flame,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const personal = t('personal', { returnObjects: true });
    const social = t('social', { returnObjects: true });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: Github, url: social.github, label: "GitHub" },
        { icon: Linkedin, url: social.linkedin, label: "LinkedIn" },
        { icon: X, url: social.x, label: "X" },
        { icon: Facebook, url: social.facebook, label: "Facebook" },
        { icon: Instagram, url: social.instagram, label: "Instagram" },
    ];

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

            <div className="relative z-10">
                <div className="section-container py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <motion.div
                            className="col-span-full md:col-span-1 lg:col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-4">
                                Akaisui
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {personal.tagline}
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300 group"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={social.label}
                                        >
                                            <IconComponent
                                                size={20}
                                                className="group-hover:text-white transition-colors"
                                            />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold mb-4">
                                {t('footer.quick_links')}
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    { name: t('nav.home'), href: '#home' },
                                    { name: t('nav.about'), href: '#about' },
                                    { name: t('nav.projects'), href: '#projects' },
                                    { name: t('nav.experience'), href: '#experience' },
                                    { name: t('nav.contact'), href: '#contact' },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => {
                                                const element =
                                                    document.querySelector(
                                                        item.href
                                                    );
                                                if (element) {
                                                    element.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                            className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold mb-4">
                                {t('footer.contact_info')}
                            </h4>
                            <div className="space-y-2 text-gray-300">
                                <p>{personal.location}</p>
                                <p>{personal.email}</p>
                                <p>{personal.phone}</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <motion.div
                                className="text-gray-400 text-sm mb-4 md:mb-0 text-center space-y-1"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <p className="flex justify-center items-center gap-2">
                                    <Flashlight
                                        size={16}
                                        className="text-yellow-400"
                                    />
                                    <span>
                                        {t('footer.tagline_1')}
                                    </span>
                                    <Flame
                                        size={16}
                                        className="text-orange-500"
                                    />
                                    <span>{t('footer.tagline_2')}</span>
                                    <Heart
                                        size={16}
                                        className="text-red-500 mx-1"
                                    />
                                </p>
                                <p className="flex justify-center items-center">
                                    {personal.name}
                                </p>
                            </motion.div>

                            <motion.button
                                onClick={scrollToTop}
                                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ y: -2 }}
                            >
                                <span className="text-sm">{t('footer.back_to_top')}</span>
                                <ArrowUp
                                    size={16}
                                    className="group-hover:-translate-y-1 transition-transform duration-200"
                                />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
