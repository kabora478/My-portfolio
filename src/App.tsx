// src/App.tsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="hero" data-aos="fade-up"><Hero /></section>
        <section id="about" data-aos="fade-up"><About /></section>
        <section id="skills" data-aos="fade-up"><Skills /></section>
        <section id="projects" data-aos="fade-up"><Projects /></section>
        <section id="education" data-aos="fade-up"><Education /></section>
        <section id="contact" data-aos="fade-up"><Contact /></section>
      </main>
      <Footer />
    </>
  );
};

export default App;
