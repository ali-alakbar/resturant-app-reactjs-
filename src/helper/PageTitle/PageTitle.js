import React from 'react'
import { NavLink } from "react-router-dom";
import "./style/style.css";

function PageTitle(props) {
  return (
    <div className="pageTitle">
      <div className="background-image">
        <div className="title-info">
          <h1>{props.title}</h1>
          <span>
            <NavLink to={"/"}>Home</NavLink> {">"} {props.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageTitle