import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostList({ posts }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Posts</h2>
      <Link to="/create">
        <button style={{ marginBottom: '20px' }}>+ New Post</button>
      </Link>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <p>By {post.author} on {post.date}</p>
          <Link to={`/edit/${post.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
