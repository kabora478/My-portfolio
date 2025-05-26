import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>© {new Date().getFullYear()} Ezekiel Kabora</h3>
        <div className="footer-links">
          <a href="mailto:kaboraezekiel@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kabora478" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://wa.me/0114867106" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
