// AUTHOR: HARSHIT GAJJAR
import "./css/slider.css";
import PropTypes from "prop-types";

function CalorieSlider({
  minCalorie,
  maxCalorie,
  setMinCalorie,
  setMaxCalorie,
  setCurrentPage,
}) {
  return (
    <div className="wrapper">
      <header>
        <h2>Calorie Range</h2>
        <p>Enter min and max calories</p>
      </header>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input
            type="number"
            className="input-min"
            value={minCalorie}
            aria-label="min calories"
            onChange={(e) => {
              setCurrentPage(1);
              e.target.value !== ""
                ? setMinCalorie(e.target.value)
                : setMaxCalorie(1);
            }}
          />
          <div className="seperator">-</div>
          <span>Max</span>
          <input
            type="number"
            className="input-max"
            value={maxCalorie}
            aria-label="max calories"
            onChange={(e) => {
              setCurrentPage(1);
              e.target.value !== ""
                ? setMaxCalorie(e.target.value)
                : setMaxCalorie(400);
            }}
          />
        </div>
      </div>
    </div>
  );
}

CalorieSlider.propTypes = {
  minCalorie: PropTypes.number.isRequired,
  maxCalorie: PropTypes.number.isRequired,
  setMinCalorie: PropTypes.func.isRequired,
  setMaxCalorie: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CalorieSlider;
