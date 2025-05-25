import './App.css';
import './global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FractalAnimation from './components/FractalAnimation';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <FractalAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
