import React from "react";
import Box from "./Box";
import Logo from "../../../helper/Logo/Logo";

function FooterSectionOne() {
  return (
    <div className="footer-section-one">
            <Logo />
      <div className="container">
        <Box
          title="Address"
          additionalInfo={
            <p>
              5th avnue
              New York, NY 10018
              United State
            </p>
          }
          IsBtn={false}
        />
        <Box
          title="Book a table"
          additionalInfo={
            <p>
              Dogfood och Sliders foodtruck. 
              Under Om oss kan ni läsa 
            </p>
          }
          contactInfo={"(850) 435-4155"}
          IsBtn={false}
        />
        <Box
          title="Opening hours"
          additionalInfo={
            <p>
              Monday – Friday: 8am – 4pm
              Saturday: 9am – 5pm
            </p>
          }
          IsSocial={true}
          IsBtn={false}
        />
        <Box
          title="newsletter"
          additionalInfo={
            <p>
              Subscribe to the weekly newsletter for all
              the latest updates
            </p>
          }
          IsSocial={false}
          IsBtn={true}
        />
      </div>
    </div>
  );
}

export default FooterSectionOne;
