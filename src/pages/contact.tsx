import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="description" content="Contact me - My Portfolio" />
        <meta property="og:title" content="Contact | My Portfolio" />
        <meta property="og:description" content="Contact me - My Portfolio" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-background dark:bg-background text-text dark:text-text">
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="w-full max-w-lg bg-background dark:bg-background border border-accent rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-accent">Contact</h2>
          <label className="block mb-4">
            <span className="text-text-light dark:text-text-light">Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full rounded border border-accent bg-background dark:bg-background text-text dark:text-text p-2" />
          </label>
          <label className="block mb-4">
            <span className="text-text-light dark:text-text-light">Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full rounded border border-accent bg-background dark:bg-background text-text dark:text-text p-2" />
          </label>
          <label className="block mb-6">
            <span className="text-text-light dark:text-text-light">Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="mt-1 block w-full rounded border border-accent bg-background dark:bg-background text-text dark:text-text p-2" />
          </label>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} type="submit" className="w-full py-2 px-4 rounded bg-accent text-background font-semibold">
            Send
          </motion.button>
          {status && <p className="mt-4 text-center text-accent">{status}</p>}
        </motion.form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
