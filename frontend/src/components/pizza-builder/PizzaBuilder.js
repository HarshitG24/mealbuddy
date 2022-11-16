// AUTHOR: HARSHIT GAJJAR
import "../../Reused.css";
import "./css/pizza_builder.css";
import Logo from "../header/logo";
import PizzaSize from "./PizzaSize";
import { pizzaData, pizzaSizes } from "../../utils/util";
import { useState } from "react";
import PizzaTable from "./PizzaTable";
import pbase from "../../images/basep.png";
import crust1 from "../../images/crust1.png";
import crust2 from "../../images/crust2.png";
import crust3 from "../../images/crust3.png";

function PizzaBuilder() {
  const [size, setSize] = useState(0);
  const [crust, setCrust] = useState(0);
  const [toppings, setToppings] = useState([]);

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
          <div className="pizza_img_parent">
            <img
              className="image2"
              src={pbase}
              alt="This is the base of the pizza"
            />
            {(() => {
              let crust_name = crust1;
              if (crust === 1) {
                crust_name = crust2;
              } else if (crust === 2) {
                crust_name = crust3;
              }

              return (
                <img
                  className="image1"
                  src={crust_name}
                  alt="This is the base of the pizza"
                />
              );
            })()}
          </div>
          {/* Toppings */}
          {/* <PizzaTable
            allData={pizzaData[0]}
            value={crust}
            setValue={setCrust}
          /> */}
        </div>

        {/* Pizza Crust + Total Price */}
        <div className="pizza_row">
          <PizzaTable
            allData={pizzaData[1]}
            value={crust}
            setValue={setCrust}
          />
          {/* <div>
            <PizzaTable allData={pizzaData[2]} />
            <button className="builder_cart">Add To Cart</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PizzaBuilder;
