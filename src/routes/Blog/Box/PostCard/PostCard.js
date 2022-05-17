import React from 'react'
import { NavLink } from 'react-router-dom';

function PostCard(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={props.isThreeHide? "300":"900"}
      data-aos-offset="200"
      className="right-side"
    >
      <div className="img-container">
        <img src={props.img} alt="" />
      </div>
      <div className="more-details">
        <div className="link-bar">
          <NavLink to={"/"}>Uncategorized</NavLink> /
          <NavLink to={"/"}>{props.date}</NavLink> /<span>Post by</span>
          <NavLink to={"/"}>{props.postBy}</NavLink>
        </div>
        <NavLink className={"heading-title"} to={"/"}>
          {props.title}
        </NavLink>
        <p>{props.details}</p>
        <div className="btn-container">
          <NavLink to={"/"} className="read-more">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PostCard