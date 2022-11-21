//AUTHOR MIHIR MESIA

import "./css/patty_size.css";
import PropTypes from "prop-types";

export default function PattySize({ size, selected, setSize, index }) {
  function selectSize() {
    setSize(index);
  }
  return (
    <div
      className={`burger_size_block ${
        selected === index ? "selected_size" : ""
      }`}
      onClick={(index) => selectSize(index)}
    >
      <span>{size}</span>
    </div>
  );
}

PattySize.propTypes = {
  size: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
