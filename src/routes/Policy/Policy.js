import React from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";

function Policy() {
  return (
    <section className="section policy-section">
      <div className="img-container">
        <img src={require("./Images/404.png")} alt="" />
      </div>
      <div className="content">
        <h1>Oop, that link is broken.</h1>
        <p>
          {" "}
          Page doesn’t exist or some other error occured. Go to our{" "}
          <NavLink to={"/Home"}>Home page</NavLink> or go back to{" "}
          <NavLink to={"/Checkout"}>Previous page</NavLink>.
        </p>
      </div>
    </section>
  );
}

export default Policy;
