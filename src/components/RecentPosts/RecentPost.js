import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style/style.css";

function RecentPost(props, {key}) {
  return (
    <>
      <div id={key} className="content-container">
        <div className="img-container">
          <img src={props.small_img} alt="" />
        </div>
        <div className="other-content">
          <NavLink to={"/"}>{props.title}</NavLink>
          <p>{props.date}</p>
        </div>
      </div>
    </>
  );
}

export default RecentPost