import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './BlogPostList';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

const BlogPostPage = ({ title }) => (
  <div style={{ padding: '2rem' }}>
    <h1>{title}</h1>
    <p>This is a placeholder for the full blog post content.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '2rem' }}>
              <h1>Blog Posts</h1>
              <BlogPostList posts={samplePosts} />
            </div>
          }
        />
        {samplePosts.map((post) => (
          <Route
            key={post.id}
            path={post.url}
            element={<BlogPostPage title={post.title} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
