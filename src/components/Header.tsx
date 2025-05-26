import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const toggleDarkMode = () => {
  if (typeof window !== 'undefined') {
    const root = window.document.documentElement;
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
};

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }
  }, []);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
    toggleDarkMode();
  };

  return (
    <header className="w-full flex justify-between items-center py-6 px-8 bg-background dark:bg-background text-text dark:text-text border-b border-accent">
      <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl font-bold">
        My Portfolio
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        aria-label="Toggle dark mode"
        className="p-2 rounded bg-accent text-background dark:text-background focus:outline-none"
      >
        {isDark ? '🌙' : '☀️'}
      </motion.button>
    </header>
  );
};

export default Header;