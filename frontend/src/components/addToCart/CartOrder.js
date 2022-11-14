import sandwich from "../../images/sandwich.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./css/cart-order.css";

function CartOrder({ elem, cart, setCart }) {
  const { pid, name, img, calories, price, qty } = elem;
  // const [quantity, setQty] = useState(temp);
  return (
    <div className="cart_order_container">
      <div className="cart_product_img">
        <img src={sandwich} alt="This is the icon for product added" />
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
        <p>${qty * price}</p>
      </div>

      <div className="delete_cart">
        <FontAwesomeIcon
          icon={faTrash}
          size="2x"
          className="add_to_cart_delete"
          onClick={(e) => {
            setCart(cart.filter((e) => e.pid !== pid));
          }}
        />
      </div>
    </div>
  );
}

export default CartOrder;
