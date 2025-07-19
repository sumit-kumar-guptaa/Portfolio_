interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Medimengo – AI-Powered Healthcare Platform",
    description: "Built a full-stack AI healthcare platform enabling online doctor consultations, multilingual AI chat, and real-time hospital services with Next.js, LangChain, and Google Maps API integration.",
    techStack: ["Next.js", "ShadCN", "TailwindCSS", "LangChain", "LangGraph", "OpenAI", "Node.js", "Express", "Prisma", "PostgreSQL"],
    link: "https://medi-mengo-n8xm.vercel.app/",
    image: "/Medimengo_homepage.png",
    githubLink: "https://github.com/sumit-kumar-guptaa/MediMengo"
  },
  {
    title: "Network Security System with ML & Docker",
    description: "Developed a dockerized network security system integrating machine learning models for intrusion detection and threat analysis with automated anomaly detection on live network traffic.",
    techStack: ["Python", "Machine Learning", "Docker", "scikit-learn", "pandas", "Network Security", "Encryption"],
    link: "#",
    image: "/images/network-security.png",
    githubLink: "https://github.com/sumit-kumar-guptaa"
  },
  {
    title: "DSA Multi-Agent Problem Solver using Autogen",
    description: "Built a multi-agent system using Autogen to automate DSA problem-solving with collaborative, agentic workflows featuring task-oriented AI agents for code generation and testing.",
    techStack: ["Python", "Autogen", "Multi-Agent Systems", "AI Agents", "DSA", "Automated Reasoning"],
    link: "#",
    image: "/images/dsa-solver.png",
    githubLink: "https://github.com/sumit-kumar-guptaa"
  },
  {
    title: "Recommendation System",
    description: "Collaborative filtering recommendation engine for e-commerce with deep learning optimization.",
    techStack: ["Python", "PyTorch", "FastAPI", "Redis", "AWS"],
    link: "#",
    image: "/images/recommendation.png",
    githubLink: "https://github.com/sumit-kumar-guptaa"
  },
  {
    title: "Computer Vision App",
    description: "Object detection and image classification application using CNN and transfer learning techniques.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Flutter", "Firebase"],
    link: "#",
    image: "/images/computer-vision.png",
    githubLink: "https://github.com/sumit-kumar-guptaa"
  },
  {
    title: "NLP Text Analyzer",
    description: "Advanced text analysis tool with sentiment analysis, entity recognition, and topic modeling.",
    techStack: ["Python", "spaCy", "NLTK", "Django", "PostgreSQL"],
    link: "#",
    image: "/images/nlp-analyzer.png",
    githubLink: "https://github.com/sumit-kumar-guptaa"
  }
];
