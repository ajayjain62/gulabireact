import React from "react";

function Five() {
  return (
    <div>
      <>
        
        <header className="row" id="header">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#header">
                  <img src="images/logo.png" alt="" />
                </a>
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#main-navbar"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <a
                  href="#product-choose"
                  className="btn btn-warning pull-right hidden-sm hidden-xs"
                >
                  pre-order now
                </a>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#product">Product</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#reviews">Reviews</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html">Pre-order (Email)</a>
                      </li>
                      <li>
                        <a href="index_email.html">Email Signup (Mailchimp)</a>
                      </li>
                      <li>
                        <a href="index_buy_paypal.html">Buy Now (PayPal)</a>
                      </li>
                      <li>
                        <a href="index_kickstarter.html">
                          Kickstarter Campaign
                        </a>
                      </li>
                      <li>
                        <a href="index_indegogo.html">Indegogo Campaign</a>
                      </li>
                      <li>
                        <a href="index_boxed.html">Boxed Version</a>
                      </li>
                      <li>
                        <a href="index_rtl.html">RTL Version</a>
                      </li>
                      <li>
                        <a href="index_video.html">Video Background</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="shortcodes.html">Shortcodes</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="top-banner row m0 text-center fadeInOnLoad">
            <div className="container">
              <h2>The future of tech is here</h2>
              <p>
                Holisticly incentivize revolutionary collaboration and idea
                sharing before cost effective users. Actual focused services
                before highly efficient human capital.
              </p>
              <a
                href="https://vimeo.com/142705963"
                className="btn btn-primary btn-lg video"
              >
                Play <img src="images/play-btn-icon.png" alt="" /> Video
              </a>
              <br />
              <a
                href="#product-choose"
                className="btn btn-warning btn-lg visible-sm-inline-block visible-xs-inline-block"
              >
                pre-order now
              </a>
              <div className="row apple-watch">
                <img
                  src="images/apple-watch.png"
                  alt=""
                  className="watch_img"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="row the-product" id="product">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>the product</h2>
              <p>
                Introduce the product here. A small description about what it is
                and how it helps the user. You can also add some photos below.
              </p>
            </div>
            <div className="row apple-watch-note-feature text-center">
              <img src="images/apple-watch-2.png" alt="" />
              <div className="feature-note right top wow fadeInRight">
                <div className="indicator">
                  <div className="plus-icon">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="feature-name">metalic strap</div>
              </div>
              <div className="feature-note left top wow fadeInLeft">
                <div className="indicator">
                  <div className="plus-icon">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="feature-name">Gps tracker</div>
              </div>
              <div className="feature-note right bottom wow fadeInUp">
                <div className="indicator">
                  <div className="plus-icon">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="feature-name">Bluetooth 4.2</div>
              </div>
              <div className="feature-note left bottom wow fadeInLeft">
                <div className="indicator">
                  <div className="plus-icon">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="feature-name">water resistant</div>
              </div>
            </div>
          </div>
        </section>
        <section className="row how-it-works">
          <div className="container">
            <div className="row section-header v2 wow fadeInUp">
              <h2>how it works</h2>
              <p>
                Everybody loves tech gadgets, But our’s is different. Here is
                how it works. Its should be simple. Add how easy is to install
                your product
              </p>
            </div>
            <div className="row work-processes">
              <div className="col-sm-4 work-process wow fadeIn">
                <div className="row m0 process-icon">
                  <img src="images/desktop.png" alt="" />
                </div>
                <h3>Connect Device</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor
                  incididunt ut labore eta rehenderit in voluptate velit.
                </p>
              </div>
              <div
                className="col-sm-4 work-process wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="row m0 process-icon">
                  <img src="images/toggles.png" alt="" />
                </div>
                <h3>Configure it</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor
                  incididunt ut labore eta rehenderit in voluptate velit.
                </p>
              </div>
              <div
                className="col-sm-4 work-process wow fadeIn"
                data-wow-delay="1s"
              >
                <div className="row m0 process-icon">
                  <img src="images/trophy.png" alt="" />
                </div>
                <h3>Yay! Done.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor
                  incididunt ut labore eta rehenderit in voluptate velit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="row the-benefits" id="features">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>The Benefits</h2>
              <p>
                List out your product’s benefit here. A small description about
                what it is and how it helps the user. You can also add some
                icons.
              </p>
            </div>
            <div className="row benefit-notes">
              <div className="col-sm-6 col-md-4 benefit wow fadeInUp">
                <div className="media">
                  <div className="media-left">
                    <span>
                      <i className="li_location"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>GPS Tracking</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-4 benefit wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="media">
                  <div className="media-left">
                    <span>
                      <i className="li_heart"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Heartbeat Analysis</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-4 benefit wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="media">
                  <div className="media-left">
                    <span>
                      <i className="li_lock"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Security first</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-4 benefit wow fadeInUp"
                data-wow-delay="0.9s"
              >
                <div className="media">
                  <div className="media-left">
                    <span>
                      <i className="li_bulb"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Innovative idea</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-4 benefit wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="media">
                  <div className="media-left">
                    <span>
                      <i className="li_banknote"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Save your bills</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-4 benefit wow fadeInUp"
                data-wow-delay="1.5s"
              >
                <div className="media">
                  <div className="media-left">
                    <span>
                      <i className="li_lab"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Proven technology</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row left-right-contents">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-md-push-4 text-center wow fadeIn">
                <img src="images/apple-watch-3.png" alt="" />
              </div>
              <div className="col-md-4 col-sm-6 col-md-pull-4 left-content">
                <div className="media wow fadeInUp">
                  <div className="media-left">
                    <span>
                      <i className="li_key"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Fast and secure</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="media wow fadeInUp" data-wow-delay="0.3s">
                  <div className="media-left">
                    <span>
                      <i className="li_megaphone"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Voice Assistant</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="media wow fadeInUp" data-wow-delay="0.6s">
                  <div className="media-left">
                    <span>
                      <i className="li_diamond"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Apps you love</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 right-content">
                <div className="media wow fadeInUp">
                  <div className="media-left">
                    <span>
                      <i className="li_like"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Stay in touch</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="media wow fadeInUp" data-wow-delay="0.3s">
                  <div className="media-left">
                    <span>
                      <i className="li_user"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Designed for you</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="media wow fadeInUp" data-wow-delay="0.6s">
                  <div className="media-left">
                    <span>
                      <i className="li_clock"></i>
                    </span>
                  </div>
                  <div className="media-body">
                    <h4>Precise timepiece</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row our-collection">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>Our Collection</h2>
              <p>
                You are unique. You have unique style and you need a unique
                watch for you. Choose from our collection of watches.
              </p>
            </div>
            <div className="row collections">
              <div className="col-sm-6 col-md-3 item wow fadeIn">
                <div className="row m0 featured-img">
                  <img src="images/collection-1.jpg" alt="" />
                </div>
                <h4 className="title">Watch Limited Edition</h4>
                <h5 className="category">Stainless steel case</h5>
                <h4 className="price">$399</h4>
                <a href="#product-choose" className="btn">
                  CHOOSE
                </a>
              </div>
              <div
                className="col-sm-6 col-md-3 item wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="row m0 featured-img">
                  <img src="images/collection-2.jpg" alt="" />
                </div>
                <h4 className="title">Watch Bracelet</h4>
                <h5 className="category">White strap &amp; Stainless steel</h5>
                <h4 className="price">$299</h4>
                <a href="#product-choose" className="btn">
                  CHOOSE
                </a>
              </div>
              <div
                className="col-sm-6 col-md-3 item wow fadeIn"
                data-wow-delay="1s"
              >
                <div className="row m0 featured-img">
                  <img src="images/collection-3.jpg" alt="" />
                </div>
                <h4 className="title">Watch Original</h4>
                <h5 className="category">The FirstWatch ever released</h5>
                <h4 className="price">$249</h4>
                <a href="#product-choose" className="btn">
                  CHOOSE
                </a>
              </div>
              <div
                className="col-sm-6 col-md-3 item wow fadeIn"
                data-wow-delay="1.5s"
              >
                <div className="row m0 featured-img">
                  <img src="images/collection-4.jpg" alt="" />
                </div>
                <h4 className="title">Watch Soprts Edition</h4>
                <h5 className="category">Water proof and Fitness tracking</h5>
                <h4 className="price">$399</h4>
                <a href="#product-choose" className="btn">
                  CHOOSE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="row the-watch">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-offset-1 text-center the-watch-img wow zoomIn">
                <img
                  src="images/the-watch.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-md-6 the-watch-features">
                <div className="row section-header v3 wow fadeIn">
                  <h2>The Watch</h2>
                  <p>
                    With an image in the side of this conetent, you can use this
                    section to write about some cool thing about your product or
                    its features.
                  </p>
                </div>
                <ul className="nav">
                  <li className="wow fadeIn" data-wow-delay="0.2s">
                    Compatible with all devices
                  </li>
                  <li className="wow fadeIn" data-wow-delay="0.4s">
                    Android and iOS Support
                  </li>
                  <li className="wow fadeIn" data-wow-delay="0.6s">
                    Activity &amp; Health Tracker
                  </li>
                  <li className="wow fadeIn" data-wow-delay="0.8s">
                    Read &amp; reply to messages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="row split-columns">
          <div className="row m0 split-column wow fadeIn">
            <div className="col-sm-6 image text-right">
              <img src="images/split-1.jpg" alt="" />
            </div>
            <div className="col-sm-6 texts">
              <div className="texts-inner row m0">
                <h2>Every Apps you wanted</h2>
                <p>
                  You won’t just send and receive messages, calls, and mail more
                  easily and efficiently. You’ll express yourself in unique,
                  fun, and more personal ways. Communicating with Watch is
                  discreet, sophisticated, and nuanced. a whole new way to
                  connect with others.
                </p>
              </div>
            </div>
          </div>
          <div className="row m0 split-column wow fadeIn">
            <div className="col-sm-6 col-sm-push-6 image">
              <img src="images/split-2.jpg" alt="" />
            </div>
            <div className="col-sm-6 col-sm-pull-6 texts">
              <div className="texts-inner row m0">
                <h2>Health and Fitness</h2>
                <p>
                  Fitness isn’t just about running, biking, or hitting the gym.
                  It’s also about being active throughout the day. Watch
                  measures all the ways you move, such as walking the dog,
                  taking the stairs, or playing with your kids. It even keeps
                  track of when you stand up.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="row reviews" id="reviews">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>Reviews</h2>
              <p>
                Don’t take our word,. See what our experts says about the watch.
                We have got over 1000s of positive reviews.
              </p>
            </div>
            <div className="row">
              <div className="review col-sm-4 wow fadeIn">
                <img src="images/quote.png" alt="" className="review-sign" />
                <p>
                  The Watch is the nicest smartwatch available, but it s more
                  status symbol than wearable revolutionary. Most of the Watch s
                  features are great.
                </p>
                <img src="images/reviewer1.png" alt="" className="reviewer" />
              </div>
              <div className="review col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                <img src="images/quote.png" alt="" className="review-sign" />
                <p>
                  Watch is the most ambitious, well constructed smartwatch ever
                  seen, but first-gen shortfalls make it feel more like a
                  fashionable toy than a necessary tool.
                </p>
                <img src="images/reviewer2.png" alt="" className="reviewer" />
              </div>
              <div className="review col-sm-4 wow fadeIn" data-wow-delay="0.6s">
                <img src="images/quote.png" alt="" className="review-sign" />
                <p>
                  Watch is the best smartwatch we’ve used, and the first that
                  feels friendly and has character. Watch OS 2.0 adds needed app
                  and Siri abilities.
                </p>
                <img src="images/reviewer3.png" alt="" className="reviewer" />
              </div>
            </div>
          </div>
        </section>
        <section className="row featured-on">
          <div className="container">
            <div className="row">
              <h3>As featured on</h3>
              <ul className="nav nav-justified">
                <li className="wow fadeInUp" data-wow-delay="0.2s">
                  <img src="images/featured1.png" alt="" />
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.4s">
                  <img src="images/featured2.png" alt="" />
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.6s">
                  <img src="images/featured3.png" alt="" />
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.8s">
                  <img src="images/featured4.png" alt="" />
                </li>
                <li className="wow fadeInUp" data-wow-delay="1s">
                  <img src="images/featured5.png" alt="" />
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.2s">
                  <img src="images/featured6.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="row faqs">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>faq</h2>
              <p>
                Got questions? We’ve got answers. If you have some other
                questions, feel free to send us an email to{" "}
                <a href="#">hello@product.com</a>
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 faq wow fadeInUp">
                <h4>What is Watch? How it works?</h4>
                <p>
                  Watch took center stage at this year s Product Show with a
                  preview of watch OS 2. The next generation of Watch software
                  is packed with features that just might turn the device from a
                  nice-to-have into a must-have. If you already own an Apple
                  Watch, you ll have to live with the old software until fall.
                  You’ll love it at the first use.
                </p>
              </div>
              <div className="col-sm-6 faq wow fadeInUp">
                <h4>How the watch is made?</h4>
                <p>
                  Watch has an anodized aluminum case (which is lighter than
                  stainless steel) in silver or space gray, and the face is
                  Ion-X glass, which also designed to be hard and rugged (as
                  well as a little bit lighter) than the sapphire. It’s
                  definitely the lightest of the three Apple Watch editions,
                  making it an ideal exercise companion.
                </p>
              </div>
              <div className="col-sm-6 faq wow fadeInUp" data-wow-delay="0.3s">
                <h4>Can I swap out the watch band?</h4>
                <p>
                  Absolutely. Watch comes with six bands that are easy to mix
                  and match any band with any watch. You can swap them out as
                  your heart desires without the aid of any tools—as long as the
                  band and watch are the same size. (The Leather Loop band, for
                  example, only fits 42mm watches, not the smaller 38mm size.)
                </p>
              </div>
              <div className="col-sm-6 faq wow fadeInUp" data-wow-delay="0.3s">
                <h4>So it’s a watch and a fitness tracker?</h4>
                <p>
                  The accelerometer lets the watch count your steps, and it
                  extrapolate distance on its own, or rely on the GPS in the
                  paired Phone to trace your exact route. That step data comes
                  in handy for two of the apps included on the watch: Activity
                  and Workout. Both of the watch’s fitness apps sync data back
                  to the Health and Fitness apps on your Phone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="row tech-specs">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>tech specs</h2>
              <p>
                Need more info? Please have a look at the tech specs of the
                watch. We’ve used Latest technology &amp; quality materials
              </p>
            </div>
            <div className="row tech-specs-row">
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="0s"
              >
                <h4>Compatibility</h4>
                <ul className="nav">
                  <li>iPhone iOS 7 &amp; up</li>
                  <li>Android 4.3 &amp; uptexts</li>
                  <li>Bluetooth 4.0</li>
                  <li>Notification for calls / texts</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="0.3s"
              >
                <h4>App</h4>
                <ul className="nav">
                  <li>Set daily goals</li>
                  <li>Analyze history</li>
                  <li>Sync to phone &amp; cloud</li>
                  <li>Connect to Apple health kit</li>
                  <li>Connect to Google fit</li>
                  <li>Watch firmware upgrade</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h4>Vibration silent alarms</h4>
                <ul className="nav">
                  <li>Phone notifications</li>
                  <li>Daily goal reached</li>
                  <li>Daily wake-up alarm</li>
                  <li>Location assistance</li>
                  <li>Accessiblity features</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="0.9s"
              >
                <h4>Watch</h4>
                <ul className="nav">
                  <li>12.6mm thickness</li>
                  <li>3.16L stainless steel case</li>
                  <li>40mm diameter</li>
                  <li>5 ATM water resistant</li>
                  <li>Sapphire glass crystal</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="1.2s"
              >
                <h4>Straps</h4>
                <ul className="nav">
                  <li>Italian leather with natural lining</li>
                  <li>Comfort sport fabric</li>
                  <li>Quick-release pins</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="1.5s"
              >
                <h4>Activity tracking</h4>
                <ul className="nav">
                  <li>Step counting</li>
                  <li>Distance</li>
                  <li>Calories burned</li>
                  <li>Swimming (strokes)</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="1.8s"
              >
                <h4>Timekeeping</h4>
                <ul className="nav">
                  <li>Swiss ETA movement</li>
                  <li>Accurate, reliable</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="2.1s"
              >
                <h4>Battery power</h4>
                <ul className="nav">
                  <li>Standard CR2025 6+ months</li>
                  <li>Standard 364 for timekeeping 5+ years</li>
                  <li>Solar Power available as aupgrade</li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-4 tech-spec wow fadeIn"
                data-wow-delay="2.4s"
              >
                <h4>Sensors</h4>
                <ul className="nav">
                  <li>MEMS 3-axis accelerometer</li>
                  <li>Highly accurate</li>
                  <li>Low power consumption</li>
                </ul>
              </div>
            </div>
            <div className="row tech-specs-row"></div>
            <div className="row tech-specs-row"></div>
          </div>
        </section>
        <section className="row team">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>meet the team</h2>
              <p>
                We are a small group of inverntors, hackers and designers from
                the differrent parts of the world on a mission.
              </p>
            </div>
            <div className="row team_members">
              <div className="col-md-3 col-sm-6 member wow fadeInUp">
                <div className="row m0 inner">
                  <div className="row m0 image">
                    <img src="images/team-1.jpg" alt="" />
                  </div>
                  <div className="texts row m0">
                    <h4>Gary Elliott</h4>
                    <h5>Co-Founder and CEO</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 member wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="row m0 inner">
                  <div className="row m0 image">
                    <img src="images/team-2.jpg" alt="" />
                  </div>
                  <div className="texts row m0">
                    <h4>Jeffrey Allen</h4>
                    <h5>Co-Founder and CTO</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 member wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="row m0 inner">
                  <div className="row m0 image">
                    <img src="images/team-3.jpg" alt="" />
                  </div>
                  <div className="texts row m0">
                    <h4>Sara Mendez</h4>
                    <h5>Lead Developer, Hacker</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 member wow fadeInUp"
                data-wow-delay="0.9s"
              >
                <div className="row m0 inner">
                  <div className="row m0 image">
                    <img src="images/team-4.jpg" alt="" />
                  </div>
                  <div className="texts row m0">
                    <h4>Albert Castro</h4>
                    <h5>3D Designer &amp; Prototyper</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row timeline">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>timeline</h2>
              <p>
                Here’s a roadmap of our product to highlight the milestones from
                the initial phase to delivery and future updates.
              </p>
            </div>
            <div className="row timeline-row">
              <div className="row m0 timeline-post">
                <div className="bar-content">
                  <div className="inner">now</div>
                </div>
              </div>
              <div className="row m0 timeline-post has-content wow fadeInUp">
                <div className="col-sm-6 half-side date">23 jan 2014</div>
                <div className="col-sm-6 half-side content">
                  <div className="inner">
                    <h4 className="title">Mass Production</h4>
                  </div>
                </div>
              </div>
              <div className="row m0 timeline-post has-content odd wow fadeInUp">
                <div className="col-sm-6 half-side date">23 jan 2014</div>
                <div className="col-sm-6 half-side content">
                  <div className="inner">
                    <h4 className="title">Testing Pre-Production Samples</h4>
                  </div>
                </div>
              </div>
              <div className="row m0 timeline-post has-content wow fadeInUp">
                <div className="col-sm-6 half-side date">23 jan 2014</div>
                <div className="col-sm-6 half-side content">
                  <div className="inner">
                    <h4 className="title">Croudfunding Campaign</h4>
                    <p>
                      And an optional description. You may add little
                      description of your milestone if you want.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row m0 timeline-post has-content odd wow fadeInUp">
                <div className="col-sm-6 half-side date">23 jan 2014</div>
                <div className="col-sm-6 half-side content">
                  <div className="inner">
                    <h4 className="title">Preview at CES</h4>
                  </div>
                </div>
              </div>
              <div className="row m0 timeline-post wow fadeInUp">
                <div className="bar-content">
                  <div className="inner">2015</div>
                </div>
              </div>
              <div className="row m0 timeline-post has-content wow fadeInUp">
                <div className="col-sm-6 half-side date">23 jan 2014</div>
                <div className="col-sm-6 half-side content">
                  <div className="inner">
                    <h4 className="title">3D Prototype &amp; Testing</h4>
                  </div>
                </div>
              </div>
              <div className="row m0 timeline-post has-content odd wow fadeInUp">
                <div className="col-sm-6 half-side date">23 jan 2014</div>
                <div className="col-sm-6 half-side content">
                  <div className="inner">
                    <h4 className="title">Research and Development</h4>
                  </div>
                </div>
              </div>
              <div className="row m0 timeline-post">
                <div className="bar-content">
                  <div className="inner">idea</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row mobile-app">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-push-6 wow fadeIn">
                <h2>Mobile App for watch</h2>
                <p>
                  The smartwatch connects to your iPhone and other iOS devices
                  using Bluetooth, alerting you to incoming calls, emails,
                  messages and alerts. Customize your with over 1,000 watchapps
                  found within the smartwatch app.
                </p>
                <div className="row m0 downloads-btns">
                  <a href="#" className="dload-link">
                    <img src="images/app-store.png" alt="" />
                  </a>
                  <a href="#" className="dload-link">
                    <img src="images/google-play.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-sm-pull-6 wow fadeInUp">
                <img
                  src="images/app-screen.png"
                  alt=""
                  className="mobile-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="row newsletter">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>newsletter</h2>
              <p>
                Subscribe to our product newsletter to get notified when we
                launch the product or when we completed a milestone
              </p>
            </div>
            <form
              action="php/subscribe.php"
              id="subscribeform"
              className="row newsletter-form"
              method="post"
            >
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Your Email Address"
                />
                <span className="input-group-addon">
                  <button type="submit" id="js-subscribe-btn">
                    <img src="images/right-angle-white.png" alt="" />
                  </button>
                </span>
              </div>
              <div
                id="js-subscribe-result"
                className="text-center"
                data-success-msg="Almost finished. Please check your email and verify."
                data-error-msg="Oops. Something went wrong."
              >
                <p>
                  <img src="images/protect.png" alt="" />
                  No Spam. We Promise. Unsubscribe anytime.
                </p>
              </div>
            </form>
          </div>
        </section>
        <section className="row contact" id="contact">
          <div
            id="mapBox"
            className="row m0"
            data-lat="37.3818288"
            data-lon="-122.0636325"
            data-zoom="15"
          ></div>
          <div className="flip-box-container row m0">
            <div className="flip-box row m0 wow fadeIn">
              <div className="row contact-box flip-box-part">
                <h2>get in touch</h2>
                <ul className="nav">
                  <li>
                    <i className="fa fa-map-marker"></i>523 Sylvan Ave, 5th
                    Floor
                    <br />
                    Mountain View, CA 94041USA
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>+1 (234) 56789 <br />
                    +1 987 654 3210
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>support@watchland.com
                  </li>
                </ul>
                <button className="flip-contact-box btn btn-block">
                  contact us
                </button>
              </div>
              <div className="row contact-form flip-box-part">
                <a href="javascript:void(0);" className="js-close-flip">
                  &times;
                </a>
                <form
                  action="php/contact.php"
                  id="phpcontactform"
                  method="POST"
                >
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="js-contact-btn"
                    className="btn btn-block"
                  >
                    Send Message
                  </button>
                  <div
                    id="js-contact-result"
                    data-success-msg="Form submitted successfully."
                    data-error-msg="Oops. Something went wrong."
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="row">
          <div className="container">
            <div className="row m0 social-links">
              <ul className="nav">
                <li className="wow fadeInUp">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.1s">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.2s">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.3s">
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.5s">
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row m0 menu-rights">
              <ul className="nav footer-menu">
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="terms-of-use.html">Terms of Use</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Mobile App</a>
                </li>
                <li>
                  <a href="presskit.zip">PressKit</a>
                </li>
              </ul>
              <p>
                Copyright © 2016. Proland. <br className="small-divide" />
                All rights reserved
              </p>
            </div>
          </div>
        </footer>

        <div className="row product-box mfp-hide" id="product-choose">
          <button
            className="mfp-close custom_close"
            title="Close (Esc)"
            type="button"
          >
            &#215;
          </button>
          <div className="product-img-gallery">
            <div
              id="product-imgs"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#product-imgs"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#product-imgs" data-slide-to="1"></li>
                <li data-target="#product-imgs" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src="images/the-watch-1.png" alt="watch-1" />
                </div>
                <div className="item">
                  <img src="images/the-watch-2.png" alt="watch-2" />
                </div>
                <div className="item">
                  <img src="images/the-watch-3.png" alt="watch-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-desc">
            <form
              action="php/pre-order.php"
              id="preorderform"
              className="choose-form row m0"
              method="get"
              data-redirect="none"
            >
              <div id="js-product-info" className="product-info">
                <h4 className="name">Smart Watch</h4>
                <h2 className="edition">Sports Edition</h2>
                <h5 className="model">MODEL AS1500</h5>
                <h2 className="price">
                  <del>$349</del>$299
                  <span className="label label-default">early bird offer</span>
                </h2>
                <div className="row m0 description">
                  <p>
                    8mm Silver Aluminum Case with Blue Sport Band. Its perfect
                    fit for tracking fitness. 100% waterproof. Buy this limted
                    edition sports edition.
                  </p>
                </div>
                <div className="choose-options row m0" id="js-choose-color">
                  <div className="option">
                    <h4 className="form-label">Choose a color</h4>
                    <div className="row m0 colors">
                      <input
                        type="radio"
                        name="color"
                        value="Blue"
                        id="color-1"
                        defaultChecked
                      />
                      <label htmlFor="color-1">Blue</label>

                      <input
                        type="radio"
                        name="color"
                        value="Violet"
                        id="color-2"
                      />
                      <label htmlFor="color-2">Violet</label>

                      <input
                        type="radio"
                        name="color"
                        value="Magenta"
                        id="color-3"
                      />
                      <label htmlFor="color-3">Magenta</label>

                      <input
                        type="radio"
                        name="color"
                        value="Yellow"
                        id="color-4"
                      />
                      <label htmlFor="color-4">Yellow</label>

                      <input
                        type="radio"
                        name="color"
                        value="Green"
                        id="color-5"
                      />
                      <label htmlFor="color-5">Green</label>
                    </div>
                  </div>
                  <div className="option">
                    <h4 className="form-label">Qty</h4>
                    <input
                      type="text"
                      value="1"
                      name="Quantity"
                      className="quanity"
                    />
                  </div>
                  <div className="option">
                    <h4 className="form-label">Size</h4>
                    <select className="selectpicker">
                      <option value="m" selected>
                        M
                      </option>
                      <option value="l">L</option>
                      <option value="xl">XL</option>
                    </select>
                  </div>
                </div>
                <div className="submit-area row m0">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-rounded btn-block"
                    id="next-personal"
                  >
                    pre-order now
                  </a>
                </div>
              </div>
              <div className="personal-info" id="js-personal-info">
                <div className="form-group text-center">
                  <a
                    href="javascript:void(0);"
                    className="btn"
                    id="prev-product-info"
                  >
                    Go Back
                  </a>
                </div>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      name="First_Name"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      name="Last_Name"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Address_Line_1"
                    className="form-control"
                    placeholder="Address Line 1"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Address_Line_2"
                    className="form-control"
                    placeholder="Address Line 2"
                    required
                  />
                </div>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      name="State"
                      className="form-control"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      name="Zip_Code"
                      className="form-control"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <select className="form-control" name="Country" required>
                    <option selected value="">
                      Choose a country
                    </option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                  </select>
                </div>
                <div className="submit-area-2 row m0">
                  <button
                    type="submit"
                    className="btn btn-rounded js-preorder-btn btn-block"
                  >
                    <span>Finish Purchase</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <script src="assetss/js/lib/jquery-2.2.0.min.js"></script>
        <script src="assetss/js/lib/bootstrap.min.js"></script>
        <script src="assetss/vendors/owl-carousel/owl.carousel.js"></script>
        <script src="assetss/vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script src="assetss/vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js"></script>
        <script src="assetss/vendors/bootstrap-select/js/bootstrap-select.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js"></script>
        <script src="assetss/js/plugins/gmaps.min.js"></script>
        <script src="assetss/js/plugins/google-map.js"></script>
        <script src="assetss/js/plugins/wow.min.js"></script>
        <script src="assetss/js/plugins/validate.js"></script>
        <script src="assetss/js/includes/pre-order.js"></script>
        <script src="assetss/js/includes/subscribe.js"></script>
        <script src="assetss/js/includes/contact.js"></script>
        <script src="assetss/js/includes/style-switcher.js"></script>
        <script src="assetss/js/main.js"></script>
      </>
    </div>
  );
}

export default Five;
