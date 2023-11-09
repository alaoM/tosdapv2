"use client";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  /* useEffect(() => {
    const shouldRefresh = true; // Add your condition here

    if (shouldRefresh) {
      window.location.reload();
    }
  }, []); */
  return (
    <>
      {/* Hero Slide Area
============================================ */}
      <div id="hero-area" className="hero-slider-area">
        <div id="hero-slider" className="nivoSlider slider-image">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/img/slider/1.jpg"
            alt="main slider"
            title="#htmlcaption1"
            priority={true}
          />
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/img/slider/4.jpg"
            alt="main slider"
            title="#htmlcaption2"
          />
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/img/slider/3.jpg"
            alt="main slider"
            title="#htmlcaption3"
          />
        </div>
        <div id="htmlcaption1" className="nivo-html-caption">
          <div className="slide-table container">
            <div className="table-cell">
              <div className="hero-slide-content float-right text-right">
                <h3
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                >
                  welcome to TOSDAP DRIVERS
                </h3>
                <h1
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  Convenient <span>driving</span>
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.6s"
                >
                  Be driven in the comfort of your own car
                </p>
                <div className="button-group">
                  <a
                    className="btn color nivo-nextNav wow fadeInLeft"
                    data-wow-duration=".9s"
                    data-wow-delay="2s"
                  >
                    learn more
                  </a>
                </div>
              </div>
              <div
                className="find-course-form float-left text-left wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay="3s"
              >
                <h5>
                  <span>Ride with Us</span>
                  <i className="icofont icofont-police-car" />
                </h5>
                <form action="#">
                  <div className="course-input">
                    <i className="icofont icofont-user-alt-3" />{" "}
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="course-input">
                    <i className="icofont icofont-envelope" />{" "}
                    <input type="text" placeholder="Your E-mail" />
                  </div>
                  <div className="course-input">
                    <i className="icofont icofont-phone" />{" "}
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className="course-select">
                    <i className="icofont icofont-clock-time" />
                    <select className="cusselect">
                      <option>Time</option>
                      <option>9:00 AM</option>
                      <option>12:00 PM</option>
                      <option>03:00 PM</option>
                      <option>06:00 PM</option>
                    </select>
                  </div>
                  <div className="course-select course-date">
                    <i className="icofont icofont-calendar" />
                    <input
                      className="date-picker"
                      type="text"
                      placeholder="Date"
                    />
                  </div>
                  <div className="course-submit">
                    <input type="submit" defaultValue="Send us" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="htmlcaption2" className="nivo-html-caption">
          <div className="slide-table container">
            <div className="table-cell">
              <div className="hero-slide-content float-left text-left">
                <h3
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                >
                  welcome to TOSDAP DRIVERS
                </h3>
                <h1
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  hassle-free and convenient <span>driving</span>
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.6s"
                >
                  With Tosdap, you can sit back, relax, and let our professional
                  drivers take the wheel of your car. Whether you&apos;re a busy
                  professional, a parent on the go, or simply looking for a
                  comfortable ride, our drivers are here to provide you with
                  top-notch service. Enjoy the luxury of having your chauffeur,
                  without the stress of driving yourself. So, buckle up and get
                  ready for a smooth and enjoyable ride with Tosdap drivers. We
                  can&apos;t wait to make your journeys a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="htmlcaption3" className="nivo-html-caption">
          <div className="slide-table container">
            <div className="table-cell">
              <div className="hero-slide-content text-center">
                <h3
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                >
                  welcome to TOSDAP DRIVERS
                </h3>
                <h1
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  hassle-free and convenient <span>driving</span>
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.6s"
                >
                  With Tosdap, you can sit back, relax, and let our professional
                  drivers take the wheel of your car. Whether you&apos;re a busy
                  professional, a parent on the go, or simply looking for a
                  comfortable ride, our drivers are here to provide you with
                  top-notch service. Enjoy the luxury of having your chauffeur,
                  without the stress of driving yourself. So, buckle up and get
                  ready for a smooth and enjoyable ride with Tosdap drivers. We
                  can&apos;t wait to make your journeys a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Area and  Funfact Area
============================================ */}
      <Features />

      {/* Our Services
============================================ */}
      <Services />
      {/* Video Area
============================================ */}
      <div className="video-area overlay overlay-black overlay-50">
        <div className="container">
          <div className="row">
            <div className="video-content text-center col-12">
              <a
                className="video-popup"
                href="https://www.youtube.com/watch?v=ngaeb1jARAY"
              >
                <i className="icofont icofont-play-alt-2" />
              </a>
              <h3>our teaching process</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area
