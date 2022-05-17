import React, { useState, useEffect } from "react";
import PageTitle from "../../helper/PageTitle/PageTitle";
import "./style/style.css";
import Data from "../../Data/Data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../components/SideBar/SideBar";
import AddedContent from "../Wishlist/Box/AddedContent";
import PaginationComp from "../../components/pagination/Pagination";
import Exploring from "./Box/Exploring";
import Delivery from "./Box/Delivery";
import "aos/dist/aos.css";
import Aos from "aos";
import MenuList from "../../components/MenuList/MenuList";
import BoxFood from "../../components/BoxFood/BoxFood";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

const Menu = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { products } = Data;
  const { delivery } = Data;

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

  // The curent page [ which page are we in right now? ]
  const [currentPage, setCurrentPage] = useState(1);
  // How many Post per page. Default as [6]
  const [postsPerPage] = useState(6);
  const indexOfLestPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLestPost - postsPerPage;

  return (
    <ParallaxProvider>
      <section className="section menu-section">
        <PageTitle title={"Menu Resturant"} />
        {/* ================== */}
        <MenuList
          title="Menu of The Day"
          foodName={foodName}
          setFoodName={setFoodName}
        />
        {/* ================== */}
        <div className="box-of-food">
          {/* png bg Img */}
          <Parallax style={{position:"relative", left:"50%", top:"50%"}} translateY={[0, 150]}>
            <div className="img-container-bg">
              <img src={require("./media/vector2-h3.png")} alt="" />
            </div>
          </Parallax>
          {mappingCard().slice(indexOfFirstPost, indexOfLestPost)}
          <PaginationComp
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={products.length}
          />
          <SideBar
            cart={props.cart}
            cartLength={props.cartLength}
            mappingForAdding={mappingForAdding}
          />
        </div>
        <Exploring />
        <div className="delivery-section">
          {delivery.map((item, id) => {
            return (
              <Delivery
                icon={
                  require("@fortawesome/free-solid-svg-icons")[
                    delivery[id].icon
                  ]
                }
                title={item.h3}
                p={item.p}
              />
            );
          })}
        </div>
      </section>
    </ParallaxProvider>
  );
  // =================================
};

export default Menu;
