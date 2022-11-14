import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./css/product.css";
import { generateCart } from "../../utils/util";

function Product({ elem, cart, setCart }) {
  const { pid, name, img, calories, price } = elem;
  //AUTHOR: MIHIR MESIA
  async function addToWishlist() {
    const fetch_user = await fetch("/api/Account/getUser");
    const user_data = await fetch_user.json();

    if (!user_data.user) {
      alert("Please Login");
    } else {
      let whishlist_data = {
        user: user_data.user,
        data: [
          {
            name: name,
            img: img,
            calories: calories,
            price: price,
          },
        ],
      };

      const headers = new Headers({ "Content-Type": "application/json" });

      const opts = {
        method: "post",
        headers: headers,
        body: JSON.stringify(whishlist_data),
      };

      const resp = await fetch("/api/send_wishlist_data", opts);
      if (resp.status != 200) {
        alert("unable to add to wishlist");
      }
    }
  }

  return (
    <div className="product_card">
      <div className="product_wishlist">
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          className="product_heart"
          onClick={addToWishlist}
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

            setCart(arr);
          }}
        />
      </div>
    </div>
  );
}

export default Product;
