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
          <a href="mailto:shashankreddy151@outlook.com">shashankreddy151@outlook.com</a>
        </p>
      </header>
    </section>
    
    <section className="blurb">
      <h2>About the author</h2>
    <p>
      Shashank Reddy is a graduate with a Master’s degree in Data Science from the{' '}
      <a href="https://computing.njit.edu/">Ying Wu College of Computing</a> at the{' '}
      <a href="https://www.njit.edu/">New Jersey Institute of Technology</a>
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

    {/* Mini Posts Section */}
    <section className="mini-posts">
      <article className="mini-post">
        <a href="" className="">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Working" height="250px" />
        </a>
        <header>
          <h3><a href="">Job Applications</a></h3>
          <span className="published">
            <a href="">Resume</a> &nbsp;
            <a href="">Projects</a> <br />
            <a href="">Certifications</a> &nbsp;
          </span>
        </header>
      </article>
    </section>
    {/* End of Mini Posts Section */}

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Shashank Reddy Kallem <Link to="/">ShashankReddy.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
