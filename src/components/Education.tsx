import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="edu-timeline">
        <div className="edu-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <span>Technical University of Mombasa | 2020 - 2024</span>
          <p>Specialized in Statistics. Graduated with strong foundation in software development, data analysis, and web technologies.</p>
        </div>
        <div className="edu-item">
          <h3>Kenya Certificate of Secondary Education</h3>
          <span>Jura Secondary School | 2016 - 2019</span>
          <p>Graduated with distinction. Developed leadership skills and a strong academic track in sciences and mathematics.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
