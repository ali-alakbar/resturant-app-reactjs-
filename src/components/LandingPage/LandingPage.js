import React, { useEffect } from "react";
import "./style/style.css";
import { Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import GoToUp from "../../helper/GotoUp/GotoUp";
const LandingPage = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  return (
    <div className={`landing-page-section ${props.home}`}>
      <div className="landing-page-container ">
        {/* =================== */}
        <div className="right-side">
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="0"
          >
            UNLIMITED <br /> MEDIUM <br /> <span>{props.h1}</span>
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-offset="0"
          >
            {props.h2}
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-offset="0">
            {props.p}
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="order-price"
          >
            <NavLink onClick={GoToUp} to={"/Menu"}>
              Order Now
            </NavLink>
            <div className="price-container">
              <span className="discount">${props.price}</span>
              <span
                style={{ textDecoration: "line-through" }}
                className="price"
              >
                19.99
              </span>
            </div>
          </div>
        </div>
        {/* =================== */}
        {/* =================== */}
        <div className="left-side">
          <div className="img-container">
            <Parallax
              rotate={[30, -30]}
              translateY={[-10, 10]}
              className="bg-main"
            >
              <img
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-offset="0"
                className="bg-main"
                src={props.mainImg}
                alt=""
              />
            </Parallax>
            <img
              className="bg-food-green abs toHover"
              src={props.bgTwo}
              alt=""
            />
            <Parallax
              translateY={[-40, 40]}
              translateX={[50, -20]}
              className="bg-food-dots abs"
            >
              <img src={props.bgThree} alt="" />
            </Parallax>
            <img
              src={props.bgOne}
              alt="tm"
              className="bg-food-tomatto abs toHover"
            />
          </div>
        </div>
        {/* =================== */}
      </div>
      <NavLink onClick={GoToUp} className="menu" to="/Menu">
        Menu
      </NavLink>
    </div>
  );
};

export default LandingPage;
