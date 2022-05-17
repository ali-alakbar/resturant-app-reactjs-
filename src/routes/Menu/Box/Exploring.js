import Data from "../../../Data/Data.json";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Exploring = () => {

  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { products } = Data;

  return (
    <div className="expolring-things">
      {/* ------------------------------------------------- */}
      <div className="side left-side">
        <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="100">
          Explore the new taste
        </h1>
        <p data-aos="fade-right" data-aos-duration="900" data-aos-offset="100">
          Enjoy our luscious dishes wherever you want
        </p>
        <button
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-offset="100"
        >
          Order Now
        </button>
      </div>
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      <div className="side right-side">
        {products.slice(0, 4).map((item) => {
          return (
            <>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-offset="80"
                className="box"
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="wrapper-upper"
                >
                  <h3>{item.foodTitle}</h3>
                  <h3>
                    ${(item.price * (item.discountPrice / 100)).toFixed(1)}
                  </h3>
                </div>
                <div className="ingre">
                  <p>Shrimp, Squid, Pineapple</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* ------------------------------------------------- */}
    </div>
  );
};

export default Exploring;
