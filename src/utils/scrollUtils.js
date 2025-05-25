/**
 * Utility functions for smooth scrolling with customizable speeds
 */

/**
 * Smoothly scroll to a specific element with custom duration
 * @param {string} elementId - The ID of the element to scroll to (without #)
 * @param {number} duration - The duration of the scroll animation in milliseconds
 * @param {number} offset - Offset from the top in pixels (for header height)
 */
export const scrollToElement = (elementId, duration = 800, offset = 80) => {
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) return;
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smoother scroll motion
    const ease = easeInOutCubic(scrollProgress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Easing function for smooth acceleration and deceleration
  function easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  requestAnimationFrame(animation);
};

/**
 * Smoothly scroll to the top of the page with custom duration
 * @param {number} duration - The duration of the scroll animation in milliseconds
 */
export const scrollToTop = (duration = 800) => {
  const startPosition = window.pageYOffset;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smoother scroll motion
    const ease = easeInOutCubic(scrollProgress);
    
    window.scrollTo(0, startPosition * (1 - ease));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Easing function for smooth acceleration and deceleration
  function easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  requestAnimationFrame(animation);
};
