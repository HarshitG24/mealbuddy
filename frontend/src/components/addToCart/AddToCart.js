import "./css/add-to-cart.css";
import "./css/cart-order.css";
import "../home/css/product.css";
import delivery from "../../images/delivery.png";
import sandwich from "../../images/sandwich.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function AddToCart() {
  return (
    <div className="cart_container">
      <img src={delivery} alt="" className="delievry_img" />
      <div className="delivery_block">
        <p className="fast_delivery">Fast Delivery</p>
        <p className="fast_delivery horizontal_margin highlight">@</p>
        <p className="fast_delivery highlight">your doorstep</p>
      </div>

      <div className="your_order">
        <p>Your Order</p>

        {/* Cart orders */}
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
      </div>
    </div>
  );
}

export default AddToCart;
