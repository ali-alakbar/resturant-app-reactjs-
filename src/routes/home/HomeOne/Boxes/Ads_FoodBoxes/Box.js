import React from "react";
import PopularTags from "../../../../../components/PapularTags/PopularTags";
import "./style/style.css";
import Popular from "../Popular/Popular";

const AdsBox = (props) => {

  return (
    <div className="box-ads-section">
      <div className="food-box-section">
        {<Popular title="Top recipes" cart={props.cart} onAdd={props.onAdd} />}
      </div>
      <PopularTags />
    </div>
  );
};

export default AdsBox;
