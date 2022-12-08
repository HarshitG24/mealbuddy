// AUTHOR: HARSHIT GAJJAR
import "./css/navbar.css";
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
import PropTypes from "prop-types";
import Tooltip from "./TootTip";

function Navbar({ selected, setSelected }) {
  function navbarClicked(i) {
    setSelected(i);
  }

  return (
    <div className="nav_container">
      <Link to="/" onClick={() => navbarClicked(1)}>
        <Tooltip content="Home" direction="right">
          <FontAwesomeIcon
            icon={faHouseChimney}
            size={fontSize}
            className={`font-icon ${selected === 1 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>

      <Link to="/past-orders" onClick={() => navbarClicked(2)}>
        <Tooltip content="Past Orders" direction="right">
          <FontAwesomeIcon
            icon={faBoxOpen}
            size={fontSize}
            className={`font-icon ${selected === 2 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>

      <Link to="/wishlist" onClick={() => navbarClicked(3)}>
        <Tooltip content="Wishlist" direction="right">
          <FontAwesomeIcon
            icon={faHeart}
            size={fontSize}
            className={`font-icon ${selected === 3 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>

      <Link to="/pizza-builder" onClick={() => navbarClicked(4)}>
        <Tooltip content="Pizza Builder" direction="right">
          <FontAwesomeIcon
            icon={faPizzaSlice}
            size={fontSize}
            className={`font-icon ${selected === 4 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>
      <Link to="/burger-builder" onClick={() => navbarClicked(5)}>
        <Tooltip content="Burger Builder" direction="right">
          <FontAwesomeIcon
            icon={faBurger}
            size={fontSize}
            className={`font-icon ${selected === 5 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>
      <Link to="/calorie-tracker" onClick={() => navbarClicked(6)}>
        <Tooltip content="Calorie Tracker" direction="right">
          <FontAwesomeIcon
            icon={faCalculator}
            size={fontSize}
            className={`font-icon ${selected === 6 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>
      <Link to="/settings" onClick={() => navbarClicked(7)}>
        <Tooltip content="Settings" direction="right">
          <FontAwesomeIcon
            icon={faUser}
            size={fontSize}
            className={`font-icon ${selected === 7 ? "selected" : ""}`}
          />
        </Tooltip>
      </Link>
    </div>
  );
}

Navbar.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Navbar;
