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

import Rnd from "./pages/Rnd";  

import BodyDetox from "./pages/BodyDetox.jsx";

import CollagenSupplement from "./pages/CollagenSupplement.jsx";

import AntiAnemic from "./pages/AntiAnemic";

import AntiDiabetic from "./pages/AntiDiabetic";
import ImmunityBooster from "./pages/ImmunityBooster.jsx";
import HairFallControl from "./pages/HairFallControl.jsx";


import BoneAndJoint from "./pages/BoneAndJoint";

import FemaleVitality from "./pages/FemaleVitality";

import HeightEnhancer from "./pages/HeightEnhancer";

import AntiOxidant from "./pages/AntiOxidant";

import MaleVitality from "./pages/MaleVitality";

import Performance from "./pages/Performance";

import Dendruff from "./pages/Dendruff";

import Extracts from "./pages/Extracts";

import SpecialitySuperfoods from "./pages/SpecialitySuperfoods";

import Cardiology from "./pages/Cardiology";

import WeightLoss from "./pages/WeightLoss";

import MemoryEnhancers from "./pages/MemoryEnhancers";

import EyeHealth from "./pages/EyeHealth.jsx";

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
import { Height } from "@mui/icons-material";


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
      <Route path="/rd" element={<Rnd />} />
      <Route path="/body-detox" element={<BodyDetox />} />
      {/* <Route path="/immunity-booster" element={<ImmunityBooster />} /> */}
      <Route path="/collagen-supplement" element={<CollagenSupplement />} />
      <Route path="/anti-anemic" element={<AntiAnemic />} />
      <Route path="/anti-diabetic" element={<AntiDiabetic />} />
      <Route path="/bone-and-joint" element={<BoneAndJoint />} />
      <Route path="/female-vitality" element={<FemaleVitality />} />
      <Route path="/height-enhancer" element={<HeightEnhancer />} />
      <Route path="/anti-oxidant" element={<AntiOxidant />} />
      <Route path="/male-vitality" element={<MaleVitality />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/dendruff" element={<Dendruff />} />
      <Route path="/extracts" element={<Extracts />} />
      <Route path="/speciality-superfoods" element={<SpecialitySuperfoods />} />
      <Route path="/cardiology" element={<Cardiology />} />
      <Route path="/weightloss" element={<WeightLoss />} />
      <Route path="/memoryenhancer" element={<MemoryEnhancers />} />
      <Route path="/immunity-booster" element={<ImmunityBooster />} />
      <Route path="/hair-fall-control" element={<HairFallControl />} />
      <Route path="/eye-health" element={<EyeHealth />} />

    </Routes>

    {/* Footer Component */}
    <Footer />
  </Router>
);

export default App;
