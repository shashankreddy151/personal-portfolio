import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main.jsx';

import Personal from '../components/Stats/Personal.jsx';
import Site from '../components/Stats/Site.jsx';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Shashank Reddy and shashankkallem.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Stats</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
