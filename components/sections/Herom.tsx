"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../public/assets/css/newhome.css";
import LogoCarousel from "../slider/LogoCarousel";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
};

export default function Hero5() {
  const [transformValue, setTransformValue] = useState<string>(
    "translate3d(2.6px, -15.2px, 0px)"
  );

  // typed mouse event for a div
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // Calculate new transform values based on mouse position
    const newX = (mouseX / window.innerWidth) * 10 - 5; // Adjust multiplier as needed
    const newY = (mouseY / window.innerHeight) * 10 - 5; // Adjust multiplier as needed

    // Use backticks to interpolate values
    setTransformValue(`translate3d(${newX}px, ${newY}px, 0px)`);
  };

  return (
    <>
      <section className="hero-section new-white-bg-sections">
        <div className="hero-wrapper" onMouseMove={handleMouseMove}>
          <div
            className="shape shape-one scene mfp-hide"
            style={{
              transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              pointerEvents: "none",
            }}
          >
            <span
              data-depth="1"
              style={{
                transform: transformValue,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                display: "block",
              }}
            >
              <img src="/assets/img/icon/ordots.png" alt="shape" />
            </span>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Hero Content */}
                <div
                  className="hero-content wow fadeInUp blck-title"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUp",
                  }}
                >
                  <h1>
                    We build
                    <br />
                    Brands
                    <br />
                    That Matter
                  </h1>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <form className="newsletter-form mb-60" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                          <label>
                            <i className="far fa-envelope" aria-hidden="true" />
                          </label>
                          <input type="email" placeholder="Enter mail address" name="email" />
                          <button className="theme-btn style-one" type="submit">
                            Start a Project
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <p
                        className="mb-60"
                        style={{ color: "#000000", fontSize: "18px", fontWeight: 500 }}
                      >
                        We Don't Build Websites - We Build Digital Legacies. At{" "}
                        <span className="font-semibold text-primary">Brave Moor</span>, we help
                        ambitious brands earn trust that converts into revenue. Where strategy meets
                        storytelling, and data dances with emotion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <LogoCarousel/> */}
          </div>

          {/* Hero Image */}
          <div
            className="hero-image mt-65 wow fadeInDown"
            style={{
              visibility: "visible",
              animationName: "fadeInDown",
            }}
          >
            <img
              src="/assets/img/service/ok.png"
              alt="Hero Image"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
