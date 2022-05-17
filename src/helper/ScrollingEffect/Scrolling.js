import { useState } from "react";

// A Function To Check If A height of The Page is Less or Greater Than a Specific number(the argument of height)
function Scrolling(height) {
  const [navbar, setNavbar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY <= height) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return navbar;
}

export default Scrolling;
