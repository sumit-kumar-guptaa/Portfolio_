"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ResumeSection from "@/sections/ResumeSection";
import ContactSection from "@/sections/ContactSection";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false); // Disabled loading screen

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>      <main className="min-h-screen bg-slate-900">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        <ScrollToTop />
      </main>
    </>
  );
}
