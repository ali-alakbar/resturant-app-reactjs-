import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import BoxFood from "../../../../../components/BoxFood/BoxFood";
import SideBar from "../../../../../components/SideBar/SideBar";
import Data from "../../../../../Data/Data.json";
import AddedContent from "../../../../Wishlist/Box/AddedContent";
import "aos/dist/aos.css";
import Aos from "aos";
import MenuList from "../../../../../components/MenuList/MenuList";
import { NavLink } from "react-router-dom";
import "./style/style.css";

const Popular = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { products } = Data;
  // Setting the default name for sorting as def
  const [foodName, setFoodName] = useState("def");

  // 1- Here is the main sorting function, which takes the mapping function:
  const mappingCard = () => {
    switch (foodName.toLowerCase()) {
      // --------------------------------------------
      case "drinks":
        return products
          .filter(
            (itemName) =>
              itemName.foodTitle.toLowerCase() === "drink" ||
              itemName.foodTitle.toLowerCase() === "latte"
          )
          .map(mapping());
      // --------------------------------------------
      case "spagutiee":
        return products
          .filter(
            (itemName) => itemName.foodTitle.toLowerCase() === "spagutiee"
          )
          .map(mapping());
      // --------------------------------------------

      case "burger":
        return products
          .filter(
            (itemName) => itemName.foodTitle.toLowerCase() === "beacon burger"
          )
          .map(mapping());
      // --------------------------------------------

      case "pizza":
        return products
          .filter((itemName) => itemName.foodTitle.toLowerCase() === "pizza")
          .map(mapping());
      // --------------------------------------------

      case "def":
        return products.map(mapping());
      // --------------------------------------------
      default:
        return (
          <div>
            No Items{" "}
            <FontAwesomeIcon color="#FFC222" size="lg" icon={faFrown} />
          </div>
        );
      // --------------------------------------------
    }
  };

  // 2- This Function Excuted when I want to add elements on the side bar or add elements on the cart.
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
  // 3- Mapping through the products
  const mapping = () => {
    return (product, id) => (
      <BoxFood
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
    );
  };

  // =================================


  return (
    <div className="popular">
      <MenuList
        title={props.title}
        foodName={foodName}
        setFoodName={setFoodName}
      />
      <div className="box-of-food">
        {mappingCard().slice(0, 6)}
        <SideBar
          cart={props.cart}
          cartLength={props.cartLength}
          mappingForAdding={mappingForAdding}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration='800'
        data-aos-offset="100"
        className="btn-container"
      >
        <NavLink
          onClick={() => {
            window.scroll(0);
          }}
          className="show-all-btn"
          to={"/Menu"}
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Popular;
