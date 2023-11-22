"use client";
import CTA from "@/components/CTA";
import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

type Inputs = {
  name: string
  email: string
  date: string
  time: string
  phoneNumber: string
}

export default function Home() {




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
            <div className="table-cell row">

              <div className="col-lg-8 hero-slide-content float-right text-right">
                <h3
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                >
                  welcome to Tosdap  DRIVERS
                </h3>
                <h1
                  className="wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  Be <span>driven</span> in the comfort of your car
                </h1>

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
                  welcome to Tosdap  DRIVERS
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
                  With Tosdap , you can sit back, relax, and let our professional
                  drivers take the wheel of your car. Whether you&apos;re a busy
                  professional, a parent on the go, or simply looking for a
                  comfortable ride, our drivers are here to provide you with
                  top-notch service. Enjoy the luxury of having your chauffeur,
                  without the stress of driving yourself. So, buckle up and get
                  ready for a smooth and enjoyable ride with Tosdap  drivers. We
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
                  welcome to Tosdap  DRIVERS
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
                  With Tosdap , you can sit back, relax, and let our professional
                  drivers take the wheel of your car. Whether you&apos;re a busy
                  professional, a parent on the go, or simply looking for a
                  comfortable ride, our drivers are here to provide you with
                  top-notch service. Enjoy the luxury of having your chauffeur,
                  without the stress of driving yourself. So, buckle up and get
                  ready for a smooth and enjoyable ride with Tosdap  drivers. We
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
                  <h4>Tosdap </h4>
                </div>
              </a>
            </div>
            <div className="gallery-item cars exam col-lg-3 col-md-4 col-12">
              <a href="img/gallery/2.png" className="gallery-image image-popup">
                <img src="/img/gallery/2.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Tosdap </h4>
                </div>
              </a>
            </div>
            <div className="gallery-item classroom col-lg-3 col-md-4 col-12">
              <a href="img/gallery/3.png" className="gallery-image image-popup">
                <img src="/img/gallery/3.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Tosdap </h4>
                </div>
              </a>
            </div>
            <div className="gallery-item cars students exam col-lg-3 col-md-4 col-12">
              <a href="img/gallery/4.png" className="gallery-image image-popup">
                <img src="/img/gallery/4.png" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Tosdap </h4>
                </div>
              </a>
            </div>
            <div className="gallery-item cars students col-lg-3 col-md-4 col-12">
              <a href="img/gallery/5.jpg" className="gallery-image image-popup">
                <img src="/img/gallery/5.jpg" alt="" />
                <div className="content">
                  <i className="icofont icofont-search" />
                  <h4>Tosdap </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Contact Us Area
============================================ */}
      <ContactUs />
      {/* FAQ Area
============================================ */}
      <div id="faq-area" className="faq-area bg-white pt-90 pb-60">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="section-title text-center col-12 mb-45">
              <h3 className="heading">Frequently asked questions</h3>
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
                        Where can I hire a driver for long-distance vehicle transport?
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
                        To hire a driver for a means of safe and reliable long-distance vehicle transport, you have a few options:
                      </p><ol>
                        <li>Ask a family member, a friend, or a friend of a friend for a favour or pay them to drive your vehicle.</li>

                        <li>Hire a professional driver who is professionally trained, has a clean driving record, and has cleared background checks.</li>
                      </ol>
                      The second option is the safe, reliable, and cost-effective option. We provide highly trained drivers.
                      Call us Monday through Friday from 9 am to 5 pm

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
                        Why hire a driver for a long-distance journey?
                        Benefits?
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
                        Relocating a vehicle is complicated, time-consuming, and risky. Driving hundreds of miles in different weather conditions is difficult for most people.
                        Hiring a driver is a safe, cost-effective, and convenient option. Our drivers are professionally trained and have decades of experience. We provide a door-to-door service. Your driver will arrive on time to pick up your car and deliver it to the destination on schedule.
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
                        How much does it cost to hire a driver to drive a long-distance?
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
                        The cost to hire a driver for long-distance depends on the following:
                      </p>
                      <ol>
                        <li>You will pay for driver&apso;s transportation to get to the trip start point.
                        </li><li>Distance from the start point to the destination, type of vehicle, and kind of roads will determine the number of days needed. The driver will have a daily service charge plus food.</li>
                        <li>If multiple days are required, the driver will require an allowance for hotel stays. </li>
                        <li>
                          You will pay fuel, Toll, and other expenses related to the trip.</li>
                      </ol>

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
                        When should I finalize start the order for hiring a driver?
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
                        Hiring a driver to transport your vehicle or drive you on a long-distance road trip has a few steps that have to be completed.</p>
                      <p>
                        You can see details in the questions above.</p>
                      <p>
                        We recommend you start the process as soon as you know the starting point, endpoint, and date. When customers call less than two weeks before the trip date, we might not have a driver available for that date.
                        So please get in touch with us at least two weeks and preferably four weeks or more before your desired date.</p>
                      <p>
                        Call us Monday thru Friday from 9 am to 5 pm<br/>
                        <Link href="tel: +2348107725001">
                          08107725001</Link>
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
