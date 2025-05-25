import React from 'react';

const Sidebar = () => {
  const miniPosts = [
    {
      id: 1,
      title: "Vitae sed condimentum",
      date: "October 20, 2015",
      image: "/images/pic04.jpg",
      author: "Jane Doe"
    },
    {
      id: 2,
      title: "Rutrum neque accumsan",
      date: "October 19, 2015",
      image: "/images/pic05.jpg",
      author: "Jane Doe"
    },
    {
      id: 3,
      title: "Odio congue mattis",
      date: "October 18, 2015",
      image: "/images/pic06.jpg",
      author: "Jane Doe"
    },
    {
      id: 4,
      title: "Enim nisl veroeros",
      date: "October 17, 2015",
      image: "/images/pic07.jpg",
      author: "Jane Doe"
    }
  ];

  const sidebarPosts = [
    {
      id: 1,
      title: "Lorem ipsum fermentum ut nisl vitae",
      date: "October 20, 2015",
      image: "/images/pic08.jpg"
    },
    {
      id: 2,
      title: "Convallis maximus nisl mattis nunc id lorem",
      date: "October 15, 2015",
      image: "/images/pic09.jpg"
    },
    {
      id: 3,
      title: "Euismod amet placerat vivamus porttitor",
      date: "October 10, 2015",
      image: "/images/pic10.jpg"
    },
    {
      id: 4,
      title: "Magna enim accumsan tortor cursus ultricies",
      date: "October 8, 2015",
      image: "/images/pic11.jpg"
    },
    {
      id: 5,
      title: "Congue ullam corper lorem ipsum dolor",
      date: "October 7, 2015",
      image: "/images/pic12.jpg"
    }
  ];

  return (
    <section id="sidebar">
      {/* Intro */}
      <section id="intro">
        <a href="#" className="logo">
          <img src="/images/logo.jpg" alt="" />
        </a>
        <header>
          <h2>Future Imperfect</h2>
          <p>
            Another fine responsive site template by{' '}
            <a href="http://html5up.net">HTML5 UP</a>
          </p>
        </header>
      </section>

      {/* Mini Posts */}
      <section>
        <div className="mini-posts">
          {miniPosts.map(post => (
            <article key={post.id} className="mini-post">
              <header>
                <h3><a href="/single">{post.title}</a></h3>
                <time className="published" dateTime={post.date}>
                  {post.date}
                </time>
                <a href="#" className="author">
                  <img src="/images/avatar.jpg" alt="" />
                </a>
              </header>
              <a href="/single" className="image">
                <img src={post.image} alt="" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Posts List */}
      <section>
        <ul className="posts">
          {sidebarPosts.map(post => (
            <li key={post.id}>
              <article>
                <header>
                  <h3><a href="/single">{post.title}</a></h3>
                  <time className="published" dateTime={post.date}>
                    {post.date}
                  </time>
                </header>
                <a href="/single" className="image">
                  <img src={post.image} alt="" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section className="blurb">
        <h2>About</h2>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. 
          Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor 
          magna enim, ac accumsan tortor cursus at phasellus sed ultricies.
        </p>
        <ul className="actions">
          <li><a href="#" className="button">Learn More</a></li>
        </ul>
      </section>

      {/* Footer */}
      <section id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-rss">
              <span className="label">RSS</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. 
          Images: <a href="http://unsplash.com">Unsplash</a>.
        </p>
      </section>
    </section>
  );
};

export default Sidebar;
