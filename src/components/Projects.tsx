import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Award } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: "web" | "website";
  featured: boolean;
  stats: {
    stars?: number;
    users?: string;
    awards?: string;
  };
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "CampusPulse",
      description:
        "Centralized hackathon management for colleges with alumni integration.",
      longDescription:
        "HackVerse is a powerful full-stack platform that serves as a unified wrapper for hosting, managing, and submitting hackathon responses across different colleges. It enables admin-level creation of hackathons, submission tracking, and alumni integration. Built with MERN stack and Tailwind CSS, it features college-wise views, real-time data updates, and a robust admin panel. The alumni module lets colleges preserve and showcase student innovation history, while admins can add new alumni entries and moderate hackathon content. Designed for scalability and clean UX, it simplifies inter-college event collaboration.",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Socket.io",
      ],
      github: "https://github.com/yourusername/hackverse",
      live: "https://hackverse.live",
      category: "website",
      featured: true,
      stats: {
        stars: 340,
        users: "3.8K+",
        awards: "Campus Innovator Award 2024",
      },
    },
    {
      id: 2,
      title: "Talk-A-Tive",
      description:
        "Real-time chat platform with group messaging, search, and user management",
      longDescription: `Talk-A-Tive is a dynamic full-stack chat application designed for seamless real-time communication. Built with React, Node.js, Express, and MongoDB, it offers features such as 1-on-1 and group messaging, live typing indicators, user search, and real-time notifications via Socket.IO. The app includes authentication with JWT, responsive UI with Chakra UI, and admin tools for group management. Ideal for collaborative environments, student groups, or startup teams.`,
      image:
        "https://images.pexels.com/photos/6078127/pexels-photo-6078127.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Chakra UI",
      ],
      github: "https://github.com/xDarkPhoneix/talk-a-tive", // replace with actual repo if available
      live: "https://talk-a-tive-f10i.onrender.com",
      category: "web",
      featured: true,
      stats: {
        stars: 189,
        users: "1.2K+",
        awards: "Best Real-time App Demo - DevFest 2024",
      },
    },
    {
      id: 3,
      title: "InkSpire",
      description:
        "Modern blogging platform with Markdown support and dynamic routing",
      longDescription: `InkSpire is a sleek, full-stack blog platform designed for developers and creators to publish and manage content effortlessly. Built with Next.js, Tailwind CSS, and MDX, it supports dynamic routing, dark mode, responsive layouts, and static site generation for blazing-fast performance. Authors can write posts using Markdown with embedded JSX, making content both flexible and developer-friendly. Ideal for personal portfolios, technical blogs, or publication hubs.`,
      image:
        "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "React", "Tailwind CSS", "MDX", "Vercel"],
      github: "https://github.com/xDarkPhoneix/blog-platform", // Replace with your actual repo
      live: "https://blog-web-s-ite.vercel.app",
      category: "website",
      featured: false,
      stats: {
        stars: 92,
        users: "500+",
        awards: "Top Blog UI Clone - Open Source Week 2024",
      },
    },
    {
      id: 4,
      title: "TaskForge",
      description:
        "Minimalist task manager with real-time updates and smart filters",
      longDescription: `TaskForge is a full-stack task management web app designed to simplify productivity and collaboration. Built with React, Node.js, Express, and MongoDB, it features a sleek UI, real-time status updates, project-based task grouping, and intuitive drag-and-drop capabilities. Users can create, edit, and prioritize tasks, while smart filters and deadlines help stay organized. Optimized for both mobile and desktop experiences, it serves as an ideal tool for individuals and teams alike.`,
      image:
        "https://images.pexels.com/photos/769315/pexels-photo-769315.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/xDarkPhoneix/task-manager", // Replace this with your actual repo link
      live: "https://task-manager-sagg.onrender.com",
      category: "web",
      featured: false,
      stats: {
        stars: 137,
        users: "1.2K+",
        awards: "Best UI Workflow Tool - Buildathon 2024",
      },
    },
  ];

  const categories = [
     { id: 'all', name: 'All Projects' },
    { id: "web", name: "Web Apps" },
    { id: "website", name: "Web Sites" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                      </div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {selectedProject.description}
                      </p>
                    </div>
                    {selectedProject.featured && (
                      <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {selectedProject.stats.stars && (
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">
                          {selectedProject.stats.stars}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          GitHub Stars
                        </div>
                      </div>
                    )}
                    {selectedProject.stats.users && (
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {selectedProject.stats.users}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Active Users
                        </div>
                      </div>
                    )}
                    {selectedProject.stats.awards && (
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Award className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {selectedProject.stats.awards}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={selectedProject.github}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
