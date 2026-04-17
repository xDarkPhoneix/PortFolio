import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Star, Calendar, Award } from 'lucide-react';

interface Hackathon {
  id: number;
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
  category: 'winner' | 'finalist' | 'participant';
}

const Hackathons: React.FC = () => {
  const hackathons: Hackathon[] = [
    {
      id: 1,
      name: 'SmartCity Dashboard',
      event: 'Urban IOT Challange',
      date: 'June 2025',
      position: '4th Place',
      prize: '$10,000',
      participants: 800,
      duration: '72 hours',
      description: 'Built a comprehensive smart city management dashboard with IoT integration, traffic optimization, and citizen engagement features.',
      project: 'Comprehensive smart city management platform with IoT integration and real-time analytics.',
      technologies: ['React.js', 'IoT Sensors', 'MongoDB' ,'Express','Node js','React Grid Layout', 'Chart.js'],
      achievements: [
        'Runner-up in Smart Cities category',
        'Best User Experience Award',
        'Pilot program with San Francisco city council',
        'Open-sourced with 1,000+ GitHub stars'
      ],
      image: 'https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'finalist'
    },
    {
  id: 2,
  name: 'Women Safety Alert System',
  event: 'Bit by Bit Hackathon',
  date: '2026',
  position: 'Participant',
  prize: '—',
  participants: 200,
  duration: '24-48 hours',
  description: 'Developed a real-time women safety web application enabling instant emergency alerts with live location sharing and nearest police station detection.',
  
  project: 'Emergency response system that captures user location, identifies nearest police stations via API, and sends alerts with coordinates to registered contacts.',
  
  technologies: [
    'React.js',
    'Node.js',
    'Express.js',
    'Geolocation API',
    'External Location API',
    'SMS API'
  ],
  
  achievements: [
    'Built a complete end-to-end working prototype within limited hackathon timeframe',
    
    'Implemented real-time location tracking and emergency alert system for critical situations',
    
    'Integrated external APIs to fetch nearest police station data dynamically',
    
    'Designed a user-friendly interface optimized for quick access during emergencies',
    
    'Demonstrated strong problem-solving and rapid development skills under time constraints'
  ],
  
  image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'participant'
}
    
    
  ];

  const getPositionColor = (category: string) => {
    switch (category) {
      case 'winner':
        return 'from-yellow-400 to-orange-500';
      case 'finalist':
        return 'from-gray-400 to-gray-500';
      default:
        return 'from-bronze-400 to-bronze-500';
    }
  };

  const getPositionIcon = (position: string) => {
    if (position.includes('1st')) return '🥇';
    if (position.includes('2nd')) return '🥈';
    if (position.includes('3rd')) return '🥉';
    return '🏆';
  };

  return (
    <section id="hackathons" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Hackathon</span> Participations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into award-winning solutions in high-pressure, time-constrained environments
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Participation</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">30+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Colleges Onboarded </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">3K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Competitors Beaten</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <Clock className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">300+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hours Coded</div>
          </div>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getPositionColor(hackathon.category)} text-white text-sm font-bold rounded-full flex items-center gap-2`}>
                      <span className="text-lg">{getPositionIcon(hackathon.position)}</span>
                      {hackathon.position}
                    </span>
                  </div>
                 
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{hackathon.name}</h3>
                    <p className="text-sm opacity-90">{hackathon.event}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center py-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <Calendar className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">{hackathon.date}</div>
                    </div>
                    <div>
                      <Users className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">{hackathon.participants} participants</div>
                    </div>
                    <div>
                      <Clock className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">{hackathon.duration}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {hackathon.project}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {hackathon.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {hackathon.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                          +{hackathon.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Hackathon Journey</h3>
          <p className="text-lg mb-6 opacity-90">
            From ideation to implementation, consistently delivering innovative solutions under pressure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">6 months</div>
              <div className="opacity-90">Average time between wins</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Project completion rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Technologies mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;