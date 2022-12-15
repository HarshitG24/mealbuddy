// AUTHOR: HARSHIT GAJJAR
import "./css/add-to-cart.css";
import "../home/css/product.css";
import delivery from "../../images/delivery.png";
import CartOrder from "./CartOrder";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AddToCart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    let p = 0,
      c = 0;

    cart.forEach((element) => {
      p += element.qty * element.price;
      c += element.qty * element.calories;
    });
    
    // it would be good practice to round the price and calorie value here

    setTotalPrice(Math.round(p));
    setTotalCalories(Math.round(c));

    async function getCurrentUser() {
      const user_name = await fetch("/api/account/getUser");
      const user = await user_name.json();

      setUser(user);
    }

    getCurrentUser();
  }, [cart]);

  //AUTHOR: MIHIR MESIA

  async function logout(e) {
    const logout = await fetch("/api/account/logout");
    // window.location.replace("/");
  }

  async function sendCartItemstoDb(user) {
    if ("user" in user) {
      let data = {
        user: user?.user,
        orders: [
          {
            cart: [...cart],
            calories: totalCalories,
            price: totalPrice,
          },
        ],
      };

      const options = {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(data),
      };
      const response = await fetch("/api/cart/checkout", options);
      const output = await response.json();

      if (output.code === 200) {
        setCart([]);
        alert("Order sent to kitchen successfully!");
      } else {
        alert("error sending order to kitchen");
      }
    } else {
      alert("please login!!");
    }
  }
  return (
    <div className="cart_container">
      <div className="login_cart_div">
        {(user?.user || "") === "" ? (
          <button className="login_btn_cart">
            <Link to="/login">Login</Link>
          </button>
        ) : (
          <button
            className="login_btn_cart"
            onClick={() => {
              setUser({});
              logout();
            }}
          >
            Sign Out
          </button>
        )}
      </div>

      <img src={delivery} alt="" className="delievry_img" />
      <div className="delivery_block">
        <p className="fast_delivery">Fast Delivery</p>
        <p className="fast_delivery horizontal_margin highlight">@</p>
        <p className="fast_delivery highlight">your doorstep</p>
      </div>

      <div className="your_order">
        {cart.length > 0 ? <p>Your Order</p> : null}

        {/* Cart orders */}
        {cart.map((elem, index) => {
          return (
            <CartOrder elem={elem} key={index} cart={cart} setCart={setCart} />
          );
        })}
      </div>

      {cart.length > 0 ? (
        <div className="order_summary">
          <div className="order_summary_div">
            <p className="order_summary_txt">Total Price:</p>
            <p className="order_summary_div_value">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="order_summary_div">
            <p className="order_summary_txt">Total Calories:</p>
            <p className="order_summary_div_value">{totalCalories} Calories</p>
          </div>

          <button
            className="order_checkout_div"
            onClick={() => sendCartItemstoDb(user)}
          >
            Proceed to Checkout
          </button>
        </div>
      ) : null}
    </div>
  );
}

AddToCart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default AddToCart;
