import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

// SVG Icon components
const GitHub = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
  </svg>
);

const Linkedin = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Mail = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ArrowRight = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const Code = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const Layout = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const Database = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

type Repo = {
  id: number
  name: string
  html_url: string
  description: string
  topics: string[]
}

export default function Home() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  
  useEffect(() => {
    async function loadRepos(): Promise<void> {
      try {
        // Use a public GitHub account with sample repositories for the demo
        const res = await fetch('https://api.github.com/users/github/repos?sort=updated&per_page=4')
        const data: Repo[] = await res.json()
        // Using GitHub's public repos for demonstration
        setRepos(data?.slice(0, 4) || []) // Only get first 4 repos
      } catch (error) {
        console.error('Failed to fetch repositories:', error)
        setRepos([])
      }
    }
    loadRepos()
  }, [])

  return (
    <>
      <Head>
        <title>My Portfolio | Modern Web Developer</title>
        <meta name="description" content="Full-stack developer portfolio specializing in React, TypeScript, and modern web technologies" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:description" content="Full-stack developer portfolio specializing in React, TypeScript, and modern web technologies" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-background dark:bg-background flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-accent font-medium">Hi, my name is</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text dark:text-text">
              Your Name
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-light">
              I build modern web experiences.
            </h2>
            <p className="max-w-2xl text-lg text-text-light dark:text-text-light">
              I'm a full-stack developer specializing in building exceptional digital experiences with React, Next.js, and TypeScript. Currently focused on building accessible, human-centered products.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHub className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-24 bg-background-light dark:bg-background-light px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-accent mb-4">My Skills</h2>
            <p className="text-text-light dark:text-text-light max-w-xl mx-auto">
              I've worked with a variety of technologies in the web development world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 p-2 inline-block bg-accent bg-opacity-10 rounded-lg">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-text">Frontend</h3>
              <p className="text-text-light dark:text-text-light mb-4">
                Building responsive, accessible web applications with modern tools and frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 p-2 inline-block bg-accent bg-opacity-10 rounded-lg">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-text">Backend</h3>
              <p className="text-text-light dark:text-text-light mb-4">
                Creating robust APIs and server-side solutions for web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 p-2 inline-block bg-accent bg-opacity-10 rounded-lg">
                <Layout className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-text">Other</h3>
              <p className="text-text-light dark:text-text-light mb-4">
                Tools and practices that complete my development workflow.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Jest', 'CI/CD', 'AWS', 'Figma'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24 px-6 bg-background dark:bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-accent mb-4">Featured Projects</h2>
            <p className="text-text-light dark:text-text-light max-w-xl">
              A selection of projects I've worked on. Check out my GitHub for more.
            </p>
          </motion.div>
          
          {repos === null && (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {repos && repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repos.map(repo => (
                <motion.div 
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >                  <ProjectCard
                    title={repo.name}
                    description={repo.description || 'No description available'}
                    image="/project-placeholder.svg" // Using our custom placeholder
                    url={repo.html_url}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            repos && (
              <p className="text-center text-text-light dark:text-text-light">
                No projects found. Please check your GitHub username.
              </p>
            )
          )}
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-light">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-accent">Interested in working together?</h2>
            <p className="text-text-light dark:text-text-light text-lg">
              I'm currently open for freelance projects and full-time opportunities.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
