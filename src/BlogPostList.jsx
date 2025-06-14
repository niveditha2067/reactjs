import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostList({ posts, onDelete }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Posts</h2>
      <Link to="/create">
        <button style={{ marginBottom: '20px' }}>+ New Post</button>
      </Link>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <h3>{post.title}</h3>
          <p>By {post.author} on {post.date}</p>
          <Link to={`/edit/${post.id}`}>
            <button>Edit</button>
          </Link>{' '}
          <button
            style={{
              backgroundColor: '#ff0000',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
            onClick={() => onDelete(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
