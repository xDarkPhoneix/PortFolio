import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import img from "../Mylogo.png"

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Full-Stack Developer & Generative AI Enthusiast
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                I craft beautiful, functional digital experiences with modern technologies. 
                Passionate about creating innovative solutions that make a difference.
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
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Explore My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/xDarkPhoneix?tab=repositories', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/saurav-9b6794266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
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
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg"><img src={img} alt="" /></span>
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

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">💡</span>
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