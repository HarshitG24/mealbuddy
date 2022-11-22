// AUTHOR: HARSHIT GAJJAR
import "./css/slider.css";
import PropTypes from "prop-types";

function Slider({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  setCurrentPage,
}) {
  return (
    <div className="wrapper">
      <header>
        <h2>Price Range</h2>
        <p>Use slider or enter min and max price</p>
      </header>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input
            type="number"
            className="input-min"
            value={minPrice}
            onChange={(e) => {
              setCurrentPage(1);
              e.target.value !== ""
                ? setMinPrice(parseInt(e.target.value))
                : setMinPrice(1);
            }}
          />
          <div className="seperator">-</div>
          <span>Max</span>
          <input
            type="number"
            className="input-max"
            value={maxPrice}
            onChange={(e) => {
              setCurrentPage(1);
              e.target.value !== ""
                ? setMaxPrice(parseInt(e.target.value))
                : setMaxPrice(24);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  setMinPrice: PropTypes.func.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Slider;
