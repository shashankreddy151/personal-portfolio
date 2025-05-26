import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="py-12 px-6 bg-background dark:bg-background text-text dark:text-text border-t border-accent">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-accent mb-4">My Portfolio</h3>
          <p className="text-text-light dark:text-text-light">
            Building modern web experiences with React, Next.js, and TypeScript.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-accent mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-text-light hover:text-accent transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-text-light hover:text-accent transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-text-light hover:text-accent transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-accent mb-4">Connect</h3>
          <div className="space-y-2">
            <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="block text-text-light hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="block text-text-light hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:your.email@example.com" className="block text-text-light hover:text-accent transition-colors">Email</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-accent pt-8 text-center">
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-text-light dark:text-text-light">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </motion.p>
      </div>
    </div>
  </footer>
);

export default Footer;
