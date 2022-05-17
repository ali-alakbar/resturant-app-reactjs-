import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style/style.css";

function PopularTags(props) {
  return (
    <div className="popular-tags left-section">
      <h2>Popular tags</h2>
      <ul>
        <NavLink to={"///"}>Beer</NavLink>
        <NavLink to={"///"}>Burger</NavLink>
        <NavLink to={"///"}>Fast Food</NavLink>
        <NavLink to={"///"}>Meat</NavLink>
        <NavLink to={"///"}>Pizza</NavLink>
      </ul>
      <div style={{ display: props.disableImg ===true? "none": "block"}} className="adv">
        <h2>Super Delicious</h2>
        <h3>Chicken</h3>
        <span className="number">Call us now:</span>
        <p>1-800-555-333</p>
        <div className="img-container">
          <img src={require("./media/widgets_blog2.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PopularTags