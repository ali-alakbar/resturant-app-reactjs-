import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Box(props) {
  return (
    <div className="food-content">
      <div className="left">(9)</div>
      <div className="right">
        <NavLink to={"/"}>
          <FontAwesomeIcon icon={props.icon} />
          {props.foodName}
        </NavLink>
      </div>
    </div>
  );
}

export default Box