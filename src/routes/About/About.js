import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import PageTitle from "../../helper/PageTitle/PageTitle";
import "aos/dist/aos.css";
import Aos from "aos";
import "./style/style/style.css";
import BoxItem from "./Box/BoxItem";
import VideoSection from "./Box/VideoSection";
import Data from "../../Data/Data.json";
import Slider from "./Box/Slider";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Team from "../../components/Team/Team";
import Delivery from "./Box/Delivery";

const About = () => {
  const { about } = Data;
  const { slider } = Data;
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  // Team Section
  const { terms } = Data;

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

  const mapping = () => {
    return about.map((item) => (
      <BoxItem
        h1={item.h1}
        h2={item.h2}
        p={item.p}
        btn={item.btn}
        direction={item.direction}
        thereImg={item.thereImg}
        imgOne={require(`${item.imgOne}`)}
        pngImgOne={require(`${item.pngImgOne}`)}
        welcomeSection={false}
        aos={item.aos}
      />
    ));
  };

  return (
    <section className="section about-section">
      <PageTitle title={"About Us"} />

      <ParallaxProvider>
        <BoxItem
          h1={"Welcome!"}
          h2={"Best burger ideas & traditions from the whole world"}
          p={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam. Mauris tempus erat laoreet turpis lobortis,
          eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer
          tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.`}
          btn={"contact"}
          direction={"ltr"}
          thereImg={true}
          imgOne={require("./media/image1.jpg")}
          imgTwo={require("./media/image2.jpg")}
          imgThree={require("./media/image3.jpg")}
          pngImgOne={require("./media/vector2-h3.png")}
          pngImgTwo={require("./media/vector3-h3.png")}
          welcomeSection={true}
          aos={"up"}
        />
        <VideoSection />
        {mapping()}
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
        <div className="components">
          {terms.slice(0, 3).map((element) => {
            return (
              <>
                <Team
                  name={element.name}
                  img={require(`${element.img}`)}
                  description={element.description}
                  jobTitle={element.jobTitle}
                  aosDuration={element.aosDuration}
                  aos={"160"}
                />
              </>
            );
          })}
        </div>
       <Delivery />
      </ParallaxProvider>
    </section>
  );
};

export default About;
