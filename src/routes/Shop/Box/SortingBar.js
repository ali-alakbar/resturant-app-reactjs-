import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faThLarge } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function SortingBar(props) {
  return (
    <div className="sorting-bar">
      {/* =============================== */}
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-offset="210"
        className="paragraph-content"
      >
        <p>
          Page {props.currentPage} / Showing - {props.resultNumber} results
        </p>
      </div>
      <div className="sorting-side">
        {/* =============================== */}
        {/* ============ Start List of Sorting ============ */}
        <select
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-offset="210"
          name="sort-by"
          id="sorting"
        >
          <option
            onClick={() => {
              props.setState("def");
            }}
            value="def"
            selected
          >
            Default
          </option>
          <option
            onClick={() => {
              props.setState("lth");
            }}
            value="byPrice"
          >
            Sort From Low to High
          </option>
          <option
            onClick={() => {
              props.setState("htl");
            }}
            value="byPrice"
          >
            Sort From High to Low
          </option>
        </select>
        {/* ============ End List of Sorting ============ */}
        {/* =============================== */}
        <div className="icon-container">
          <FontAwesomeIcon
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="650"
            onClick={(e) => {
              e.preventDefault();
              const cardContainer = document.querySelector(".card-container");
              cardContainer.classList.add("card-container-list-view");
            }}
            icon={faList}
          />
          <FontAwesomeIcon
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-offset="700"
            onClick={(e) => {
              e.preventDefault();
              const cardContainer = document.querySelector(".card-container");
              cardContainer.classList.remove("card-container-list-view");
            }}
            icon={faThLarge}
          />
        </div>
        {/* =============================== */}
      </div>
    </div>
  );
}

export default SortingBar;
