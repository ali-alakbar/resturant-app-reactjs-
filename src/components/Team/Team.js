import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style/style.css"
import "aos/dist/aos.css";

const Team = (props) => {

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={props.aosDuration}
      data-aos-offset={props.aos}
      className="info-card"
    >
      <div className="img-container">
        <span className="box-hover"></span>
        <img src={props.img} alt="" />
        <span className="job-title">{props.jobTitle}</span>
      </div>
      <div className="personal-info">
        <h2>{props.name}</h2>
        <p>{props.description}.</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
