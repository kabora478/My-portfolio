// src/pages/About.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container" data-aos="fade-up">
        <h2>About Me</h2>

        <div className="typewriter">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer 💻',
              2000,
              'Creative Problem Solver 🧠',
              2000,
              'Lifelong Learner 📚',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="animated-text"
          />
        </div>

        <div className="about-content">
          <div className="about-photo" data-aos="zoom-in" data-aos-delay="200">
            <img src="/zeki.jpg" alt="Lucius Meshach" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-delay="300">
            <p>
              I’m a passionate Full-Stack Developer skilled in creating beautiful, responsive, and high-performance web applications.
              I enjoy solving complex problems, learning new technologies, and collaborating on impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
