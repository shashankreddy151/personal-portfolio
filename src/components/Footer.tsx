import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <footer className="w-full py-4 px-8 flex justify-center items-center bg-background dark:bg-background text-text dark:text-text border-t border-accent">
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </motion.div>
  </footer>
);

export default Footer;
