"use client";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { 
  ChevronDown, 
  Download, 
  Eye, 
  Sparkles, 
  Code, 
  Brain,
  Zap
} from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const roleWords = [
    {
      text: "Data Scientist",
      className: "text-cyan-400 dark:text-cyan-400",
    },
    {
      text: "AI Developer",
      className: "text-cyan-400 dark:text-cyan-400",
    },
    {
      text: "ML Engineer",
      className: "text-cyan-400 dark:text-cyan-400",
    },
    {
      text: "Full-Stack Developer",
      className: "text-cyan-400 dark:text-cyan-400",
    },
    {
      text: "Tech Innovator",
      className: "text-cyan-400 dark:text-cyan-400",
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-slate-900 relative">
      {/* Simple Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      </div>

      {/* Professional Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              
              {/* Professional Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Professional Portfolio
                </span>
              </div>

              {/* Name - Static and Professional */}
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                  <span className="text-white">Sumit Kumar </span>
                  <span className="text-cyan-400">Gupta</span>
                </h1>
              </div>

              {/* Animated Role with TypewriterEffect */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg md:text-xl font-semibold">
                  <span className="text-gray-300">Aspiring</span>
                  <div className="min-w-[200px]">
                    <TypewriterEffect 
                      words={roleWords}
                      className="text-lg md:text-xl font-semibold"
                      cursorClassName="bg-cyan-400 h-5"
                    />
                  </div>
                </div>
                <p className="text-base text-gray-400 mt-2">
                  Specializing in Machine Learning, Full-Stack Development & AI Solutions
                </p>
              </div>

              {/* Professional Description */}
              <div className="mb-8">
                <TextGenerateEffect 
                  words="Transforming complex data into actionable insights through advanced machine learning and full-stack development expertise."
                  className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
                />
              </div>

              {/* Professional Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start items-center mb-8">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Projects</span>
                </a>
                
                <a
                  href="/Resume%201.pdf"
                  download="Sumit_Kumar_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-medium text-sm rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Skills Preview */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  "Python", "Machine Learning", "React", "TensorFlow", 
                  "Node.js", "Data Science", "AI Development", "Full-Stack"
                ].map((skill, idx) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Professional 3D Photo */}
            <div className="flex justify-center lg:justify-end">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-slate-800 dark:border-slate-600/[0.2] border-slate-300/[0.1] w-auto sm:w-[20rem] h-auto rounded-2xl p-3 border">
                  
                  {/* Professional Badge */}
                  <CardItem
                    translateZ="50"
                    className="text-base font-bold text-slate-800 dark:text-white text-center"
                  >
                    Sumit Kumar Gupta
                  </CardItem>
                  
                  {/* Role Description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-600 text-xs max-w-sm mt-1 dark:text-cyan-400 text-center font-medium"
                  >
                    Data Scientist & AI Developer
                  </CardItem>
                  
                  {/* Professional Photo with 3D Effect */}
                  <CardItem translateZ="100" className="w-full mt-3">
                    <div className="h-48 w-full rounded-lg overflow-hidden bg-slate-700">
                      <img
                        src="/photo.jpg"
                        height="300"
                        width="300"
                        className="h-full w-full object-cover group-hover/card:shadow-xl transition-all duration-300"
                        alt="Sumit Kumar Gupta - Professional Photo"
                        style={{ objectPosition: '50% 15%' }}
                      />
                    </div>
                  </CardItem>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#contact"
                      className="px-3 py-1.5 rounded-lg text-xs font-medium dark:text-cyan-400 text-slate-700 hover:text-cyan-500 transition-colors"
                    >
                      Contact →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="/Resume%201.pdf"
                      download="Sumit_Kumar_Gupta_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-cyan-500 dark:text-slate-900 text-white text-xs font-bold hover:bg-slate-700 dark:hover:bg-cyan-600 transition-colors"
                    >
                      Resume
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-md mx-auto">
            {[
              { icon: Code, number: "25+", label: "Projects" },
              { icon: Brain, number: "15+", label: "Skills" },
              { icon: Zap, number: "5+", label: "Certifications" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors duration-200"
              >
                <div className="inline-flex p-2 bg-cyan-500/20 rounded-lg mb-2">
                  <stat.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-lg font-bold text-white">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Simple Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNextSection}
              className="p-2 rounded-full bg-slate-800 border border-slate-700 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
