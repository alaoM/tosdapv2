import CTA from "@/components/CTA";
import ContactMap from "@/components/Contactmap";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Page Banner Area
  ============================================ */}
      <div className="page-banner-area overlay overlay-black overlay-70">
        <div className="container">
          <div className="row">
            <div className="page-banner text-center col-12">
              <h1>Contact us</h1>
              <ul>
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>
                  <span>contact us</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Area
  ============================================ */}
      <div id="contact-area" className="contact-area bg-gray">
        <div className="container pb-90 pt-90">
          {/* Section Title */}
          <div className="row">
            <div className="section-title text-center col-12 mb-45">
              <h3 className="heading">touch in TOSDAP</h3>
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
            {/* Contact Info */}
            <div className="contact-info col-lg-4 col-sm-5 col-12">
              <div className="single-info text-left fix">
                <div className="icon">
                  <i className="icofont icofont-phone" />
                </div>
                <div className="content fix">
                  <h5>call us</h5>
                  <p>
                    <Link href="tel:+234 810 772 5001">+234 810 772 5001</Link>                    
                    <Link href="tel:+234 810 772 5001"> +234 907 311 4148</Link>
                  </p>
                </div>
              </div>
              <div className="single-info text-left fix">
                <div className="icon">
                  <i className="icofont icofont-envelope" />
                </div>
                <div className="content fix">
                  <h5>your message</h5>
                  <p>
                    <Link href="mailto:tosdapdrivers@gmail.com">
                      tosdapdrivers@gmail.com
                    </Link>
                    <Link href="#">admin@alfresco.com</Link>
                  </p>
                </div>
              </div>
              <div className="single-info text-left fix">
                <div className="icon">
                  <i className="icofont icofont-location-pin" />
                </div>
                <div className="content fix">
                  <h5>our location</h5>
                  <p>
                    3756 Melrose place, <br />
                    CA 87031, Australia
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form form text-left col-lg-8 col-sm-7 col-12">
              <form id="contact-form">
                <div className="input-2">
                  <div className="input">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="input">
                    <input type="email" name="email" placeholder="E-mail" />
                  </div>
                </div>
                <div className="input">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="input textarea">
                  <textarea
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="input input-submit">
                  <input type="submit" defaultValue="send message" />
                </div>
              </form>
              <p className="form-messege" />
            </div>
          </div>
        </div>
       {/* <ContactMap/> */}
      </div>
      {/* CTA Area
  ============================================ */}
      <CTA />
    </>
  );
}
