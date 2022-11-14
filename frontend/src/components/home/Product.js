import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./css/product.css";
import { generateCart } from "../../utils/util";

function Product({ elem, setCart, cart }) {
  const { pid, name, img, calories, price } = elem;
  return (
    <div className="product_card">
      <div className="product_wishlist">
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          className="product_heart"
          onClick={(e) => {}}
        />
      </div>
      <span className={img}></span>
      <p className="product_name">{name}</p>
      <p className="product_calories">{calories} cal</p>
      <div className="product_end">
        <p className="product_price">{price}</p>
        <FontAwesomeIcon
          icon={faPlus}
          size="2x"
          className="product_add"
          onClick={(e) => {
            e.preventDefault();
            let arr = generateCart(cart, {
              pid,
              name,
              img,
              calories,
              price,
              qty: 1,
            });

            console.log("arr", arr);
            setCart(arr);
          }}
        />
      </div>
    </div>
  );
}

export default Product;
