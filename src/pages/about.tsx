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
    <main className="flex flex-col items-center py-12 px-4 bg-background dark:bg-background text-text dark:text-text">
      <div className="max-w-5xl w-full">
        {/* Bio Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square max-w-xs mx-auto md:mx-0 bg-background-light rounded-lg overflow-hidden">
                {/* Profile image placeholder - replace with your own image */}
                <div className="w-full h-full flex items-center justify-center bg-accent bg-opacity-10 text-accent text-xl font-bold">
                  Profile Photo
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-lg text-text-light dark:text-text-light">
                I'm a passionate developer with over 5 years of experience in building modern web applications. My journey in programming started during college, where I discovered my love for creating digital experiences that solve real-world problems.
              </p>
              <p className="text-lg text-text-light dark:text-text-light">
                After graduating with a degree in Computer Science, I joined a startup where I was responsible for developing interactive user interfaces using React and implementing server-side logic with Node.js. This role allowed me to refine my skills in full-stack development.
              </p>
              <p className="text-lg text-text-light dark:text-text-light">
                Currently, I specialize in building high-performance web applications using Next.js, React, and TypeScript. I'm passionate about creating accessible interfaces and writing clean, maintainable code.
              </p>
              <p className="text-lg text-text-light dark:text-text-light">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6 space-y-2">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <h3 className="text-xl font-bold text-text">Senior Frontend Developer</h3>
                <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2023 - Present</span>
              </div>
              <h4 className="text-lg text-text-light italic">Tech Innovation Inc.</h4>
              <p className="text-text-light">
                Leading the development of a modern web application using Next.js, TypeScript, and Tailwind CSS. Implementing best practices for accessibility and performance optimization.
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6 space-y-2">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <h3 className="text-xl font-bold text-text">Full Stack Developer</h3>
                <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2020 - 2023</span>
              </div>
              <h4 className="text-lg text-text-light italic">WebSolutions Co.</h4>
              <p className="text-text-light">
                Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive designs and interactive features.
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6 space-y-2">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <h3 className="text-xl font-bold text-text">Junior Developer</h3>
                <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2018 - 2020</span>
              </div>
              <h4 className="text-lg text-text-light italic">StartupLaunch</h4>
              <p className="text-text-light">
                Contributed to the development of a SaaS product using React and Express. Implemented features based on user feedback and helped optimize application performance.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Education</h2>
          <div className="border-l-4 border-accent pl-6 space-y-2">
            <div className="flex justify-between items-start flex-col sm:flex-row">
              <h3 className="text-xl font-bold text-text">BSc in Computer Science</h3>
              <span className="text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full text-sm">2014 - 2018</span>
            </div>
            <h4 className="text-lg text-text-light italic">University of Technology</h4>
            <p className="text-text-light">
              Graduated with honors. Focused on web development, algorithms, and data structures. Completed a senior project on building accessible web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
