import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';

const About = dynamic(() => import('../components/About'), { 
  loading: () => <div className="text-center py-10 text-gray-400">Loading sections...</div> 
});
const Projects = dynamic(() => import('../components/Projects'));
const Internships = dynamic(() => import('../components/Internships'));
const Hackathons = dynamic(() => import('../components/Hackathons'));
const Skills = dynamic(() => import('../components/Skills'));
const Contact = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Internships />
        <Hackathons />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
