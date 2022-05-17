import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Data from "../../../../../Data/Data.json";
import Slider from "../../../../About/Box/Slider";

const Testmonial = () => {
  const { slider } = Data;

  // Slider Section
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  // Mapping Through Slider
  const mappingSlider = () => {
    return slider.map((item) => (
      <>
        <Slider
          quote={item.quote}
          name={item.name}
          position={item.position}
          img={require(`${item.img}`)}
        />
      </>
    ));
  };
  return (
    <div className="testmonial-section">
      <div className="img-container-slider">
        <AutoplaySlider
          play
          cancelOnInteraction={false}
          interval={3000}
          className="container"
        >
          {mappingSlider()}
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Testmonial;
