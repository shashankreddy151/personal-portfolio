import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/personal-portfolio/data/about.md')
      .then((r) => r.text())
      .then(setMarkdown);
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
              <Link href="/about">About Me</Link>
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
