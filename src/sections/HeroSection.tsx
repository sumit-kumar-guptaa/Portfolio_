"use client";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useTheme } from "@/context/ThemeContext";
import { 
  ChevronDown, 
  Download, 
  Eye, 
  Sparkles, 
  Code, 
  Brain,
  Zap,
  Server,
  Cpu
} from "lucide-react";

const HeroSection = () => {
  const { isDark } = useTheme();
  
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
      className: isDark ? "text-white" : "text-neutral-900",
    },
  ];

  const roleWords = [
    "Backend Developer",
    "SDE",
    "AI Engineer", 
    "ML Developer",
    "Full-Stack Developer"
  ];

  return (
    <section id="home" className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#080808]' : 'bg-[#fafafa]'}`}>
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full ${isDark ? 'bg-gradient-to-br from-[#080808] via-[#0c0c0c] to-[#080808]' : 'bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#fafafa]'}`}></div>
        {/* Animated gradient orbs - subtle neutral */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] animate-pulse ${isDark ? 'bg-neutral-600/10' : 'bg-neutral-400/20'}`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px] animate-pulse ${isDark ? 'bg-neutral-500/8' : 'bg-neutral-300/20'}`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-[100px] animate-pulse ${isDark ? 'bg-neutral-400/5' : 'bg-neutral-200/30'}`} style={{animationDelay: '2s'}}></div>
        {/* Grid overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'} bg-[size:50px_50px]`}></div>
      </div>

      {/* Premium Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              
              {/* Available for Work Status */}
              <div className="mb-3">
                <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm ${isDark ? 'bg-emerald-950/40 border border-emerald-500/30' : 'bg-emerald-50 border border-emerald-200'}`}>
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-3"></div>
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full mr-3 animate-ping"></div>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Available for Opportunities</span>
                </div>
              </div>

              {/* Full Name with TypewriterEffect */}
              <div className="mb-2">
                <h1 className={`text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  <TypewriterEffect 
                    words={nameWords}
                    className={`text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left ${isDark ? 'text-white' : 'text-neutral-900'}`}
                    cursorClassName={`h-8 md:h-10 lg:h-14 ${isDark ? 'bg-neutral-400' : 'bg-neutral-600'}`}
                  />
                </h1>
              </div>

              {/* Animated Role with Aspiring + FlipWords */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className={`text-base md:text-lg font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Aspiring</span>
                  <div className="min-w-[180px]">
                    <FlipWords 
                      words={roleWords}
                      duration={2000}
                      className={`text-base md:text-lg font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}
                    />
                  </div>
                </div>
                <p className={`text-sm md:text-base mt-2 ${isDark ? 'text-neutral-500' : 'text-neutral-600'}`}>
                  Specializing in <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}>Java/Spring Boot</span>, <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>AI/ML</span> & <span className={isDark ? 'text-neutral-200' : 'text-neutral-800'}>Cloud Technologies</span>
                </p>
              </div>

              {/* Professional Description */}
              <div className="mb-10 mt-8">
                <TextGenerateEffect 
                  words="Building robust backend systems with Java & Spring Boot, crafting intelligent AI solutions with LangChain & ML, and deploying scalable applications on AWS."
                  className={`text-sm md:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
                />
              </div>

              {/* Professional Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start items-center mb-10">
                <a
                  href="#projects"
                  className={`group relative px-8 py-3.5 overflow-hidden rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isDark 
                      ? 'bg-white text-neutral-900 hover:bg-neutral-100' 
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  <span className="relative flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Projects</span>
                  </span>
                </a>
                
                <a
                  href="/Resume 1.pdf"
                  download="Sumit_Kumar_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
                    isDark 
                      ? 'bg-neutral-900/80 border border-neutral-700/50 text-white hover:border-neutral-500 hover:bg-neutral-800/80' 
                      : 'bg-white border border-neutral-200 text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Skills Preview */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  { skill: "Java", icon: "☕" },
                  { skill: "Spring Boot", icon: "🍃" },
                  { skill: "Python", icon: "🐍" },
                  { skill: "LangChain", icon: "🔗" },
                  { skill: "AWS", icon: "☁️" },
                  { skill: "Docker", icon: "🐳" },
                  { skill: "Machine Learning", icon: "🤖" },
                  { skill: "MySQL", icon: "💾" }
                ].map((item, idx) => (
                  <div
                    key={item.skill}
                    className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 hover:scale-105 cursor-default ${
                      isDark 
                        ? 'bg-neutral-900/80 border border-neutral-700/50 text-neutral-300 hover:border-neutral-500' 
                        : 'bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    <span className="mr-1.5">{item.icon}</span>
                    {item.skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Professional 3D Photo */}
            <div className="flex justify-center lg:justify-end">
              {/* Premium backdrop with glow */}
              <div className="relative">
                <div className={`absolute inset-0 rounded-3xl blur-3xl transform rotate-3 scale-110 ${isDark ? 'bg-neutral-500/10' : 'bg-neutral-300/30'}`}></div>
                <CardContainer className="inter-var relative z-10">
                  <CardBody className={`relative group/card w-auto sm:w-[26rem] lg:w-[24rem] h-auto rounded-3xl p-5 border backdrop-blur-sm ${
                    isDark 
                      ? 'bg-[#0c0c0c] border-neutral-700/30 hover:shadow-2xl hover:shadow-neutral-500/[0.1]' 
                      : 'bg-white border-neutral-200 hover:shadow-2xl hover:shadow-neutral-300/50'
                  }`}>
                    
                    {/* Professional Badge */}
                    <CardItem
                      translateZ="50"
                      className={`text-xl font-bold text-center mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}
                    >
                      <span>Sumit Kumar Gupta</span>
                    </CardItem>
                    
                    {/* Available Status */}
                    <CardItem
                      translateZ="40"
                      className="flex items-center justify-center mb-2"
                    >
                      <div className={`inline-flex items-center px-3 py-1.5 rounded-full ${isDark ? 'bg-emerald-950/50 border border-emerald-500/40' : 'bg-emerald-50 border border-emerald-200'}`}>
                        <div className="relative">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-ping"></div>
                        </div>
                        <span className={`text-xs font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Open to Work</span>
                      </div>
                    </CardItem>
                    
                    {/* Role Description */}
                    <CardItem
                      as="p"
                      translateZ="60"
                      className={`text-sm max-w-sm mt-1 text-center font-semibold mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}
                    >
                      Backend Developer & AI Engineer
                    </CardItem>
                    
                    {/* Professional Photo with 3D Effect - Bigger */}
                    <CardItem translateZ="100" className="w-full mt-4 relative">
                      <div className={`h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-neutral-900 border border-neutral-700/30' : 'bg-neutral-100 border border-neutral-200'}`}>
                        <img
                          src="/photo.jpg"
                          height="500"
                          width="500"
                          className="h-full w-full object-cover group-hover/card:shadow-2xl group-hover/card:scale-105 transition-all duration-500 ease-out filter brightness-105 contrast-105"
                          alt="Sumit Kumar Gupta - Professional Photo"
                          style={{ objectPosition: '50% 5%' }}
                        />
                        {/* Premium overlay gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDark ? 'from-[#080808]/40' : 'from-white/20'}`}></div>
                        {/* Professional frame effect */}
                        <div className={`absolute inset-0 rounded-2xl ring-1 ring-inset ${isDark ? 'ring-neutral-600/30' : 'ring-neutral-300/50'}`}></div>
                      </div>
                    </CardItem>
                  
                  {/* Professional Photo Frame Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t to-transparent pointer-events-none ${isDark ? 'from-[#080808]/30' : 'from-white/30'}`}></div>
                  
                  {/* Action Buttons - More Professional */}
                  <div className={`flex justify-between items-center mt-6 pt-4 border-t ${isDark ? 'border-neutral-700/30' : 'border-neutral-200'}`}>
                    <CardItem
                      translateZ={20}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isDark 
                          ? 'text-neutral-400 hover:text-white hover:bg-neutral-700/30' 
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                      }`}
                    >
                      <a href="#contact" className="flex items-center space-x-1">
                        <span>Contact</span>
                        <span>→</span>
                      </a>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-lg ${
                        isDark 
                          ? 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-white/10' 
                          : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20'
                      }`}
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
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto">
            {[
              { icon: Code, number: "25+", label: "Projects" },
              { icon: Server, number: "15+", label: "Technologies" },
              { icon: Zap, number: "5+", label: "Certifications" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`group text-center rounded-xl p-5 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-neutral-900/60 border border-neutral-800/50 hover:border-neutral-600' 
                    : 'bg-white border border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-neutral-800/60' : 'bg-neutral-100'}`}>
                  <stat.icon className={`w-5 h-5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`} />
                </div>
                <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{stat.number}</div>
                <div className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNextSection}
              className={`group p-3 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-neutral-900/60 border border-neutral-800/50 text-neutral-400 hover:text-white hover:border-neutral-600' 
                  : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 shadow-sm'
              }`}
            >
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;