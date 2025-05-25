import React from 'react';
import './About.css';
import ProfilePlaceholder from './ProfilePlaceholder';

const About = () => {
  const technologies = [
    'Typescript',
    'React.js',
    'Javascript ES6+',
    'Python',
    'Java',
    'C#'
  ];

  return (
    <section className="about" id="about">
      <div className="section-header">
        <h2>/ about me</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <p>
            I am currently a <span className="highlight">Software Development Engineer</span> at <span className="highlight">Amazon</span>, working in the AWS sector under team Route 53. At the same time, I am undertaking a part-time <span className="highlight">Master's of Science</span> in Software Engineering at <span className="highlight">University of Oxford</span>.
          </p>

          <p>Here are some technologies I have been working with:</p>

          <ul className="skills-list">
            {technologies.map((tech, index) => (
              <li key={index}>
                <span className="arrow">▹</span>
                {tech}
              </li>
            ))}
          </ul>

          <p>
            Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.
          </p>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <ProfilePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
