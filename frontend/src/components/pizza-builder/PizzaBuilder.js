import "../../Reused.css";
import "./css/pizza_builder.css";
import Logo from "../header/logo";
import PizzaSize from "./PizzaSize";
import { pizzaSizes } from "../../utils/util";
import { useState } from "react";

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
      </div>
    </div>
  );
}

export default PizzaBuilder;
