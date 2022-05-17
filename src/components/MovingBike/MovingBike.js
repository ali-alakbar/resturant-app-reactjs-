import React from "react";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import "./style/style.css";
const MovingBike = () => {
  const paragraph = `As well known and we are very busy all days advice you. advice you
            to call us of before arriving, so we can guarantee your seat.`;
  return (
    <div className="moving-bike">
      <div className="content-section">
        <div className="content contentOne">
          <h1>Choose what you want, select a pick up time</h1>
          <p>{paragraph}</p>
          <NavLink to={""}>Order Now</NavLink>
        </div>
        <Parallax rotate={[10, -40]} translateX={[-70, 50]}>
          <div className="bike-section-img">
            <img src={require("./media/bike.png")} alt="" />
          </div>
        </Parallax>
        <div className="content contentTwo">
          <h1>Earn points every time you order online</h1>
          <p>{paragraph}</p>
          <NavLink to={""}>Order Now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovingBike;
