import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
interface CTAProps {
}

const CTA: React.FC<CTAProps> = (): ReactElement => {

  //Send message via whatsapp
  let mobileNumber = process.env.mobileNumber;
  let text = `Hi, I would love to book for a driving service`;
  let encodedText = encodeURIComponent(text);
  let link = `https://wa.me/${mobileNumber}?text=${encodedText}`;
  return (

    <div className="cta-area pb-40 pt-40">
      <div className="container">
        <div className="row">
          <div className="call-to-action text-left col-lg-10 col-12 mx-auto">
            <h3>Learn More about our amazing offer</h3>
            <Link href={link} className="btn transparent ">
              Book Us
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default CTA;
