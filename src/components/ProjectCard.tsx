import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-lg overflow-hidden shadow-lg bg-background dark:bg-background border border-accent hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.03, y: -4 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative w-full h-48">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
      <p className="text-text-light dark:text-text-light">{description}</p>
    </div>
  </motion.a>
);

export default ProjectCard;
