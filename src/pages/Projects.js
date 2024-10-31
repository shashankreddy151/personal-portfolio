import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import '@fortawesome/fontawesome-free/css/all.min.css';

const data = [
  {
    title: 'Sentiment Analysis',
    description: 'Analyzing sentiments using a Twitter dataset with Long Short-Term Memory networks.',
    url: 'https://github.com/shashankreddy151/Sentiment-Analysis-on-Twitter-Airline-Sentiment-Dataset',
    tags: ['Python', 'NLP'],
    stars: 75,
  },
  {
    title: 'Face Mask Detection',
    description: 'Using OpenCV to detect whether individuals are wearing face masks.',
    url: 'https://github.com/shashankreddy151/Face-Mask-Detection-ML',
    tags: ['Python', 'OpenCV'],
    stars: 45,
  },
  {
    title: 'Library Management System',
    description: 'A comprehensive system for managing library operations.',
    url: 'https://github.com/shashankreddy151/Library-Management-System',
    tags: ['Java', 'Spring'],
    stars: 30,
  },
  {
    title: 'Payment-Driven Customer Experience Optimization',
    description: 'Optimizing customer experiences based on payment data analysis.',
    url: 'https://github.com/shashankreddy151/payment-driven-customer-experience-optimization',
    tags: ['JavaScript', 'Data Analysis'],
    stars: 50,
  },
];

const Projects = () => (
  <Main title="Projects" description="Learn about Shashank Reddy's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A collection of my work that I can stand behind.</p>
        </div>
      </header>
      <ul className="project-list">
        {data.map((project) => (
          <li key={project.title} className="project-item">
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                {project.title} <i className="fab fa-github"></i>
              </a>
            </h3>
            <p>{project.description}</p>
            <div className="project-footer">
              <span className="stars">★ {project.stars}</span>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  </Main>
);

export default Projects;
