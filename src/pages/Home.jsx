import React from 'react';
import Post from '../components/Post';
import { posts } from '../data/posts';

const Home = () => {
  return (
    <div id="main">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      
      {/* Pagination */}
      <ul className="actions pagination">
        <li><a href="" className="disabled button large previous">Previous Page</a></li>
        <li><a href="#" className="button large next">Next Page</a></li>
      </ul>
    </div>
  );
};

export default Home;
