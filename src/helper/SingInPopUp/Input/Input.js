import React from "react";

function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor="">
        {props.label} <span className="star-require">*</span>
      </label>
      <input type={props.inputType} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
