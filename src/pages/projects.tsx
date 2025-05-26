import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A beautiful, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    image: '/project-placeholder.svg',
    url: 'https://github.com/github/next.js',
  },
  {
    title: 'Open Source Dashboard',
    description: 'A dashboard for tracking open source contributions and stats.',
    image: '/project-placeholder.svg',
    url: 'https://github.com/github/opensource.guide',
  },
  {
    title: 'E-commerce Starter',
    description: 'A starter template for e-commerce sites using Next.js and Stripe.',
    image: '/project-placeholder.svg',
    url: 'https://github.com/github/marketplace',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="Projects - My Portfolio" />
      </Head>
      <Header />
      <main className="min-h-[60vh] py-12 px-4 bg-background dark:bg-background text-text dark:text-text flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl w-full">
          <h2 className="text-3xl font-bold mb-8 text-accent">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
