"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { useTheme } from "@/context/ThemeContext";

const SkillsSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="skills" className={`min-h-screen py-24 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#080808]' : 'bg-[#fafafa]'}`}>
      {/* Elegant Background Effects */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]' : 'bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#fafafa]'}`}></div>
      <div className={`absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? 'bg-neutral-600/5' : 'bg-neutral-400/10'}`}></div>
      <div className={`absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? 'bg-neutral-500/5' : 'bg-neutral-300/10'}`}></div>
      
      {/* Subtle Grid Pattern */}
      <div className={`absolute inset-0 bg-[size:60px_60px] ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'}`}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ${
              isDark 
                ? 'bg-neutral-900/60 border border-neutral-800/50 text-neutral-300' 
                : 'bg-white border border-neutral-200 text-neutral-600 shadow-sm'
            }`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-neutral-900'}`}></span>
            Technical Expertise
          </motion.div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Skills & <span className={`font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>Technologies</span>
          </h2>
          <p className={`max-w-xl mx-auto text-lg font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Backend-focused Software Engineer specializing in Java ecosystem, AI/ML solutions, and cloud-native architectures
          </p>
        </motion.div>
        
        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, idx) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Elegant Hover Glow */}
              <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-700 ${isDark ? 'bg-neutral-600/20' : 'bg-neutral-400/30'}`}></div>
              
              <div className={`relative backdrop-blur-xl rounded-2xl p-7 h-full transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-2xl ${
                isDark 
                  ? 'bg-neutral-900/60 border border-neutral-800/50 hover:border-neutral-600 group-hover:shadow-neutral-900/50' 
                  : 'bg-white border border-neutral-200 hover:border-neutral-300 shadow-lg group-hover:shadow-neutral-200/50'
              }`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-neutral-800/60 border border-neutral-700/30' : 'bg-neutral-100 border border-neutral-200'}`}>
                    <span className="text-2xl">{skillCategory.icon}</span>
                  </div>
                  <h3 className={`text-lg font-medium tracking-wide transition-colors ${isDark ? 'text-neutral-100 group-hover:text-white' : 'text-neutral-800 group-hover:text-neutral-900'}`}>
                    {skillCategory.category}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="flex flex-wrap gap-2.5">
                  {skillCategory.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (idx * 0.08) + (skillIdx * 0.04) }}
                      className={`px-3.5 py-2 rounded-lg text-sm font-light backdrop-blur-sm transition-all duration-300 cursor-default ${
                        isDark 
                          ? 'bg-neutral-800/60 text-neutral-300 border border-neutral-700/40 hover:border-neutral-500 hover:text-white hover:bg-neutral-700/60' 
                          : 'bg-neutral-100 text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Tech Stack - Minimalist Pills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className={`text-xl font-light tracking-wider uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Core Technologies
            </h3>
            <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-gradient-to-r from-transparent via-neutral-600 to-transparent' : 'bg-gradient-to-r from-transparent via-neutral-400 to-transparent'}`}></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Java" },
              { name: "Spring Boot" },
              { name: "Spring AI" },
              { name: "Hibernate" },
              { name: "Python" },
              { name: "LangChain" },
              { name: "LangGraph" },
              { name: "MCP" },
              { name: "Docker" },
              { name: "AWS" },
              { name: "MySQL" },
              { name: "Git" }
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 ${isDark ? 'bg-neutral-500/20' : 'bg-neutral-400/30'}`}></div>
                  <div className={`relative px-6 py-2.5 backdrop-blur-sm rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-neutral-900/80 border border-neutral-700/50 group-hover:border-neutral-500' 
                      : 'bg-white border border-neutral-200 group-hover:border-neutral-300 shadow-sm'
                  }`}>
                    <span className={`font-medium text-sm transition-colors ${isDark ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-600 group-hover:text-neutral-900'}`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-px ${isDark ? 'bg-gradient-to-r from-transparent to-neutral-600' : 'bg-gradient-to-r from-transparent to-neutral-400'}`}></div>
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-neutral-600' : 'bg-neutral-400'}`}></div>
            <div className={`w-12 h-px ${isDark ? 'bg-gradient-to-l from-transparent to-neutral-600' : 'bg-gradient-to-l from-transparent to-neutral-400'}`}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;