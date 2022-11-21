import "./css/burger_topping.css";
import PropTypes from "prop-types";
export default function BurgerToppings({ data }) {
  return data.map((element) => {
    return <div className={element.className}></div>;
  });
}

BurgerToppings.propTypes = {
  data: PropTypes.array.isRequired,
};
