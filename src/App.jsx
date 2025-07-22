import React, { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Navigation from "./components/common/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";
import TargetCursor from "./components/ui/TargetCursor";
import { h1 } from "framer-motion/client";

function AppContent() {
    useScrollAnimation();

    useEffect(() => {
        const handleSmoothScroll = (e) => {
            if (e.target.getAttribute("href")?.startsWith("#")) {
                e.preventDefault();
                const targetId = e.target.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        document.addEventListener("click", handleSmoothScroll);
        return () => document.removeEventListener("click", handleSmoothScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <TargetCursor 
                targetSelector=".cursor-target"
                spinDuration={2}
                hideDefaultCursor={true}
            />
            <Navigation />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
