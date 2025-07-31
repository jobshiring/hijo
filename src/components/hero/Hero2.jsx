"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper"; // Import Autoplay module
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import HeroSearch1 from "../element/HeroSearch1";
import { useRouter } from "next/navigation";
import Image from "next/image";

const role = [
  "Choose Category",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

const popular = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];

const herobg = [
  "/images/background/home2-hero-bg3.svg",
  "/images/background/home2-hero-bg4.svg",
  "/images/background/home2-hero-bg5.svg",
];

export default function Hero2() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // choose a category
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const searchHandler = () => {
    console.log("Search clicked");
  };

  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section
        className="hero-home2 pb100-xs"
        style={{
          height: "100vh", // Full viewport height
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* Swiper Section */}
        <div className="container-fluid p-0" style={{ flex: "0" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home9-hero-content">
                <div
                  className="navi_pagi_vertical_right dots_nav_light banner-style-one slider-1-grid position-relative"
                  style={{ height: "35vh" }} // Reduced height for Swiper
                >
                  {showSwiper && (
                    <Swiper
                    className="mySwiper"
                    loop={true}
                    effect={"fade"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[EffectFade, Navigation]}
                    navigation={{
                      nextEl: ".right-btn",
                      prevEl: ".left-btn",
                    }}
                  >
                    {hero.map((item, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          height={4000}
                          width={4000}
                          src={item}
                          className="ui-hero-slide__img"
                          alt="Hero Banner"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  )}
                  <div className="ui-verticle-1">
                    <div className="row gap-2">
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__prev__015">
                          <i className="far fa-arrow-left-long" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <div
                          className="swiper__pagination swiper__pagination-2 swiper__pagination__015 d-flex gap-3"
                          style={{
                            paddingTop: "10px",
                          }}
                        ></div>
                      </div>
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__next__015">
                          <i className="far fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HeroSearch Section */}
        <div className="container mt-0" style={{ marginTop: "-50px" }}>
          <div className="row">
            <div className="col-12">
              {/* Header Above HeroSearch */}
              <div className="text-center mb-4">
                <h1 className="text-white ff-heading">Search for Jobs, make it easy</h1>
                <h4 className="text-white">
                  Search from millions of jobs.
                </h4>
              </div>

              {/* HeroSearch */}
              <div
                className="advance-search-tab bgc-white p10 bdrs4-sm bdrs60 search-bar-bg banner-btn position-relative zi1 animate-up-3"
              >
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-3">
                    <div className="bselect-style1 bdrl1 bdrn-sm">
                      <div className="dropdown bootstrap-select">
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-bs-toggle="dropdown"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                {getSelectedRole !== null
                                  ? getSelectedRole
                                  : "Category"}
                              </div>
                            </div>
                          </div>
                        </button>
                        <div className="dropdown-menu">
                          <div className="inner show">
                            <ul className="dropdown-menu inner show">
                              {role.map((item, index) => (
                                <li
                                  onClick={() => roleHandler(item)}
                                  key={index}
                                  className="selected active"
                                >
                                  <a
                                    className={`dropdown-item selected ${
                                      getSelectedRole === item ? "active" : ""
                                    }`}
                                  >
                                    <span className="text">{item}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-3">
                    <div className="text-center text-xl-start">
                      <button
                        onClick={searchHandler}
                        className="ud-btn btn-thm2 w-100 bdrs60"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="row mt20 animate-up-4">
                <div className="col-xl-9">
                  <p className="banner-text text-white ff-heading mt30 mb15">
                    Popular Searches
                  </p>
                  <div className="home9-tags d-md-flex align-items-center banner-btn">
                    {popular.map((item, index) => (
                      <a className="bdrs60 mb-2 mb-md-0" key={index}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
