//AUTHOR MIHIR MESIA

import "./css/patty_size.css";

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
