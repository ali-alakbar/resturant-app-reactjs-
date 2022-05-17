import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style.css";

const MenuList = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <div className="menu-list-part">
      <h1 data-aos="fade-up" data-aos-duration="600" data-aos-offset="200">
        {props.title}
      </h1>
      <ul>
        <li
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="150"
          onClick={() => {
            props.setFoodName("def");
          }}
        >
          Default
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="150"
          onClick={() => {
            props.setFoodName("drinks");
          }}
        >
          Drinks
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-offset="150"
          onClick={() => {
            props.setFoodName("spagutiee");
          }}
        >
          spagutiee
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="150"
          onClick={() => {
            props.setFoodName("burger");
          }}
        >
          Burger
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="150"
          onClick={() => {
            props.setFoodName("pizza");
          }}
        >
          pizza
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
