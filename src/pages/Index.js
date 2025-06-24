import React from 'react';
import Link from 'next/link';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Shashank Reddy's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <div className="content-wrapper">
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application
              written with modern Javascript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link href="/about">about me</Link>, or you can check out my{' '}
          <Link href="/resume">resume</Link>, <Link href="/projects">projects</Link>,{' '}
          view <Link href="/stats">site statistics</Link>, or{' '}
          <Link href="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/shashankreddy151/personal-portfolio">here</a>.
        </p>
      </article>
    </div>
  </Main>
);

export default Index;
