import React from 'react'
import './Five.css'; // Importing the CSS file

function Five() {
  return (
    <div className="home" data-scroll-animation="true" data-spy="scroll" data-target="#main-navbar">
    {/* Preloader */}
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" id="object_four"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_one"></div>
        </div>
      </div>
    </div>

    {/* Header */}
    <header className="row" id="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#header"><img src="images/logo.png" alt="" /></a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <a href="#product-choose" className="btn btn-warning pull-right hidden-sm hidden-xs">pre-order now</a>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#product">Product</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="index.html">Pre-order (Email)</a></li>
                  <li><a href="index_email.html">Email Signup (Mailchimp)</a></li>
                  <li><a href="index_buy_paypal.html">Buy Now (PayPal)</a></li>
                  <li><a href="index_kickstarter.html">Kickstarter Campaign</a></li>
                  <li><a href="index_indegogo.html">Indegogo Campaign</a></li>
                  <li><a href="index_boxed.html">Boxed Version</a></li>
                  <li><a href="index_rtl.html">RTL Version</a></li>
                  <li><a href="index_video.html">Video Background</a></li>
                  <li className="divider"></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="shortcodes.html">Shortcodes</a></li>
                </ul>
              </li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="top-banner row m0 text-center fadeInOnLoad">
        <div className="container">
          <h2>The future of tech is here</h2>
          <p>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital.</p>
          <a href="https://vimeo.com/142705963" className="btn btn-primary btn-lg video">Play <img src="images/play-btn-icon.png" alt="" /> Video</a>
          <br />
          <a href="#product-choose" className="btn btn-warning btn-lg visible-sm-inline-block visible-xs-inline-block">pre-order now</a>
          <div className="row apple-watch">
            <img src="images/apple-watch.png" alt="" className="watch_img" />
          </div>
        </div>
      </div>
    </header>

    {/* Other Sections (The Product, How it Works, etc.) */}
    {/* Add your remaining sections here following the same JSX Here is the rest of the JSX code:

```javascript
    {/* The Product */}
    <section className="row the-product" id="product">
      <div className="container">
        <div className="row section-header wow fadeInUp">
          <h2>the product</h2>
          <p>Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below.</p>
        </div>
        <div className="row apple-watch-note-feature text-center">
          <img src="images/apple-watch-2.png" alt="" />
          {/* Feature Noted top right */}
          <div className="feature-note right top wow fadeInRight">
            <div className="indicator">
              <div className="plus-icon">
                <span className="plus">+</span>
              </div>
            </div>
            <div className="feature-name">
              metalic strap
            </div>
          </div>
          {/* Feature Noted top left */}
          <div className="feature-note left top wow fadeInLeft">
            <div className="indicator">
              <div className="plus-icon">
                <span className="plus">+</span>
              </div>
            </div>
            <div className="feature-name">
              Gps tracker
            </div>
          </div>
          {/* Feature Noted bottom right */}
          <div className="feature-note right bottom wow fadeInUp">
            <div className="indicator">
              <div className="plus-icon">
                <span className="plus">+</span>
              </div>
            </div>
            <div className="feature-name">
              Bluetooth 4.2
            </div>
          </div>
          {/* Feature Noted bottom left */}
          <div className="feature-note left bottom wow fadeInLeft">
            <div className="indicator">
              <div className="plus-icon">
                <span className="plus">+</span>
              </div>
            </div>
            <div className="feature-name">
              water resistant
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section className="row how-it-works">
      <div className="container">
        <div className="row section-header v2 wow fadeInUp">
          <h2>how it works</h2>
          <p>Everybody loves tech gadgets, But our’s is different. Here is how it works. Its should be simple. Add how easy is to install your product</p>
        </div>
        <div className="row work-processes">
          {/* Work Process */}
          <div className="col-sm-4 work-process wow fadeIn">
            <div className="row m0 process-icon">
              <img src="images/desktop.png" alt="" />
            </div>
            <h3>Connect Device</h3>
            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
          </div>
          {/* Work Process */}
          <div className="col-sm-4 work-process wow fadeIn" data-wow-delay="0.5s">
            <div className="row m0 process-icon">
              <img src="images/toggles.png" alt="" />
            </div>
            <h3>Configure it</h3>
            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
          </div>
          {/* Work Process */}
          <div className="col-sm-4 work-process wow fadeIn" data-wow-delay="1s">
            <div className="row m0 process-icon">
              <img src="images/trophy.png" alt="" />
            </div>
            <h3>Yay! Done.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Other Sections (The Benefits, Left Right Content, etc.) */}
    {/* Add your remaining sections here following the same JSX structure */}

    {/* Footer */}
    <footer className="row">
      <div className="container">
        <div className="row m0 social-links">
          <ul className="nav">
            <li className="wow fadeInUp"><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.1s"><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.2s"><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.3s"><a href="#"><i className="fa fa-youtube"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.4s"><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><i className="fa fa-pinterest"></i></a></li>
          </ul>
        </div>
        <div className="row m0 menu-rights">
          <ul className="nav footer-menu">
            <li><a href="about.html">About</a></li>
            <li><a href="terms-of-use.html">Terms of Use</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="#">Mobile App</a></li>
            <li><a href="presskit.zip">PressKit</a></li>
          </ul>
          <p>Copyright 2016. Proland.
            <br className="small-divide" /> All rights reserved</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Five