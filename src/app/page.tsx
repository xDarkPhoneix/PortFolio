import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';

const About = dynamic(() => import('../components/About'), { 
  loading: () => <div className="text-center py-10 text-gray-400">Loading sections...</div> 
});
const Projects = dynamic(() => import('../components/Projects'));
const Experience = dynamic(() => import('../components/Experience'));
const Skills = dynamic(() => import('../components/Skills'));
const HackathonsSection = dynamic(() => import('../components/HackathonsSection'));
const BlogSection = dynamic(() => import('../components/BlogSection'));
const Contact = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <HackathonsSection />
        <BlogSection />
        <Contact />
      </main>
    </div>
  );
}
