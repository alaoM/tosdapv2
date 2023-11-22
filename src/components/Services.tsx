import Link from "next/link";
import React, { ReactElement } from "react";

interface ServicesProps { }

const Services: React.FC<ServicesProps> = (): ReactElement => {
  let mobileNumber = process.env.mobileNumber;
  let text = "Hi, I need a temporary driver";
  let text2 = "Hi, I need a travel driver";
  let text3 = "Hi, I own a vehicle from 2008 till date. I would like to join the largest community of vehicle owners to start earning today"
  let text4 = "Hi, I have been driving for over 3 years now, I would like to sign up today to  start earning."
  let encodedText1 = encodeURIComponent(text);
  let encodedText2 = encodeURIComponent(text2);
  let encodedText3 = encodeURIComponent(text3);
  let encodedText4 = encodeURIComponent(text4);
  let link = `https://wa.me/${mobileNumber}?text=${encodedText1}`;
  let link2 = `https://wa.me/${mobileNumber}?text=${encodedText2}`;
  let link3 = `https://wa.me/${mobileNumber}?text=${encodedText3}`;
  let link4 = `https://wa.me/${mobileNumber}?text=${encodedText4}`;

  return (
    <>
      <div id="course-area" className="course-area bg-gray pt-90 pb-60">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="section-title text-center col-12 mb-45">
              <h3 className="heading">OUR SERVICES</h3>
              <div className="excerpt">
                <p>
                  Tosdap  Called Driver is here to cater to your transportation
                  needs, whether you require our services on a regular or
                  occasional basis. We understand that your lifestyle can be
                  busy, and we&apos;re here to make it easier for you. Our
                  drivers are ready to adapt to your schedule and personal
                  preferences, ensuring that you have a reliable and convenient
                  transportation solution. Whether it&apos;s for work,
                  appointments, or leisure activities, Tosdap  Called Driver is
                  your go-to choice. Say goodbye to the stress of driving and
                  let us take care of getting you where you need to be. Sit
                  back, relax, and enjoy the ride with Tosdap  Called Driver.
                </p>
              </div>
              <i className="icofont icofont-traffic-light" />
            </div>
          </div>
          {/* Course Wrapper */}
          <div className="course-wrapper row">
            <div className="col-lg-3 col-md-6 col-12 mb-30 fix">
              <div className="course-item text-center">
                <i className="icofont icofont-car-alt-4" />
                <h4>Need A Temporary Driver?</h4>
                <p>
                  We offer driving services in Nigeria for business and leisure.
                  Our professional drivers will save you time and ensure your
                  comfort in your car for the entire day.
                </p>
                <Link href={link} target="_blank" rel="noreferrer noopener" className="btn black transparent">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-30 fix">
              <div className="course-item text-center">
                <i className="icofont icofont-ambulance-cross" />
                <h4>Need A Travel Driver?</h4>
                <p>
                  Travel in style and comfort with our chauffeur-driven cars. We
                  provide a range of services to cater to the special needs of
                  our clients. Access some of our amazing travel packages today!
                </p>
                <Link href={link2} target="_blank" rel="noreferrer noopener" className="btn black transparent">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-30 fix">
              <div className="course-item text-center">
                <i className="icofont icofont-fast-delivery" />
                <h4>Make Money With Us</h4>
                <p>
                  Own a vehicle from 2008 till date? Join the largest community
                  of vehicle owners to start earning today!
                </p>
                <Link href={link3} target="_blank" rel="noreferrer noopener" className="btn black transparent">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-30 fix">
              <div className="course-item text-center">
                <i className="icofont icofont-rocket-alt-2" />
                <h4>Drivers</h4>
                <p>
                  Have you been driving for over 3 years now, sign up today to
                  start earning.
                </p>
                <Link href={link4} target="_blank" rel="noreferrer noopener" className="btn black transparent">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
