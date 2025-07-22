export const portfolioData = {
    personal: {
        name: "Hoang Kha",
        title: "Full Stack Developer",
        location: "Can Tho, Viet Nam",
        email: "akaisui03@gmail.com",
        phone: "+84 365 907 475",
        tagline: "Crafting digital experiences with modern technologies",
        bio: "A passionate full-stack developer with experience building scalable web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.",
        profileImage: "/assets/avatar.jpg",
        resume: "/resume.pdf",
    },

    social: {
        github: "https://github.com/nguyenhoangkha03",
        linkedin: "https://www.linkedin.com/in/kha-nguyen-86622b329/",
        facebook: "https://www.facebook.com/NguyenHoangKha1910/",
        x: "https://x.com/akaisui03",
        instagram: "https://www.instagram.com/hoangkha1910/",
        website: "#",
        medium: "https://medium.com/@alexchen",
    },

    skills: {
        frontend: [
            { name: "React", level: 95, icon: "⚛️" },
            { name: "TypeScript", level: 90, icon: "📘" },
            { name: "Next.js", level: 88, icon: "▲" },
            { name: "Vue.js", level: 85, icon: "💚" },
            { name: "JavaScript", level: 95, icon: "🟨" },
            { name: "CSS/SCSS", level: 90, icon: "🎨" },
            { name: "Tailwind CSS", level: 92, icon: "🎨" },
            { name: "Framer Motion", level: 80, icon: "🎭" },
        ],
        backend: [
            { name: "Node.js", level: 90, icon: "🟢" },
            { name: "PHP", level: 85, icon: "🐘" },
            { name: "Express.js", level: 88, icon: "🚂" },
            { name: "Laravel", level: 80, icon: "⚡" },
            { name: "NestJS", level: 85, icon: "🦉" },
            { name: "GraphQL", level: 82, icon: "🔗" },
            { name: "REST APIs", level: 92, icon: "🔌" },
            { name: "MySQL", level: 80, icon: "🐬" },
            { name: "PostgreSQL", level: 90, icon: "🐘" },
            { name: "MongoDB", level: 88, icon: "🍃" },
        ],
        tools: [
            { name: "Git", level: 95, icon: "📝" },
            { name: "Docker", level: 85, icon: "🐳" },
            { name: "AWS", level: 80, icon: "☁️" },
            { name: "Vercel", level: 90, icon: "▲" },
            { name: "Figma", level: 75, icon: "🎨" },
            { name: "VS Code", level: 95, icon: "💻" },
        ],
    },

    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and admin dashboard.",
            image: "/api/placeholder/600/400",
            technologies: [
                "React",
                "Node.js",
                "PostgreSQL",
                "Stripe",
                "Tailwind CSS",
            ],
            category: "Full Stack",
            featured: true,
            links: {
                live: "https://ecommerce-demo.com",
                github: "https://github.com/alexchen/ecommerce-platform",
            },
            highlights: [
                "Built with modern React patterns and hooks",
                "Integrated Stripe payment gateway",
                "Responsive design with Tailwind CSS",
                "Admin dashboard for inventory management",
            ],
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "/api/placeholder/600/400",
            technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB"],
            category: "Frontend",
            featured: true,
            links: {
                live: "https://taskmaster-app.com",
                github: "https://github.com/alexchen/task-management",
            },
            highlights: [
                "Real-time collaboration with Socket.io",
                "Drag-and-drop interface with Vue Draggable",
                "Team management and permissions",
                "Progressive Web App features",
            ],
        },
        {
            id: 3,
            title: "Weather Analytics Dashboard",
            description:
                "Data visualization dashboard displaying weather patterns and analytics using modern charting libraries and APIs.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "D3.js", "Python", "FastAPI"],
            category: "Data Visualization",
            featured: false,
            links: {
                live: "https://weather-analytics.com",
                github: "https://github.com/alexchen/weather-dashboard",
            },
            highlights: [
                "Interactive charts with D3.js",
                "Real-time weather data integration",
                "Responsive design for mobile devices",
                "Python backend for data processing",
            ],
        },
        {
            id: 4,
            title: "Social Media Dashboard",
            description:
                "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            category: "Full Stack",
            featured: false,
            links: {
                live: "https://social-dash.com",
                github: "https://github.com/alexchen/social-dashboard",
            },
            highlights: [
                "Server-side rendering with Next.js",
                "Type-safe database queries with Prisma",
                "OAuth integration for social platforms",
                "Advanced analytics and reporting",
            ],
        },
        {
            id: 5,
            title: "AI Image Generator",
            description:
                "AI-powered image generation tool using machine learning models with a user-friendly interface.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Python", "TensorFlow", "AWS"],
            category: "AI/ML",
            featured: false,
            links: {
                live: "https://ai-images.com",
                github: "https://github.com/alexchen/ai-image-gen",
            },
            highlights: [
                "Integration with AI/ML models",
                "Real-time image generation",
                "Cloud deployment on AWS",
                "Optimized for performance",
            ],
        },
        {
            id: 6,
            title: "Portfolio Website",
            description:
                "Personal portfolio website built with modern web technologies, featuring smooth animations and responsive design.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            category: "Frontend",
            featured: false,
            links: {
                live: "https://alexchen.dev",
                github: "https://github.com/alexchen/portfolio",
            },
            highlights: [
                "Smooth animations with Framer Motion",
                "Modern design with Tailwind CSS",
                "Fast loading with Vite",
                "SEO optimized",
            ],
        },
    ],

    experience: [
        {
            id: 1,
            company: "TechCorp Inc.",
            position: "Senior Full Stack Developer",
            duration: "2022 - Present",
            location: "San Francisco, CA",
            description:
                "Lead developer for multiple high-impact projects, mentoring junior developers and architecting scalable solutions.",
            achievements: [
                "Led development of a microservices architecture serving 1M+ users",
                "Reduced application load time by 40% through optimization",
                "Mentored 5+ junior developers and conducted code reviews",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
            ],
            technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
        },
        {
            id: 2,
            company: "StartupXYZ",
            position: "Full Stack Developer",
            duration: "2020 - 2022",
            location: "Remote",
            description:
                "Developed and maintained web applications for a fast-growing startup, working closely with product and design teams.",
            achievements: [
                "Built MVP from scratch leading to $2M in funding",
                "Integrated third-party APIs and payment systems",
                "Improved user engagement by 35% through UX improvements",
                "Collaborated with cross-functional teams in agile environment",
            ],
            technologies: [
                "Vue.js",
                "Express.js",
                "MongoDB",
                "Stripe",
                "Digital Ocean",
            ],
        },
        {
            id: 3,
            company: "WebSolutions",
            position: "Frontend Developer",
            duration: "2019 - 2020",
            location: "San Francisco, CA",
            description:
                "Focused on creating responsive and accessible web interfaces for various client projects.",
            achievements: [
                "Delivered 15+ client projects on time and within budget",
                "Improved website accessibility scores to AA compliance",
                "Created reusable component library used across projects",
                "Collaborated with designers to implement pixel-perfect designs",
            ],
            technologies: [
                "JavaScript",
                "CSS",
                "Bootstrap",
                "jQuery",
                "WordPress",
            ],
        },
    ],

    education: [
        {
            institution: "Tay Do University, Can Tho, Viet Nam",
            degree: "Bachelor of Web Development",
            duration: "2021 - 2025",
            gpa: "3.8/4.0",
            relevant: [
                "Data Structures and Algorithms",
                "Software Engineering",
                "Database Systems",
                "Web Development",
            ],
        },
    ],

    certifications: [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2025",
            credentialId: "AWS-123456",
        },
        {
            name: "React Developer Certification",
            issuer: "Meta",
            date: "2024",
            credentialId: "META-789012",
        },
    ],
};
