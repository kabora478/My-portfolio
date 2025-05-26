import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="edu-timeline">
        <div className="edu-item">
          <h3>Bachelor of Science in mathematics and Computer Science</h3>
          <span className="edu-institution">Technical University of Mombasa | 2020 - 2024</span>
          <p>Specialized in Statistics. Developed skills in software development, machine learning, data structures, and full-stack web development.</p>
        </div>

        <div className="edu-item">
          <h3>Certificate in Web Development</h3>
          <span className="edu-institution">Coursera / FreeCodeCamp | 2022</span>
          <p>Completed courses in HTML, CSS, JavaScript, React, and backend development with Node.js. Built multiple projects as part of certification.</p>
        </div>

        <div className="edu-item">
          <h3>Kenya Certificate of Secondary Education (KCSE)</h3>
          <span className="edu-institution">Jura Secondary School | 2016 - 2019</span>
          <p>Graduated with distinction. Excelled in Mathematics, Physics, and Computer Studies. Served as Head Boy and led the STEM club.</p>
        </div>

        <div className="edu-item">
          <h3>Kenya Certificate of Primary Education (KCPE)</h3>
          <span className="edu-institution"> Primary School | 2008 - 2015</span>
          <p>Graduated top of the class. Developed early interest in science, computing, and leadership through club participation.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
