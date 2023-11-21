import Image from "next/image";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import CTA from "@/components/CTA";
import Features from "@/components/Features";

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
   
     {/* Feature Area and  Funfact Area
============================================ */}
      <Features />    
      
   
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
