import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main.jsx';
import EmailLink from '../components/Contact/EmailLink.jsx';
import ContactIcons from '../components/Contact/ContactIcons.jsx';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Shashank Reddy via email @ hi@shashank.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
