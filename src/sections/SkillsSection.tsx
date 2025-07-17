"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  const skillLevels = {
    "Python": 95,
    "TensorFlow": 90,
    "PyTorch": 85,
    "Scikit-learn": 88,
    "Pandas": 92,
    "NumPy": 90,
    "JavaScript": 85,
    "TypeScript": 80,
    "React": 88,
    "Next.js": 82,
    "Node.js": 80,
    "MongoDB": 75,
    "PostgreSQL": 78,
    "MySQL": 80,
    "AWS": 75,
    "Docker": 70,
    "Git": 85,
    "Linux": 80
  };

  const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{skill}</span>
        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-12"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <div className="space-y-8">
            {skills.map((skillCategory, idx) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  {skillCategory.category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {skillCategory.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (idx * 0.1) + (skillIdx * 0.05) }}
                      className="bg-white/5 rounded-lg px-3 py-2 text-gray-300 text-sm hover:bg-cyan-500/20 transition-colors duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Levels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {Object.entries(skillLevels).slice(0, 12).map(([skill, level], idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <SkillBar skill={skill} level={level} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Python", "TensorFlow", "PyTorch", "React", "Next.js", "Node.js",
              "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Linux"
            ].map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 rounded-xl px-4 py-3 text-white font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
