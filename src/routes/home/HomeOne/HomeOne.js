import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import LandingPage from "../../../components/LandingPage/LandingPage";
import Box from "./Boxes/Ads_FoodBoxes/Box";
import FoodBar from "./Boxes/FoodBar/FoodBar";
import HotDog from "./Boxes/HotDog/HotDog";
import NewsBox from "./Boxes/LatestNews/NewsBox";
import OfferSection from "./Boxes/OfferSection/OfferSection";
import Popular from "./Boxes/Popular/Popular";
import SmallBox from "./Boxes/SmallFoodBoxes/SmallBox";
import Testmonial from "./Boxes/Testmonial/Testmonial";
import "./style/style.css";

const Home = (props) => {
  return (
    <section className="section home-section">
      <ParallaxProvider>
        <LandingPage
          home="homeOne"
          h1="PIZZAS"
          h2="Medium 2-topping* pizza"
          p="Additional charge for premium toppings. Minimum of 2 required."
          bgThree={require("./media/landing-dots.png")}
          bgTwo={require("./media/landing-green.png")}
          bgOne={require("./media/landing_tomato.png")}
          mainImg={require("./media/landing-pizza.png")}
          price="12.99"
        />
        <FoodBar />
        <OfferSection />
        <Popular title="Popular dishes" cart={props.cart} onAdd={props.onAdd} />
        <HotDog h1={"Hot Fresh"} h2={"HotDog"} />
        <Box cart={props.cart} onAdd={props.onAdd} />
        <Testmonial />
        <SmallBox />
        <NewsBox />
      </ParallaxProvider>
    </section>
  );
};

export default Home;
