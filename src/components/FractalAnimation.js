import React, { useEffect, useRef } from 'react';
import './FractalAnimation.css';

const FractalAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Sierpinski triangle fractal
    const drawSierpinski = (x, y, size, depth) => {
      if (depth === 0) {
        // Draw a simple triangle
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x - size / 2, y + size / 2);
        ctx.lineTo(x + size / 2, y + size / 2);
        ctx.closePath();
        ctx.strokeStyle = '#64ffda';
        ctx.stroke();
        return;
      }
      
      const newSize = size / 2;
      
      // Top triangle
      drawSierpinski(x, y - newSize / 2, newSize, depth - 1);
      
      // Bottom left triangle
      drawSierpinski(x - newSize / 2, y + newSize / 2, newSize, depth - 1);
      
      // Bottom right triangle
      drawSierpinski(x + newSize / 2, y + newSize / 2, newSize, depth - 1);
    };
    
    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = 100 + Math.sin(time) * 20;
      
      drawSierpinski(centerX, centerY, size, 3);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fractal-canvas"></canvas>;
};

export default FractalAnimation;
