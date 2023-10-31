import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SliderComponent = () => {
  useEffect(() => {
    // Initialize date picker and select picker after slide change
    const initializePickers = () => {
      const date = document.querySelector(".nivo-caption .date-picker");
      if (date) {
        // Initialize date picker
        // You might need to adjust this code depending on the date picker library you're using
      }

      const select = document.querySelector(".nivo-caption .cusselect");
      if (select) {
        // Initialize select picker
        // You might need to adjust this code depending on the select picker library you're using
      }
    };

    // Initialize pickers on initial render
    initializePickers();

    return () => {
      // Clean up any resources (if needed)
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div id="hero-slider" className="nivoSlider slider-image">
            <img
              /*     fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */
              src="/img/slider/1.jpg"
              alt="main slider"
              title="#htmlcaption1"
              // priority={true}
            />
          </div>
        </div>
        <div>
          <img
            /*  fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */
            src="/img/slider/4.jpg"
            alt="main slider"
            title="#htmlcaption2"
          />
        </div>
        <div>
          <img
            /*     fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           */ src="/img/slider/3.jpg"
            alt="main slider"
            title="#htmlcaption3"
          />
        </div>
      </Slider>
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
                the best <span>safety</span> measures
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay="1.6s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim
                veniamsed sed do <br />
                eiusmod tempor maksu rez ut labore magna do eiusmod
              </p>
              <div className="button-group">
                <a
                  href="#"
                  className="btn transparent wow fadeInLeft"
                  data-wow-duration=".9s"
                  data-wow-delay="2.4s"
                >
                  book lesson
                </a>
                <a
                  href="#"
                  className="btn color wow fadeInLeft"
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
                <span>find your course</span>
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
                <div className="course-select">
                  <i className="icofont icofont-copy-alt" />
                  <select className="cusselect">
                    <option>Course</option>
                    <option>Course 1</option>
                    <option>Course 2</option>
                    <option>Course 3</option>
                    <option>Course 4</option>
                  </select>
                </div>
                <div className="course-select">
                  <i className="icofont icofont-car-alt-4" />
                  <select className="cusselect">
                    <option>Car Type</option>
                    <option>Car Type 1</option>
                    <option>Car Type 2</option>
                    <option>Car Type 3</option>
                    <option>Car Type 4</option>
                  </select>
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
                the best <span>safety</span> measures
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay="1.6s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim
                veniamsed sed do <br />
                eiusmod tempor maksu rez ut labore magna do eiusmod
              </p>
              <div className="button-group">
                <a
                  href="#"
                  className="btn transparent wow fadeInRight"
                  data-wow-duration=".9s"
                  data-wow-delay="2s"
                >
                  book lesson
                </a>
                <a
                  href="#"
                  className="btn color wow fadeInRight"
                  data-wow-duration=".9s"
                  data-wow-delay="2.4s"
                >
                  learn more
                </a>
              </div>
            </div>
            <div
              className="find-course-form float-right text-left wow fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay="3s"
            >
              <h5>
                <span>find your course</span>
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
                <div className="course-select">
                  <i className="icofont icofont-copy-alt" />
                  <select className="cusselect">
                    <option>Course</option>
                    <option>Course 1</option>
                    <option>Course 2</option>
                    <option>Course 3</option>
                    <option>Course 4</option>
                  </select>
                </div>
                <div className="course-select">
                  <i className="icofont icofont-car-alt-4" />
                  <select className="cusselect">
                    <option>Car Type</option>
                    <option>Car Type 1</option>
                    <option>Car Type 2</option>
                    <option>Car Type 3</option>
                    <option>Car Type 4</option>
                  </select>
                </div>
                <div className="course-submit">
                  <input type="submit" defaultValue="Send us" />
                </div>
              </form>
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
                the best <span>safety</span> measures
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay="1.6s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim
                veniamsed sed do <br />
                eiusmod tempor maksu rez ut labore magna do eiusmod
              </p>
              <div className="button-group">
                <a
                  href="#"
                  className="btn transparent wow fadeInLeft"
                  data-wow-duration=".9s"
                  data-wow-delay="2s"
                >
                  book lesson
                </a>
                <a
                  href="#"
                  className="btn color wow fadeInRight"
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
    </>
  );
};

export default SliderComponent;
