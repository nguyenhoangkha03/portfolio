// /** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            colors: {
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                },
                accent: {
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "slide-in-left": "slideInLeft 0.5s ease-out",
                "slide-in-right": "slideInRight 0.5s ease-out",
                "bounce-in": "bounceIn 0.6s ease-out",
                "pulse-slow": "pulse 3s infinite",
                float: "float 6s ease-in-out infinite",
                shimmer: "shimmer 3s infinite linear",
                "pulse-glow": "pulseGlow 2s infinite ease-in-out",
                "text-glow": "textGlow 2s infinite ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideInLeft: {
                    "0%": { transform: "translateX(-30px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideInRight: {
                    "0%": { transform: "translateX(30px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                bounceIn: {
                    "0%": { transform: "scale(0.3)", opacity: "0" },
                    "50%": { transform: "scale(1.05)" },
                    "70%": { transform: "scale(0.9)" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 5px rgba(56, 189, 248, 0.4), 0 0 10px rgba(56, 189, 248, 0.2)" },
                    "50%": { boxShadow: "0 0 15px rgba(56, 189, 248, 0.8), 0 0 25px rgba(56, 189, 248, 0.4)" },
                },
                textGlow: {
                    "0%, 100%": { textShadow: "0 0 4px rgba(56, 189, 248, 0.2)" },
                    "50%": { textShadow: "0 0 12px rgba(56, 189, 248, 0.6), 0 0 20px rgba(168, 85, 247, 0.4)" },
                }
            },
            backdropBlur: {
                xs: "2px",
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.04), 0 1px 1px 0 rgba(255, 255, 255, 0.05) inset",
                "glass-hover": "0 8px 32px 0 rgba(31, 38, 135, 0.08), 0 0 15px rgba(56, 189, 248, 0.2), 0 1px 1px 0 rgba(255, 255, 255, 0.1) inset",
                "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(255, 255, 255, 0.05) inset",
                "glass-dark-hover": "0 8px 32px 0 rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.25), 0 1px 1px 0 rgba(255, 255, 255, 0.08) inset",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
