// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Header1 from './components/Header1';
import shop from './pages/shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Compare from './pages/Compare';
import Checkout from './pages/checkout';
import { Button } from '@material-tailwind/react';

// Import CSS files
import './assets/css/ionicons.min.css';
import './assets/css/simple-line-icons.css';
import './assets/css/plugins/jquery-ui.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/plugins/plugins.css';
import './assets/css/style.min.css';

const App = () => (
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Header />
    <Header1 />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-page" element={<Product />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
    <Footer />
  </Router>
);

export default App;
