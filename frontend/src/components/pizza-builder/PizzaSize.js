// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_size.css";

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

export default PizzaSize;