============================================ */}
      <div id="gallery-area" className="gallery-area bg-gray pt-90 pb-60">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="section-title text-center col-12 mb-45">
              <h3 className="heading">golden gallery</h3>
              <div className="excerpt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur maksu rez do eiusmod
                  tempor magna aliqua
                </p>
              </div>
              <i className="icofont icofont-traffic-light" />
            </div>
          </div>
          {/* Gallery Filter */}
          <div className="gallery-filter text-center">
           
          </div>
          {/* Gallery Grid */}
          <div className="gallery-grid row">
            <div className="gallery-item cars col-lg-3 col-md-4 col-12">
              <a href="img/gallery/1.png" className="gallery-image image-popup">
                <img src="/img/gallery/1.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Class Test</h4>
                </div>
              </a>
            </div>
            <div className="gallery-item cars exam col-lg-3 col-md-4 col-12">
              <a href="img/gallery/2.png" className="gallery-image image-popup">
                <img src="/img/gallery/2.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Class Test</h4>
                </div>
              </a>
            </div>
            <div className="gallery-item classroom col-lg-3 col-md-4 col-12">
              <a href="img/gallery/3.png" className="gallery-image image-popup">
                <img src="/img/gallery/3.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Class Test</h4>
                </div>
              </a>
            </div>
            <div className="gallery-item cars students exam col-lg-3 col-md-4 col-12">
              <a href="img/gallery/4.png" className="gallery-image image-popup">
                <img src="/img/gallery/4.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Class Test</h4>
                </div>
              </a>
            </div>
            <div className="gallery-item cars students col-lg-3 col-md-4 col-12">
              <a href="img/gallery/5.jpg" className="gallery-image image-popup">
                <img src="/img/gallery/5.jpg" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Class Test</h4>
                </div>
              </a>
            </div>          
          </div>
        </div>
      </div>
      {/* Testimonial Area
============================================ */}
      <div
        id="testimonial-area"
        className="testimonial-area overlay overlay-white overlay-80 text-center pt-90 pb-90"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              {/* Testimonial Image Slider */}
              <div className="ti-slider mb-40">
                <div className="single-slide">
                  <div className="image fix">
                    <img src="/img/testimonial/1.jpg" alt="" />
                  </div>
                </div>
                <div className="single-slide">
                  <div className="image fix">
                    <img src="/img/testimonial/2.jpg" alt="" />
                  </div>
                </div>
                <div className="single-slide">
                  <div className="image fix">
                    <img src="/img/testimonial/3.jpg" alt="" />
                  </div>
                </div>
                <div className="single-slide">
                  <div className="image fix">
                    <img src="/img/testimonial/4.jpg" alt="" />
                  </div>
                </div>
              </div>
              {/* Testimonial Content Slider */}
              <div className="tc-slider">
                <div className="single-slide">
                  <p>
                    There are many many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by hum domised words which is dont look believable.
                  </p>
                  <h5>momen bhuiyan</h5>
                  <span>Graphic Designer</span>
                </div>
                <div className="single-slide">
                  <p>
                    There are many many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by hum domised words which is dont look believable.
                  </p>
                  <h5>Tasnim Akter</h5>
                  <span>Graphic Designer</span>
                </div>
                <div className="single-slide">
                  <p>
                    There are many many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by hum domised words which is dont look believable.
                  </p>
                  <h5>momen bhuiyan</h5>
                  <span>Graphic Designer</span>
                </div>
                <div className="single-slide">
                  <p>
                    There are many many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by hum domised words which is dont look believable.
                  </p>
                  <h5>Tasnim Akter</h5>
                  <span>Graphic Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Arrows */}
        <button className="ts-arrows ts-prev">
          <i className="icofont icofont-caret-left" />
        </button>
        <button className="ts-arrows ts-next">
          <i className="icofont icofont-caret-right" />
        </button>
      </div>
      {/* Instructor Area
============================================ */}
      <div id="instructor-area" className="instructor-area bg-gray pt-90 pb-60">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="section-title text-center col-12 mb-45">
              <h3 className="heading">Instructor</h3>
              <div className="excerpt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur maksu rez do eiusmod
                  tempor magna aliqua
                </p>
              </div>
              <i className="icofont icofont-traffic-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              {/* Instructor Tab Content */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="instructor-1">
                  <div className="row">
                    <div className="instructor-details text-left col-lg-7 col-12">
                      <h4 className="instructor-name">jonathon joe</h4>
                      <h5 className="instructor-title">Instructor</h5>
                      <p>
                        There are many many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form, by hum domised words which is
                        dont look even slightly believable.There are many many
                        variations of passages of Lorem Ipsum available,but the
                        on majority have suffered alteration in some form, by
                        hum maksu rez words which is dont look even slightly
                        believable.
                      </p>
                      <div className="instructor-social fix">
                        <a href="#">
                          <i className="icofont icofont-social-facebook" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-pinterest" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-twitter" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-google-plus" />
                        </a>
                      </div>
                    </div>
                    <div className="instructor-image col-lg-5 col-md-6 col-12">
                      <img src="/img/instructor/big-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="instructor-2">
                  <div className="row">
                    <div className="instructor-details text-left col-lg-7 col-12">
                      <h4 className="instructor-name">Martin Adam</h4>
                      <h5 className="instructor-title">Instructor</h5>
                      <p>
                        There are many many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form, by hum domised words which is
                        dont look even slightly believable.There are many many
                        variations of passages of Lorem Ipsum available,but the
                        on majority have suffered alteration in some form, by
                        hum maksu rez words which is dont look even slightly
                        believable.
                      </p>
                      <div className="instructor-social fix">
                        <a href="#">
                          <i className="icofont icofont-social-facebook" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-pinterest" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-twitter" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-google-plus" />
                        </a>
                      </div>
                    </div>
                    <div className="instructor-image col-lg-5 col-md-6 col-12">
                      <img src="/img/instructor/big-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="instructor-3">
                  <div className="row">
                    <div className="instructor-details text-left col-lg-7 col-12">
                      <h4 className="instructor-name">Gabriel Stan</h4>
                      <h5 className="instructor-title">Instructor</h5>
                      <p>
                        There are many many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form, by hum domised words which is
                        dont look even slightly believable.There are many many
                        variations of passages of Lorem Ipsum available,but the
                        on majority have suffered alteration in some form, by
                        hum maksu rez words which is dont look even slightly
                        believable.
                      </p>
                      <div className="instructor-social fix">
                        <a href="#">
                          <i className="icofont icofont-social-facebook" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-pinterest" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-twitter" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-google-plus" />
                        </a>
                      </div>
                    </div>
                    <div className="instructor-image col-lg-5 col-md-6 col-12">
                      <img src="/img/instructor/big-3.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="instructor-4">
                  <div className="row">
                    <div className="instructor-details text-left col-lg-7 col-12">
                      <h4 className="instructor-name">Thomas Smith</h4>
                      <h5 className="instructor-title">Instructor</h5>
                      <p>
                        There are many many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form, by hum domised words which is
                        dont look even slightly believable.There are many many
                        variations of passages of Lorem Ipsum available,but the
                        on majority have suffered alteration in some form, by
                        hum maksu rez words which is dont look even slightly
                        believable.
                      </p>
                      <div className="instructor-social fix">
                        <a href="#">
                          <i className="icofont icofont-social-facebook" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-pinterest" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-twitter" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-google-plus" />
                        </a>
                      </div>
                    </div>
                    <div className="instructor-image col-lg-5 col-md-6 col-12">
                      <img src="/img/instructor/big-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Instructor Tab List */}
              <ul className="nav instructor-tab-list fix">
                <li className="active">
                  <a href="#instructor-1" data-toggle="tab">
                    <img src="/img/instructor/1.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#instructor-2" data-toggle="tab">
                    <img src="/img/instructor/2.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#instructor-3" data-toggle="tab">
                    <img src="/img/instructor/3.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#instructor-4" data-toggle="tab">
                    <img src="/img/instructor/4.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area
