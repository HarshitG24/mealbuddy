import "./orders_component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function OrderComponent(props) {
  const data = props.data;

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
