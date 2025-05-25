import React from 'react';

const Post = ({ post, featured = false }) => {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2><a href="/single">{post.title}</a></h2>
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
      <a href="/single" className="image featured">
        <img src={post.image} alt="" />
      </a>
      <p>{post.content}</p>
      <footer>
        <ul className="actions">
          <li><a href="/single" className="button large">Continue Reading</a></li>
        </ul>
        <ul className="stats">
          <li><a href="#">{post.category}</a></li>
          <li><a href="#" className="icon solid fa-heart">{post.likes}</a></li>
          <li><a href="#" className="icon solid fa-comment">{post.comments}</a></li>
        </ul>
      </footer>
    </article>
  );
};

export default Post;
