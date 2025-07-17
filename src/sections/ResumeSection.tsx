"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Mail, Phone, MapPin, Globe } from "lucide-react";

const ResumeSection = () => {
  const downloadResume = () => {
    // This will be replaced with actual resume download link
    alert("Resume download will be available soon!");
  };

  return (
    <section id="resume" className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          Resume
        </h2>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Sumit Kumar Gupta</h1>
            <p className="text-xl text-cyan-400 mb-4">Aspiring Data Scientist & AI Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
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
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate and driven aspiring Data Scientist with expertise in machine learning, 
              deep learning, and full-stack development. Proven ability to develop end-to-end 
              ML solutions, from data preprocessing to model deployment. Strong foundation in 
              Python, TensorFlow, PyTorch, and modern web technologies.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Programming Languages</h4>
                <p className="text-gray-300">Python, Java, SQL, JavaScript, Shell Scripting</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">ML/AI Frameworks</h4>
                <p className="text-gray-300">TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Web Technologies</h4>
                <p className="text-gray-300">React.js, Next.js, FastAPI, Flask, Node.js</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Data Tools</h4>
                <p className="text-gray-300">Pandas, NumPy, Matplotlib, Seaborn, Plotly</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white">Medimengo – AI-Powered Healthcare Platform</h4>
                <p className="text-gray-300">Built full-stack AI healthcare platform with Next.js, LangChain, multilingual AI chat, and Google Maps API integration</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Network Security System with ML & Docker</h4>
                <p className="text-gray-300">Developed dockerized network security system with ML-based intrusion detection and automated anomaly detection</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">DSA Multi-Agent Problem Solver using Autogen</h4>
                <p className="text-gray-300">Built multi-agent system for automated DSA problem-solving with collaborative AI agents and code generation</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Certifications</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• AWS Certified Machine Learning - Specialty</li>
              <li>• Google Data Analytics Professional Certificate</li>
              <li>• Microsoft Azure AI Fundamentals</li>
              <li>• TensorFlow Developer Certificate</li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              <Download size={20} />
              Download Full Resume
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
