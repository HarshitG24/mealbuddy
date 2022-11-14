import sandwich from "../../images/sandwich.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./css/cart-order.css";

function CartOrder() {
  return (
    <div className="cart_order_container">
      <img src={sandwich} alt="This is the icon for product added" />
      <div className="cart_product_left">
        <p className="cart_product_name">Spicy Chicken Ranch</p>
        <div className="cart_quantity">
          <button className="cart_btns">-</button>
          <p className="item_quantity">1</p>
          <button className="cart_btns">+</button>

          <FontAwesomeIcon
            icon={faTrash}
            size="1x"
            className="add_to_cart_delete"
            onClick={(e) => {}}
          />
        </div>
      </div>
      <div className="add_to_cart_price">
        <p>$12</p>
      </div>
    </div>
  );
}

export default CartOrder;
