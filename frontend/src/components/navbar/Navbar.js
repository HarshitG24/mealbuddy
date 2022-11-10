import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBoxOpen,
  faHeart,
  faPizzaSlice,
  faBurger,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { fontSize } from "../../utils/util";
import { useState } from "react";

function Navbar() {
  const [selected, setSelected] = useState(1);

  function navbarClicked(i) {
    setSelected(i);
  }

  return (
    <div className="nav_container">
      <FontAwesomeIcon
        icon={faHouseChimney}
        size={fontSize}
        className={`font-icon ${selected === 1 ? "selected" : ""}`}
        onClick={() => navbarClicked(1)}
      />
      <FontAwesomeIcon
        icon={faBoxOpen}
        size={fontSize}
        className={`font-icon ${selected === 2 ? "selected" : ""}`}
        onClick={() => navbarClicked(2)}
      />
      <FontAwesomeIcon
        icon={faHeart}
        size={fontSize}
        className={`font-icon ${selected === 3 ? "selected" : ""}`}
        onClick={() => navbarClicked(3)}
      />
      <FontAwesomeIcon
        icon={faPizzaSlice}
        size={fontSize}
        className={`font-icon ${selected === 4 ? "selected" : ""}`}
        onClick={() => navbarClicked(4)}
      />
      <FontAwesomeIcon
        icon={faBurger}
        size={fontSize}
        className={`font-icon ${selected === 5 ? "selected" : ""}`}
        onClick={() => navbarClicked(5)}
      />
      <FontAwesomeIcon
        icon={faUser}
        size={fontSize}
        className={`font-icon ${selected === 6 ? "selected" : ""}`}
        onClick={() => navbarClicked(6)}
      />
    </div>
  );
}

export default Navbar;