============================================ */}
      <div
        id="pricing-area"
        className="pricing-area overlay overlay-black overlay-40 pt-90 pb-60"
      >
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="section-title title-white text-center col-12 mb-45">
              <h3 className="heading">your pricing plan</h3>
              <div className="excerpt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur maksu rez do eiusmod
                  tempor magna aliqua
                </p>
              </div>
              <i className="icofont icofont-traffic-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mb-30">
              <div className="single-pricing text-center">
                <div className="pricing-head">
                  <h4>basic</h4>
                </div>
                <div className="pricing-price">
                  <h2>
                    <span>$</span>200
                  </h2>
                </div>
                <ul className="pricing-details">
                  <li>2 Month Course</li>
                  <li>3 Hours Per Day</li>
                  <li>Weekly 1 Test</li>
                  <li>20 Video Classes</li>
                  <li>Driving Licence</li>
                </ul>
                <a href="#" className="pricing-action">
                  choose plan
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-30">
              <div className="single-pricing text-center">
                <div className="pricing-head">
                  <h4>upgrade</h4>
                </div>
                <div className="pricing-price">
                  <h2>
                    <span>$</span>300
                  </h2>
                </div>
                <ul className="pricing-details">
                  <li>3 Month Course</li>
                  <li>4 Hours Per Day</li>
                  <li>Weekly 2 Test</li>
                  <li>25 Video Classes</li>
                  <li>Driving Licence</li>
                </ul>
                <a href="#" className="pricing-action">
                  choose plan
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-30">
              <div className="single-pricing active text-center">
                <div className="pricing-head">
                  <h4>smart</h4>
                </div>
                <div className="pricing-price">
                  <h2>
                    <span>$</span>400
                  </h2>
                </div>
                <ul className="pricing-details">
                  <li>4 Month Course</li>
                  <li>5 Hours Per Day</li>
                  <li>Weekly 2 Test</li>
                  <li>30 Video Classes</li>
                  <li>Driving Licence</li>
                </ul>
                <a href="#" className="pricing-action">
                  choose plan
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-30">
              <div className="single-pricing text-center">
                <div className="pricing-head">
                  <h4>over smart</h4>
                </div>
                <div className="pricing-price">
                  <h2>
                    <span>$</span>500
                  </h2>
                </div>
                <ul className="pricing-details">
                  <li>6 Month Course</li>
                  <li>5 Hours Per Day</li>
                  <li>Weekly 3 Test</li>
                  <li>35 Video Classes</li>
                  <li>Driving Licence</li>
                </ul>
                <a href="#" className="pricing-action">
                  choose plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Area
