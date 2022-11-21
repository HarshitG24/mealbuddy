// AUTHOR: HARSHIT GAJJAR
import "./css/menu.css";
import { pizzas, burgers } from "../../utils/util";
import PropTypes from "prop-types";

function Menu({ name, img, sel, index, setMenu, setProductName }) {
  function findProduct(index) {
    switch (index) {
      case 0:
        setProductName("burger");
        return;

      case 1:
        setProductName("milkshake");
        return;

      case 2:
        setProductName("pizza");
        return;

      default:
        setProductName("burger");
        return;
    }
  }
  return (
    <div
      className={`menu_container ${sel ? "menu_active" : ""}`}
      onClick={() => {
        setMenu(index);
        findProduct(index);
      }}>
      <span className={img}></span>
      <p className="menu_name">{name}</p>
    </div>
  );
}

Menu.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  sel: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  setMenu: PropTypes.func.isRequired,
  setProductName: PropTypes.func.isRequired,
};

export default Menu;
