import React from 'react'
import "./style/Logo.css";

function Logo() {
  return (
    <div className="logoContainer">
      <a href="https://www.facebook.com">
        <img
          className="myLogo"
          src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/10/logo_svg.svg"
          alt="logo"
        />
      </a>
    </div>
  );
}

export default Logo