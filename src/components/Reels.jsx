import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import ProductCarousel from './ProductCarousel';  // Assuming this is the correct import path for the ProductCarousel

export default function VideoCarousel() {
  const reels = [
    {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    },
    {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    }, {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    }, {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    }, {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    }, {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    }, {
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/3074709f7e5a444c9017f7e8d4d0182a.mp4#t=",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0500/0711/3892/files/Untitled_design_1_2d13e470-58ef-4b41-b423-a79992152092.jpg?v=1724848341",
      link: "https://vibecrafts.com/products/classic-style-complementing-golden-coffee-table-set-of-2",
    },
    // Add more reels if needed
  ];

  return (
    
    <>
      {/* New Arrivals Section */}
      <section className="product-tab bg-white ">
        <div className="container">
          <div className="section-title text-center">
            <h2
              className="title pb-3 mb-3"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "5px 0px 11px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "normal",
                fontFamily: "Trirong, serif",
                letterSpacing: "1.1px",
                color: "rgb(0, 0, 0)",
                textAlign: "center",
              }}
            >
              Explore from Our Reels
            </h2>
            <p
              className="text"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "5px 0px 0px",
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
              Videos from our YouTube channel and Instagram reels to help you decorate your home with style and beauty.            </p>
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <div
        className="video-carousel-container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          overflowX: "auto",
          padding: "0 40px",
        }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={5} // Show 5 reels at a time
          loop={true}
          pagination={{ clickable: true }}
          style={{ width: "100%", padding: "0" }} // Adjust swiper container
          navigation={false} // Disable arrow navigation
        >
          {reels.map((reel, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="ecom-video-reel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
                whileHover={{ scale: 1.05 }} // Grow on hover
              >
                <div
                  className="ecom-video-wrapper"
                  style={{ position: "relative", width: "100%", height: "auto" }}
                >
                  <a
                    href={reel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-link-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 1,
                    }}
                  />
                  <motion.video
                    className="ecom-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "20px",
                      display: "block",
                    }}
                  >
                    <source src={reel.videoUrl} />
                  </motion.video>
                  <div className="video-poster">
                    <img
                      src={reel.posterUrl}
                      alt="video thumbnail"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
