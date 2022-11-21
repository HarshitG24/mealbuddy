import "./css/slider.css";

function Slider({ minPrice, maxPrice, setMinPrice, setMaxPrice }) {
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
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <div className="seperator">-</div>
          <span>Max</span>
          <input
            type="number"
            className="input-max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="slider">
        <div className="progress"></div>
      </div> */}
      {/* <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="200"
          value={minPrice}
          onChange={(e) => {
            console.log(e.target.classList);
            setMinPrice(e.target.value);
          }}
        />
        <input
          type="range"
          className="range-min"
          min="0"
          max="200"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div> */}
    </div>
  );
}

export default Slider;
