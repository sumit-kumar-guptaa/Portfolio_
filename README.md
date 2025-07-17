# Sumit Kumar Gupta - Professional Portfolio

A modern, responsive portfolio website showcasing my skills as an aspiring Data Scientist & AI Developer specializing in Full-Stack & ML Projects.

## 🚀 Features

- **Modern Design**: Professional UI with dark mode and smooth animations
- **3D Effects**: Interactive 3D project cards and background animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **Animations**: Framer Motion powered animations throughout
- **Contact Integration**: Direct contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Tabler Icons & Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
│   ├── ui/             # UI components (3D effects, animations)
│   └── Navbar.tsx      # Navigation component
├── sections/           # Main page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
├── data/               # Static data
│   ├── skills.ts
│   ├── projects.ts
│   ├── contacts.ts
│   └── certifications.ts
└── lib/
    └── utils.ts        # Utility functions
```

## 🎨 Sections

1. **Hero Section**: Animated introduction with typewriter effect
2. **About Section**: Personal story with animated text generation
3. **Skills Section**: Categorized technical skills
4. **Projects Section**: 3D animated project showcase
5. **Contact Section**: Floating dock with contact links and form

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding Projects
Edit `src/data/projects.ts` to add your projects:

```typescript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    techStack: ["React", "TypeScript", "Node.js"],
    link: "https://your-project.com",
    image: "/images/project.png"
  }
];
```

### Updating Skills
Modify `src/data/skills.ts` to reflect your expertise:

```typescript
export const skills = [
  {
    category: "Your Category",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  }
];
```

### Contact Information
Update `src/data/contacts.ts` with your information:

```typescript
export const contacts = [
  {
    name: "LinkedIn",
    url: "your-linkedin-url"
  }
];
```

## 📱 Components Overview

### UI Components
- **3D Pin**: Interactive 3D project cards
- **Background Boxes**: Animated grid background
- **Lamp Effect**: Dramatic lighting effect
- **Text Generate**: Animated text generation
- **Typewriter Effect**: Typewriter animation for hero text
- **Floating Dock**: macOS-style floating contact bar

### Features
- **Dark Mode Toggle**: Curved navbar with theme switcher
- **Responsive Design**: Mobile-first approach
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🚀 Deployment

This project is ready to deploy on:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

Simply connect your repository and deploy!

## 📧 Contact

- **Email**: sumit.gupta.14486@gmail.com
- **LinkedIn**: [Sumit Kumar](https://www.linkedin.com/in/sumit-kumar-9b4970285/)
- **GitHub**: [sumit-kumar-guptaa](https://github.com/sumit-kumar-guptaa)
- **Twitter**: [@sumitkumar76678](https://x.com/sumitkumar76678)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sumit Kumar Gupta
