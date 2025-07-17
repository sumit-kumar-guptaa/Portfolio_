"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data/projects";
import CertificationModal from "@/components/CertificationModal";
import { Search, Filter, ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
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
    <section id="projects" className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(0, 8).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
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
          <p className="text-gray-400">
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
                  <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[25rem]">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100 line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.link && (
                          <ExternalLink className="w-4 h-4 text-cyan-400 hover:text-cyan-300" />
                        )}
                        <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="text-sm !m-0 !p-0 font-normal flex-1">
                      <span className="text-slate-400 line-clamp-4">
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
                          className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs rounded-lg border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-400">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Visual */}
                    <motion.div 
                      className="flex flex-1 w-full rounded-lg mt-auto bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative overflow-hidden"
                      animate={{
                        scale: hoveredProject === idx ? 1.02 : 1,
                        brightness: hoveredProject === idx ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="text-xs text-white/80 font-medium">
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
                          className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-lg flex items-center justify-center"
                        >
                          <motion.button
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/30 transition-all duration-300"
                          >
                            View Details
                          </motion.button>
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
            <div className="text-gray-400 text-lg mb-4">No projects found</div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-full hover:bg-cyan-500/30 transition-all duration-300"
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
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>View Certifications</span>
              <ExternalLink className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
