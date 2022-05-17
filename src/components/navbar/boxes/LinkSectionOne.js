import React, {  } from "react";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GotoUp from "../../../helper/GotoUp/GotoUp";

const LinkSectionOne= () => {
  // const [switcherOne, setSwitcherOne] = useState(true);

  // Taking the className as an argument and call its element
  // const handleSwitcherOne = (arg, e) => {
  //   e.preventDefault();
  //   setSwitcherOne(!switcherOne);
  //   const myLinksHome = document.querySelector(
  //     ".linkSection ." + arg + "-links"
  //   );
  //   if (switcherOne === true) {
  //     e.target.classList.add("colorize");
  //     myLinksHome.classList.add("sub-links-active");
  //   } else {
  //     e.target.classList.remove("colorize");
  //     myLinksHome.classList.remove("sub-links-active");
  //   }
  // };
  // Call the List and Hide it When Click on the close Icon
  const closeBarIcon = () => {
    const barIcon = document.querySelector(".navBar .One");
    barIcon.classList.remove("active-list");
  };
  return (
    <ul className="linkSection One">
      {/* Close Icon */}
      <FontAwesomeIcon
        onClick={closeBarIcon}
        icon={faTimes}
        className="hidden-icon fa-times"
      />
      <li>
        <NavLink onClick={GotoUp} className="bullet bullet-1" to={"/"}>
          Home
          <FontAwesomeIcon icon={faChevronDown} />
          {/* ======= Start Sub-Links ======= */}
          <ul className="sub-link home-links">
            <li>
              <NavLink onclick={GotoUp} className="home-one" to="/HomeOne">
                Home 1
              </NavLink>
            </li>
            <li>
              <NavLink onclick={GotoUp} className="home-two" to="/HomeTwo">
                Home 2
              </NavLink>
            </li>
          </ul>
          {/* ======= End Sub-Links ======= */}
        </NavLink>
      </li>
      <li>
        <NavLink onclick={GotoUp} className="bullet bullet-2" to="/Menu">
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink onclick={GotoUp} className="bullet bullet-3" to="/About">
          About
        </NavLink>
      </li>
      <li>
        <NavLink onclick={GotoUp} className="bullet bullet-4" to="/Shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink onclick={GotoUp} className="bullet bullet-5" to={"BlogList"}>
          Blog
          <FontAwesomeIcon icon={faChevronDown} />
          {/* ======= Start Sub-Links ======= */}
          <ul className="sub-link blog-links">
            <li>
              <NavLink onclick={GotoUp} className="blog-list" to="/BlogList">
                Blog List
              </NavLink>
            </li>
            <li>
              <NavLink onclick={GotoUp} className="blog-grid" to="/BlogGrid">
                Blog Grid
              </NavLink>
            </li>
            <li>
              <NavLink onclick={GotoUp} className="blog-single" to="/BlogSingle">
                Blog Single
              </NavLink>
            </li>
          </ul>
          {/* ======= End Sub-Links ======= */}
        </NavLink>
      </li>
      <li>
        <NavLink onclick={GotoUp} className="bullet bullet-6" to="/History">
          Page
          <FontAwesomeIcon icon={faChevronDown} />
          {/* ======= Start Sub-Links ======= */}
          <ul className="sub-link page-links">
            <li>
              <NavLink onclick={GotoUp} className="FAQ" to="/FAQ">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink onclick={GotoUp} className="our-team" to="/Terms">
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink onclick={GotoUp} className="our-history" to="/History">
                Our History
              </NavLink>
            </li>
          </ul>
          {/* ======= End Sub-Links ======= */}
        </NavLink>
      </li>
      <li>
        <NavLink onclick={GotoUp} className="bullet bullet-7" to="/Contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default LinkSectionOne;
