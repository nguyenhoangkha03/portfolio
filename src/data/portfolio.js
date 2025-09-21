import socialImage from "../assets/social-network.png";
import weatherImage from "../assets/weather-app.png";
import todoImage from "../assets/todo-app.png";
import kanbanImage from "../assets/kanban-board.png";
import ecommerceImage from "../assets/ecommerce.png";
import carRepairImage from "../assets/car-repair.png";

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
        resume: "/CV-VN.pdf",
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
            title: "Social Media Platform",
            description:
                "A full-stack social media application built with Laravel and MySQL. Features include user authentication, posts, comments, likes, friend system, notifications, and real-time messaging using Laravel WebSockets.",
            image: socialImage,
            technologies: [
                "Laravel",
                "MySQL",
                "Laravel WebSockets",
                "Tailwind CSS",
                "Livewire",
            ],
            category: "Full Stack",
            featured: true,
            links: {
                live: "https://social-network-laravel-lh9vy.sevalla.app/",
                github: "https://github.com/nguyenhoangkha03/social-network",
            },
            highlights: [
                "Built with Laravel and RESTful APIs",
                "Real-time chat using Laravel WebSockets",
                "Friendship system with requests and suggestions",
                "Interactive post feed with likes and comments",
                "Notification system for likes, comments, and friend requests",
                "Responsive UI with Tailwind CSS and Livewire",
            ],
        },
        {
            id: 2,
            title: "Badminton Shop E-commerce",
            description:
                "A full-stack e-commerce platform specialized in badminton equipment with AI-powered shopping assistant,secure payment processing, and comprehensive admin dashboard for managing products and orders.",
            image: ecommerceImage,
            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Sequelize",
                "Redux Toolkit",
                "Tailwind CSS",
                "Google Generative AI",
                "Stripe",
                "JWT",
            ],
            category: "Full Stack",
            featured: true,
            links: {
                live: "https://badminton-shop-beta.vercel.app/",
                github: "https://github.com/nguyenhoangkha03/ecommerce-backend-k",
            },
            highlights: [
                "AI-powered shopping assistant using Google Generative AI for product recommendations",
                "Secure authentication system with JWT and email verification",
                "Real-time inventory management with PostgreSQL and Sequelize ORM",
                "Responsive UI with Tailwind CSS and modern glassmorphism design",
                "Integrated payment processing with Stripe and multiple payment methods",
                "Multi-language support with i18next internationalization",
                "Admin dashboard for product, order, and user management",
                "Advanced product filtering, searching, and wishlist functionality",
                "Customer reviews and ratings system with feedback management",
                "Performance optimized with Redis caching and image lazy loading",
            ],
        },
        {
            id: 3,
            title: "Car Repair Management System",
            description:
                "A comprehensive full-stack car repair management platform with real-time appointment booking, service tracking, and customer management system for automotive repair shops.",
            image: carRepairImage,
            technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "MySQL",
                "Socket.io",
                "React Native",
            ],
            category: "Full Stack",
            featured: true,
            links: {
                live: "https://sua-xe-hong-hau.vercel.app/",
                github: "https://github.com/akaisui/car-repair-backend",
            },
            highlights: [
                "Real-time appointment booking and status tracking system",
                "Comprehensive dashboard for repair history and invoicing",
                "Push notifications for repair status updates",
                "Mobile app for technicians using React Native",
                "Role-based access control for customers, technicians, and admins",
                "Integrated rewards and loyalty program",
                "Email and SMS notification services",
                "Advanced search and filtering for services and appointments",
            ],
        },
        {
            id: 4,
            title: "Weather App",
            description:
                "A beautiful and responsive weather application with real-time weather data, modern glass morphism design, and intuitive user interface for checking weather conditions worldwide.",
            image: weatherImage,
            technologies: ["React", "TypeScript", "OpenWeatherMap API", "CSS3"],
            category: "Frontend",
            featured: true,
            links: {
                live: "https://weather-app-two-jade-99.vercel.app/",
                github: "https://github.com/nguyenhoangkha03/weather-app",
            },
            highlights: [
                "Modern glass morphism UI design with animated backgrounds",
                "Real-time weather data integration with OpenWeatherMap API",
                "Responsive design optimized for all devices",
                "TypeScript for better code quality and development experience",
                "Smooth animations and hover effects for enhanced UX",
            ],
        },
        {
            id: 5,
            title: "Modern Todo App",
            description:
                "A modern task management application built with React, featuring a sleek UI, complete CRUD operations, localStorage persistence, and task filtering by status.",
            image: todoImage,
            technologies: ["React", "CSS3", "JavaScript", "LocalStorage"],
            category: "Frontend",
            featured: true,
            links: {
                live: "https://todo-app-six-smoky-66.vercel.app/",
                github: "https://github.com/nguyenhoangkha03/todo-app",
            },
            highlights: [
                "Complete CRUD operations (Create, Read, Update, Delete)",
                "Mark tasks as completed with animation",
                "Filter tasks by status (All / Active / Completed)",
                "LocalStorage persistence – no data loss on refresh",
                "Modern UI with gradients and hover effects",
                "Responsive design for both mobile and desktop",
                "Inline editing with keyboard shortcuts",
                "Statistics dashboard showing progress overview",
            ],
        },
        {
            id: 6,
            title: "TaskFlow Pro - Kanban Board",
            description:
                "A modern Kanban project management app built with React, featuring glassmorphism design, smooth drag & drop, dark/light mode, and beautiful animation effects.",
            image: kanbanImage,
            technologies: [
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "@hello-pangea/dnd",
                "Vite",
                "LocalStorage",
            ],
            category: "Frontend",
            featured: true,
            links: {
                live: "https://kanban-board-three-azure.vercel.app/",
                github: "https://github.com/nguyenhoangkha03/kanban-board",
            },
            highlights: [
                "Drag & drop tasks between columns with 3D animations",
                "Dark/Light mode with gradient backgrounds and particles",
                "Glassmorphism design with backdrop-blur effects",
                "Task management with priority, tags, and descriptions",
                "LocalStorage persistence – no data loss on refresh",
                "Advanced animations powered by Framer Motion",
                "Fully responsive for mobile and desktop devices",
                "Floating action buttons with micro-interactions",
            ],
        },
    ],

    experience: [
        {
            id: 1,
            company: "Freelance",
            position: "Full Stack Developer",
            duration: "2022 - 2025",
            location: "Remote",
            description:
                "Worked as a freelance full stack developer during university, building and delivering web applications for small businesses and individual clients. Responsible for both frontend and backend development, deployment, and maintenance.",
            achievements: [
                "Designed and developed 5+ responsive business websites and SEO-optimized landing pages",
                "Built custom content management systems tailored to client needs",
                "Integrated online payment gateways such as VNPay and MoMo",
                "Collaborated directly with clients to gather requirements and deliver solutions on time",
            ],
            technologies: [
                "Next.js",
                "NestJS",
                "MySQL",
                "Tailwind CSS",
                "Firebase",
                "AWS S3",
            ],
        },
        {
            id: 2,
            company: "Tay Do University",
            position: "Student Developer",
            duration: "2021 - 2025",
            location: "Can Tho, Vietnam",
            description:
                "Participated in various academic and team-based projects as part of the Computer Science program. Focused on building real-world applications and improving both technical and collaboration skills.",
            achievements: [
                "Developed a full-featured Learning Management System (LMS) with course management, quizzes, and progress tracking",
                "Built a student management application with RESTful API and JWT authentication",
                "Led the backend team in multiple group projects following Agile/Scrum methodology",
                "Implemented CI/CD pipelines using GitHub Actions to automate testing and deployment",
            ],
            technologies: [
                "React.js",
                "Laravel",
                "PostgreSQL",
                "Docker",
                "GitHub Actions",
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
            name: "Node.js Intermediate Certificate",
            issuer: "HackerRank",
            date: "2025",
            credentialId: "B764OA957FCF",
        },
        {
            name: "DSA - Certificate",
            issuer: "Codelearn",
            date: "2025",
            credentialId: "C7680-34345",
        },
    ],
};
