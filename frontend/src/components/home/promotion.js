import "./css/promotion.css";
import delivery from "../../images/pizza-deliver.png";

function Promotion() {
  return (
    <div className="promotion_container">
      <img
        src={delivery}
        alt="This is a pizza delivery boy clipart"
        className="delivery_clipart"
      />
    </div>
  );
}

export default Promotion;
