//AUTHOR: MIHIR MESIA
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import pizza from "../../images/pizza-cart.png";
import { generateCart } from "../../utils/util";

import PropTypes from "prop-types";
export default function Component({ data, onClick, cart, setCart }) {
  const { pid, name, img, calories, price, category } = data;
  return (
    <div>
      <div className="wishlist_order_container">
        <div className="wishlist_product_img">
          <img
            src={pizza}
            alt="This is the icon for product added"
            className="wishlist_pizza_img"
          />
        </div>
        <div className="wishlist_product_left">
          <p className="wishlist_product_name">{name}</p>

          <div>
            <p className="wishlist_calorie_txt">{calories} calories</p>
          </div>
        </div>
        <div className="wishlist_price">
          <p>${price}</p>
        </div>
        <div className="add_to_cart_wishlist">
          <button
            onClick={(e) => {
              e.preventDefault();
              let arr = generateCart(cart, {
                pid,
                name,
                img,
                calories,
                price,
                category,
                qty: 1,
              });
              setCart(arr);
            }}
            aria-label="add to cart from wishlist"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className="wishlist_cart"
            />
          </button>
        </div>
        <div className="delete_wishlist">
          <button
            onClick={(e) => {
              e.preventDefault();
              onClick(pid);
            }}
            aria-label="delete from wishlist"
          >
            <FontAwesomeIcon
              icon={faTrash}
              size="2x"
              className="wishlist_delete"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

Component.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
