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
          <a href="mailto:shashankkallem@outlook.com">shashankkallem@outlook.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About the Author</h2>
      <p>
        Shashank Reddy is a graduate with a Master’s degree in Data Science from the
        <a href="https://computing.njit.edu/"> Ying Wu College of Computing</a> at the
        <a href="https://www.njit.edu/"> New Jersey Institute of Technology</a>.
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
        &copy; Shashank Reddy <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
