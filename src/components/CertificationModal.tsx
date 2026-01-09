"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/certifications";
import { X, ExternalLink, Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isDark ? 'bg-black/50' : 'bg-black/30'}`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto ${
              isDark 
                ? 'bg-slate-900 border border-white/10' 
                : 'bg-white border border-neutral-200 shadow-xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                <Award className={isDark ? 'text-cyan-400' : 'text-blue-500'} size={32} />
                Certifications & Credentials
              </h2>
              <button
                onClick={onClose}
                className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`backdrop-blur-md rounded-xl p-6 transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                      : 'bg-neutral-50 border border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        {cert.name}
                      </h3>
                      <p className={`font-medium mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                        {cert.issuer}
                      </p>
                      <div className={`flex items-center text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-neutral-600'}`}>
                        <Calendar size={16} className="mr-2" />
                        {new Date(cert.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-full transition-all duration-300 shadow-lg text-sm ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                        : 'bg-neutral-900 text-white hover:bg-neutral-800'
                    }`}
                  >
                    View Credential
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-neutral-500'}`}>
                * Placeholder credentials will be updated with real certification links
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;
