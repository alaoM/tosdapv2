import Image from "next/image";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <div>
        {/* Page Banner Area
============================================ */}
        <div className="page-banner-area overlay overlay-black overlay-70">
          <div className="container">
            <div className="row">
              <div className="page-banner text-center col-12">
                <h1>About us</h1>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <span>about us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Area
============================================ */}
        <div id="feature-area" className="feature-area bg-gray pt-90 pb-90">
          <div className="container">
            {/* Section Title */}
            <div className="row">
              <div className="section-title text-center col-12 mb-45">
                <h3 className="heading">our features</h3>
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
              {/* Left Feature */}
              <div className="feature-wrapper feature-left text-right col-lg-4 col-12">
                <div className="single-feature">
                  <div className="icon">
                    <i className="icofont icofont-file-spreadsheet" />
                  </div>
                  <div className="text fix">
                    <h4>Quick License</h4>
                    <p>
                      Lorem ipsum dolor sit amet to be consectetur adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="single-feature">
                  <div className="icon">
                    <i className="icofont icofont-car-alt-4" />
                  </div>
                  <div className="text fix">
                    <h4>Unlimited Car Support</h4>
                    <p>
                      Lorem ipsum dolor sit amet to be consectetur adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="single-feature">
                  <div className="icon">
                    <i className="icofont icofont-video-alt" />
                  </div>
                  <div className="text fix">
                    <h4>Video Classes</h4>
                    <p>
                      Lorem ipsum dolor sit amet to be consectetur adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
              {/* Feature Image */}
              <div className="feature-image text-center col-lg-4 col-12">
                <img src="/img/feature.png" alt="feature" />
              </div>
              {/* Right Feature */}
              <div className="feature-wrapper feature-right text-left col-lg-4 col-12">
                <div className="single-feature">
                  <div className="icon">
                    <i className="icofont icofont-man-in-glasses" />
                  </div>
                  <div className="text fix">
                    <h4>Experience Instructors</h4>
                    <p>
                      Lorem ipsum dolor sit amet to be consectetur adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="single-feature">
                  <div className="icon">
                    <i className="icofont icofont-clock-time" />
                  </div>
                  <div className="text fix">
                    <h4>Any Time Any Place</h4>
                    <p>
                      Lorem ipsum dolor sit amet to be consectetur adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="single-feature">
                  <div className="icon">
                    <i className="icofont icofont-direction-sign" />
                  </div>
                  <div className="text fix">
                    <h4>Learning Roads</h4>
                    <p>
                      Lorem ipsum dolor sit amet to be consectetur adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Funfact Area
============================================ */}
        <div className="funfact-area overlay overlay-white overlay-80 pt-90 pb-60">
          <div className="container">
            <div className="row">
              <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
                <i className="icofont icofont-hat-alt" />
                <h1 className="counter plus">6500</h1>
                <p>graduted from here</p>
              </div>
              <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
                <i className="icofont icofont-user-suited" />
                <h1 className="counter">56</h1>
                <p>teachers number</p>
              </div>
              <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
                <i className="icofont icofont-history" />
                <h1 className="counter">11</h1>
                <p>years on market</p>
              </div>
              <div className="single-facts text-center col-md-3 col-sm-6 col-12 mb-30">
                <i className="icofont icofont-users-social" />
                <h1 className="counter plus">550</h1>
                <p>present students</p>
              </div>
            </div>
          </div>
        </div>
        {/* Instructor Area
============================================ */}
        <div
          id="instructor-area"
          className="instructor-area bg-gray pt-90 pb-60"
        >
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
                          dont look even slightly believable.There are many
                          many variations of passages of Lorem Ipsum
                          available,but the on majority have suffered alteration
                          in some form, by hum maksu rez words which is dont
                          look even slightly believable.
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
                          dont look even slightly believable.There are many
                          many variations of passages of Lorem Ipsum
                          available,but the on majority have suffered alteration
                          in some form, by hum maksu rez words which is dont
                          look even slightly believable.
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
                          dont look even slightly believable.There are many
                          many variations of passages of Lorem Ipsum
                          available,but the on majority have suffered alteration
                          in some form, by hum maksu rez words which is dont
                          look even slightly believable.
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
                          dont look even slightly believable.There are many
                          many variations of passages of Lorem Ipsum
                          available,but the on majority have suffered alteration
                          in some form, by hum maksu rez words which is dont
                          look even slightly believable.
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
                      available, but the majority have suffered alteration in
                      some form, by hum domised words which is dont look
                      believable.
                    </p>
                    <h5>momen bhuiyan</h5>
                    <span>Graphic Designer</span>
                  </div>
                  <div className="single-slide">
                    <p>
                      There are many many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by hum domised words which is dont look
                      believable.
                    </p>
                    <h5>Tasnim Akter</h5>
                    <span>Graphic Designer</span>
                  </div>
                  <div className="single-slide">
                    <p>
                      There are many many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by hum domised words which is dont look
                      believable.
                    </p>
                    <h5>momen bhuiyan</h5>
                    <span>Graphic Designer</span>
                  </div>
                  <div className="single-slide">
                    <p>
                      There are many many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by hum domised words which is dont look
                      believable.
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
       <CTA/>
      </div>
    </>
  );
}
