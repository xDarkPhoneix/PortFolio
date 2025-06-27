import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

interface Internship {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  color: string;
}

const Internships: React.FC = () => {
  const internships: Internship[] = [
    {
      id: 1,
  company: "KitabWalah",
  role: "Software Engineer Intern",
  duration: "Summer 2025 (3 months)",
  location: "Patna, Bihar, India",
  description:
    "Contributed to the full-stack development of KitabWalah, an online bookstore platform catering to a wide regional user base.",
  achievements: [
    "Developed dynamic product listing and category filtering with optimized API queries, improving browsing performance by 35%",
    "Integrated Razorpay for seamless and secure checkout, resulting in a 20% increase in successful transactions",
    "Built an admin dashboard with real-time inventory and order management using Socket.io and MongoDB change streams",
    "Refactored legacy codebase into modular React components with TypeScript, reducing bugs and improving maintainability",
    "Collaborated with cross-functional teams to implement SEO best practices, improving organic traffic by 50%",
  ],
  technologies: [
    "MongoDB",
    "React",
    "TypeScript",
    "Express.js",
    "Node.js",
    "Docker",
    "Razorpay API",
    "Tailwind CSS"
  ],
  logo: "📚",
  color: "from-yellow-400 to-red-500",
    },
  ];

  return (
    <section id="internships" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Internship
            </span>{" "}
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hands-on experience at leading tech companies, contributing to
            products used by millions
          </p>
        </motion.div>

        <div className="space-y-12">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Timeline Line */}
                {index !== internships.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-px h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 transform -translate-x-1/2 z-10"></div>
                )}

                <div
                  className={`relative bg-gradient-to-br ${internship.color} p-1 rounded-2xl group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Company Info */}
                      <div className="lg:col-span-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                          <div className="text-4xl">{internship.logo}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {internship.company}
                            </h3>
                            <p className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                              {internship.role}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{internship.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description and Achievements */}
                      <div className="lg:col-span-2 space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {internship.description}
                        </p>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {internship.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {internship.technologies.map((tech, idx) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <Building className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              1
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Top Tech Companies
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <Users className="w-8 h-8 text-secondary-600 dark:text-secondary-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              1.2K+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Users Impacted
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <TrendingUp className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Return Offer Rate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
