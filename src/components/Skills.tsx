import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database,  Brain, Shield, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js/TypeScript', level: 95, category: 'Frontend' },
        { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
        { name: 'Webpack/Vite', level: 82, category: 'Frontend' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js/Express', level: 92, category: 'Backend' },
        { name: 'MongoDB', level: 90, category: 'Backend' },
        { name: 'Redis', level: 78, category: 'Backend' },
       
      ]
    },
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023', icon: '☁️' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2023', icon: '🌐' },
    { name: 'Meta Frontend Developer Certificate', issuer: 'Meta', year: '2022', icon: '⚛️' },
    { name: 'MongoDB Certified Developer', issuer: 'MongoDB', year: '2022', icon: '🍃' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud technologies, and emerging tech
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl text-center border border-primary-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),0_8px_32px_rgba(31,38,135,0.15)] rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Technologies</div>
            </div>
            <div>
              <Zap className="w-8 h-8 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="opacity-90">Years Experience</div>
            </div>
            <div>
              <Brain className="w-8 h-8 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Frameworks Mastered</div>
            </div>
            <div>
              <Code className="w-8 h-8 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="opacity-90">Languages Fluent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;