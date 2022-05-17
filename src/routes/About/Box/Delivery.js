import React, { useEffect } from "react";
import "../style/DeliveryStyle/style.css";
import "aos/dist/aos.css";
import Aos from "aos";



const Delivery = () => {
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <div className="delivery-bg-section">
      <div className="container">
        <h1
          // For Fading on Scrolling
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="100"
        >
          We guarantee
        </h1>
        <h2
          // For Fading on Scrolling
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-offset="100"
        >
          30 Minutes Delivery!
        </h2>
        <p
          // For Fading on Scrolling
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="80"
        >
          If you’re having a meeting, working late at night and need an extra
          push. Let us know and we will be there
        </p>
        <button // For Fading on Scrolling
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="80"
        >
          Make an Order
        </button>
      </div>
    </div>
  );
};

export default Delivery;
