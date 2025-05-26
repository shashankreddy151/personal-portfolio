import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | My Portfolio</title>
        <meta name="description" content="Resume - My Portfolio" />
      </Head>
      <Header />
      <main className="min-h-[60vh] py-12 px-4 bg-background dark:bg-background text-text dark:text-text flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-accent">Resume</h2>
          <p className="mb-4 text-text-light dark:text-text-light">Download my resume or view my experience below.</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-accent text-background font-semibold rounded-lg mb-8">Download PDF</a>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-text mb-2">Senior Frontend Developer</h3>
              <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2023 - Present</span>
              <p className="text-text-light mt-2">Tech Innovation Inc. | Building modern web apps with Next.js, TypeScript, Tailwind CSS.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text mb-2">Full Stack Developer</h3>
              <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2020 - 2023</span>
              <p className="text-text-light mt-2">WebSolutions Co. | React, Node.js, MongoDB, UX collaboration.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text mb-2">Junior Developer</h3>
              <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2018 - 2020</span>
              <p className="text-text-light mt-2">StartupLaunch | React, Express, SaaS product development.</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
