import { useState } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Ventures from './components/Ventures';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <ScrollProgress />

      <div
        className={`transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Ventures />
          <Projects />
          <Timeline />
          <Resume />
          <Appointment />
          <Contact />
        </main>
        <Footer />
      </div>

      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
