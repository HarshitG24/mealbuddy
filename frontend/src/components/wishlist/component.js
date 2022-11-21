//AUTHOR: MIHIR MESIA
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
export default function Component({ data, onClick }) {
  return (
    <div>
      <div className="wishlist_order_container">
        <div className="wishlist_product_img">
          <img src={data.img} alt="This is the icon for product added" />
        </div>
        <div className="wishlist_product_left">
          <p className="wishlist_product_name">{data.name}</p>

          <div>
            <p className="wishlist_calorie_txt">{data.calories} calories</p>
          </div>
        </div>
        <div className="wishlist_price">
          <p>{data.price}</p>
        </div>
        <div className="delete_wishlist">
          <FontAwesomeIcon
            icon={faTrash}
            size="2x"
            className="wishlist_delete"
            onClick={(e) => {
              e.preventDefault();
              onClick(data.pid);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Component.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
