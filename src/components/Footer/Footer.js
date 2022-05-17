import React from "react";
import FooterSectionOne from "./boxes/FooterSectionOne";
import FooterSectionTwo from "./boxes/FooterSectionTwo";

import "./style/Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <FooterSectionOne />
      <FooterSectionTwo />
    </footer>
  );
}

export default Footer;
