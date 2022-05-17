import React, { useEffect } from "react";
import "./style/style.css";
import { Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import GoToUp from "../../../../../helper/GotoUp/GotoUp";

const HotDog = (props) => {
    // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <div className="hotdog-section">
      <div className="img-container">
        <img src={require("../../media/bg-offer.png")} alt="" />
      </div>
      <div className={`other-content`}>
        <div className="content-wrapper">
          <div className="thunder-wrapper">
            <Parallax translateY={[-160, 100]} className="cloud-offer-wrapper">
              <img
                className="img-thunder"
                src={require("../../media/thunder-2.png")}
                alt=""
              />
            </Parallax>
            <Parallax translateY={[100, -10]} className="cloud-offer-wrapper">
              <img
                className="img-thunder"
                src={require("../../media/thunder.png")}
                alt=""
              />
            </Parallax>
          </div>
          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-offset="160">
            {props.h1}
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="160"
          >
            {props.h2}
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="100"
            className="btn-container"
          >
            <NavLink
              onClick={GoToUp}
              className="goto-menu"
              to={"/Menu"}
            >
              Order Now
            </NavLink>
          </div>
        </div>

        <Parallax translateY={[-30, 10]} className="cloud-offer-wrapper">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="160"
            className="cloud-offer"
          >
            <div className="content">
              <h1>Get Up to</h1>
              <p>
                <span>50%</span> <br /> OFF
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default HotDog;
