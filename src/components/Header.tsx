'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

// SVG icons using inline SVG for better compatibility
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
)

export default function Header() {
  const [dark, setDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false);
  const router = useRouter()

  // on mount, read user pref
  useEffect(() => {
    setMounted(true);
    // Always sync with localStorage and system preference
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDark(true);
    else if (stored === 'light') setDark(false);
    else setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/stats', label: 'Stats' },
    { href: '/interests', label: 'Interests' },
  ]

  const isActive = (path: string) => router.pathname === path

  if (!mounted) return null;

  return (
    <header className="py-6 px-6 sm:px-12 lg:px-24 bg-background dark:bg-background text-text dark:text-text border-b border-accent border-opacity-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent">
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            My Portfolio
          </motion.span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium hover:text-accent transition-colors px-2 py-1 rounded-lg ${
                isActive(link.href) ? 'text-accent bg-accent bg-opacity-10' : 'text-text-light dark:text-text-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full bg-accent bg-opacity-10 text-accent focus:outline-none hover:bg-opacity-20 transition-colors ml-4"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-accent bg-opacity-10 text-accent focus:outline-none"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded bg-accent bg-opacity-10 text-accent focus:outline-none"
          >
            <MenuIcon />
          </motion.button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden pt-4 pb-2 px-6"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 px-2 rounded-lg ${
                  isActive(link.href) ? 'text-accent bg-accent bg-opacity-10' : 'text-text-light dark:text-text-light'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
