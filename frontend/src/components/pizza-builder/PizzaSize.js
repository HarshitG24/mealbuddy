// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_size.css";
import PropTypes from "prop-types";

function PizzaSize({ size, selected, setSize, index }) {
  function selectSize() {
    setSize(index);
  }
  return (
    <div
      className={`pizza_size_block ${
        selected === index ? "selected_size" : ""
      }`}
      onClick={(index) => selectSize(index)}>
      <span>{size} inches</span>
    </div>
  );
}

PizzaSize.propTypes = {
  size: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default PizzaSize;
