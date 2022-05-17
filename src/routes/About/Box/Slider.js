import React from 'react'
import "react-awesome-slider/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../style/sliderStyle/style.css"

const Slider = (props) => {
  // For Slider

  return (
    
        <div className="people-content">
          <div className="img-container">
            <img src={props.img} alt="" />
            <div className="icon-container-slider">
              <FontAwesomeIcon className="quote" icon={faQuoteLeft} />
            </div>
          </div>
          <div className="other-details">
            <q> {props.quote}</q>
            <h2>{props.name}</h2>
            <h3>{props.position}</h3>
          </div>
        </div>
  
  );
}

export default Slider