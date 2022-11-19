// AUTHOR: HARSHIT GAJJAR
import "./css/promotion.css";
import delivery from "../../images/pizza-deliver.png";

function Promotion() {
  return (
    <div className="promotion_container">
      <div className="promotion_image">
        <img
          src={delivery}
          alt="This is a pizza delivery boy clipart"
          className="delivery_clipart"
        />
      </div>
      <div className="promotion_content">
        <p className="promotional_title">Hello</p>
        <p className="promotion_description">
          Get free delivery on orders above $500
        </p>
        <div className="order_now_parent">
          <button className="order_now">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
