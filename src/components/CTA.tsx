import Image from "next/image";
import Link from "next/link";
import React,  { ReactElement } from "react";
interface CTAProps {
  }
  
  const CTA: React.FC<CTAProps> = (): ReactElement => {
  return (
    
    <div className="cta-area pb-40 pt-40">
    <div className="container">
      <div className="row">
        <div className="call-to-action text-left col-lg-10 col-12 mx-auto">
          <h3>Learn More about our amazing offer</h3>
          <Link href="/contact-us" className="btn transparent ">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
  
    
  );
};

export default CTA;
