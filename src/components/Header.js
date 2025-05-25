import React from 'react';
import './Header.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { scrollToElement } from '../utils/scrollUtils';

const Header = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    // Extract the ID without the hash
    const id = sectionId.substring(1);
    // Use the utility function with a custom duration (800ms for medium speed)
    scrollToElement(id, 800, 80);
  };

  return (
    <header className="header">
      <div className="logo">Gazi Jarin</div>
      <nav className="nav">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
      </nav>
      <div className="icons">
        <a href="mailto:example@example.com" title="Email">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="icon" />
        </a>
        <a href="#edit" title="Edit">
          <BiPencil className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
