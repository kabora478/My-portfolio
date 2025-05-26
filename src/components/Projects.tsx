import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>My Portfolio</h3>
            <p>React + TypeScript + Vite based personal portfolio with modern animations and routing.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
          </div>
          <div className="project-card">
            <h3>E-Commerce App</h3>
            <p>Full-stack MERN-based e-commerce platform with cart and user auth.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
