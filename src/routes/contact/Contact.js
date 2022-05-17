import React from "react";
import PageTitle from "../../helper/PageTitle/PageTitle";
import "./style/Contact.css";
import ContactInfo from "./Boxes/ContactInfo";
import Location from "../../helper/LocationSection/Location";

function Contact() {
  return (
    <section className="section contact-section">
      <PageTitle title={"Contact us"} />
        <ContactInfo />
        <Location />
    </section>
  );
}

export default Contact;
