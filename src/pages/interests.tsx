import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TravelMap from '@/components/TravelMap';

export default function Interests() {
  return (
    <>
      <Head>
        <title>Interests | My Portfolio</title>
        <meta name="description" content="Things I like to do, podcasts, travel, and food." />
      </Head>
      <Header />
      <main className="min-h-[80vh] bg-background dark:bg-background px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold text-accent mb-6">Interests</h1>
            <p className="text-text-light dark:text-text-light mb-8">A few things that make life fun and meaningful for me.</p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold text-accent mb-4">Things I Like To Do</h2>
            <ul className="list-disc pl-6 text-text-light dark:text-text-light space-y-2">
              <li>Coding side projects & open source</li>
              <li>Photography & editing</li>
              <li>Hiking and exploring nature</li>
              <li>Reading sci-fi and tech blogs</li>
              <li>Playing chess and strategy games</li>
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold text-accent mb-4">Podcasts I Listen To</h2>
            <ul className="list-disc pl-6 text-text-light dark:text-text-light space-y-2">
              <li>Syntax.fm (web dev)</li>
              <li>Darknet Diaries</li>
              <li>Lex Fridman Podcast</li>
              <li>How I Built This</li>
              <li>Reply All</li>
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold text-accent mb-4">Places I’ve Travelled</h2>
            <ul className="list-disc pl-6 text-text-light dark:text-text-light space-y-2">
              <li>Japan (Tokyo, Kyoto, Osaka)</li>
              <li>Italy (Rome, Florence, Venice)</li>
              <li>Canada (Vancouver, Toronto)</li>
              <li>USA (NYC, San Francisco, Seattle)</li>
              <li>India (Delhi, Mumbai, Goa)</li>
            </ul>
            <div className="mt-8">
              <TravelMap />
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
