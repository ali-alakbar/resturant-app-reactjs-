import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ItemBox = (props, { key }) => {
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <div
      id={key}
      style={{ direction: props.direction }}
      className="component-one"
    >
      <span className="line middle-line"></span>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="200"
        className="discription part"
      >
        {/* ===== Start Title and Description ===== */}

        <div
          style={{
            textAlign: props.direction === "ltr" ? "start" : "end",
          }}
          className="left-side"
        >
          <h2>{props.title}</h2>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-offset="80">
            {props.description}
          </p>
        </div>
        {/* ===== End Title and Description ===== */}
        {/* ===== Start Year ===== */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-offset="180"
          className="right-side"
        >
          <span className="year-line">
            {props.year}{" "}
            <span
              className={
                props.direction === "ltr" ? "inner-line ltr" : "inner-line rtl"
              }
            ></span>
          </span>
        </div>
        {/* ===== End Year ===== */}
      </div>
      {/* ===== Start Image ===== */}
      <div
        data-aos={props.direction === "ltr" ? "fade-left" : "fade-right"}
        data-aos-duration="300"
        data-aos-offset="180"
        style={{ padding: props.padding }}
        className="img-container part"
      >
        <img src={props.img} alt="" />
      </div>
      {/* ===== End Image ===== */}
    </div>
  );
};

export default ItemBox;
