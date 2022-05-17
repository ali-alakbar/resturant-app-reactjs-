import React from 'react'

const ContactSection = ()=> {
  return (
    <div className="contactSection">
      <div className="contact-wrapper">
        <div className="logoContainer">
          <img src={require("../media/scooter.png")} alt="" />
        </div>
        <div className="content">
          <h3>Call and Order in</h3>
          <p>+1 718-904-4450</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection