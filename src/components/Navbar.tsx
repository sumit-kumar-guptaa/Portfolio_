"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Premium Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-neutral-800/50 shadow-lg shadow-black/20'
            : 'bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-lg shadow-neutral-200/50'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo/Name */}
            <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              <span>Sumit Kumar</span> <span className={isDark ? 'text-neutral-400' : 'text-neutral-500'}>Gupta</span>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.href.slice(1)
                      ? isDark ? "text-white" : "text-neutral-900"
                      : isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {activeSection === item.href.slice(1) && (
                    <span className={`absolute inset-0 rounded-lg border ${
                      isDark 
                        ? 'bg-neutral-800/60 border-neutral-700/50' 
                        : 'bg-neutral-100 border-neutral-200'
                    }`}></span>
                  )}
                  <span className="relative">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-neutral-900/60 border border-neutral-800/50 text-neutral-400 hover:text-white hover:border-neutral-600'
                  : 'bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;