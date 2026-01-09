"use client";
import { motion } from "framer-motion";
import { 
  Brain, 
  Code, 
  Database, 
  Lightbulb, 
  Target, 
  Award,
  Clock,
  Server,
  Cpu,
  Cloud
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const AboutSection = () => {
  const { isDark } = useTheme();
  
  const achievements = [
    { icon: Code, number: "25+", label: "Backend Projects", gradient: "from-violet-500 to-purple-600" },
    { icon: Award, number: "5+", label: "Certifications", gradient: "from-amber-500 to-orange-600" },
    { icon: Database, number: "15+", label: "Technologies", gradient: "from-cyan-500 to-blue-600" },
    { icon: Clock, number: "1000+", label: "Hours of Coding", gradient: "from-emerald-500 to-teal-600" }
  ];

  const interests = [
    { 
      icon: Server, 
      title: "Backend Development", 
      desc: "Building robust, scalable backend systems with enterprise-grade architecture",
      technologies: ["Java", "Spring Boot", "Hibernate"],
      gradient: "from-violet-500 to-purple-600"
    },
    { 
      icon: Brain, 
      title: "AI & Machine Learning", 
      desc: "Creating intelligent systems with LLMs, NLP, and advanced ML algorithms",
      technologies: ["LangChain", "Python", "TensorFlow"],
      gradient: "from-cyan-500 to-blue-600"
    },
    { 
      icon: Cloud, 
      title: "Cloud & DevOps", 
      desc: "Deploying and managing applications on cloud infrastructure",
      technologies: ["AWS", "Docker", "CI/CD"],
      gradient: "from-emerald-500 to-teal-600"
    },
    { 
      icon: Lightbulb, 
      title: "Full-Stack Integration", 
      desc: "Bridging frontend and backend with seamless API design",
      technologies: ["REST APIs", "React", "Next.js"],
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className={`min-h-screen py-20 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#080808]' : 'bg-[#fafafa]'}`}>
      {/* Premium Background Effects */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]' : 'bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#fafafa]'}`}></div>
      <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[150px] ${isDark ? 'bg-neutral-600/5' : 'bg-neutral-400/10'}`}></div>
      <div className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-[150px] ${isDark ? 'bg-neutral-500/5' : 'bg-neutral-300/10'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              isDark 
                ? 'bg-neutral-800/50 border border-neutral-700/30 text-neutral-300' 
                : 'bg-white border border-neutral-200 text-neutral-600 shadow-sm'
            }`}
          >
            🚀 Get to Know Me
          </motion.span>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            About <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Me</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Backend-focused Software Engineer passionate about building scalable systems and intelligent solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`backdrop-blur-xl rounded-2xl p-8 ${
              isDark 
                ? 'bg-neutral-900/60 border border-neutral-800/50' 
                : 'bg-white border border-neutral-200 shadow-lg'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <span className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                <Cpu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
              </span>
              Professional Summary
            </h3>
            <div className={`space-y-4 leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              <p>
                I am <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Sumit Kumar Gupta</span>, an aspiring 
                <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}> Backend Developer & AI Engineer</span> with a passion 
                for building robust, scalable systems and intelligent applications.
              </p>
              <p>
                My expertise centers on <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}>Java</span> and the 
                <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}> Spring ecosystem</span> (Spring Boot, Spring MVC, Hibernate), 
                combined with deep knowledge in <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}>AI/ML technologies</span> including 
                LangChain, LangGraph, and Python-based machine learning.
              </p>
              <p>
                I specialize in designing <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}>RESTful APIs</span>, implementing 
                <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}> microservices architecture</span>, and deploying applications 
                on <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}>AWS</span> with Docker containerization.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group backdrop-blur-xl rounded-2xl p-6 text-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/60 border border-neutral-800/50 hover:border-neutral-600' 
                    : 'bg-white border border-neutral-200 hover:border-neutral-300 shadow-lg'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-neutral-800/80' : 'bg-neutral-100'}`}>
                  <achievement.icon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
                </div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>{achievement.number}</div>
                <div className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 text-center ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500 ${isDark ? 'bg-neutral-600/20' : 'bg-neutral-400/30'}`}></div>
                
                <div className={`relative backdrop-blur-xl rounded-2xl p-6 h-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900/60 border border-neutral-800/50 hover:border-neutral-600' 
                    : 'bg-white border border-neutral-200 hover:border-neutral-300 shadow-lg'
                }`}>
                  <div className={`inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-neutral-800/80' : 'bg-neutral-100'}`}>
                    <interest.icon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>{interest.title}</h4>
                  <p className={`text-sm mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{interest.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-2.5 py-1 text-xs rounded-lg ${
                          isDark 
                            ? 'bg-neutral-800/60 border border-neutral-700/30 text-neutral-300' 
                            : 'bg-neutral-100 border border-neutral-200 text-neutral-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Goals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`backdrop-blur-xl rounded-2xl p-8 ${
            isDark 
              ? 'bg-neutral-900/60 border border-neutral-800/50' 
              : 'bg-white border border-neutral-200 shadow-lg'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-6 text-center flex items-center justify-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            <span className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
              <Target className={`w-5 h-5 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
            </span>
            Professional Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Build enterprise-grade backend systems with Java & Spring Boot",
              "Develop AI-powered applications using LangChain & LangGraph",
              "Design scalable microservices architecture on cloud platforms",
              "Lead innovative projects that merge backend engineering with AI"
            ].map((goal, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex items-start space-x-3 p-3 rounded-xl transition-colors duration-300 ${isDark ? 'hover:bg-neutral-800/30' : 'hover:bg-neutral-50'}`}
              >
                <div className={`p-1.5 rounded-lg flex-shrink-0 mt-0.5 ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                  <Target className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
                </div>
                <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>{goal}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;