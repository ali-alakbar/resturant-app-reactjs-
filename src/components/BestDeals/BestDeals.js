import React from "react";
import "./style/style.css"

function BestDeals(props, {key}) {
  return (
    <div id={key} className="box-content">
      <div className="img-container">
        <img src={props.small_img} alt="" />
      </div>
      <div className="other-content">
        <h4>Water Bottle</h4>
        <p>$10</p>
      </div>
    </div>
  );
}

export default BestDeals;
