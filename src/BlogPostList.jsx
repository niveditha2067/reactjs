import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

function BlogPostList({ posts }) {
  return (
    <div className={styles.blogList}>
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogPostList;
