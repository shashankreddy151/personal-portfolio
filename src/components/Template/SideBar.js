import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shashank Reddy</h2>
        <p>
          <a href="shashankreddy151@outlook.com">shashankreddy151@outlook.com</a>
        </p>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shashank. I am a graduate of {' '}
        <a href="https://www.njit.edu/">NJIT</a> and a passionate
        Machine Learning and Deep Learning Engineer based in New York City.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Shashank Reddy;Kallem <Link to="/">ShashankReddy.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
