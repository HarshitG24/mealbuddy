// AUTHOR: HARSHIT GAJJAR
import "./css/menu.css";
import { pizzas, burgers } from "../../utils/util";
import PropTypes from "prop-types";

function Menu({ name, img, sel, index, setMenu, setProduct }) {
  function findProduct(index) {
    switch (index) {
      case 0:
        setProduct(pizzas);
        return;

      case 1:
        setProduct(burgers);
        return;

      case 2:
        setProduct(burgers);
        return;

      case 3:
        setProduct(burgers);
        return;

      case 4:
        setProduct(burgers);
        return;

      default:
        setProduct(pizzas);
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
  setProduct: PropTypes.func.isRequired,
};

export default Menu;
