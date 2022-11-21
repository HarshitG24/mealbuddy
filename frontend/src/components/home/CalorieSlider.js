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
            onChange={(e) => setMinCalorie(e.target.value)}
          />
          <div className="seperator">-</div>
          <span>Max</span>
          <input
            type="number"
            className="input-max"
            value={maxCalorie}
            onChange={(e) => setMaxCalorie(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default CalorieSlider;
