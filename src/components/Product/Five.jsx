import React from "react";
import '../../assets/css/plugins/animate.css'; // Include animation CSS
import "../../assets/css/bootstrap.min.css"; // Include bootstrap
import "../../assets/css/style.css"; // Include your custom styles
import '../../assets/css/plugins/lineicons.css';
 // Include icon set if using Line Icons

function Five() {
  return (
    <div>
      <>
        <section className="row the-product" id="product">
          <div className="container">
            <div className="row section-header wow fadeInUp">
              <h2>The Product</h2>
              <p>
                Introduce the product here. A small description about what it is
                and how it helps the user. You can also add some photos below.
              </p>
            </div>
            <div className="row apple-watch-note-feature text-center">
              <img src="images/apple-watch-2.png" alt="Apple Watch" />
              <div className="feature-note right top wow fadeInRight">
                <div className="indicator">
                  <div className="plus-icon">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="feature-name">Metalic Strap</div>
              </div>
              <div className="feature-note left top wow fadeInLeft">
                <div className="indicator">
                  <div className="plus-icon">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="feature-name">GPS Tracker</div>
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
                <div className="feature-name">Water Resistant</div>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections follow the same formatting, so no need for drastic changes */}
        <section className="row how-it-works">
          <div className="container">
            <div className="row section-header v2 wow fadeInUp">
              <h2>How It Works</h2>
              <p>
                Here is how it works. Explain the product installation and highlight ease of use.
              </p>
            </div>
            <div className="row work-processes">
              <div className="col-sm-4 work-process wow fadeIn">
                <div className="row m0 process-icon">
                  <img src="images/desktop.png" alt="Connect Device" />
                </div>
                <h3>Connect Device</h3>
                <p>Step-by-step product usage, detailed guide for seamless integration.</p>
              </div>

              <div className="col-sm-4 work-process wow fadeIn" data-wow-delay="0.5s">
                <div className="row m0 process-icon">
                  <img src="images/toggles.png" alt="Configure" />
                </div>
                <h3>Configure It</h3>
                <p>Customize and optimize the product settings to suit your needs.</p>
              </div>

              <div className="col-sm-4 work-process wow fadeIn" data-wow-delay="1s">
                <div className="row m0 process-icon">
                  <img src="images/trophy.png" alt="Done" />
                </div>
                <h3>Yay! Done.</h3>
                <p>Congratulations, your setup is now ready for optimal performance.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Five;
