import "../../Reused.css";
import "./css/pizza_builder.css";
import Logo from "../header/logo";
import PizzaSize from "./PizzaSize";
import { pizzaData, pizzaSizes } from "../../utils/util";
import { useState } from "react";
import PizzaTable from "./PizzaTable";
import pbase from "../../images/base.png";

function PizzaBuilder() {
  const [size, setSize] = useState(0);
  return (
    <div className="content_block">
      <Logo />
      <div className="pizza_builder_content">
        <h1 className="pizza_builder_title">Pizza Builder</h1>

        {/* SIZE - Inches */}
        <div className="pizza_size">
          {pizzaSizes.map((e, index) => {
            return (
              <PizzaSize
                key={index}
                size={e}
                selected={size}
                setSize={setSize}
                index={index}
              />
            );
          })}
        </div>

        <div className="pizza_row">
          <img src={pbase} alt="This is the base of the pizza" />
          <PizzaTable allData={pizzaData[0]} />
        </div>

        <div className="pizza_row">
          <PizzaTable allData={pizzaData[1]} />
          <div>
            <PizzaTable allData={pizzaData[2]} />
            <button className="builder_cart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaBuilder;
