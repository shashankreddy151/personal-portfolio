import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main.jsx'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Index = lazy(() => import('./pages/Index.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Resume = lazy(() => import('./pages/Resume.jsx'));
const Stats = lazy(() => import('./pages/Stats.jsx'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
