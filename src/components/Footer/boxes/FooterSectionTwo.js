import React from 'react'
import { NavLink } from 'react-router-dom';

function FooterSectionTwo() {
  return (
    <div className="footer-section-two">
      <div className="right-reserved">
        Copyright © 2022 <NavLink to="https://myAkbar.com">Akbar</NavLink>. All Rights Reserved.
      </div>
      <div className="payment-methods">
        <img src={require("../media/payments.png")} alt="" />
      </div>
    </div>
  );
}

export default FooterSectionTwo
