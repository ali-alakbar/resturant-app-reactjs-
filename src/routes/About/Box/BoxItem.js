import React from "react";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import GoToUp from "../../../helper/GotoUp/GotoUp";
import "../style/BoxItemStyle/style.css";

const BoxItem = (props) => {
  return (
    <div className={props.direction === "ltr" ? "Box ltr" : "Box rtl"}>
      {/* --------------------------- */}
      {/* Start Right Side */}
      {/* --------------------------- */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="150"
        className="right-side"
      >
        <h1 className="welcome-title">{props.h1}</h1>
        <h2>{props.h2}</h2>
        <p data-aos="fade-up" data-aos-duration="600" data-aos-offset="160">
          {props.p}
        </p>
        <br />
        <NavLink
          data-aos="fade-up"
          data-aos-offset="100"
          className="btn-contact"
          to={"/Menu"}
          onClick={GoToUp}
        >
          {props.btn}
        </NavLink>
      </div>
      {/* --------------------------- */}
      {/* End Right Side */}
      {/* --------------------------- */}
      {/* --------------------------- */}
      {/* Start Left Side */}
      {/* --------------------------- */}
      <div className={"left-side"}>
        <div className="parent-img-container">
          {/* ===================== */}
          {/* ===================== */}
          <div className="child-img-container-one">
            <Parallax
              translateY={[-20, 20]}
              className="img-container toHover one"
            >
              <div
                data-aos={`fade-${props.aos}`}
                data-aos-duration="1000"
                data-aos-offset="180"
                className="img-container toHover one"
              >
                <img src={props.imgOne} alt="" />
              </div>
            </Parallax>
            <Parallax
              className={
                props.welcomeSection === true
                  ? "img-bg-png apply-position"
                  : "img-bg-png"
              }
              translateY={[20, -60]}
            >
              <div className="img-container ">
                <img src={props.pngImgOne} alt="" />
              </div>
            </Parallax>
          </div>
          {/* ===================== */}
          {/* ===================== */}
          <div className="child-img-container-two">
            <div
              data-aos-duration="500"
              data-aos="fade-up"
              data-aos-offset="180"
              className="img-container toHover two"
              style={{
                display: props.thereImg === true ? "inline-block" : "none",
              }}
            >
              <img src={props.imgTwo} alt="" />
            </div>
            <div className="child-child-img-container">
              <div
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-offset="80"
                className="img-container toHover three"
                style={{
                  display: props.thereImg === true ? "inline-block" : "none",
                }}
              >
                <img src={props.imgThree} alt="" />
              </div>
              <Parallax translateY={[140, -140]}>
                <div
                  style={{
                    display: props.thereImg === true ? "inline-block" : "none",
                  }}
                  className="img-container"
                >
                  <img src={props.pngImgTwo} alt="" />
                </div>
              </Parallax>
            </div>
          </div>
          {/* ===================== */}
          {/* ===================== */}
        </div>
      </div>
      {/* --------------------------- */}
      {/* End Left Side */}
      {/* --------------------------- */}
    </div>
  );
};

export default BoxItem;
