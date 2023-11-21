import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
interface FooterProps { }

const Footer: React.FC<FooterProps> = (): ReactElement => {
  return (
    <div className="footer-area overlay overlay-black overlay-70 pt-90">
      <div className="container">
        <div className="row">
          <div className="footer-widget text-left col-lg-6 col-md-6 col-12">
            <h4 className="widget-title">about Tosdap  DRIVERS</h4>
            <div className="about-widget">
              <p>
              At Tosdap , we provide comfortable rides in your own car, with our professional drivers behind the wheel.
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
          <div className="footer-widget text-left col-lg-6 col-md-6 col-12">
            <h4 className="widget-title">quick contact</h4>
            <div className="contact-widget d-flex justify-content-between">
              <div>
                <h5>address:</h5>
                <p>
                Magboro, Ogun State
                </p>
              </div>
              <div>
                <h5>phone:</h5>
                <Link href="tel:+234 810 772 5001">+234 810 772 5001</Link>             
                <Link href="tel:+234 810 772 5001"> +234 907 311 4148</Link>

              </div>
              <div>
                <h5>e-mail</h5>
                <p>
                  <Link href="mailto:Tosdap drivers@gmail.com">
                    Tosdap drivers@gmail.com
                  </Link>
                  <Link href="#">Tosdap drivers.com.ng</Link>
                </p>
              </div>


            </div>
          </div>

        </div>
        <div className="footer-bottom text-center col-12">
          <p className="copyright">
            Copyright © <a href="#">Tosdap </a> ALL Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
