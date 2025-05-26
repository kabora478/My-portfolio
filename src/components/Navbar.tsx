import React, { useState, useEffect } from 'react';
import './Navbar.css';

const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // Adjust offset for navbar height
      
      // Find current active section by checking their position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Portfolio.</div>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
