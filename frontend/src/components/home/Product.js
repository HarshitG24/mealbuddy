import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./css/product.css";

function Product({ elem, setCart }) {
  const { name, img, calories, price } = elem;
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
            setCart([
              {
                name,
                img,
                calories,
                price,
              },
            ]);
          }}
        />
      </div>
    </div>
  );
}

export default Product;
