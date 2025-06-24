import React, { Suspense, lazy } from 'react';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <Suspense fallback={<Main />}>
    {/* This file is legacy and not used in Next.js routing. */}
    <Main />
  </Suspense>
);

export default App;
