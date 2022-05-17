import LinkSectionOne from "./boxes/LinkSectionOne";
import ContactSection from "./boxes/ContactSection";
import LinkSectionTwo from "./boxes/LinkSectionTwo";
import Logo from "../../helper/Logo/Logo";
import "./myStyle/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import Scrolling from "../../helper/ScrollingEffect/Scrolling";
import Search from "../SearchBar/Search";

const NavBar = (props) => {
  // Call the List and Show it When Click on the Bar Icon
  const changeSwicher = () => {
    const barIcon = document.querySelector(".navBar .One");
    barIcon.classList.add("active-list");
  };

  return (
    <>
      <Search />
      <nav className={Scrolling(80) ? "navBar" : "navBar navBar-shrink"}>
        {/* List Icon */}
        <FontAwesomeIcon
          onClick={changeSwicher}
          icon={faBars}
          className="hidden-icon fa-bars"
        />
        <FontAwesomeIcon icon={faPhone} className="hidden-icon fa-phone" />
        <Logo />
        <LinkSectionOne />
        <ContactSection />
        <LinkSectionTwo
          productsLength={props.productsLength}
          cartLength={props.cartLength}
        />
      </nav>
    </>
  );
};

export default NavBar;
