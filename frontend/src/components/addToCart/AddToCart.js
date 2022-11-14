import "./css/add-to-cart.css";
import "../home/css/product.css";
import delivery from "../../images/delivery.png";
import CartOrder from "./CartOrder";

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
        <CartOrder />
      </div>
    </div>
  );
}

export default AddToCart;
