import React, { useEffect } from "react";
import "./style/style.css";
import Data from "../../../../../Data/Data.json";
import "aos/dist/aos.css";
import Aos from "aos";


const OfferSection = () => {
    // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);
  const { box } = Data.home;
  return (
    <div className="offer-section">
      {box.map((item) => {
        return (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration={item.offsetDuration}
              data-aos-offset="200"
              className={`offer-section-box ${item["green-bg"]}`}
            >
              <div className={`img-container`}>
                <img
                  className="bg-banner"
                  src={require(`${item.bgBanner}`)}
                  alt=""
                />
                <img
                  className="bg-main"
                  src={require(`${item.mainImg}`)}
                  alt=""
                />
              </div>
              <div className="other-content">
                <h1>{item.h1}</h1>

                {item.isPrice ? (
                  <>
                    <h2>{item.h2}</h2> <p>${item.price}</p>
                  </>
                ) : (
                  <>
                    <a href="/">{item.h2}</a>
                  </>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default OfferSection;
