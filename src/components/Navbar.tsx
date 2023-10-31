import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="header-area header-absolute header-transparent">
      <div className="header-top d-none d-md-block">
        <div className="container">
          {/* Header Top */}
          <div className="header-top-wrapper row">
            <div className="header-top-left text-left col-md-6 col-12">
              <p>
                <i className="icofont icofont-envelope" />
                <span>info@example.com</span>
              </p>
              <p>
                <i className="icofont icofont-ui-call" />
                <span>+012 345 678 102 </span>
              </p>
            </div>
            <div className="header-top-right text-right col-md-6 col-12">
              <p>
                <i className="icofont icofont-clock-time" />
                <span>Mon - Sat : 8am - 9pm</span>
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
                <img id="logo_img" src="/img/logo/logo.jpeg" alt="logo" />
              </Link>
            </div>
            <div className="main-menu mean-menu col-auto">
              <nav>
                <ul>
                  <li className="active">
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">about</Link>
                  </li>                 
                  
                  <li>
                    <Link href="#">
                      gallery
                      <i className="icofont icofont-simple-down" />
                    </Link>
                    
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
                  <li>
                    <Link href="/contact-us">contact</Link>
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
