import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostItem.module.css';

function BlogPostItem({ post }) {
  return (
    <div className={styles.postItem}>
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p>
        By {post.author} - {new Date(post.date).toLocaleDateString()}
      </p>
    </div>
  );
}

export default BlogPostItem;
