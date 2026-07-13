"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Download, Brain, Bot, Network, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';


const Hero: React.FC = () => {
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "Saurav_CV.pdf";
  link.click();
};

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = ["Full-Stack Developer", "Agentic AI Engineer", "AI Automation Expert", "Python Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-pink-600 bg-clip-text text-transparent">
                  Saurav
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="h-10">
                <motion.h2 
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                  {roles[currentRoleIndex]}
                </motion.h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mt-2">
                I craft beautiful, functional digital experiences with modern web technologies and 
                build intelligent autonomous AI systems that solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-border text-foreground rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-6"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/xDarkPhoneix?tab=repositories', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/saurav-9b6794266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:rajsaurav589@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glass Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                      <img src="/Mylogo.png" alt="Saurav Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Saurav</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">25+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">3+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Hackathons </span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">5</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {['React', 'Node.js', 'Python'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="px-3 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg text-center text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating AI Elements */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Brain className="w-12 h-12 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [15, -15, 15], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/10 backdrop-blur-xl border border-secondary/20 rounded-xl flex items-center justify-center shadow-2xl"
              >
                <Bot className="w-10 h-10 text-secondary" />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-12 w-16 h-16 bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Network className="w-8 h-8 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;