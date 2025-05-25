import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import './assets/sass/main.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<SinglePost />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
