import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome!',
      content: 'This is the first post.',
      author: 'Admin',
      date: '2023-06-01',
    },
  ]);

  const navigate = useNavigate();

  const handleCreate = (newPost) => {
    const id = posts.length + 1;
    setPosts([...posts, { ...newPost, id }]);
    navigate('/');
  };

  const handleUpdate = (id, updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...updatedPost, id } : post))
    );
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<BlogPostList posts={posts} />} />
      <Route path="/create" element={<BlogPostForm onSubmit={handleCreate} />} />
      <Route
        path="/edit/:id"
        element={<EditPost posts={posts} onUpdate={handleUpdate} />}
      />
    </Routes>
  );
}

import { useParams } from 'react-router-dom';
const EditPost = ({ posts, onUpdate }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) return <p>Post not found.</p>;

  return (
    <BlogPostForm
      post={post}
      onSubmit={(updatedPost) => onUpdate(post.id, updatedPost)}
    />
  );
};

export default App;
