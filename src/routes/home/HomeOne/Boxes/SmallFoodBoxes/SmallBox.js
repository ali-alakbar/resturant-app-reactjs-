import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import Data from "../../../../../Data/Data.json";
import { Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import Aos from "aos";

const SmallBox = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { smallBox } = Data.home;
  return (
    <div className="small-food-box">
      {smallBox.map((item) => {
        return (
          <>
            <div className={`box-wrapper-main ${item.color}`}>
              <div className="box">
                <div className="img-container">
                  <Parallax
                    style={{ position: "relative", zIndex: "10" }}
                    translateY={[-10, 10]}
                  >
                    <img
                      data-aos="fade-left"
                      data-aos-duration="700"
                      data-aos-offset="170"
                      className="main-bg"
                      src={require(`${item.img}`)}
                      alt=""
                    />
                  </Parallax>
                  <img
                    className="bg-pop"
                    src={require("../../media/burger-pop-bg-main.png")}
                    alt=""
                  />
                </div>
                <div className="other-content">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-offset="100"
                  >
                    {item.h1}
                  </h1>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-offset="100"
                  >
                    {item.h2}
                  </h2>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-offset="90"
                  >
                    {item.h3}
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="40"
                  >
                    ${item.p}
                  </p>
                  <NavLink
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    to={"/Menu"}
                  >
                    Order Now
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SmallBox;
