import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import BlogPostDetail from './BlogPostDetail';

const samplePosts = [
  {
    id: 1,
    title: 'Welcome to the Blog',
    author: 'Alice',
    date: '2023-01-01',
    content: '<p>This is the first post!</p>',
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Bob',
    date: '2023-01-05',
    content: '<p>Another post with <strong>bold</strong> text.</p>',
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogPostList posts={samplePosts} />} />
      <Route
        path="/post/:id"
        element={<PostDetailWrapper posts={samplePosts} />}
      />
    </Routes>
  );
}

function PostDetailWrapper({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) return <p>Post not found.</p>;

  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      author={post.author}
      date={post.date}
    />
  );
}

import { useParams } from 'react-router-dom';
export default App;
