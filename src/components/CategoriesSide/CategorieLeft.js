import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Typography} from "@mui/material";
import {Slider} from "@mui/material";
import Box from "./Box/Box";
import React from "react";
import Data from "../../Data/Data.json";
import PopularTags from "../PapularTags/PopularTags";
import RecentPost from "../RecentPosts/RecentPost";
import "./style/style.css";
import BestDeals from "../BestDeals/BestDeals";
const CategorieLeft = (props) => {
  const { posts } = Data.blog;
  const { categories } = Data.blog;

  return (
    <div className="left-side">
      {/* A Search Bar Section */}
      <div className="input-container">
        <input type="search" placeholder="Search..." name="" id="" />
        <div className="icon-container">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      {/* A Component To Show The Categories Section of Food */}
      <div className="categories left-section">
        <h2>Categories</h2>
        <div className="food-content-container">
          {categories.map((item) => {
            return <Box foodName={item.foodName} icon={faPizzaSlice} />;
          })}
        </div>
      </div>
      {/* ====== Start Resent posts ====== */}

      <div
        style={{ display: props.isThereRecent === true ? "none" : "block" }}
        className="recent-posts left-section"
      >
        <h3>Recent Posts</h3>

        {posts.slice(3, 6).map((item, id) => {
          return (
            <>
              <RecentPost
                key={id}
                small_img={require(`${item.small_img}`)}
                date={item.date}
                title={item.title}
              />
            </>
          );
        })}
      </div>
      {/* ====== End Resent posts ====== */}
      {/* ====== Start Best Deals ====== */}
      <div
        className="best-deals"
        style={{ display: props.isThereDeals === true ? "none" : "block" }}
      >
        <h3>Best Deals</h3>

        {posts.slice(0, 4).map((item, id) => {
          return (
            <>
              <BestDeals
                key={id}
                small_img={require(`${item.small_img}`)}
                date={item.date}
                title={item.title}
              />
            </>
          );
        })}
      </div>
      {/* ====== End Best Deals ====== */}

      {/* Start A Component To Show Filter By Price */}
      <div
        style={{ display: props.isThereFilter === true ? "none" : "block" }}
        className="filter-by-price"
      >
        <h3>Filter by price</h3>
        <div className="input-container">
          <Typography id="range-slider" gutterBottom>
            Select Price Range:
          </Typography>
          <Slider
            className="range-filter-input"
            value={props.value}
            onChange={props.rangeSelector}
            valueLabelDisplay="auto"
          />
          <p>
            ${props.value[0]} /- ${props.value[1]}
          </p>
        </div>
      </div>

      {/* Component To Show The Popular Tags and The Advs */}
      <PopularTags />
    </div>
  );
};

export default CategorieLeft;
