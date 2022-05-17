import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style/style.css";
import CloseIcon from "../../helper/CloseCustomIcon/CloseIcon";
import Data from "../../Data/Data.json";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { products } = Data;

  // Get every letter and save it in searchBar
  const [searchBar, setSearchBar] = useState("");

  return (
    <div id="searchBar" className="search-bar">
      <CloseIcon />
      <div className="input-container">
        <input
          placeholder="Search..."
          onChange={(e) => setSearchBar(e.target.value)}
          type="search"
          name=""
          id=""
        />
        <div className="icon-container">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div id="searchResults" className="foodResults">
        {
          // Filter through the array to check if:
          products
            .filter((res)=> {
              
              const result = document.querySelector(".foodResults");
              // 1- If the array is empty, don't activate the <div className="foodResult"></div>. Also, return null
              if (searchBar.trim() === "") {
                // result.classList.remove("foodResults-activated");

                return null;
              } else if (
                // 2- If The the name in the array is equal to whatever the user entered
                res.foodTitle
                  .toLocaleLowerCase()
                  .includes(searchBar.toLocaleLowerCase())
              ) {
                // Activate the <div className="foodResult"></div>
                result.classList.add("foodResults-activated");
                return res;
              }
            })
            // Then map through the array to display what is fiiltered above:
            .map((item) => {
              return (
                <>
                  <div className="box">
                    <div className="img-container">
                      <img
                        src={require(`${item.icon}`)}
                        alt=""
                      />
                    </div>
                    <div className="other-content">
                      <div className="details">
                        <NavLink className="foodTitle" to={"/BlogSingle"}>
                          {item.foodTitle}
                        </NavLink>
                        <div className="price-container">
                          <span
                            style={{
                              textDecoration:
                                item.idDiscount === false
                                  ? "auto"
                                  : "line-through",
                              color:
                                item.idDiscount === false ? "#000" : "#999",
                            }}
                            className="price"
                          >
                            ${item.price}
                          </span>{" "}
                          <span
                            style={{
                              display:
                                item.idDiscount === false ? "none" : "inline",
                            }}
                            className="discounted-price"
                          >
                            $
                            {(item.price * (item.discountPrice / 100)).toFixed(
                              1
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
        }
      </div>
    </div>
  );
};

export default Search;
