"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Mail, Phone, MapPin, Globe, Server, Brain, Code, Cloud } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ResumeSection = () => {
  const { isDark } = useTheme();
  
  const downloadResume = () => {
    // This will be replaced with actual resume download link
    alert("Resume download will be available soon!");
  };

  return (
    <section id="resume" className={`min-h-screen py-20 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#080808]' : 'bg-[#fafafa]'}`}>
      {/* Premium Background Effects */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]' : 'bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#fafafa]'}`}></div>
      <div className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-[150px] ${isDark ? 'bg-neutral-600/5' : 'bg-neutral-400/10'}`}></div>
      <div className={`absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-[150px] ${isDark ? 'bg-neutral-500/5' : 'bg-neutral-300/10'}`}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
            📄 My Resume
          </motion.span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Resume
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`backdrop-blur-xl rounded-2xl p-8 ${
            isDark 
              ? 'bg-neutral-900/60 border border-neutral-800/50' 
              : 'bg-white border border-neutral-200 shadow-xl'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Sumit Kumar Gupta</h1>
            <p className={`text-xl mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>Aspiring Backend Developer & AI Engineer</p>
            <div className={`flex flex-wrap justify-center gap-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>sumit.gupta.14486@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>Portfolio Website</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <span className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                <FileText className={`w-4 h-4 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
              </span>
              Professional Summary
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Passionate and driven Backend Developer with expertise in Java, Spring Boot, and the 
              Spring ecosystem. Strong foundation in AI/ML technologies including LangChain, LangGraph, 
              and Python-based machine learning. Experienced in building scalable microservices, 
              RESTful APIs, and deploying applications on AWS with Docker containerization.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <span className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                <Code className={`w-4 h-4 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
              </span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-xl ${isDark ? 'bg-neutral-800/40 border border-neutral-700/30' : 'bg-neutral-50 border border-neutral-200'}`}>
                <h4 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  <Server className={`w-4 h-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} /> Backend Development
                </h4>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Java, Spring Boot, Spring MVC, Hibernate, Spring AI, REST APIs</p>
              </div>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-neutral-800/40 border border-neutral-700/30' : 'bg-neutral-50 border border-neutral-200'}`}>
                <h4 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  <Brain className={`w-4 h-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} /> AI/ML Technologies
                </h4>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>LangChain, LangGraph, MCP, Python, Machine Learning, NLP</p>
              </div>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-neutral-800/40 border border-neutral-700/30' : 'bg-neutral-50 border border-neutral-200'}`}>
                <h4 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  <Cloud className={`w-4 h-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} /> DevOps & Cloud
                </h4>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Docker, AWS (EC2, S3, Lambda), Git, GitHub, CI/CD</p>
              </div>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-neutral-800/40 border border-neutral-700/30' : 'bg-neutral-50 border border-neutral-200'}`}>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Databases</h4>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>MySQL, PostgreSQL, MongoDB, Redis, Vector DBs</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <span className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                <FileText className={`w-4 h-4 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
              </span>
              Key Projects
            </h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-neutral-800/40 border border-neutral-700/30 hover:border-neutral-600' 
                  : 'bg-neutral-50 border border-neutral-200 hover:border-neutral-300'
              }`}>
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Medimengo – AI-Powered Healthcare Platform</h4>
                <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Built full-stack AI healthcare platform with Next.js, LangChain, multilingual AI chat, and Google Maps API integration</p>
              </div>
              <div className={`p-4 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-neutral-800/40 border border-neutral-700/30 hover:border-neutral-600' 
                  : 'bg-neutral-50 border border-neutral-200 hover:border-neutral-300'
              }`}>
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Network Security System with ML & Docker</h4>
                <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Developed dockerized network security system with ML-based intrusion detection and automated anomaly detection</p>
              </div>
              <div className={`p-4 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-neutral-800/40 border border-neutral-700/30 hover:border-neutral-600' 
                  : 'bg-neutral-50 border border-neutral-200 hover:border-neutral-300'
              }`}>
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>DSA Multi-Agent Problem Solver using Autogen</h4>
                <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Built multi-agent system for automated DSA problem-solving with collaborative AI agents and code generation</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <span className={`p-2 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                <FileText className={`w-4 h-4 ${isDark ? 'text-white' : 'text-neutral-700'}`} />
              </span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "AWS Certified Machine Learning - Specialty",
                "Google Data Analytics Professional Certificate",
                "Microsoft Azure AI Fundamentals",
                "Python Developer Certificate"
              ].map((cert, idx) => (
                <div key={idx} className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'text-neutral-300 hover:bg-neutral-800/30' 
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-neutral-900'}`}></span>
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <motion.a
              href="/Resume 1.pdf"
              download="Sumit_Kumar_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg ${
                isDark 
                  ? 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-white/10' 
                  : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20'
              }`}
            >
              <Download size={20} />
              Download Full Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;