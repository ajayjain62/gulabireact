import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Header1 from "./components/Header1";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Compare from "./pages/Compare";
import Gastro from "./components/Gastro";
import Checkout from "./pages/Checkout";
import CSR from "./pages/CSR";
import SkinGlow from "./components/SkinGlow";
import Career from "./pages/Career";

// Import CSS files
import "./assets/css/ionicons.min.css";
import "./assets/css/simple-line-icons.css";
import "./assets/css/plugins/jquery-ui.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/plugins/plugins.css";
import "./assets/css/style.min.css";

import "./assets/css/lib/bootstrap.min.css";
import "./assets/css/plugins/lineicons.css";
import "./assets/css/vendor/magnific-popup.css";
import "./assets/css/vendor/jquery.bootstrap-touchspin.min.css";
import "./assets/css/vendor/bootstrap-select.min.css";
import "./assets/css/vendor/owl.carousel.css";
import "./assets/css/plugins/animate.css";
import "./assets/css/plugins/preloader.css";
import "./assets/css/themes/blue-orange.css";
import "./assets/css/plugins/font-awesome.min.css";


// Package CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "react-owl-carousel2/lib/styles.css";
import "magnific-popup/dist/magnific-popup.css";

const App = () => (
  <Router>
    {/* Header Components */}
    <Header />
    <Header1 />
    <Navbar />

    {/* Main Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/csr" element={<CSR />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/gastro" element={<Gastro />} />
      <Route path="/skin-glow" element={<SkinGlow />} />
      <Route path="/career" element={<Career />} />
    </Routes>

    {/* Footer Component */}
    <Footer />
  </Router>
);

export default App;
