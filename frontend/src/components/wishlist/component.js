import "./wishlist.css";
export default function Component(props) {
  const data = props.data;

  return (
    <div>
      <div className="heading">
        <h1>Wishlist</h1>
      </div>
      <div className="cart_order_container">
        <div className="cart_product_img">
          <img src={data.img} alt="This is the icon for product added" />
        </div>
        <div className="cart_product_left">
          <p className="cart_product_name">{data.name}</p>

          <div>
            <p className="cart_calorie_txt">{data.calories} calories</p>
          </div>
        </div>
        <div className="add_to_cart_price">
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
}
