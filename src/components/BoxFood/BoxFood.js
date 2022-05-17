import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style.css";

const BoxFood = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade"
        data-aos-duration="600"
        data-aos-offset="180"
        className="box-wrapper"
      >
        <div className="box">
          <div className="img-container">
            <img src={props.img} alt="" />
          </div>
          {/* -------------- */}
          <div className="other-content">
            <div className="details">
              <NavLink to={"/"}>{props.foodTitle}</NavLink>
              <p>
                A mighty meaty double helping of all the reasons you love our
                burger.
              </p>
              <div className="price-container">
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
                  style={{
                    display: props.isDiscount === false ? "none" : "inline",
                  }}
                  className="discounted-price"
                >
                  ${props.price.toFixed(1)}
                </span>
              </div>
            </div>
            {/* -------------- */}
            <div className="icon-container">
              <FontAwesomeIcon
                onClick={(e) => {
                  e.preventDefault();
                  props.onAdd(props.product);
                  // **** Show Side Bar ****
                  const sideBar = document.querySelector(".shadow-page");
                  sideBar.classList.add("active-side-bar");
                }}
                icon={faShoppingCart}
              />
            </div>
            {/* -------------- */}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BoxFood;
