import React, { useEffect } from 'react';
import AOS from 'aos';
import { TypeAnimation } from 'react-type-animation';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-text" data-aos="fade-right">
        <h3>Hello I am</h3>
        <h1 data-aos="fade-down">Kabora Ezekiel</h1>
        <h2 data-aos="fade-up">
          I'm a {' '}
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'Software Engineer',
              2000,
              'Web Problem Solver',
              2000,
              'Full-Stack Engineer',
              2000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontWeight: 'bold' }}
            repeat={Infinity}
            className="typing-text"
          />
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            download
            className="download-btn"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Download CV
          </a>
          <div className="socials" data-aos="fade-up" data-aos-delay="600">
            <i className="fab fa-github" title="GitHub"></i>
            <i className="fab fa-linkedin" title="LinkedIn"></i>
            <i className="fab fa-whatsapp" title="WhatsApp"></i>
          </div>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
        <img src="/profile.png" alt="Lucius" />
      </div>
    </section>
  );
};

export default Hero;
