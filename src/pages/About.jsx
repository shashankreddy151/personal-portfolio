import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main.jsx';

const About = () => {  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/about.md')
      .then((response) => response.text())
      .then(setMarkdown)
      .catch((error) => {
        console.error('Error loading about.md:', error);
        setMarkdown('# About\n\nContent not available.');
      });
  }, []);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Shashank Reddy">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;
