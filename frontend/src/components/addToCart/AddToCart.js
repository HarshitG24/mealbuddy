// AUTHOR: HARSHIT GAJJAR
import "./css/add-to-cart.css";
import "../home/css/product.css";
import delivery from "../../images/delivery.png";
import CartOrder from "./CartOrder";
import { useEffect, useState } from "react";

function AddToCart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    let p = 0,
      c = 0;

    cart.forEach((element) => {
      p += element.qty * element.price;
      c += element.qty * element.calories;
    });

    setTotalPrice(p);
    setTotalCalories(c);
  }, [cart]);

  async function sendCartItemstoDb() {
    let data = {
      user: "hrstgajjar",
      orders: [
        {
          ...cart,
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
    console.log("response is", response);
  }
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
        {cart.map((elem, index) => {
          return (
            <CartOrder elem={elem} key={index} cart={cart} setCart={setCart} />
          );
        })}
      </div>

      <div className="order_summary">
        <div className="order_summary_div">
          <p className="order_summary_txt">Total Price:</p>
          <p className="order_summary_div_value">${totalPrice}</p>
        </div>
        <div className="order_summary_div">
          <p className="order_summary_txt">Total Calories:</p>
          <p className="order_summary_div_value">{totalCalories} Calories</p>
        </div>

        <button
          className="order_checkout_div"
          onClick={() => sendCartItemstoDb()}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
