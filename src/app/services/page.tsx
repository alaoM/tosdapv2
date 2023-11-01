import Image from "next/image"; 
import Link from "next/link";
import CTA from "@/components/CTA";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div>
        <div className="page-banner-area overlay overlay-black overlay-70">
          <div className="container">
            <div className="row">
              <div className="page-banner text-center col-12">
                <h1>Service</h1>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <span>service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Our Services
============================================ */}
      <Services />
      
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
        {/* CTA Area
============================================ */}
      <CTA/>
      </div>
    </>
  );
}
