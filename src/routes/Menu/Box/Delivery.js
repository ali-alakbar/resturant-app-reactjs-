import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Delivery = (props) => {
  
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-offset="200"
        className="box"
      >
        <div className="icon-container">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className="other-content">
          <h3>{props.title}</h3>
          <p>{props.p}</p>
        </div>
      </div>
    </>
  );
}

export default Delivery