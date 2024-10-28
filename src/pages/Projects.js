import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

// Updated data structure for your projects
const data = [
  {
    title: 'Sentiment Analysis',
    description: 'Analyzing sentiments using a Twitter dataset with Long Short-Term Memory networks.',
    url: 'https://example.com/sentiment-analysis',
    tags: ['Python', 'NLP'],
    stars: 75,
  },
  {
    title: 'Face Mask Detection',
    description: 'Using OpenCV to detect whether individuals are wearing face masks.',
    url: 'https://example.com/face-mask-detection',
    tags: ['Python', 'OpenCV'],
    stars: 45,
  },
  {
    title: 'Library Management System',
    description: 'A comprehensive system for managing library operations.',
    url: 'https://example.com/library-management-system',
    tags: ['Java', 'Spring'],
    stars: 30,
  },
  {
    title: 'Payment-Driven Customer Experience Optimization',
    description: 'Optimizing customer experiences based on payment data analysis.',
    url: 'https://example.com/payment-driven-optimization',
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
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <div className="project-footer">
              <span className="stars">⭐ {project.stars}</span>
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
