import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SignIn from "../../../helper/SingInPopUp/SignIn";
import { NavLink } from "react-router-dom";

const LinkSectionTwo = (props) => {
  const showSideBar = () => {
    const sideBar = document.querySelector(".shadow-page");
    sideBar.classList.add("active-side-bar");
  };
  const showSearchBar = () => {
    const searchBar = document.getElementById("searchBar");
    searchBar.classList.add("active-search-bar");
  };

  return (
    <ul className="linkSection Two">
      {/* Side Bar Component*/}
      {/* =============== Start Links =============== */}
      <NavLink to={"/Shop"}>
        <li className="bullet bullet-5">
          <div className="icon-container">
            <FontAwesomeIcon icon={faShop} />
          </div>
          <span className="title">Shop</span>
        </li>
      </NavLink>

      <li onClick={showSearchBar} className="bullet bullet-1">
        <div className="icon-container"></div>
        <FontAwesomeIcon icon={faSearch} />
        <span className="title">Search</span>
      </li>

      <NavLink to={"/Account"}>
        <li className="bullet bullet-2">
          <div className="icon-container clickable">
            <FontAwesomeIcon icon={faUser} />
            <span className="title">My Acount</span>
          </div>
          <SignIn />
        </li>
      </NavLink>
      <NavLink to={"/Wishlist"}>
        <li className="bullet bullet-3">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHeart} />
            <span className="notification">{props.productsLength}</span>
          </div>
          <span className="title">Wishlist</span>
        </li>
      </NavLink>
      <NavLink className={"cart-link"} to={"/Cart"}>
        <li className="bullet bullet-4" onClick={showSideBar}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faCartShopping} />
            {/****** Cart Length from App.js *****/}
            <span className="notification">{props.cartLength}</span>
          </div>
          <span className="title">Cart</span>
        </li>
      </NavLink>
      {/* =============== End Links =============== */}
    </ul>
  );
};

export default LinkSectionTwo;
