import React from "react";
import LandingPage from "../../../components/LandingPage/LandingPage";
import { ParallaxProvider } from "react-scroll-parallax";
import BoxItem from "../../About/Box/BoxItem";
import Data from "../../../Data/Data.json";
import MovingBike from "../../../components/MovingBike/MovingBike";
import Card from "../../../components/CardofFood/Card";
import "./style/style.css";
import Carousel from "react-elastic-carousel";
import SideBar from "../../../components/SideBar/SideBar";
import AddedContent from "../../Wishlist/Box/AddedContent";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import GoToUp from "../../../helper/GotoUp/GotoUp";
import Testmonial from "../HomeOne/Boxes/Testmonial/Testmonial";
import SmallBox from "../HomeOne/Boxes/SmallFoodBoxes/SmallBox";
import Popular from "../HomeOne/Boxes/Popular/Popular";
import HotDog from "../HomeOne/Boxes/HotDog/HotDog";
import NewsBox from "../HomeOne/Boxes/LatestNews/NewsBox";

const HomeTwo = (props) => {
  const { about, products } = Data;


  
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];

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

  // This Function Excuted when I want to add elements on the side bar or add elements on the cart.
  const mappingForAdding = () => {
    return props.cart.map((product, id) => (
      <>
        <AddedContent
          id={id}
          onRemove={props.onRemove}
          product={product}
          img={require(`${product.icon}`)}
          foodTitle={product.foodTitle}
          idDiscount={product.idDiscount}
          price={product.price}
          discountPrice={product.discountPrice}
        />
      </>
    ));
  };

  return (
    <section className="section homeTwo-section">
      <ParallaxProvider>
        <LandingPage
          home="homeTwo"
          h1="PIZZAS"
          h2="Medium 2-topping* pizza"
          p="Additional charge for premium toppings. Minimum of 2 required."
          bgThree={require("./media/onion.png")}
          bgTwo={require("./media/chill-small.png")}
          bgOne={require("./media/mint.png")}
          mainImg={require("./media/burger.png")}
          price="3.99"
        />
        {mapping().slice(0, 2).reverse()}
        <MovingBike />
        <div className="slider-section">
          <div className="title-heading">
            <h1>Popular dishes</h1>
            <div className="slider">
              <NavLink onClick={GoToUp} to={"/Menu"}>
                See all <FontAwesomeIcon icon={faArrowCircleRight} />{" "}
              </NavLink>
            </div>
          </div>

          <Carousel enableAutoPlay pagination={false} breakPoints={breakPoints}>
            {products.map((product, id) => {
              return (
                <>
                  <Card
                    id={id}
                    foodTitle={product.foodTitle}
                    isWhite={product.isWhite}
                    img={require(`${product.icon}`)}
                    isDiscount={product.idDiscount}
                    prevPrice={product.price}
                    price={product.price * (product.discountPrice / 100)}
                    discountPrice={product.discountPrice}
                    product={product}
                    cart={props.cart}
                    onAdd={props.onAdd}
                  />
                </>
              );
            })}
          </Carousel>

          <SideBar
            cart={props.cart}
            cartLength={props.cartLength}
            mappingForAdding={mappingForAdding}
          />
        </div>
        <Testmonial />
        <SmallBox />
        <Popular title="Popular dishes" cart={props.cart} onAdd={props.onAdd} />
        <HotDog h1="Super Delicious" h2="Italian Pizza" />
        <NewsBox />
      </ParallaxProvider>
    </section>
  );
};

export default HomeTwo;
