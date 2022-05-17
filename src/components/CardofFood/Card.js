import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css"

import "aos/dist/aos.css";
import Aos from "aos";
const Card = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const [switcher, setSwitcher] = useState(true);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-offset="200"
      key={props.id}
      className="card"
    >
      <div className="img-container">
        <div className="sale-bar">
          <div className="left">Sale</div>
          <FontAwesomeIcon
            onClick={() => setSwitcher(!switcher)}
            style={{ color: switcher ? "#999" : "red" }}
            className="right"
            icon={faHeart}
          />
        </div>
        <img src={props.img} alt="" />
      </div>
      <div className="other-content">
        <NavLink to={"/"}>{props.foodTitle}</NavLink>
        <p className="description">
          A mighty meaty double helping of all the reasons you love our burger.
        </p>
        <p className="price-container">
          <span
            style={{
              textDecoration:
                props.isDiscount === false ? "auto" : "line-through",
              color: props.isDiscount === false ? "#FFC222" : "#999",
            }}
            className="price"
          >
            ${props.prevPrice}
          </span>{" "}
          <span
            style={{ display: props.isDiscount === false ? "none" : "inline" }}
            className="discounted-price"
          >
            ${props.price.toFixed(1)}
          </span>
        </p>
      </div>
      <div className="price-cart">
        <div className="icon-container">
          <FontAwesomeIcon
            onClick={(e) => {
              e.preventDefault();
              props.onAdd(props.product);
              // **** Show Side Bar ****
              const sideBar = document.querySelector(".shadow-page");
              sideBar.classList.add("active-side-bar");
            }}
            className="cartShopping"
            icon={faCartShopping}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
