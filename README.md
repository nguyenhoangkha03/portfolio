# Modern Portfolio Website

A stunning, responsive portfolio website built with React 19, Vite, and Tailwind CSS. Features smooth animations, dark/light theme switching, and modern web design patterns.

![Portfolio Preview](public/api/placeholder/1200/600)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with gradient accents
- **🌙 Dark/Light Theme**: Toggle between themes with persistent localStorage
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎭 Smooth Animations**: Framer Motion powered animations and transitions
- **⚡ Fast Performance**: Vite build system for lightning-fast development
- **♿ Accessible**: ARIA labels and keyboard navigation support
- **📧 Contact Form**: Functional contact form with validation
- **🎯 Modern Tech Stack**: React 19, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Animations**: Framer Motion, AOS (Animate On Scroll)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Build Tool**: Vite 5+
- **Development**: Hot Module Replacement (HMR)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── SkillBar.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   └── common/          # Common components
│       ├── Navigation.jsx
│       └── Footer.jsx
├── contexts/            # React contexts
│   └── ThemeContext.jsx
├── hooks/               # Custom hooks
│   └── useScrollAnimation.js
├── data/                # Static data
│   └── portfolio.js
├── utils/               # Utility functions
├── App.jsx              # Main app component
└── main.jsx            # App entry point
```

## 🎨 Customization

### Personal Information

Edit the data in `src/data/portfolio.js` to customize:

- Personal details (name, title, bio, contact info)
- Social media links
- Skills and proficiency levels
- Work experience
- Projects portfolio
- Education and certifications

### Styling

The design uses Tailwind CSS with custom colors defined in `tailwind.config.js`:

- **Primary Colors**: Blue gradient palette
- **Accent Colors**: Purple gradient palette
- **Custom Animations**: Defined in CSS and Tailwind config

### Theme Colors

Customize the color scheme by modifying CSS custom properties in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more color variables */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation System

The portfolio uses multiple animation libraries:

- **Framer Motion**: Page transitions, hover effects, complex animations
- **AOS**: Scroll-triggered animations
- **CSS Animations**: Custom keyframes and transitions

## 📧 Contact Form

The contact form includes:

- **Validation**: Required fields and email format validation
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: User feedback for form submission
- **Responsive Design**: Works on all device sizes

*Note: Form submission is currently a demo. Connect to your preferred backend service or email API.*

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## ⚡ Performance Optimizations

- **Code Splitting**: React.lazy() for route-based splitting
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Optimization**: Vite's automatic tree shaking
- **CSS Optimization**: Purged unused Tailwind classes
- **Font Loading**: Google Fonts with display: swap

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ using React and Tailwind CSS**