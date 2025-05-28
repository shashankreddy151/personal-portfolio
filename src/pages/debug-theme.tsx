import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DebugPage() {
  const [theme, setTheme] = useState('');
  const [htmlClasses, setHtmlClasses] = useState([]);
  
  useEffect(() => {
    // Update on mount and every 500ms to see changes
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        setTheme(localStorage.getItem('theme') || 'not set');
        setHtmlClasses([...document.documentElement.classList]);
      }
    };
    
    checkTheme();
    const interval = setInterval(checkTheme, 500);
    return () => clearInterval(interval);
  }, []);
  
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    // Update state
    setTheme(localStorage.getItem('theme'));
    setHtmlClasses([...document.documentElement.classList]);
  };
  
  const setThemeExplicitly = (mode) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // Update state
    setTheme(localStorage.getItem('theme'));
    setHtmlClasses([...document.documentElement.classList]);
  };
  
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-background dark:bg-background-dark px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-text dark:text-text-dark">Theme Debug</h1>
          
          <div className="p-6 rounded-lg bg-background-light dark:bg-background-dark-light">
            <h2 className="text-2xl font-semibold text-text dark:text-text-dark mb-4">Current State</h2>
            <div className="space-y-2">
              <p className="text-text-light dark:text-text-dark-light">
                <strong>Theme in localStorage:</strong> {theme}
              </p>
              <p className="text-text-light dark:text-text-dark-light">
                <strong>HTML Classes:</strong> {htmlClasses.join(', ') || 'none'}
              </p>
              <p className="text-text-light dark:text-text-dark-light">
                <strong>Current Mode:</strong> {htmlClasses.includes('dark') ? 'Dark Mode' : 'Light Mode'}
              </p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-background-light dark:bg-background-dark-light">
            <h2 className="text-2xl font-semibold text-text dark:text-text-dark mb-4">Manual Controls</h2>
            <div className="space-y-4">
              <button 
                onClick={toggleTheme}
                className="px-4 py-2 rounded bg-accent dark:bg-accent-dark text-white"
              >
                Toggle Theme
              </button>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => setThemeExplicitly('light')}
                  className="px-4 py-2 rounded bg-blue-500 text-white"
                >
                  Force Light Mode
                </button>
                
                <button 
                  onClick={() => setThemeExplicitly('dark')}
                  className="px-4 py-2 rounded bg-purple-500 text-white"
                >
                  Force Dark Mode
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-background-light dark:bg-background-dark-light">
            <h2 className="text-2xl font-semibold text-text dark:text-text-dark mb-4">Color Samples</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded bg-background dark:bg-background-dark">
                Background Default
              </div>
              <div className="p-4 rounded bg-background-light dark:bg-background-dark-light">
                Background Light
              </div>
              <div className="p-4 rounded bg-accent dark:bg-accent-dark text-white">
                Accent
              </div>
              <div className="p-4 rounded bg-white dark:bg-black text-text dark:text-text-dark">
                Contrast
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
