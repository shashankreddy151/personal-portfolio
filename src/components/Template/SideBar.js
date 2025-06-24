import React from 'react';
import Link from 'next/link';
import ContactIcons from '../Contact/ContactIcons';

// Use a relative path for images in Next.js static export
const imagePath = '/personal-portfolio/images/me.jpg';

const SideBar = () => {
  // Use a state to determine if we're on the client
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <img src={imagePath} alt="" />
        </Link>
        <header>
          <h2>Shashank Reddy</h2>
          <p>
            <a href="mailto:shashankreddy151@outlook.com">shashankkallem@outlook.com</a>
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
            {isClient && !window.location.pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Shashank Reddy Kallem <Link href="/">ShashankReddy.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
