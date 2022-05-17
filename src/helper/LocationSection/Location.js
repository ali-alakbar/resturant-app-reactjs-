import React from "react";
import LocationSection from "./Box/LocationSection";
import "./style/style.css";
import ContactForm from "./Box/ContactForm";
function Location() {
  return (
    <div className="location-section">
      <div className="location-container">
        <div className="map-container">
          <LocationSection />
        </div>
        <ContactForm/>
      </div>
    </div>
  );
}

export default Location;
