import React from "react";
import "./style/style.css";

const CloseIcon = () => {
  const disableSideBar = () => {
    const sideBar = document.querySelector(".shadow-page");
    const searchBar = document.querySelector("#searchBar");
    searchBar.classList.remove("active-search-bar");
    sideBar.classList.remove("active-side-bar");

  };
  return (
    <span
      id="customIcon"
      onClick={disableSideBar}
      className="custom-icon-container"
    >
      <span className="custom-icon line-one"></span>
      <span className="custom-icon line-two"></span>
    </span>
  );
};

export default CloseIcon;
