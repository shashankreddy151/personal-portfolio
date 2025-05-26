import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <>
      <Head>
        <title>Stats | My Portfolio</title>
        <meta name="description" content="Stats - My Portfolio" />
      </Head>
      <Header />
      <main className="min-h-[60vh] py-12 px-4 bg-background dark:bg-background text-text dark:text-text flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold mb-8 text-accent">Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background-light dark:bg-background-light p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-accent mb-2">GitHub Contributions</h3>
              <p className="text-text-light">Coming soon: GitHub stats integration!</p>
            </div>
            <div className="bg-background-light dark:bg-background-light p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-accent mb-2">Site Visitors</h3>
              <p className="text-text-light">Coming soon: Analytics integration!</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
