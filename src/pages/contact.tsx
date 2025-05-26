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
      <Header />      <main className="flex flex-col items-center py-12 px-4 bg-background dark:bg-background text-text dark:text-text">
        <div className="max-w-6xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-accent">Get In Touch</h2>
            <p className="text-lg text-text-light dark:text-text-light">
              Have a project in mind? Or just want to say hello? I'm always open to discussing work opportunities, ideas, or answering any questions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-text">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-accent bg-opacity-10 rounded-lg">
                    <svg className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text font-semibold">Phone</h4>
                    <p className="text-text-light">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-accent bg-opacity-10 rounded-lg">
                    <svg className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text font-semibold">Email</h4>
                    <p className="text-text-light">hello@yourportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-accent bg-opacity-10 rounded-lg">
                    <svg className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-text font-semibold">Location</h4>
                    <p className="text-text-light">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent bg-opacity-10 rounded-full text-accent hover:bg-opacity-20 transition-all">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent bg-opacity-10 rounded-full text-accent hover:bg-opacity-20 transition-all">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent bg-opacity-10 rounded-full text-accent hover:bg-opacity-20 transition-all">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-background-light dark:bg-background-light border border-accent rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-text mb-6">Send a Message</h3>
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-text-light dark:text-text-light">Name</span>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      required 
                      className="mt-1 block w-full rounded border border-accent bg-background dark:bg-background text-text dark:text-text p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                    />
                  </label>
                  <label className="block">
                    <span className="text-text-light dark:text-text-light">Email</span>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      className="mt-1 block w-full rounded border border-accent bg-background dark:bg-background text-text dark:text-text p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                    />
                  </label>
                  <label className="block">
                    <span className="text-text-light dark:text-text-light">Message</span>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      required 
                      rows={5} 
                      className="mt-1 block w-full rounded border border-accent bg-background dark:bg-background text-text dark:text-text p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition" 
                    />
                  </label>
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    type="submit" 
                    className="w-full py-3 px-4 rounded bg-accent text-background font-semibold hover:bg-opacity-90 transition"
                  >
                    Send Message
                  </motion.button>
                  {status && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className={`text-center p-3 rounded ${status === 'Message sent!' ? 'bg-green-500 bg-opacity-10 text-green-500' : 'bg-red-500 bg-opacity-10 text-red-500'}`}
                    >
                      {status}
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
