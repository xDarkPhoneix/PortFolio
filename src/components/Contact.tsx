"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saurav@email.com',
      href: 'mailto:alex.johnson@email.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9142575453',
      href: 'tel: 9142575453',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhagalpur Bihar , India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      label: 'Schedule Call',
      value: 'Book a meeting',
      href: '#',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/xDarkPhoneix?tab=repositories', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/saurav-9b6794266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:rajsaurav589@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, interesting projects, or just chat about technology. 
                Whether you're looking for a developer, have a project in mind, or want to explore collaboration possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.label}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow Me Online
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} border border-gray-200 dark:border-gray-700`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3 text-green-700 dark:text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Saurav. Built with React, TypeScript, and lots of ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;