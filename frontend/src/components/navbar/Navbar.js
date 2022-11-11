import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBoxOpen,
  faHeart,
  faPizzaSlice,
  faBurger,
  faUser,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { fontSize } from "../../utils/util";
// import { useState } from "react";

function Navbar({ selected, setSelected }) {
  // const [selected, setSelected] = useState(1);

  function navbarClicked(i) {
    setSelected(i);
  }

  return (
    <div className="nav_container">
      <a href="/">
        <FontAwesomeIcon
          icon={faHouseChimney}
          size={fontSize}
          className={`font-icon ${selected === 1 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
            navbarClicked(1);
          }}
        />
      </a>
      <a href="/past-orders">
        <FontAwesomeIcon
          icon={faBoxOpen}
          size={fontSize}
          className={`font-icon ${selected === 2 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/past-orders";
            navbarClicked(2);
          }}
        />
      </a>
      <a href="/wishlist">
        <FontAwesomeIcon
          icon={faHeart}
          size={fontSize}
          className={`font-icon ${selected === 3 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/wishlist";
            navbarClicked(3);
          }}
        />
      </a>
      <a href="/pizza-builder">
        <FontAwesomeIcon
          icon={faPizzaSlice}
          size={fontSize}
          className={`font-icon ${selected === 4 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/pizza-builder";
            navbarClicked(4);
          }}
        />
      </a>
      <a href="/burger-builder">
        <FontAwesomeIcon
          icon={faBurger}
          size={fontSize}
          className={`font-icon ${selected === 5 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/burger-builder";
            navbarClicked(5);
          }}
        />
      </a>
      <a href="/calorie-tracker">
        <FontAwesomeIcon
          icon={faCalculator}
          size={fontSize}
          className={`font-icon ${selected === 6 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/calorie-tracker";
            navbarClicked(6);
          }}
        />
      </a>
      <a href="/settings">
        <FontAwesomeIcon
          icon={faUser}
          size={fontSize}
          className={`font-icon ${selected === 6 ? "selected" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/settings";
            navbarClicked(6);
          }}
        />
      </a>
    </div>
  );
}

export default Navbar;
