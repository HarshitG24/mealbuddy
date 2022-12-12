// AUTHOR: HARSHIT GAJJAR
import burger from "../../images/burger-cart.png";
import pizza from "../../images/pizza-cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./css/cart-order.css";
import PropTypes from "prop-types";

function CartOrder({ elem, cart, setCart }) {
  const { pid, name, calories, price, qty, category } = elem;
  return (
    <div className="cart_order_container">
      <div className="cart_product_img">
        <img
          src={category === "pizza" ? pizza : burger}
          alt="This is the icon for product added"
        />
      </div>
      <div className="cart_product_left">
        <p className="cart_product_name">{name}</p>
        <div className="cart_quantity">
          <p className="item_quantity">x{qty}</p>
        </div>

        <div>
          <p className="cart_calorie_txt">{qty * calories} calories</p>
        </div>
      </div>
      <div className="add_to_cart_price">
        <p>${(qty * price).toFixed(2)}</p>
      </div>

      <div className="delete_cart">
        <button
          className="delete_cart_btn"
          aria-label="this is to delete item from cart"
          onClick={(e) => {
            setCart(cart.filter((e) => e.pid !== pid));
          }}>
          <FontAwesomeIcon
            icon={faTrash}
            size="2x"
            className="add_to_cart_delete"
          />
        </button>
      </div>
    </div>
  );
}

CartOrder.propTypes = {
  elem: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartOrder;
