import React, { ReactElement } from 'react'


interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = (): ReactElement => {
 
  return (
    <>
    <div id="feature-area" className="feature-area bg-gray pt-90 pb-90">
    <div className="container">
      {/* Section Title */}
      <div className="row">
        <div className="section-title text-center col-12 mb-45">
          <h3 className="heading">RIDE WITH US </h3>
          <div className="excerpt">
            <p>
            With TOSDAP Called Drivers, we guarantee you a smooth and satisfying ride to any destination in the country. Our drivers are not only reliable and calm, but they also uphold the highest standards of integrity in every deal and contract. You can trust us to provide you and your organization with top-notch service, ensuring that your transportation needs are met with excellence. So why settle for anything less when you can choose Tosdap Called Drivers for all your driver-sourcing needs? Get ready for a journey filled with competence, reliability, and satisfaction.
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
              <h4>Mission</h4>
              <p>
              To give you access to an unswerving provision of smart and intellectual drivers with great worth to enable your smooth movement anytime, anywhere in the country.
              </p>
            </div>
          </div>
          <div className="single-feature">
            <div className="icon">
              <i className="icofont icofont-car-alt-4" />
            </div>
            <div className="text fix">
              <h4>Vision</h4>
              <p>
              To be the source of choice for individuals and companies in getting wonderful automobilist to handle your wheels
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

</>
  )
}

export default Features