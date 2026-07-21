"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Award, Star, Users, ArrowRight } from "lucide-react";
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: "web" | "website" | "ai";
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = [
    { id: "all", name: "All Projects", emoji: "🚀" },
    { id: "ai", name: "Agentic AI", emoji: "🤖" },
    { id: "web", name: "Web Apps", emoji: "⚡" },
    { id: "website", name: "Web Sites", emoji: "🌐" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const categoryColors: Record<string, string> = {
    ai: "from-violet-500 to-purple-600",
    web: "from-cyan-500 to-blue-600",
    website: "from-emerald-500 to-teal-600",
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From AI-powered agents to full-stack web apps — here&apos;s what I&apos;ve been building
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg shadow-gray-900/20 dark:shadow-white/20"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
            >
              <span>{category.emoji}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-md bg-gradient-to-r ${categoryColors[project.category] || "from-gray-500 to-gray-600"}`}>
                        {project.category === "ai" ? "AI" : project.category === "web" ? "Web App" : "Website"}
                      </span>
                    </div>

                    {/* Stats overlay on hover */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {project.stats?.users && (
                        <span className="flex items-center gap-1 text-xs text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                          <Users className="w-3 h-3" />
                          {project.stats?.users}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[11px] font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-[11px] font-medium rounded-md">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700/50">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                        {project.live && project.live !== "" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects in this category yet.</p>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image */}
                <div className="relative h-56 sm:h-64">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-md bg-gradient-to-r ${categoryColors[selectedProject.category] || "from-gray-500 to-gray-600"}`}>
                        {selectedProject.category === "ai" ? "Agentic AI" : selectedProject.category === "web" ? "Web App" : "Website"}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.stats.users && (
                      <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">{selectedProject.stats.users} users</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">About This Project</h4>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                      {selectedProject.longDescription
                        .split("\n\n")
                        .map((point, index) => (
                          <p key={index} className="text-sm">{point.replace("• ", "")}</p>
                        ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={selectedProject.github}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      Source Code
                    </motion.a>
                    {selectedProject.live && selectedProject.live !== "" && selectedProject.live !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
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
