"use client";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
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

  const handleResumeDownload = () => {
    // Create a temporary link element
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Resume 1.pdf';
    downloadLink.download = 'Sumit_Kumar_Gupta_Resume.pdf';
    
    // Add to document and trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up
    document.body.removeChild(downloadLink);
  };

  const nameWords = [
    {
      text: "Sumit Kumar Gupta",
      className: "text-white",
    },
  ];

  const roleWords = [
    "Data Scientist",
    "AI Developer", 
    "ML Engineer",
    "Full-Stack Developer",
    "Tech Innovator"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              
              {/* Available for Work Status */}
              <div className="mb-2">
                <div className="inline-flex items-center px-3 py-2 bg-green-950/30 border border-green-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for Work</span>
                </div>
              </div>

              {/* Full Name with TypewriterEffect */}
              <div className="mb-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                  <TypewriterEffect 
                    words={nameWords}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left"
                    cursorClassName="bg-cyan-400 h-8 md:h-10 lg:h-12"
                  />
                </h1>
              </div>

              {/* Animated Role with Aspiring + FlipWords */}
              <div className="mb-4">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-gray-300 text-sm md:text-base font-medium">Aspiring</span>
                  <div className="min-w-[150px]">
                    <FlipWords 
                      words={roleWords}
                      duration={2000}
                      className="text-xs md:text-sm font-medium text-cyan-400 dark:text-cyan-400"
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  Specializing in Machine Learning, Full-Stack Development & AI Solutions
                </p>
              </div>

              {/* Professional Description */}
              <div className="mb-8 mt-12">
                <TextGenerateEffect 
                  words="Transforming complex data into actionable insights through advanced machine learning and full-stack development expertise."
                  className="text-xs text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
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
                  href="/Resume 1.pdf"
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
              {/* Professional backdrop */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl transform rotate-3 scale-105"></div>
                <CardContainer className="inter-var relative z-10">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-slate-800 dark:border-slate-600/[0.2] border-slate-300/[0.1] w-auto sm:w-[26rem] lg:w-[24rem] h-auto rounded-3xl p-5 border backdrop-blur-sm">
                    
                    {/* Professional Badge */}
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-slate-800 dark:text-white text-center mb-2"
                    >
                      Sumit Kumar Gupta
                    </CardItem>
                    
                    {/* Available Status */}
                    <CardItem
                      translateZ="40"
                      className="flex items-center justify-center mb-2"
                    >
                      <div className="inline-flex items-center px-2 py-1 bg-green-950/40 border border-green-700/60 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
                        <span className="text-green-400 text-xs font-medium">Open to Work</span>
                      </div>
                    </CardItem>
                    
                    {/* Role Description */}
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-slate-600 text-sm max-w-sm mt-1 dark:text-cyan-400 text-center font-medium mb-4"
                    >
                      Data Scientist & AI Developer
                    </CardItem>
                    
                    {/* Professional Photo with 3D Effect - Bigger */}
                    <CardItem translateZ="100" className="w-full mt-4 relative">
                      <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-700 shadow-2xl border border-slate-600/20">
                        <img
                          src="/photo.jpg"
                          height="500"
                          width="500"
                          className="h-full w-full object-cover group-hover/card:shadow-2xl group-hover/card:scale-105 transition-all duration-500 ease-out filter brightness-105 contrast-105"
                          alt="Sumit Kumar Gupta - Professional Photo"
                          style={{ objectPosition: '50% 5%' }}
                        />
                        {/* Professional overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>
                        {/* Professional frame effect */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                      </div>
                    </CardItem>
                  
                  {/* Professional Photo Frame Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                  
                  {/* Action Buttons - More Professional */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-600/30">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-lg text-sm font-medium dark:text-cyan-400 text-slate-700 hover:text-cyan-500 hover:bg-slate-700/20 transition-all duration-200"
                    >
                      <a href="#contact" className="flex items-center space-x-1">
                        <span>Contact</span>
                        <span>→</span>
                      </a>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-lg bg-slate-800 dark:bg-cyan-500 dark:text-slate-900 text-white text-sm font-bold hover:bg-slate-700 dark:hover:bg-cyan-600 transition-all duration-200 shadow-lg"
                    >
                      <a
                        href="/Resume 1.pdf"
                        download="Sumit_Kumar_Gupta_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full text-inherit no-underline"
                      >
                        Resume
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              </div>
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
