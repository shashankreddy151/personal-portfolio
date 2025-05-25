import React from 'react';
import './Projects.css';
import { FaFolder, FaGithub } from 'react-icons/fa';
import ProjectPlaceholder from './ProjectPlaceholder';

const Projects = () => {
  const projects = [
    {
      name: "TDSB Homework Management Interface",
      description: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      technologies: ["Python (Flask)", "Vue.js", "Bootstrap", "SQL"],
      github: "https://github.com"
    },
    {
      name: "Adam A.I.",
      description: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
      technologies: ["Javascript", "HTML / CSS"],
      github: "https://github.com"
    },
    {
      name: "Distributed Logging and Monitoring System",
      description: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
      technologies: ["Node.js (Express.js)", "React.js", "PostgreSQL"],
      github: "https://github.com"
    },
    {
      name: "Odin Bot",
      description: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      technologies: ["Javascript", "Node.js", "Natural NLP", "Telegram API"],
      github: "https://github.com"
    },
    {
      name: "Game Centre",
      description: "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      technologies: ["Java", "Android Studio"],
      github: "https://github.com"
    },
    {
      name: "Minimax Stonehenge",
      description: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      technologies: ["Python"],
      github: "https://github.com"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <h2>/ pet projects</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="project-icon">
                <FaFolder className="folder-icon" />
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Feature Project - Tall Tales */}
      <div className="featured-project">
        <h3>Tall Tales</h3>
        <div className="featured-content">
          <div className="featured-image">
            <ProjectPlaceholder />
          </div>
          <div className="featured-details">
            <p>A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.</p>
            <div className="featured-tech">
              <span>NODE.JS (SOCKET.IO)</span>
              <span>REACT.JS</span>
              <span>MONGODB</span>
            </div>
            <div className="featured-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
