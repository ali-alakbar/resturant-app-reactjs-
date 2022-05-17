import React, { useState, useEffect } from "react";
import CategorieLeft from "../../components/CategoriesSide/CategorieLeft";
import PageTitle from "../../helper/PageTitle/PageTitle";
import Data from "../../Data/Data.json";
import "./style/style.css";
import "./style/style.css";
import SortingBar from "./Box/SortingBar";
import Card from "../../components/CardofFood/Card";
import AddedContent from "../Wishlist/Box/AddedContent";
import SideBar from "../../components/SideBar/SideBar";
import PaginationComp from "../../components/pagination/Pagination";
import "aos/dist/aos.css";
import Aos from "aos";
function Shop(props) {
    // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const { products } = Data;

  // The curent page [ which page are we in right now? ]
  const [currentPage, setCurrentPage] = useState(1);
  // How many Post per page. Default as [6]
  const [postsPerPage] = useState(6);
  const indexOfLestPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLestPost - postsPerPage;

  // To determine the type of the sorting it is. def is the default sorting.
  const [state, setState] = useState("def");

  // The value will be determined in the [ rangeSelector() ] function. [ 0,10 ] as a default
  const [value, setValue] = useState([0, 10]);

  // This function takes any value as a parameter and store it in setValue.
  // This function will be excuted inside [ CategorieLeft ] component.
  const rangeSelector = (e, newValue) => {
    setValue(newValue);
    setState("price");
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

  // A Function to check the sorting type from the (state) and sort the elements accordinglly.
  // This function map through the (Card) component, which is a function called (mapping)
  // 1- This is the (mapping) function
  const mapping = () => {
    return (product, id) => (
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
    );
  };
  // 2- Here is the main sorting function, which takes the mapping function:
  const mappingCard = () => {
    switch (state.toLowerCase()) {
      case "def":
        return products
          .sort((a, b) => a.foodTitle.localeCompare(b.foodTitle))
          .map(mapping());
      case "lth":
        return products
          .sort((a, b) => (a.price > b.price ? 1 : -1))
          .map(mapping());
      case "htl":
        return products
          .sort((a, b) => (a.price < b.price ? 1 : -1))
          .map(mapping());
      case "price":
        // The price should be between the range of the min price and the max price.
        // That means the price should be greater than the first index of the variable [ value ]
        // And the price should be less than the second index of the variable [ value ]
        // Note: filter() takes one parameter. 
        return products
          .filter((a) => a.price >= value[0] && a.price <= value[1])
          .map(mapping());
      default:
        return <div>No Items</div>;
    }
  };

  return (
    <section className="section shop-section">
      <PageTitle title={"Shop"} />

      <div className="shop-posts">
        <CategorieLeft
          value={value}
          rangeSelector={rangeSelector}
          isThereDeals={false}
          isThereFilter={false}
          isThereRecent={true}
        />
        <div className="right-side">
          <SortingBar
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setState={setState}
            resultNumber={props.resultNumber}
          />
          <div className="card-container">
            {/* Sorting function */}
            {mappingCard().slice(indexOfFirstPost, indexOfLestPost)}

            {/* Activating the side bar by adding the elements here */}
            <SideBar
              cart={props.cart}
              cartLength={props.cartLength}
              mappingForAdding={mappingForAdding}
            />
          </div>
          <PaginationComp
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={products.length}
          />
        </div>
      </div>

    </section>
  );
}

export default Shop;
