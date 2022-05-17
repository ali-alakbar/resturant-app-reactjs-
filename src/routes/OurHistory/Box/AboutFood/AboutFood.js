import React from "react";

function AboutFood() {
  return (
    <div className="about-our-food">
      <h1>About our food</h1>
      <h2>
        Delivering Awesome <br /> Since 1960
      </h2>
      <p>
        Time flies when you do what you love. We know because we’ve been making
        great pizza since 1967. Along the way, we’ve grown to more than 750
        restaurants from coast to coast, becoming a trusted brand and leader in
        the foodservice industry. We’re proud of the quality food we make – and
        the difference we make in communities across Canada. We’ve made a lot of
        pies – and memories – over the years. Find out what goes into both!
      </p>
      <div className="img-container">
        <img src={require("../../media/signture.png")} alt="" />
      </div>
    </div>
  );
}

export default AboutFood;
