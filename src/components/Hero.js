import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Simulating typing cursor animation
    const cursor = cursorRef.current;
    if (cursor) {
      setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
      }, 500);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="fractal-pattern"></div>
      <div className="hero-content">
        <h1>
          hi, <span className="highlight">gazi</span> here<span className="cursor" ref={cursorRef}>|</span>
        </h1>
        <p className="subtitle">I create stuff sometimes.</p>
        <p className="description">
          I'm a software engineer from Toronto, Canada. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.
        </p>
      </div>
    </section>
  );
};

export default Hero;
