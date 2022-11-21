import "./orders_component.css";
import PropTypes from "prop-types";
export default function OrderComponent({ data }) {
  return (
    <div>
      <div className="past_order_container">
        <div className="order_product_img">
          <img src={data.img} alt="This is the icon for product added" />
        </div>
        <div className="order_product_left">
          <p className="order_product_name">{data.name}</p>

          <div>
            <p className="order_calorie_txt">{data.calories} calories</p>
          </div>
        </div>
        <div className="order_price">
          <p>{data.price}</p>
        </div>
      </div>
    </div>
  );
}

OrderComponent.propTypes = {
  data: PropTypes.object.isRequired,
};
