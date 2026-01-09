"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data/projects";
import CertificationModal from "@/components/CertificationModal";
import { Search, ExternalLink, Github, Award } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [showCertifications, setShowCertifications] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = projects.flatMap(project => project.techStack.slice(0, 2));
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === "All" || 
        project.techStack.some(tech => tech.toLowerCase().includes(selectedCategory.toLowerCase()));
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="projects" className={`min-h-screen py-24 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#080808]' : 'bg-[#fafafa]'}`}>
      {/* Elegant Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]' : 'bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#fafafa]'}`}></div>
      <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[200px] ${isDark ? 'bg-neutral-600/5' : 'bg-neutral-400/10'}`}></div>
      <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] ${isDark ? 'bg-neutral-500/5' : 'bg-neutral-300/10'}`}></div>
      
      {/* Subtle Grid */}
      <div className={`absolute inset-0 bg-[size:60px_60px] ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-neutral-900'}`}></span>
            Featured Work
          </motion.div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            My <span className={`font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>Projects</span>
          </h2>
          <p className={`max-w-xl mx-auto text-lg font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            A showcase of my technical expertise and creative problem-solving
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                isDark 
                  ? 'bg-neutral-900/60 border border-neutral-800/50 text-white placeholder-neutral-500 focus:border-neutral-600 focus:bg-neutral-800/80' 
                  : 'bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-300 focus:bg-neutral-50 shadow-sm'
              }`}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.slice(0, 8).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? isDark 
                      ? "bg-white text-neutral-900" 
                      : "bg-neutral-900 text-white"
                    : isDark 
                      ? "bg-neutral-900/60 border border-neutral-800/50 text-neutral-400 hover:text-white hover:border-neutral-600" 
                      : "bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 shadow-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onHoverStart={() => setHoveredProject(idx)}
                onHoverEnd={() => setHoveredProject(null)}
                className="h-[45rem] w-full flex items-center justify-center"
              >
                <PinContainer
                  title={project.title}
                  href={project.link}
                >
                  <div className="flex basis-full flex-col p-6 tracking-tight text-neutral-100/50 sm:basis-1/2 w-[22rem] h-[25rem]">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-lg text-white line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.link && project.link !== "#" && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                          >
                            <ExternalLink className="w-4 h-4 text-neutral-400 hover:text-white" />
                          </a>
                        )}
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                          >
                            <Github className="w-4 h-4 text-neutral-400 hover:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="text-sm !m-0 !p-0 font-normal flex-1">
                      <span className="text-neutral-400 line-clamp-4">
                        {project.description}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                      {project.techStack.slice(0, 4).map((tech, techIdx) => (
                        <motion.span
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIdx * 0.1 }}
                          className="px-2.5 py-1 bg-neutral-800/80 text-neutral-300 text-xs rounded-md border border-neutral-700/50 hover:border-neutral-600 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs text-neutral-500">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Visual */}
                    <motion.div 
                      className="flex flex-1 w-full rounded-lg mt-auto bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 relative overflow-hidden"
                      animate={{
                        scale: hoveredProject === idx ? 1.02 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image && (
                        <div className="absolute inset-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 z-10">
                        <div className="text-xs text-neutral-300 font-medium">
                          {project.techStack[0]} • {project.techStack[1]}
                        </div>
                      </div>
                    </motion.div>

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === idx && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent rounded-lg flex items-center justify-center z-20"
                        >
                          {project.link && project.link !== "#" ? (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="px-4 py-2 bg-white text-neutral-900 backdrop-blur-md rounded-full text-sm font-medium hover:bg-neutral-100 transition-all duration-300 flex items-center space-x-2"
                            >
                              <span>View Project</span>
                              <ExternalLink className="w-3 h-3" />
                            </motion.a>
                          ) : (
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="px-4 py-2 bg-white text-neutral-900 backdrop-blur-md rounded-full text-sm font-medium hover:bg-neutral-100 transition-all duration-300 flex items-center space-x-2"
                            >
                              <span>View Code</span>
                              <Github className="w-3 h-3" />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className={`text-lg mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>No projects found</div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-neutral-800 text-white hover:bg-neutral-700' 
                  : 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300'
              }`}
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Certifications Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <motion.button 
            onClick={() => setShowCertifications(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 ${
              isDark 
                ? 'bg-white text-neutral-900 hover:bg-neutral-100' 
                : 'bg-neutral-900 text-white hover:bg-neutral-800'
            }`}
          >
            <Award className="w-5 h-5" />
            <span>View Certifications</span>
          </motion.button>
        </motion.div>
      </div>

      <CertificationModal 
        isOpen={showCertifications}
        onClose={() => setShowCertifications(false)}
      />
    </section>
  );
};

export default ProjectsSection;