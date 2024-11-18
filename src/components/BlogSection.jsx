// src/components/BlogSection.jsx
import React from 'react';
import './BlogSection.css';

const blogs = [
  {
    title: "The Latest Trends in Web Design",
    description: "Explore the most recent web design trends that will shape the future. From vibrant color schemes to interactive animations, stay updated on what’s popular.",
    imageUrl: "https://via.placeholder.com/300",
    date: "October 30, 2024",
  },
  {
    title: "React & Vite: A Developer’s Dream Stack",
    description: "Understand why developers are choosing Vite over Webpack and why React remains a top choice for modern web development.",
    imageUrl: "https://via.placeholder.com/300",
    date: "November 2, 2024",
  },
  {
    title: "Boosting Performance with Lazy Loading",
    description: "Learn how lazy loading techniques can improve your website’s performance, especially for resource-heavy applications.",
    imageUrl: "https://via.placeholder.com/300",
    date: "November 4, 2024",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Latest Articles</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-date">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
