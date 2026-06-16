import React from "react";
import { motion } from "framer-motion";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    onClick,
    disabled = false,
    className = "",
    href,
    target,
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

    const variants = {
        primary:
            "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white focus:ring-blue-500 shadow-lg hover:shadow-2xl transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        secondary:
            "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105",
        outline:
            "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover:shadow-md transform hover:scale-105",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 hover:shadow-md transform hover:scale-105",
        gradient:
            "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 bg-size-200 hover:bg-right-bottom",
        glowing:
            "bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 hover:from-sky-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.45)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:scale-105",
        "glass-reflective":
            "bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 text-gray-900 dark:text-white backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 shadow-glass hover:shadow-glass-hover transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000",
    };

    const sizes = {
        sm: "px-3 py-2 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-lg",
        lg: "px-6 py-3 text-lg rounded-lg",
        xl: "px-8 py-4 text-xl rounded-xl",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} cursor-target ${className}`;

    const MotionComponent = motion.button;

    if (href) {
        return (
            <motion.a
                href={href}
                target={target}
                className={classes}
                whileHover={{
                    scale: 1.05,
                    boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                }}
                {...props}
            >
                {children}
                {/* <span className="relative z-10">{children}</span> */}
            </motion.a>
        );
    }

    return (
        <MotionComponent
            onClick={onClick}
            disabled={disabled}
            className={classes}
            whileHover={{
                scale: 1.05,
                boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
            }}
            {...props}
        >
            {/* <span className="relative z-10">{children}</span> */}
            {children}
        </MotionComponent>
    );
};

export default Button;
