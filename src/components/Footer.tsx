import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
interface FooterProps {}

const Footer: React.FC<FooterProps> = (): ReactElement => {
  return (
    <div className="footer-area overlay overlay-black overlay-70 pt-90">
      <div className="container">
        <div className="row">
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">about TOSDAP DRIVERS</h4>
            <div className="about-widget">
              <p>
                It is a long established fact that is a reader will be
                distracted by the readable content of page when looking at its
                layout. it’s the more fact that is reader will be by the
                readable looking its layout.
              </p>
              <div className="widget-social fix">
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
                  <i className="icofont icofont-social-rss" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">quick contact</h4>
            <div className="contact-widget">
              <h5>address:</h5>
              <p>
                Flor. 4, House. 15, Block-C. <br />
                Banasree Main Road, Dhaka.
              </p>
              <h5>phone:</h5>
              <Link href="tel:+234 810 772 5001">+234 810 772 5001</Link>
              <br />
              <Link href="tel:+234 810 772 5001"> +234 907 311 4148</Link>

              <h5>e-mail</h5>
              <p>
                <Link href="mailto:tosdapdrivers@gmail.com">
                  tosdapdrivers@gmail.com
                </Link>
                <Link href="#">tosdapdrivers.com.ng</Link>
              </p>
            </div>
            F
          </div>
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">blog post</h4>
            <div className="blog-widget">
              <div className="widget-blog fix">
                <a href="#" className="image float-left">
                  <img src="/img/blog-widget/1.jpg" alt="" />
                </a>
                <div className="content fix">
                  <a href="#">new project</a>
                  <p>
                    It is a long established fact that is a reader will be...
                  </p>
                </div>
              </div>
              <div className="widget-blog fix">
                <a href="#" className="image float-left">
                  <img src="/img/blog-widget/2.jpg" alt="" />
                </a>
                <div className="content fix">
                  <a href="#">google maps</a>
                  <p>
                    It is a long established fact that is a reader will be...
                  </p>
                </div>
              </div>
              <div className="widget-blog fix">
                <a href="#" className="image float-left">
                  <img src="img/blog-widget/3.jpg" alt="" />
                </a>
                <div className="content fix">
                  <a href="#">learn first</a>
                  <p>
                    It is a long established fact that is a reader will be...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">instagram gallary</h4>
            <div className="instagram-widget">
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/1.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/2.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/3.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/4.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/5.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/6.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/7.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/8.jpg" alt="" />
                </a>
              </div>
              <div className="instagram-item">
                <a href="#">
                  <img src="/img/instagram/9.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center col-12">
          <p className="copyright">
            Copyright © <a href="#">TOSDAP</a> ALL Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
