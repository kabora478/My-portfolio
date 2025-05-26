import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';

const skills = [
  { name: 'JavaScript', img: '/skills/javascript.png' },
  { name: 'TypeScript', img: '/skills/typescript.png' },
  { name: 'React', img: '/skills/react.png' },
  { name: 'Node.js', img: '/skills/node.png' },
  { name: 'Express', img: '/skills/express.png' },
  { name: 'MongoDB', img: '/skills/mongodb.png' },
  { name: 'MySQL', img: '/skills/mysql.png' },
  { name: 'Python', img: '/skills/python.png' },
  { name: 'Git', img: '/skills/git.png' },
];

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 data-aos="fade-down">My Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              title={skill.name}
            >
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
