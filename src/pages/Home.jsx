// src/pages/Home.jsx
import React from 'react';
import BlogSection from '../components/BlogSection';
import SwiperComponent from '../components/SwiperComponent';
import PopularSection from '../components/PopularSection';
import OurProducts from '../components/OurProducts';
import Reels from '../components/Reels';
import Hero from '../components/Hero';
import Category from '../components/Category';
import AboveFooter from '../components/AboveFooter';
import BelowReel from '../components/BelowReel';
import StyleFinder from '../components/StyleFinder';
import Trending from '../components/Trending';
import Deals from '../components/Deals';
import ShopLook from '../components/ShopLook';
// import HeroBanner from '../components/HeroBanner';
import WideRange from '../components/WideRange'
// import OverviewSection from '../components/OverviewSection';
import ProductCarousel from '../components/ProductCarousel';
import JustIn from '../components/JustIn';
import '../assets/css/ionicons.min.css';
import '../assets/css/simple-line-icons.css';
import '../assets/css/plugins/jquery-ui.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/plugins/plugins.css';
import '../assets/css/style.min.css';

const Home = () => (
  <div className="home">
    <SwiperComponent />
    {/* <Category />
    <Reels /> */}
    <BelowReel />
    
    <StyleFinder />
    <Trending />
    <Deals />
    <ShopLook />
    {/* <HeroBanner /> */}
    <WideRange />
    {/* <OverviewSection /> */}
    <ProductCarousel />
    <JustIn />
   

    

    {/* Popular Products Section */}
    {/* <section className="product-tab bg-white pt-30 pb-10">
  <div className="container">
    <div className="section-title text-center">
      <h2 
        className="title pb-3 mb-3"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "13px 0px 11px",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "normal",
          fontFamily: "Trirong, serif",
          letterSpacing: "1.1px",
          color: "rgb(0, 0, 0)",
          textAlign: "center",
        }}
      >
        Popular Products
      </h2>
      <p 
        className="text"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "13px 0px 11px",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "normal",
          fontFamily: "Trirong, serif",
          letterSpacing: "1.1px",
          color: "rgb(0, 0, 0)",
          textAlign: "center",
        }}
      >
        Enhance your everyday with products crafted for exceptional living
      </p>
    </div>
    <ProductCarousel />
  </div>
</section> */}


    {/* Hero and Blog Sections */}
    {/* <Hero />
    <BlogSection />
    <AboveFooter /> */}

    {/* Popular Products Section */}
    <AboveFooter /> 
  </div>
);

export default Home;
