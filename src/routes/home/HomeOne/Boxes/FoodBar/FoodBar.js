import React, {useEffect} from "react";
import Data from "../../../../../Data/Data.json";
import "./style/style.css";

import "aos/dist/aos.css";
import Aos from "aos";


const FoodBar = () => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { products } = Data;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="170"
      className="food-bar-section"
    >
      {products.slice(0, 8).map((item) => {
        return (
          <>
            <div className="box">
              <div className="img-container">
                <img src={require(`${item.icon}`)} alt="" />
              </div>
              <div className="title">
                <h3>{item.foodTitle}</h3>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FoodBar;
