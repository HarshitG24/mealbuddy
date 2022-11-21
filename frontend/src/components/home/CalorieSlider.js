// AUTHOR: HARSHIT GAJJAR
import "./css/slider.css";

function CalorieSlider({
  minCalorie,
  maxCalorie,
  setMinCalorie,
  setMaxCalorie,
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
            onChange={(e) => {
              console.log("val", e.target.value);
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
            onChange={(e) => {
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

export default CalorieSlider;
