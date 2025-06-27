import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and contributing to open-source communities.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focused on delivering high-quality products that exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience crafting 
                digital experiences that matter. My journey began with curiosity about how 
                technology can solve real-world problems, and it has evolved into a mission 
                to create innovative solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                From hackathons to internships at leading tech companies, I've consistently 
                pushed boundaries and embraced challenges. I believe in writing clean, 
                efficient code and staying at the forefront of technological innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                'Full-Stack Development',
                'Gen AI',
                'Team Leadership',
                'Problem Solving',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hackathons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lines of Code</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Values</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The principles that guide my work and development philosophy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;