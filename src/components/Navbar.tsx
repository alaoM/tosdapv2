import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  //Send message via whatsapp
  let mobileNumber = process.env.mobileNumber;
  let text = `Hi, I would love to book for a driving service`;
  let encodedText = encodeURIComponent(text);
  let link = `https://wa.me/${mobileNumber}?text=${encodedText}`;
  return (
    <div className="header-area header-absolute header-transparent">
      <div className="header-top d-none d-md-block">
        <div className="container">
          {/* Header Top */}
          <div className="header-top-wrapper row">
            <div className="header-top-left text-left col-md-6 col-12">
              <p>
                <i className="icofont icofont-envelope" />
                <span><Link href="mailto:Tosdapdrivers@gmail.com"> Tosdapdrivers@gmail.com</Link></span>
              </p>
              <p>
                <i className="icofont icofont-ui-call" />
                <span><Link href="tel:+2348107725001">+234 810 772 5001</Link> </span>
              </p>
            </div>
            <div className="header-top-right text-right col-md-6 col-12">
              <p>
                <i className="icofont icofont-clock-time" />
                <span>Mon - Sat : 8am - 5pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom sticky">
        <div className="container">
          <div className="row justify-content-between">
             <div className="navbar-header col-auto">
              <Link href="/" className="logo navbar-brand">
                <img id="logo_img" src="/img/logo/logo.png" alt="logo" />
              </Link>
            </div> 
            <div className="main-menu mean-menu col-auto">
              <nav>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">about</Link>
                  </li>  
                  <li>
                    <Link href="/services">services</Link>
                  </li>
                  {/* <li>
                    <a href="blog.html">
                      blog
                      <i className="icofont icofont-simple-down" />
                    </a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li> */}
                     <li className="active">
                    <Link href={link}  >Book Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-menu col-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
