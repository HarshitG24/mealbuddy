// AUTHOR: HARSHIT GAJJAR
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./css/product.css";
import { generateCart } from "../../utils/util";
import PropTypes from "prop-types";
import pizza from "../../images/pizza.png";
import milkshake from "../../images/milkshake.jpeg";
import burger from "../../images/burger.jpeg";

function Product({ elem, cart, setCart, productName }) {
  const { pid, name, img, calories, price, category } = elem;
  //AUTHOR: MIHIR MESIA
  async function addToWishlist() {
    const fetch_user = await fetch("/api/account/getUser");
    const user_data = await fetch_user.json();

    if (!user_data.user) {
      alert("Please Login");
    } else {
      let whishlist_data = {
        user: user_data.user,
        data: [
          {
            pid: pid,
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
      if (resp.status !== 200) {
        alert("unable to add to wishlist");
      }
    }
  }

  // AUTHOR: HARSHIT GAJJAR

  function getTheImg(category) {
    switch (category) {
      case "pizza":
        return pizza;

      case "milkshake":
        return milkshake;
      default:
        return burger;
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
      <div className="product_content">
        <img
          src={getTheImg(productName)}
          alt="This is the product"
          className="product_img"
        />
        <p className="product_name">{name}</p>
        <p className="product_calories">{calories} cal</p>
        <div className="product_end">
          <p className="product_price">${price}</p>
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
                category,
                qty: 1,
              });
              setCart(arr);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  elem: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Product;
