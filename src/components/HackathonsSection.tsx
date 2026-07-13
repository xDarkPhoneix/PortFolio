"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Award, ExternalLink, ArrowUpRight, Clock, Users, Gift } from 'lucide-react';

interface Hackathon {
  id: string;
  name: string;
  event: string;
  date: string;
  position: string;
  prize: string;
  participants: number;
  duration: string;
  description: string;
  project: string;
  technologies: string[];
  achievements: string[];
  image: string;
  category: string;
}

const HackathonsSection: React.FC = () => {
  const [hackathons, setHackathons] = React.useState<Hackathon[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch('/api/hackathons');
        const data = await response.json();
        setHackathons(data);
      } catch (error) {
        console.error("Failed to fetch hackathons:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHackathons();
  }, []);

  if (loading) {
    return (
      <section id="hackathons" className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hackathons" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-secondary-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-block px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-medium rounded-full mb-4"
          >
            Achievements
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hackathon{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Victories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building under pressure. A showcase of my competitive programming and rapid prototyping experiences.
          </p>
        </motion.div>

        <div className="space-y-12">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-2 sm:p-4 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="w-full md:w-2/5 lg:w-1/3 relative rounded-2xl overflow-hidden h-64 md:h-auto">
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                  
                  {/* Position Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                      <Trophy className={`w-5 h-5 ${hackathon.position.includes('Place') ? 'text-yellow-400' : 'text-gray-300'}`} />
                      <span className="text-white font-bold tracking-wide">{hackathon.position}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 lg:w-2/3 p-4 sm:p-6 flex flex-col justify-center">
                  
                  {/* Meta Tags */}
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {hackathon.date}
                    </div>
                    <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <div className="flex items-center gap-1.5 font-semibold text-primary-600 dark:text-primary-400">
                      <Award className="w-4 h-4" />
                      {hackathon.event}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                    {hackathon.name}
                  </h3>

                  {/* Project Highlight */}
                  <div className="mb-4 bg-gray-50 dark:bg-gray-800/50 p-3.5 rounded-xl text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50">
                    <span className="font-bold text-gray-900 dark:text-white mr-2">Project Built:</span> 
                    {hackathon.project}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {hackathon.description}
                  </p>

                  {/* Achievements Grid */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {hackathon.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                          <span className="leading-snug">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap gap-2 flex-1">
                      {hackathon.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-400 border border-primary-100 dark:border-primary-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Stats Footer */}
                  <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {hackathon.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-gray-400" />
                      {hackathon.participants}+ Hackers
                    </div>
                    {hackathon.prize !== '—' && (
                      <div className="flex items-center gap-1.5 text-green-600 dark:text-green-500">
                        <Gift className="w-4 h-4" />
                        {hackathon.prize}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
