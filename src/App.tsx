import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Internships = lazy(() => import('./components/Internships'));
const Hackathons = lazy(() => import('./components/Hackathons'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading sections...</div>}>
            <About />
            <Projects />
            <Internships />
            <Hackathons />
            <Skills />
            <Contact />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;