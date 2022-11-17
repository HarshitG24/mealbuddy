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
import PizzaToppingTable from "./PizzaToppingTable";
import PizzaSummaryTable from "./PizzaSummaryTable";
import onions from "../../images/onions.png";
import olives from "../../images/black-olives.png";
import mushroom from "../../images/mushrooms.png";
import pepper from "../../images/green-peppers.png";

function PizzaBuilder() {
  const [size, setSize] = useState(0);
  const [crust, setCrust] = useState({
    bid: 0,
    name: "Cheesy Bytes",
    calories: 625,
    price: 7.99,
  });
  const [toppings, setToppings] = useState([]);
  const [images, setImg] = useState({
    onion: onions,
    olive: olives,
    mush: mushroom,
    pep: pepper,
  });

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
                key={e.sid}
                size={e.size}
                selected={size}
                setSize={setSize}
                index={e.sid}
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
              if (crust.bid === 1) {
                crust_name = crust2;
              } else if (crust.bid === 2) {
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

            {toppings.map((t) => {
              console.log("t.url", t.url);
              return (
                <img
                  className="pizza_toppings"
                  src={images[t.url]}
                  alt="This is the base of the pizza"
                />
              );
            })}
          </div>

          {/* Toppings */}
          <PizzaToppingTable
            allData={pizzaData[0]}
            topping={toppings}
            setTopping={setToppings}
          />
        </div>

        {/* Pizza Crust + Total Price */}
        <div className="pizza_row">
          <PizzaTable
            allData={pizzaData[1]}
            value={crust}
            setValue={setCrust}
          />

          <PizzaSummaryTable
            allData={pizzaData[2]}
            size={size}
            crust={crust}
            toppings={toppings}
          />
        </div>
      </div>
    </div>
  );
}

export default PizzaBuilder;
