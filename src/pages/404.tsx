import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <Header />
      <main className="min-h-[60vh] flex flex-col items-center justify-center bg-background dark:bg-background text-text dark:text-text">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <h1 className="text-5xl font-bold text-accent mb-4">404</h1>
          <p className="text-lg text-text-light mb-8">Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="inline-block px-6 py-3 bg-accent text-background font-semibold rounded-lg">Go Home</a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
