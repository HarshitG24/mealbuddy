import sandwich from "../../images/sandwich.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./css/cart-order.css";
import { useState } from "react";

function CartOrder({ elem }) {
  const [qty, setQty] = useState(1);
  const { name, img, calories, price } = elem;
  console.log("price ", price);
  return (
    <div className="cart_order_container">
      <img src={sandwich} alt="This is the icon for product added" />
      <div className="cart_product_left">
        <p className="cart_product_name">{name}</p>
        <div className="cart_quantity">
          <button className="cart_btns" onClick={() => setQty(qty - 1)}>
            -
          </button>
          <p className="item_quantity">{qty}</p>
          <button className="cart_btns" onClick={() => setQty(qty + 1)}>
            +
          </button>

          <FontAwesomeIcon
            icon={faTrash}
            size="1x"
            className="add_to_cart_delete"
            onClick={(e) => {}}
          />
        </div>
      </div>
      <div className="add_to_cart_price">
        <p>${qty * price}</p>
      </div>
      <div className="cart_calorie_body">
        <p>{qty * calories} calories</p>
      </div>
    </div>
  );
}

export default CartOrder;
