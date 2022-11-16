// AUTHOR: HARSHIT GAJJAR
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
import { Link } from "react-router-dom";
// import { useState } from "react";

function Navbar({ selected, setSelected, def }) {
  // const [selected, setSelected] = useState(1);

  function navbarClicked(i) {
    setSelected(i);
  }

  return (
    <div className="nav_container">
      <Link to="/" onClick={() => navbarClicked(1)}>
        <FontAwesomeIcon
          icon={faHouseChimney}
          size={fontSize}
          className={`font-icon ${selected === 1 ? "selected" : ""}`}
        />
      </Link>

      <Link to="/past-orders" onClick={() => navbarClicked(2)}>
        <FontAwesomeIcon
          icon={faBoxOpen}
          size={fontSize}
          className={`font-icon ${selected === 2 ? "selected" : ""}`}
        />
      </Link>

      <Link to="/wishlist" onClick={() => navbarClicked(3)}>
        <FontAwesomeIcon
          icon={faHeart}
          size={fontSize}
          className={`font-icon ${selected === 3 ? "selected" : ""}`}
        />
      </Link>

      <Link to="/pizza-builder" onClick={() => navbarClicked(4)}>
        <FontAwesomeIcon
          icon={faPizzaSlice}
          size={fontSize}
          className={`font-icon ${selected === 4 ? "selected" : ""}`}
        />
      </Link>
      <Link to="/burger-builder" onClick={() => navbarClicked(5)}>
        <FontAwesomeIcon
          icon={faBurger}
          size={fontSize}
          className={`font-icon ${selected === 5 ? "selected" : ""}`}
        />
      </Link>
      <Link to="/calorie-tracker" onClick={() => navbarClicked(6)}>
        <FontAwesomeIcon
          icon={faCalculator}
          size={fontSize}
          className={`font-icon ${selected === 6 ? "selected" : ""}`}
        />
      </Link>
      <Link to="/settings" onClick={() => navbarClicked(7)}>
        <FontAwesomeIcon
          icon={faUser}
          size={fontSize}
          className={`font-icon ${selected === 7 ? "selected" : ""}`}
        />
      </Link>
    </div>
  );
}

export default Navbar;
