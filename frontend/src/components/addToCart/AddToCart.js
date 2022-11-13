import "./css/add-to-cart.css";
import "./css/cart-order.css";
import delivery from "../../images/delivery.png";

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
        <div className="cart_order_container"></div>
      </div>
    </div>
  );
}

export default AddToCart;