============================================ */}
      <div id="faq-area" className="faq-area bg-white pt-90 pb-60">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="section-title text-center col-12 mb-45">
              <h3 className="heading">Frequently asked questions</h3>
              <div className="excerpt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur maksu rez do eiusmod
                  tempor magna aliqua
                </p>
              </div>
              <i className="icofont icofont-traffic-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="panel-group" id="faq">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="true"
                        href="#faq-1"
                      >
                        There are many variations of passages of Lorem Ipsum?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="faq-1"
                    className="panel-collapse collapse show"
                    data-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readaible is an content of the page
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more less normal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="false"
                        href="#faq-2"
                      >
                        There are many variations of passages of Lorem Ipsum?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="faq-2"
                    className="panel-collapse collapse"
                    data-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readaible is an content of the page
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more less normal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="false"
                        href="#faq-3"
                      >
                        There are many variations of passages of Lorem Ipsum?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="faq-3"
                    className="panel-collapse collapse"
                    data-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readaible is an content of the page
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more less normal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="false"
                        href="#faq-4"
                      >
                        There are many variations of passages of Lorem Ipsum?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="faq-4"
                    className="panel-collapse collapse"
                    data-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readaible is an content of the page
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more less normal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-image col-lg-6 col-12">
              <img src="/img/faq.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Area
============================================ */}
      <CTA />
    </>
  );
}
