import React from 'react'
import { NavLink } from "react-router-dom";

function Post(props) {
  return (
    <>
      {/* ========== START IMAGE ==========*/}

      <div className="img-container">
        <img src={props.img} alt="" />
      </div>
      {/* ========== END IMAGE ==========*/}
      {/* ========== START DETAILS ==========*/}
      <div className="more-details">
        <NavLink className={"heading-title"} to={"/"}>
          {props.title}
        </NavLink>
        <div className="link-bar">
          <NavLink to={"/"}>Uncategorized</NavLink> /
          <NavLink to={"/"}>{props.date}</NavLink> /<span>Post by</span>
          <NavLink to={"/"}>{props.postBy}</NavLink>
        </div>
        <p>{props.details}</p>
      </div>
      {/* ========== END SETAILS ==========*/}
      {/* ========== START IMAGE ==========*/}
      <div className="img-container">
        <img src={props.img} alt="" />
      </div>
      {/* ========== END IMAGE ==========*/}
      {/* ========== START DETAILS ==========*/}
      <div className="more-details two">
        <div className="part-one">
          <p>{props.details}</p>
          <div className="chief-info-section">
            <h2>
              Quisque porttitor ipsum vitae fermentum suscipit. Praesent vel
              semper ello.
            </h2>
            <caption>
              <div className="img-container">
                <img src={props.img} alt="" />
              </div>
              <div className="more-info">
                <h3>Nina Billo</h3>
                <span>Chief</span>
              </div>
            </caption>
          </div>
        </div>
        <p>{props.details}</p>
      </div>
      {/* ========== END SETAILS ==========*/}
    </>
  );
}

export default Post