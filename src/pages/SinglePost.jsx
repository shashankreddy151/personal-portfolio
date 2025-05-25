import React from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../data/posts';

const SinglePost = () => {
  const { id } = useParams();
  const post = getPostById(id) || {
    id: 1,
    title: "Magna sed adipiscing",
    excerpt: "Lorem ipsum dolor amet nullam consequat etiam feugiat",
    content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    date: "2015-11-01",
    dateFormatted: "November 1, 2015",
    author: "Jane Doe",
    image: "/images/pic01.jpg",
    category: "General",
    likes: 28,
    comments: 128
  };

  return (
    <div id="main">
      {/* Post */}
      <article className="post">
        <header>
          <div className="title">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
          <div className="meta">
            <time className="published" dateTime={post.date}>
              {post.dateFormatted}
            </time>
            <a href="#" className="author">
              <span className="name">{post.author}</span>
              <img src="/images/avatar.jpg" alt="" />
            </a>
          </div>
        </header>
        <span className="image featured">
          <img src={post.image} alt="" />
        </span>
        <p>{post.content}</p>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. 
          Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. 
          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida 
          diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.
        </p>
        <footer>
          <ul className="stats">
            <li><a href="#">{post.category}</a></li>
            <li><a href="#" className="icon solid fa-heart">{post.likes}</a></li>
            <li><a href="#" className="icon solid fa-comment">{post.comments}</a></li>
          </ul>
        </footer>
      </article>
    </div>
  );
};

export default SinglePost;
