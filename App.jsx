import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Certifications, Education } from './components/Timeline';
import Contact from './components/Contact';
import { Navbar, Footer } from './components/Navigation';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-space-midnight text-white selection:bg-primary selection:text-black">
      <Background3D />
      <Navbar />

      <main className="relative">
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </motion.div>
      </main>

      <Footer />

      {/* Custom Cursor Backdrop - Glow Effect */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,245,212,0.05)_0%,transparent_50%)]" />
      </div>
    </div>
  );
}

export default App;
