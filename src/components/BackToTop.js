import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';
import { scrollToTop as smoothScrollToTop } from '../utils/scrollUtils';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Handle the scroll to top action
  const handleScrollToTop = () => {
    smoothScrollToTop(800); // 800ms for medium speed
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={handleScrollToTop} aria-label="Back to top">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackToTop;
