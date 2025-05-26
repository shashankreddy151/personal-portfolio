import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
  <>
    <Head>
      <title>About | My Portfolio</title>
      <meta name="description" content="About me - My Portfolio" />
      <meta property="og:title" content="About | My Portfolio" />
      <meta property="og:description" content="About me - My Portfolio" />
    </Head>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-background dark:bg-background text-text dark:text-text">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-accent">About Me</h2>
        <p className="mb-2 text-lg text-text-light dark:text-text-light">
          I’m a passionate developer with experience in building modern web applications using React, Next.js, and TypeScript. I love creating beautiful, performant, and accessible user experiences.
        </p>
        <p className="text-lg text-text-light dark:text-text-light">
          This portfolio showcases some of my favorite projects and skills. Feel free to reach out via the contact page!
        </p>
      </motion.div>
    </main>
    <Footer />
  </>
);

export default About;
