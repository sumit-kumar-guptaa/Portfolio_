"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandX,
} from "@tabler/icons-react";
import { Send, CheckCircle, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ContactSection = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:sumit.gupta.14486@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sumit.gupta.14486@gmail.com",
      action: "mailto:sumit.gupta.14486@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7667827034",
      action: "tel:+917667827034",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      action: "#",
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/sumit-kumar-guptaa",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/sumit-kumar-9b4970285/",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: IconBrandX,
      href: "https://x.com/sumitkumar76678",
      color: "hover:text-sky-400"
    },
    {
      name: "Email",
      icon: IconMail,
      href: "mailto:sumit.gupta.14486@gmail.com",
      color: "hover:text-emerald-400"
    }
  ];

  const projectTypes = [
    "Backend Development",
    "AI/ML Project",
    "Full-Stack Development",
    "API Development",
    "Consultation",
    "Other"
  ];

  return (
    <section id="contact" className={`min-h-screen py-24 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0c0c0c]' : 'bg-[#f8f8f8]'}`}>
      {/* Enhanced Background Effects */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#111111] via-[#0c0c0c] to-[#080808]' : 'bg-gradient-to-b from-[#fafafa] via-[#f8f8f8] to-[#f5f5f5]'}`}></div>
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_50%)]' : 'bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.02),transparent_50%)]'}`}></div>
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_bottom_right,rgba(100,100,100,0.03),transparent_50%)]' : 'bg-[radial-gradient(ellipse_at_bottom_right,rgba(150,150,150,0.05),transparent_50%)]'}`}></div>
      
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'}}></div>
      
      {/* Elegant Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl ${isDark ? 'bg-gradient-to-b from-neutral-500/[0.03] to-transparent' : 'bg-gradient-to-b from-neutral-400/[0.05] to-transparent'}`}></div>
      
      {/* Grid Lines */}
      <div className={`absolute inset-0 bg-[size:80px_80px] ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'}`}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ${
              isDark 
                ? 'bg-neutral-900/80 border border-neutral-700/30 text-neutral-300' 
                : 'bg-white border border-neutral-200 text-neutral-600 shadow-sm'
            }`}
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Available for Work
          </motion.div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Let's <span className={`font-semibold bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-100' : 'bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700'}`}>Connect</span>
          </h2>
          <p className={`max-w-xl mx-auto text-lg font-light leading-relaxed ${isDark ? 'text-neutral-500' : 'text-neutral-600'}`}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className={`backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl ${
              isDark 
                ? 'bg-neutral-900/50 border border-neutral-800/50 shadow-black/20' 
                : 'bg-white border border-neutral-200 shadow-neutral-200/50'
            }`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-neutral-800/80 border border-neutral-700/30' : 'bg-neutral-100 border border-neutral-200'}`}>
                  <Send className={`w-5 h-5 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>Send a Message</h3>
                  <p className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>I'll respond within 24 hours</p>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-16"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-100'}`}>
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Message Sent!</h4>
                    <p className={isDark ? 'text-slate-400' : 'text-neutral-600'}>Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={`block text-sm mb-2 font-medium ${isDark ? 'text-slate-400' : 'text-neutral-600'}`}>
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all duration-300 ${
                            isDark 
                              ? 'bg-neutral-900/80 border border-neutral-700/50 text-white placeholder-neutral-600 focus:border-neutral-500 focus:bg-neutral-800/80' 
                              : 'bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-300 focus:bg-white'
                          }`}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={`block text-sm mb-2 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all duration-300 ${
                            isDark 
                              ? 'bg-neutral-900/80 border border-neutral-700/50 text-white placeholder-neutral-600 focus:border-neutral-500 focus:bg-neutral-800/80' 
                              : 'bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-300 focus:bg-white'
                          }`}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className={`block text-sm mb-2 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Project Type
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                          isDark 
                            ? 'bg-neutral-900/80 border border-neutral-700/50 text-white focus:border-neutral-500 focus:bg-neutral-800/80' 
                            : 'bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-300 focus:bg-white'
                        }`}
                      >
                        <option value="" className={isDark ? 'bg-neutral-900' : 'bg-white'}>Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className={isDark ? 'bg-neutral-900' : 'bg-white'}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className={`block text-sm mb-2 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                          isDark 
                            ? 'bg-neutral-900/80 border border-neutral-700/50 text-white placeholder-neutral-600 focus:border-neutral-500 focus:bg-neutral-800/80' 
                            : 'bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-300 focus:bg-white'
                        }`}
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full px-8 py-4 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg ${
                        isDark 
                          ? 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-white/10' 
                          : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className={`w-5 h-5 border-2 border-t-transparent rounded-full ${isDark ? 'border-slate-900' : 'border-white'}`}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowUpRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details */}
            <div className={`backdrop-blur-xl rounded-2xl p-8 ${
              isDark 
                ? 'bg-neutral-900/60 border border-neutral-800/50' 
                : 'bg-white border border-neutral-200 shadow-lg'
            }`}>
              <h4 className={`text-lg font-medium mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Contact Details</h4>
              <div className="space-y-5">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.action}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-neutral-800/60 border border-neutral-700/40 group-hover:border-neutral-600/60 group-hover:bg-neutral-700/60' 
                        : 'bg-neutral-100 border border-neutral-200 group-hover:border-neutral-300 group-hover:bg-neutral-50'
                    }`}>
                      <info.icon className={`w-5 h-5 transition-colors ${isDark ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-500 group-hover:text-neutral-900'}`} />
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>{info.title}</p>
                      <p className={`transition-colors ${isDark ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-600 group-hover:text-neutral-900'}`}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`backdrop-blur-xl rounded-2xl p-8 ${
              isDark 
                ? 'bg-neutral-900/60 border border-neutral-800/50' 
                : 'bg-white border border-neutral-200 shadow-lg'
            }`}>
              <h4 className={`text-lg font-medium mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-neutral-800/60 border border-neutral-700/40 hover:border-neutral-600/60 hover:bg-neutral-700/60 text-neutral-400' 
                        : 'bg-neutral-100 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-500'
                    } ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`backdrop-blur-xl rounded-2xl p-6 ${
                isDark 
                  ? 'bg-emerald-950/30 border border-emerald-900/30' 
                  : 'bg-emerald-50 border border-emerald-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>Open to Opportunities</h4>
                  <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Currently available for freelance projects and full-time positions.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-24 pt-8 border-t ${isDark ? 'border-neutral-800/50' : 'border-neutral-200'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
              © 2025 Sumit Kumar Gupta. Built with passion.
            </p>
            <div className={`flex items-center gap-6 text-sm ${isDark ? 'text-neutral-600' : 'text-neutral-500'}`}>
              <span className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-neutral-600' : 'bg-neutral-400'}`}></span>
                Response: 24h
              </span>
              <span className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-neutral-600' : 'bg-neutral-400'}`}></span>
                Based in India (IST)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
