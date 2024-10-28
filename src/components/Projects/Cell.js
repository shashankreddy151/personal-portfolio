import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
  const [starCount, setStarCount] = useState(project.stars); // Initialize star count

  const handleStarClick = () => {
    setStarCount(prevCount => prevCount + 1); // Increment star count
    // Optionally, add logic to persist the star count to a backend if needed
  };

  const {
    title,
    link,
    visibility,
    description,
    tags,
    language,
    forks,
    license,
    updated,
  } = project;

  return (
    <div className="project-item">
      <div className="project-header">
        <a href={link} className="project-title" target="_blank" rel="noopener noreferrer" aria-label={`View ${title} project`}>
          {title}
        </a>
        <span className="badge">{visibility}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-footer">
        <span className="language">
          <i className={`devicon-${language.toLowerCase()}-plain colored`}></i> {language}
        </span>
        <span 
          className="stars" 
          onClick={handleStarClick} 
          style={{ cursor: 'pointer' }} 
          aria-label={`Stars: ${starCount}`} 
          title="Click to star this project"
        >
          ⭐ {starCount}
        </span>
        <span className="forks">🍴 {forks}</span>
        <span className="license">{license}</span>
        <span className="updated">Updated {updated}</span>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    license: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
