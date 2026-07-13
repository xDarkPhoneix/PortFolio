"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  link: string;
}

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-gray-950">
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
    <section id="blog" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Latest <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Articles</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on AI, web development, and system design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <a 
                  href={post.link && post.link !== '' ? post.link : '#'} 
                  target={post.link && post.link !== '#' && post.link !== '' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto w-fit cursor-pointer"
                >
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No articles found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
