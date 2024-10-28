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
        Hi, I&apos;m Shashank. I am a graduate of {' '}
        <a href="https://www.njit.edu/">New Jersey Institute of Technology</a> and a passionate
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

    {/* Mini Posts Section */}
    <section className="mini-posts">
      <article className="mini-post">
        <a href="https://github.com/williamdemeo/job-app" className="">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Working" height="250px" />
        </a>
        <header>
          <h3><a href="https://gitlab.com/williamdemeo/job-app">Job Applications</a></h3>
          <span className="published">
            <a href="https://gitlab.com/williamdemeo/job-app/-/blob/master/cv/demeo_cv.pdf">CV</a> &nbsp;
            <a href="https://gitlab.com/williamdemeo/job-app/-/blob/master/pubs/demeo_pubs.pdf">List of Publications</a> <br />
            <a href="https://gitlab.com/williamdemeo/job-app/-/blob/master/research/demeo_brief_research_summary.pdf">Brief Research Summary</a> &nbsp;
            <a href="https://gitlab.com/williamdemeo/job-app/-/blob/master/teaching/demeo_brief-teaching-statement.pdf">Brief Teaching Statement</a> <br />
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
